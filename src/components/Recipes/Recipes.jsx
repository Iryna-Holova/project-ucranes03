import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import RecipeFilters from './RecipeFilters/RecipeFilters';
import RecipeList from 'components/RecipeList/RecipeList';

const Recipes = () => {
  return (
    <section className="section">
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
        <RecipeList />
      </div>
    </section>
  );
};

export default Recipes;
