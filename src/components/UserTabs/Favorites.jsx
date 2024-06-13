import { useEffect, useState } from 'react';
import { getFavoriteRecipes } from 'services/recipes';
import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';
import Empty from 'components/Shared/Empty/Empty';

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const { data } = await getFavoriteRecipes();
      setFavoriteRecipes(data.results);
    } catch (error) {
      throw Error(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h3 className="visually-hidden">Favorite recipes</h3>
      {favoriteRecipes.length === 0 ? (
        <Empty>
          Nothing has been added to your favorite recipes list yet. Please
          browse our recipes and add your favorites for easy access in the
          future.
        </Empty>
      ) : (
        <ListItems>
          {favoriteRecipes.map(recipe => (
            <RecipePreview
              key={recipe._id}
              recipe={recipe}
              update={fetchRecipes}
            />
          ))}
        </ListItems>
      )}
    </div>
  );
};

export default Favorites;
