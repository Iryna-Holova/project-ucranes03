import { useEffect, useState } from 'react';
import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import RecipeList from 'components/RecipeList/RecipeList';
import { getRecipes } from '../../services/recipes';
import RecipeFilters from 'components/RecipeFilters/RecipeFilters';

const Recipes = () => {
  
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const { data } = await getRecipes();
      setRecipes(data.results);
    } catch (error) {
      throw Error(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section className="section">
      <div>
        <MainTitle>Desserts</MainTitle>
        <Subtitle section="recipes">
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </Subtitle>
      </div>
      <div>
        <RecipeFilters />
        <RecipeList recipes={recipes} />
      </div>
    </section>
  );
};

export default Recipes;
