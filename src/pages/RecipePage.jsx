import PathInfo from 'components/Shared/PathInfo/PathInfo';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import RecipeInfo from 'components/RecipeInfo/RecipeInfo';

const RecipePage = () => {
  return (
    <>
      <PathInfo />
      <RecipeInfo />
      <PopularRecipes />
    </>
  );
};

export default RecipePage;
