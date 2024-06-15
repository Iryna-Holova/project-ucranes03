import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getRecipe } from 'services/recipes';

import PathInfo from 'components/Shared/PathInfo/PathInfo';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import RecipeInfo from 'components/RecipeInfo/RecipeInfo';
import PageContainer from 'components/Shared/PageContainer/PageContainer';
import { useDesktopMediaQuery } from 'hooks/device-type';
import Image from 'components/Shared/Image/Image';

const RecipePage = () => {
  const isDesktop = useDesktopMediaQuery();
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data } = await getRecipe(id);

        setRecipe(data);
      } catch (error) {
        throw Error(error.message);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <PageContainer page="recipe">
      <section className="section ">
        <PathInfo current={recipe?.title} />
        <div className="section_row">
          {recipe && (
            <>
              {isDesktop && (
                <Image
                  publicId={recipe.thumb}
                  alt={recipe.title}
                  aspectRatio={1.37}
                />
              )}
              <div className="section">
                <RecipeInfo recipe={recipe} />
              </div>
            </>
          )}
        </div>
      </section>
      <PopularRecipes />
    </PageContainer>
  );
};

export default RecipePage;
