import { useLocation } from 'react-router-dom';
import RecipeCard from './RecipeCard/RecipeCard';
import css from './RecipeList.module.css';

const RecipeList = ({ recipes, update }) => {
  const location = useLocation();

  const listStyles = location.pathname.includes('recipes')
    ? `${css.recipe_list} ${css.all_recipes}`
    : `${css.recipe_list}`;

  return (
    <ul className={listStyles}>
      {recipes &&
        recipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} update={update} />
        ))}
    </ul>
  );
};

export default RecipeList;
