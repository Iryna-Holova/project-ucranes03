import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeMainInfo from './RecipeMainInfo/RecipeMainInfo';
import RecipePreparation from './RecipePreparation/RecipePreparation';

const RecipeInfo = ({ recipe }) => {
  const {
    thumb,
    title,
    category,
    time,
    description,
    ingredients,
    instructions,
  } = recipe;

  return (
    <>
      <RecipeMainInfo
        thumb={thumb}
        title={title}
        category={category}
        time={time}
        description={description}
      />
      <RecipeIngredients ingredients={ingredients} />
      <RecipePreparation
        instructions={instructions}
        status="Add to favorites"
      />
    </>
  );
};

export default RecipeInfo;
