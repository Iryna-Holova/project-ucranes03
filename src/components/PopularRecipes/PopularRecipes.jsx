import RecipeList from 'components/RecipeList/RecipeList';
import css from './PopularRecipes.module.css';
import { testPopular } from 'temp/recipeData';

const PopularRecipes = () => {
  return (
    <section className="section">
      <h2 className={css.title}>Popular recipes</h2>
      <RecipeList recipes={testPopular} />
    </section>
  );
};

export default PopularRecipes;
