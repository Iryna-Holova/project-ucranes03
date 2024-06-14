import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getRecipe } from 'services/recipes';

import PathInfo from 'components/Shared/PathInfo/PathInfo';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import RecipeInfo from 'components/RecipeInfo/RecipeInfo';
import PageContainer from 'components/Shared/PageContainer/PageContainer';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  // console.log(id);
  // console.log(recipe);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data } = await getRecipe(id);
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <PageContainer page="recipe">
      <section className="section">
        {recipe && (
          <>
            <PathInfo current={recipe.title} />
            <RecipeInfo recipe={recipe} />
          </>
        )}
      </section>
      <PopularRecipes />
    </PageContainer>
  );
};

export default RecipePage;
