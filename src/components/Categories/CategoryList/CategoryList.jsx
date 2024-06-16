import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getImageUrlResized } from 'helpers/cloudinary';
import {
  useDesktopMediaQuery,
  useRetinaMediaQuery,
  useTabletMediaQuery,
} from 'hooks/device-type';
import {
  selectCategories,
  selectError,
  selectIsLoading,
} from 'store/categoriesSlice/selectors';
import { fetchCategories } from 'store/categoriesSlice/thunks';
import CategorySkeleton from './CategorySkeleton';
import Empty from 'components/Shared/Empty/Empty';
import sprite from 'images/icons.svg';
import css from './CategoryList.module.css';

const CategoryList = () => {
  const [showAll, setShowAll] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const isDesktop = useDesktopMediaQuery();
  const isTablet = useTabletMediaQuery();
  const isRetina = useRetinaMediaQuery();

  const limit = isDesktop || isTablet ? 11 : 8;
  const accentImages = isDesktop ? [2, 3, 7, 9] : isTablet ? [2, 7] : [];
  const accentWidth = isDesktop ? 590 : isTablet ? 704 : 343;
  const width = isDesktop ? 325 : isTablet ? 342 : 343;
  const accentAspectRatio = isDesktop ? '1.6' : isTablet ? '1.91' : '1.37';
  const aspectRatio = isDesktop ? '0.88' : isTablet ? '0.93' : '1.37';

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [categories.length, dispatch]);

  return isError ? (
    <Empty>Failed to load categories</Empty>
  ) : (
    <ul className={css.categories_list}>
      {isLoading
        ? [...Array(limit + 1)].map((_, idx) => <CategorySkeleton key={idx} />)
        : categories
            .slice(0, showAll ? categories.length : limit)
            .map(({ _id, name, thumb }, idx) => (
              <li
                key={_id}
                className={css.category_item}
                style={{
                  '--category-image': `url(${getImageUrlResized(thumb, {
                    aspectRatio: accentImages.includes(idx % 12)
                      ? accentAspectRatio
                      : aspectRatio,
                    width: accentImages.includes(idx % 12)
                      ? accentWidth
                      : width,
                    pixelRatio: isRetina ? 2 : 1,
                  })})`,
                }}
              >
                <div className={css.category_link_container}>
                  <Link
                    className={css.category_link}
                    to={`recipes?category=${_id}`}
                  >
                    {name}
                  </Link>
                  <Link
                    className={css.category_arrow}
                    to={`recipes?category=${_id}`}
                  >
                    <svg width="18" height="18">
                      <use href={sprite + '#icon-arrow-up-right'}></use>
                    </svg>
                  </Link>
                </div>
              </li>
            ))}
      {!isLoading && !showAll && (
        <li className={css.all_categories}>
          <button
            onClick={() => setShowAll(!showAll)}
            className={css.all_categories_button}
            type="button"
          >
            All categories
          </button>
        </li>
      )}
    </ul>
  );
};

export default CategoryList;
