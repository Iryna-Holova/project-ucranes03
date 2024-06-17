import defaultAvatar from 'images/placeholder-avatar.svg';
import defaultImage from 'images/placeholder-image.svg';
import css from './RecipeCard.module.css';
import { useLocation } from 'react-router-dom';

const RecipeCardSkeleton = () => {
  const location = useLocation();

  const cardStyles = location.pathname.includes('recipes')
    ? `${css.recipe_card} ${css.all_recipes}`
    : `${css.recipe_card} ${css.popular_recipes}`;

  return (
    <li
      style={{ animation: 'var(--animation-skeleton)' }}
      className={cardStyles}
    >
      <img src={defaultImage} alt="placeholder" className={css.thumb} />
      <div className={css.card_details}>
        <div
          style={{ backgroundColor: 'var(--color-main-10)', height: '24px' }}
        ></div>

        <div
          style={{ backgroundColor: 'var(--color-main-10)' }}
          className={css.description}
        ></div>
        <div className={css.owner_info}>
          <img
            src={defaultAvatar}
            className={css.avatar}
            alt="avatar placeholder"
          />
          <div className={css.icons_wrapper}>
            <div className={css.heart_icon}></div>
            <div className={css.arrow_icon}></div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RecipeCardSkeleton;
