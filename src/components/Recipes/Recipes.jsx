import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import RecipeFilters from './RecipeFilters/RecipeFilters';
import RecipeList from 'components/RecipeList/RecipeList';
import SectionContainer from 'components/Shared/SectionContainer/SectionContainer';

const Recipes = () => {
  return (
    <SectionContainer>
      <div>
        <MainTitle>Desserts</MainTitle>
        <Subtitle section="recipes">
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </Subtitle>
      </div>
      <div>
        <RecipeFilters />
        <h3 className="visually-hidden">Recipes</h3>
        <RecipeList />
      </div>
    </SectionContainer>
  );
};

export default Recipes;
