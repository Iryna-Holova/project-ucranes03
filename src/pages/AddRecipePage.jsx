import PathInfo from 'components/Shared/PathInfo/PathInfo';
import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';

const AddRecipePage = () => {
  return (
    <>
      <PathInfo />
      <MainTitle>Add recipe</MainTitle>
      <Subtitle>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </Subtitle>
      <AddRecipeForm />
    </>
  );
};

export default AddRecipePage;
