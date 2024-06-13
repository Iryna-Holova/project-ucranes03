import { useEffect, useState } from 'react';
import { getPopularRecipes } from 'services/recipes';
import RecipeList from 'components/RecipeList/RecipeList';
import css from './PopularRecipes.module.css';

const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const { data } = await getPopularRecipes();
      setPopularRecipes(data);
    } catch (error) {
      throw Error(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section className="section">
      <h2 className={css.title}>Popular recipes</h2>
      <RecipeList recipes={popularRecipes} update={fetchRecipes} />
    </section>
  );
};

export default PopularRecipes;
