import css from './RecipeCard.module.css';
import icons from '../../../images/icons.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { _id, title, owner, description, thumb, favorite } = recipe;

  const navigate = useNavigate();
  const location = useLocation();

  // ===================for test==========
  const userId = '666439f8cdaa50319cc78607';
  const isLoggedIn = true;

  const cardStyles = location.pathname.includes('recipes')
    ? `${css.recipe_card} ${css.all_recipes}`
    : `${css.recipe_card} ${css.popular_recipes}`;

  const heartIconStyles =
    favorite && favorite.includes(userId)
      ? `${css.heart_icon} ${css.favorite_heart}`
      : `${css.heart_icon}`;
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
    <li className={cardStyles}>
      <div className={css.thumb}>
        <img src={thumb} alt={title} />
      </div>
      <div className={css.card_details}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.description}>{description}</p>
        <div className={css.owner_info}>
          <button className={css.owner_btn} onClick={handleOwnerBtnClick}>
            <img className={css.avatar} src={owner.avatar} alt={owner.name} />
            {owner.name}
          </button>
          <div className={css.icons_wrapper}>
            <button className={heartIconStyles} onClick={handleHeartIconClick}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-heart`} />
              </svg>
            </button>
            <button
              className={css.arrow_icon}
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
