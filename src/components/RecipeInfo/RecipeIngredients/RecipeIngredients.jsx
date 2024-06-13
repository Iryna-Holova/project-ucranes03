import Ingredient from 'components/Shared/Ingredient/Ingredients';
import css from './RecipeIngredients.module.css';

const RecipeIngredients = ({ ingredients = [] }) => {
  return (
    <div>
      <h3 className={css.title}>ingredients</h3>
      <ul>
        {ingredients.map(({ id: { name, _id, img }, measure }) => (
          <Ingredient
            key={_id}
            img={img}
            name={name}
            measure={measure}
            // callback={() => {}}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
