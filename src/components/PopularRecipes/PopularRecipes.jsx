import { useEffect, useState } from 'react';
import { getPopularRecipes } from 'services/recipes';
import { showError } from 'helpers/notification';
import RecipeList from 'components/RecipeList/RecipeList';
import RecipeCard from 'components/RecipeList/RecipeCard/RecipeCard';
import RecipeCardSkeleton from 'components/RecipeList/RecipeCard/RecipeCardSkeleton';
import css from './PopularRecipes.module.css';

const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async () => {
    try {
      setIsLoading(true);
      const { data } = await getPopularRecipes();
      setPopularRecipes(data);
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section className="section">
      <h2 className={css.title}>Popular recipes</h2>
      <RecipeList>
        {isLoading
          ? [...Array(4)].map((_, idx) => <RecipeCardSkeleton key={idx} />)
          : popularRecipes.map(recipe => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
      </RecipeList>
    </section>
  );
};

export default PopularRecipes;
