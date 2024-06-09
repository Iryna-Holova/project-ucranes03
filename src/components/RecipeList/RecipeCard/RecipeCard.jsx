import css from './RecipeCard.module.css';
import icons from '../../../images/icons.svg';

const RecipeCard = () => {
  return (
    <li className={css.recipeCard}>
      <img
        className={css.thumb}
        src="https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg"
        alt="recipe thumb"
      />
      <h2 className={css.title}>Battenberg Cake</h2>
      <p className={css.description}>
        Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm
        square...
      </p>
      <button className={css.ownerBtn}>
        <img
          className={css.avatar}
          src="https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg"
          alt="Owner name"
        />
        Ivetta
      </button>
      <button className={css.heartBtn}>
        <svg>
          <use href={`${icons}#icon-heart`} />
        </svg>
      </button>
      <button className={css.arrowBtn}>
        <svg>
          <use href={`${icons}#icon-arrow-up-right`} />
        </svg>
      </button>
    </li>
  );
};

export default RecipeCard;
