import RecipeList from 'components/RecipeList/RecipeList';
import css from './PopularRecipes.module.css';
import { selectPopularRecipes } from '../../redux/recipesSlice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopular } from '../../redux/recipesSlice/thunks';
import { useEffect } from 'react';

const PopularRecipes = () => {
  const popularRecipes = useSelector(selectPopularRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  return (
    <section className="section">
      <h2 className={css.title}>Popular recipes</h2>
      <RecipeList recipes={popularRecipes} />
    </section>
  );
};

export default PopularRecipes;
