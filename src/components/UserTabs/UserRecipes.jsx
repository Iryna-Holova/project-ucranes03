import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';
import { myRecipes } from 'temp/recipeData';

const UserRecipes = () => {
  return (
    <div>
      <h3 className="visually-hidden">Recipes</h3>
      <ListItems />
      <RecipePreview recipes={myRecipes} />
    </div>
  );
};

export default UserRecipes;
