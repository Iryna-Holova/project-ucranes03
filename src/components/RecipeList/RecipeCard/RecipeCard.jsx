import css from './RecipeCard.module.css';
import icons from '../../../images/icons.svg';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { _id, title, owner, description, thumb, favorite } = recipe;

  const navigate = useNavigate();

  // ===================for test==========
  const mobile = window.matchMedia('(max-width: 767px)').matches;
  const tablet = window.matchMedia('(min-width: 768px)').matches;
  const desktop = window.matchMedia('(min-width: 1440px)').matches;

  const truncateString = text => {
    if (desktop && text.length >= 77) {
      return text.slice(0, 77) + '...';
    }
    if (tablet && text.length >= 85) {
      return text.slice(0, 85) + '...';
    }
    if (mobile && text.length >= 100) {
      return text.slice(0, 100) + '...';
    }
    return text;
  };

  const userId = '666439f8cdaa50319cc78607';
  const isLoggedIn = true;

  const heartIconStyles =
    favorite && favorite.includes(userId)
      ? `${css.heartIcon} ${css.favoriteHeart}`
      : `${css.heartIcon}`;
  // ===================================

  const handleOwnerBtnClick = () => {
    if (isLoggedIn) {
      navigate(`/user/${owner._id}/recipes`);
    } else {
      console.log('open SignInModal');
    }
  };

  const handleHeartIconClick = () => {
    console.log('add/remove to favorite logic will be here');
  };

  return (
    <li className={css.recipeCard}>
      <div className={css.thumb}>
        <img src={thumb} alt={title} />
      </div>
      <div className={css.cardDetails}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.description}>{truncateString(description)}</p>
        <div className={css.ownerInfo}>
          <button className={css.ownerBtn} onClick={handleOwnerBtnClick}>
            <img className={css.avatar} src={owner.avatar} alt={owner.name} />
            {owner.name}
          </button>
          <div className={css.iconsWrapper}>
            <button className={heartIconStyles} onClick={handleHeartIconClick}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-heart`} />
              </svg>
            </button>
            <button
              className={css.arrowIcon}
              onClick={() => navigate(`/recipe/${_id}`)}
            >
              <svg className={css.icon}>
                <use href={`${icons}#icon-arrow-up-right`} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RecipeCard;
