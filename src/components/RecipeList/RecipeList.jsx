import RecipeCard from './RecipeCard/RecipeCard';
import css from './RecipeList.module.css';

const RecipeList = () => {
  return (
    <ul className={css.recipeList}>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </ul>
  );
};

export default RecipeList;
