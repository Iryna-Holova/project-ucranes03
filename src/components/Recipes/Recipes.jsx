import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { selectActiveCategory } from 'store/categoriesSlice/selectors';
import { useMobileMediaQuery } from 'hooks/device-type';
import { getRecipes } from 'services/recipes';
import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import RecipeFilters from './RecipeFilters/RecipeFilters';
import RecipeList from 'components/RecipeList/RecipeList';
import Pagination from 'components/Shared/Pagination/Pagination';
import icons from 'images/icons.svg';
import css from './Recipes.module.css';

const Recipes = () => {
  const [params] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const isMobile = useMobileMediaQuery();
  const category = useSelector(state =>
    selectActiveCategory(state, params.get('category'))
  );

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const limit = isMobile ? 8 : 12;
        const page = params.get('page') || 1;
        const category = params.get('category');
        const ingredient = params.get('ingredient');
        const area = params.get('area');
        const { data } = await getRecipes({
          page,
          limit,
          category,
          ingredient,
          area,
        });
        setRecipes(data.results);
        setTotalPages(data.totalPages);
      } catch (error) {
        throw Error(error.message);
      }
    };
    fetchRecipes();
  }, [isMobile, params]);

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
        <div>
          <RecipeList recipes={recipes} />
          {totalPages > 1 && <Pagination totalPages={totalPages} />}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
