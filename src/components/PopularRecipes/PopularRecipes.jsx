import RecipeList from 'components/RecipeList/RecipeList';
import SectionTitle from 'components/Shared/SectionTitle/SectionTitle';

const PopularRecipes = () => {
  return (
    <div>
      <SectionTitle>Popular recipes</SectionTitle>
      <RecipeList />
    </div>
  );
};

export default PopularRecipes;
