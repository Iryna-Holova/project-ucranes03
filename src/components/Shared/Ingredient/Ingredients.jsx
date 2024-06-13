import css from './Ingredients.module.css';

const Ingredient = ({ img, name, measure, callback = null }) => {
  console.log(img);
  return (
    <li className={css.ingredient_container}>
      <div className={css.img_wrapper}>
        <img src={img} alt={name} />
      </div>
      <div>
        <p>{name}</p>
        <p>{measure}</p>
      </div>

      {callback && <button>X</button>}
    </li>
  );
};

export default Ingredient;
