import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getOwnRecipes, getUserRecipes } from 'services/recipes';
import { showError } from 'helpers/notification';
import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';
import Empty from 'components/Shared/Empty/Empty';
import Pagination from 'components/Shared/Pagination/Pagination';
import RecipePreviewSkeleton from './RecipePreview/RecipePreviewSkeleton';

const UserRecipes = () => {
  const [params] = useSearchParams();
  const { id } = useParams();
  const topElementRef = useRef(null);
  const [totalPages, setTotalPages] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchRecipes = useCallback(async () => {
    setLoading(true);
    try {
      const page = params.get('page') || 1;
      let data;
      if (id !== 'current') {
        const result = await getUserRecipes({ page }, id);
        data = result.data;
      } else {
        const result = await getOwnRecipes({ page });
        data = result.data;
      }
      setRecipes(data.results);
      setTotalPages(data.totalPages);
    } catch (error) {
      showError(error);
    } finally {
      setLoading(false);
    }
  }, [id, params]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <div>
      <h3 className="visually-hidden">Recipes</h3>
      {!isLoading &&recipes.length === 0 ? (
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
          {!isLoading &&recipes.map(recipe => (
            <RecipePreview
              key={recipe._id}
              recipe={recipe}
              update={fetchRecipes}
            />
          ))}
        </ListItems>
      )}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          topElementRef={topElementRef.current}
        />
      )}
    </div>
  );
};

export default UserRecipes;
