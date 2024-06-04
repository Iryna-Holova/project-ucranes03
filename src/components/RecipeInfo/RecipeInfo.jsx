import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeMainInfo from './RecipeMainInfo/RecipeMainInfo';
import RecipePreparation from './RecipePreparation/RecipePreparation';

const RecipeInfo = () => {
  return (
    <>
      <RecipeMainInfo />
      <RecipeIngredients />
      <RecipePreparation />
    </>
  );
};

export default RecipeInfo;
