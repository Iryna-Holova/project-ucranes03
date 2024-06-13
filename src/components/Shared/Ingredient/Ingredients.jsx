import css from './Ingredients.module.css';

const Ingredient = ({ img, name, measure, callback = null }) => {
  return (
    <li className={css.ingredient_container}>
      <img src={img} alt={name} className={css.img_wrapper} />
      <div>
        <p className={css.name_style}>{name}</p>
        <p className={css.measure_style}>{measure}</p>
      </div>

      {callback && <button className={css.btn}>X</button>}
    </li>
  );
};

export default Ingredient;
