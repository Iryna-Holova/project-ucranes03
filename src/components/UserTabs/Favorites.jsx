import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';

const Favorites = () => {
  return (
    <>
      <h3 className="visually-hidden">Favorite recipes</h3>
      <ListItems />
      <RecipePreview />
    </>
  );
};

export default Favorites;
