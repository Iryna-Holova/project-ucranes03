import icons from '../../../images/icons.svg';
import css from './Ingredients.module.css';

const Ingredient = ({ img, name, measure, _id,  callback = null }) => {
  return (
    <li className={css.ingredient_container}>
      <img src={img} alt={name} className={css.img_wrapper} />
      <div>
        <p className={css.name_style}>{name}</p>
        <p className={css.measure_style}>{measure}</p>
      </div>

      {callback && (
        <button className={css.btn} onClick={() => callback(_id)}>
          <svg height={16} width={16}>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </button>
      )}
    </li>
  );
};

export default Ingredient;
