import categoriesList from '../../../temp/categories.json';
import css from './CategoryList.module.css';
import sprite from '../../../../src/images/icons.svg'

const CategoryList = () => {
  return (
    <ul className={css.categoriesList}>
      {categoriesList.map(category => (
        <li className={css.categoryItem}>
          <div className={css.categoryLinkContainer}>
            <a className={css.categoryLink} href="">
              {category.name}
            </a>
            <a className={css.categoryArrow} href="">
              <svg width="18" height="18">
                <use href={sprite + '#icon-arrow-up-right'}></use>
              </svg>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
