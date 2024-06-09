import RecipeList from 'components/RecipeList/RecipeList';
import css from './PopularRecipes.module.css';

const PopularRecipes = () => {
  return (
    <section className="section">
      <h2 className={css.title}>Popular recipes</h2>
      <RecipeList />
    </section>
  );
};

export default PopularRecipes;
