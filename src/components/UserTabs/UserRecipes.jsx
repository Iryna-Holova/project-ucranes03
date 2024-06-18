import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCounterRecipes } from 'store/authSlice/slice';
import {
  getOwnRecipes,
  getUserRecipes,
  removeOwnRecipe,
} from 'services/recipes';
import { showError } from 'helpers/notification';
import { scrollToTabs } from 'helpers/scolls';
import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';
import Empty from 'components/Shared/Empty/Empty';
import Pagination from 'components/Shared/Pagination/Pagination';
import RecipePreviewSkeleton from './RecipePreview/RecipePreviewSkeleton';

const UserRecipes = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const { id } = useParams();
  const topElementRef = useRef(null);
  const [totalPages, setTotalPages] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchRecipes = useCallback(async () => {
    setLoading(true);
    try {
      const page = params.get('page') || 1;
      if (id !== 'current') {
        const { data } = await getUserRecipes({ page }, id);
        setRecipes(data.results);
        setTotalPages(data.totalPages);
      } else {
        const { data } = await getOwnRecipes({ page });
        setRecipes(data.results);
        setTotalPages(data.totalPages);
      }
    } catch (error) {
      showError(error.response.data);
    } finally {
      setLoading(false);
    }
  }, [id, params]);

  useEffect(() => {
    scrollToTabs(topElementRef.current);
    fetchRecipes();
  }, [fetchRecipes]);

  const handleOwnRemove = async id => {
    try {
      await removeOwnRecipe(id);
      dispatch(updateCounterRecipes(-1));
      if (
        recipes.length === 1 &&
        params.get('page') === totalPages.toString()
      ) {
        scrollToTabs(topElementRef.current);
        setParams({ page: totalPages - 1 });
      } else {
        fetchRecipes();
      }
    } catch (error) {
      showError(error.response.data);
    }
  };

  return (
    <div>
      <span ref={topElementRef} style={{ position: 'absolute' }}></span>
      <h3 className="visually-hidden">Recipes</h3>
      {!isLoading && recipes.length === 0 ? (
        <Empty>
          Nothing has been added to your recipes list yet. Please browse our
          recipes and add your favorites for easy access in the future.
        </Empty>
      ) : (
        <ListItems>
          {isLoading &&
            [...Array(9)].map((item, idx) => (
              <RecipePreviewSkeleton key={idx} />
            ))}
          {!isLoading &&
            recipes.map(recipe => (
              <RecipePreview
                key={recipe._id}
                recipe={recipe}
                onRemove={handleOwnRemove}
              />
            ))}
        </ListItems>
      )}
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default UserRecipes;
