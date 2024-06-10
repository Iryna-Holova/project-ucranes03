import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';
import { favoriteRecipes } from 'temp/recipeData';

const Favorites = () => {
  return (
    <div>
      <h3 className="visually-hidden">Favorite recipes</h3>
      <ListItems />
      <RecipePreview recipes={favoriteRecipes} />
    </div>
  );
};

export default Favorites;
