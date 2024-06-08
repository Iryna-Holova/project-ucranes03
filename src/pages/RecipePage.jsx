import PathInfo from 'components/Shared/PathInfo/PathInfo';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import RecipeInfo from 'components/RecipeInfo/RecipeInfo';
import PageContainer from 'components/Shared/PageContainer/PageContainer';

const RecipePage = () => {
  return (
    <PageContainer page="recipe">
      <section className="section">
        <PathInfo current="Salmon Avocado Salad" />
        <RecipeInfo />
      </section>
      <PopularRecipes />
    </PageContainer>
  );
};

export default RecipePage;
