import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';

const UserRecipes = () => {
  return (
    <div>
      <h3 className="visually-hidden">Recipes</h3>
      <ListItems />
      <RecipePreview />
    </div>
  );
};

export default UserRecipes;
