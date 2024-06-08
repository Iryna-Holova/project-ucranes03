import PathInfo from 'components/Shared/PathInfo/PathInfo';
import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import PageContainer from 'components/Shared/PageContainer/PageContainer';

const AddRecipePage = () => {
  return (
    <PageContainer tag="section">
      <div className="section">
        <PathInfo current="Add recipe" />
        <div>
          <MainTitle>Add recipe</MainTitle>
          <Subtitle>
            Reveal your culinary art, share your favorite recipe and create
            gastronomic masterpieces with us.
          </Subtitle>
        </div>
      </div>
      <AddRecipeForm />
    </PageContainer>
  );
};

export default AddRecipePage;
