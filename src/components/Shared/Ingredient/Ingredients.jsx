import { useState } from 'react';
import css from './Ingredients.module.css';
import icons from '../../../images/icons.svg';
import defaultImg from 'images/placeholder-image.svg';

const Ingredient = ({ img, name, measure, _id, callback = null }) => {
  const [imgUrl, setImgUrl] = useState(img);

  const handlerSetDefault = () => {
    setImgUrl(defaultImg);
  };

  return (
    <li className={css.ingredient_container}>
      <img
        src={imgUrl}
        alt={name}
        className={css.img_wrapper}
        onError={handlerSetDefault}
      />
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
