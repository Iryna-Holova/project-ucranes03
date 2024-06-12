import { Link } from 'react-router-dom';
import { getImageUrlResized } from 'helpers/cloudinary';
import {
  useDesktopMediaQuery,
  useRetinaMediaQuery,
  useTabletMediaQuery,
} from 'hooks/device-type';
// import Image from 'components/Shared/Image/Image';
import categoriesList from '../../../temp/categories.json';
import css from './CategoryList.module.css';
import sprite from '../../../images/icons.svg';

const CategoryList = () => {
  const isDesktop = useDesktopMediaQuery();
  const isTablet = useTabletMediaQuery();
  const isRetina = useRetinaMediaQuery();

  const accentImages = isDesktop ? [2, 3, 7, 9] : isTablet ? [2, 7] : [];
  const accentWidth = isDesktop ? 590 : isTablet ? 704 : 343;
  const width = isDesktop ? 325 : isTablet ? 342 : 343;
  const accentAspectRatio = isDesktop ? '1.6' : isTablet ? '1.91' : '1.37';
  const aspectRatio = isDesktop ? '0.88' : isTablet ? '0.93' : '1.37';

  return (
    <ul className={css.categories_list}>
      {categoriesList.map(({ _id, name, thumb }, idx) => (
        <li
          key={_id}
          className={css.category_item}
          style={{
            backgroundImage: `
            linear-gradient(to bottom, rgba(5, 5, 5, 0.18), rgba(5, 5, 5, 0.18)),
            url(${getImageUrlResized(thumb, {
              aspectRatio: accentImages.includes(idx % 12)
                ? accentAspectRatio
                : aspectRatio,
              width: accentImages.includes(idx % 12) ? accentWidth : width,
              pixelRatio: isRetina ? 2 : 1,
            })}),
            linear-gradient(to bottom, rgb(5, 5, 5), rgb(5, 5, 5))`,
          }}
        >
          {/* <Image
            publicId={thumb}
            aspectRatio={[2, 3, 7, 9].includes(idx) ? '1.6' : '0.88'}
            alt={name}
          /> */}
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
      <li className={css.all_categories}>
        <button className={css.all_categories_button} type="button">
          All categories
        </button>
      </li>
    </ul>
  );
};

export default CategoryList;
