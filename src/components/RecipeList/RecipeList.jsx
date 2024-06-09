import RecipeCard from './RecipeCard/RecipeCard';
import css from './RecipeList.module.css';

const RecipeList = ({ recipes }) => {
  return (
    <ul className={css.recipeList}>
      {recipes &&
        recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)}
    </ul>
  );
};

export default RecipeList;
