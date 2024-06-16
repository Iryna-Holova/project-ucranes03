import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchCategories } from 'store/categoriesSlice/thunks';
import { selectActiveCategory } from 'store/categoriesSlice/selectors';
import { useMobileMediaQuery } from 'hooks/device-type';
import { getRecipes } from 'services/recipes';
import { scrollToElement } from 'helpers/scolls';
import { showError } from 'helpers/notification';
import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import RecipeFilters from './RecipeFilters/RecipeFilters';
import RecipeList from 'components/RecipeList/RecipeList';
import RecipeCard from 'components/RecipeList/RecipeCard/RecipeCard';
import RecipeCardSkeleton from 'components/RecipeList/RecipeCard/RecipeCardSkeleton';
import Pagination from 'components/Shared/Pagination/Pagination';
import Empty from 'components/Shared/Empty/Empty';
import icons from 'images/icons.svg';
import css from './Recipes.module.css';

const Recipes = () => {
  const [params] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const topElementRef = useRef(null);
  const isMobile = useMobileMediaQuery();

  const category = useSelector(state =>
    selectActiveCategory(state, params.get('category'))
  );

  useEffect(() => {
    if (!category) dispatch(fetchCategories());
  }, [category, dispatch]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
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
        showError(error);
      } finally {
        setIsLoading(false);
      }
    };
    scrollToElement(topElementRef.current);
    fetchRecipes();
  }, [isMobile, params]);

  return (
    <section className="section">
      <div ref={topElementRef}></div>
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
      <div className={css.content}>
        <RecipeFilters />
        <div>
          <RecipeList recipes={recipes}>
            {isLoading ? (
              [...Array(isMobile ? 8 : 12)].map((_, idx) => (
                <RecipeCardSkeleton key={idx} />
              ))
            ) : !recipes.length ? (
              <Empty>Recipes not found</Empty>
            ) : (
              recipes.map(recipe => (
                <RecipeCard key={recipe._id} recipe={recipe} />
              ))
            )}
          </RecipeList>
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              topElementRef={topElementRef.current}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
