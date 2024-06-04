import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import RecipeFilters from './RecipeFilters/RecipeFilters';
import RecipeList from 'components/RecipeList/RecipeList';

const Recipes = () => {
  return (
    <>
      <MainTitle>Desserts</MainTitle>
      <Subtitle>
        Go on a taste journey, where every sip is a sophisticated creative
        chord, and every dessert is an expression of the most refined
        gastronomic desires.
      </Subtitle>
      <RecipeFilters />
      <h3 className="visually-hidden">Recipes</h3>
      <RecipeList />
    </>
  );
};

export default Recipes;
