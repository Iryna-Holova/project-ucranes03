import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCounterFavorites } from 'store/authSlice/slice';
import { getFavoriteRecipes, removeFavorite } from 'services/recipes';
import { showError } from 'helpers/notification';
import { scrollToTabs } from 'helpers/scolls';
import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';
import Empty from 'components/Shared/Empty/Empty';
import Pagination from 'components/Shared/Pagination/Pagination';
import RecipePreviewSkeleton from './RecipePreview/RecipePreviewSkeleton';

const Favorites = () => {
  const dispatch = useDispatch();
  const topElementRef = useRef(null);
  const [params, setParams] = useSearchParams();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const fetchRecipes = useCallback(async () => {
    setLoading(true);
    try {
      const page = params.get('page') || 1;
      const { data } = await getFavoriteRecipes({ page });
      setTotalPages(data.totalPages);
      setFavoriteRecipes(data.results);
    } catch (error) {
      showError(error.response.data);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    scrollToTabs(topElementRef.current);
    fetchRecipes();
  }, [fetchRecipes]);

  const handleFavoriteRemove = async id => {
    try {
      await removeFavorite(id);
      dispatch(updateCounterFavorites(-1));
      if (
        favoriteRecipes.length === 1 &&
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
      <h3 className="visually-hidden">Favorite recipes</h3>
      {!isLoading && favoriteRecipes.length === 0 ? (
        <Empty>
          Nothing has been added to your favorite recipes list yet. Please
          browse our recipes and add your favorites for easy access in the
          future.
        </Empty>
      ) : (
        <ListItems>
          {isLoading &&
            [...Array(9)].map((_, idx) => <RecipePreviewSkeleton key={idx} />)}
          {!isLoading &&
            favoriteRecipes.map(recipe => (
              <RecipePreview
                key={recipe._id}
                recipe={recipe}
                onRemove={handleFavoriteRemove}
              />
            ))}
        </ListItems>
      )}
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default Favorites;
