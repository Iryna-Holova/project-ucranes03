import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';

const Favorites = () => {
  return (
    <div>
      <h3 className="visually-hidden">Favorite recipes</h3>
      <ListItems />
      <RecipePreview />
    </div>
  );
};

export default Favorites;
