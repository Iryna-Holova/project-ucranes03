import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
// import RecipeFilters from './RecipeFilters/RecipeFilters';
import RecipeList from 'components/RecipeList/RecipeList';
import { useEffect, useState } from 'react';
import { getRecipes } from '../../services/recipes';

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
        {/* <RecipeFilters /> */}
        <RecipeList recipes={recipes} />
      </div>
    </section>
  );
};

export default Recipes;
