import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteRecipes } from '../../redux/recipesSlice/selectors';
import { useEffect } from 'react';
import { fetchFavorite } from '../../redux/recipesSlice/thunks';

const Favorites = () => {
  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorite());
  }, [dispatch]);

  return (
    <div>
      <h3 className="visually-hidden">Favorite recipes</h3>
      <ListItems />
      <RecipePreview recipes={favoriteRecipes} />
    </div>
  );
};

export default Favorites;
