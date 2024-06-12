import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';
import { useEffect, useState } from 'react';
import { getFavoriteRecipes } from '../../services/recipes';

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const { data } = await getFavoriteRecipes();
      setFavoriteRecipes(data);
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
      <ListItems />
      <RecipePreview recipes={favoriteRecipes} update={fetchRecipes} />
    </div>
  );
};

export default Favorites;
