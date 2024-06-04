import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';

const UserRecipes = () => {
  return (
    <>
      <h3 className="visually-hidden">Recipes</h3>
      <ListItems />
      <RecipePreview />
    </>
  );
};

export default UserRecipes;
