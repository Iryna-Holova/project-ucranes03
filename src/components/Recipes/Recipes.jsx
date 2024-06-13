import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { selectActiveCategory } from 'store/categoriesSlice/selectors';
import { getRecipes } from 'services/recipes';
import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import RecipeList from 'components/RecipeList/RecipeList';
import RecipeFilters from 'components/RecipeFilters/RecipeFilters';
import icons from 'images/icons.svg';
import css from './Recipes.module.css';

const Recipes = () => {
  const [params] = useSearchParams();
  const category = useSelector(state =>
    selectActiveCategory(state, params.get('category'))
  );

  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const { data } = await getRecipes();
      setRecipes(data.results);
    } catch (error) {
      throw Error(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section className="section">
      <div className={css.header}>
        <Link to="/" className={css.back_link}>
          <svg width={16} height={16}>
            <use href={`${icons}#icon-arrow-left`} />
          </svg>
          Back
        </Link>
        <MainTitle>{category?.name || 'Recipes'}</MainTitle>
        <Subtitle section="recipes">
          {category?.description ||
            'Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen.'}
        </Subtitle>
      </div>
      <div>
        <RecipeFilters />
        <RecipeList recipes={recipes} />
      </div>
    </section>
  );
};

export default Recipes;
