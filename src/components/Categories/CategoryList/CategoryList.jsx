import categoriesList from '../../../temp/categories.json';
import css from './CategoryList.module.css';
import sprite from '../../../images/icons.svg'
import { Link } from 'react-router-dom';

const CategoryList = () => {
  return (
    <ul className={css.categories_list}>
      {categoriesList.map(category => (
        <li key={category._id} className={css.category_item}>
          <div className={css.category_link_container}>
          <Link className={css.category_link} to={`recipes/?category=${category.name}`}>
              {category.name}
          </Link>
          <Link className={css.category_arrow} to={`recipes/?category=${category.name}`}>
            {/* <a className={css.category_arrow} href=""> */}
              <svg width="18" height="18">
                <use href={sprite + '#icon-arrow-up-right'}></use>
              </svg>
            {/* </a> */}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
