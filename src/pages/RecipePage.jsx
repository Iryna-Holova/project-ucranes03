import PathInfo from 'components/Shared/PathInfo/PathInfo';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import RecipeInfo from 'components/RecipeInfo/RecipeInfo';
import PageContainer from 'components/Shared/PageContainer/PageContainer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { recipes } from 'temp/foodies';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const getRecipe = () => {
      const data = recipes.find(item => item._id === id);
      setRecipe(data);
    };

    getRecipe();
  }, [id]);

  return (
    <PageContainer page="recipe">
      <section className="section">
        <PathInfo current={recipe.title} />
        <RecipeInfo recipe={recipe} />
      </section>
      <PopularRecipes />
    </PageContainer>
  );
};

export default RecipePage;
