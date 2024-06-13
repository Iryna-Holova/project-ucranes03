import { useEffect, useState } from 'react';
import { getOwnRecipes } from 'services/recipes';
import ListItems from 'components/UserTabs/ListItems/ListItems';
import RecipePreview from 'components/UserTabs/RecipePreview/RecipePreview';

const UserRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const { data } = await getOwnRecipes();
      setRecipes(data.results);
    } catch (error) {
      throw Error(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h3 className="visually-hidden">Recipes</h3>
      <ListItems />
      <RecipePreview recipes={recipes} />
    </div>
  );
};

export default UserRecipes;
