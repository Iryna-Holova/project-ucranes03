import PathInfo from 'components/Shared/PathInfo/PathInfo';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import RecipeInfo from 'components/RecipeInfo/RecipeInfo';
import PageContainer from 'components/Shared/PageContainer/PageContainer';
import SectionContainer from 'components/Shared/SectionContainer/SectionContainer';

const RecipePage = () => {
  return (
    <PageContainer page="recipe">
      <SectionContainer>
        <PathInfo current="Salmon Avocado Salad" />
        <RecipeInfo />
      </SectionContainer>
      <PopularRecipes />
    </PageContainer>
  );
};

export default RecipePage;
