import PathInfo from 'components/Shared/PathInfo/PathInfo';
import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import PageContainer from 'components/Shared/PageContainer/PageContainer';
import SectionContainer from 'components/Shared/SectionContainer/SectionContainer';

const AddRecipePage = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <PathInfo current="Add recipe" />
        <div>
          <MainTitle>Add recipe</MainTitle>
          <Subtitle>
            Reveal your culinary art, share your favorite recipe and create
            gastronomic masterpieces with us.
          </Subtitle>
        </div>
      </SectionContainer>
      <AddRecipeForm />
    </PageContainer>
  );
};

export default AddRecipePage;
