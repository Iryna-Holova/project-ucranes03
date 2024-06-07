import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeMainInfo from './RecipeMainInfo/RecipeMainInfo';
import RecipePreparation from './RecipePreparation/RecipePreparation';

const RecipeInfo = () => {
  return (
    <>
      <RecipeMainInfo />
      <RecipeIngredients />
      <RecipePreparation />
      <ButtonLink
        type="button"
        color="light"
        size="normal"
        onClick={console.log}
      >
        Add to favorites
      </ButtonLink>
    </>
  );
};

export default RecipeInfo;
