import css from './RecipeCard.module.css';
import icons from '../../../images/icons.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeFavorite, addFavorite } from '../../../services/recipes';
import { useState } from 'react';
import Image from '../../../components/Shared/Image/Image';

const RecipeCard = ({ recipe, update }) => {
  const { _id, title, owner, description, thumb, favorite } = recipe;

  const navigate = useNavigate();
  const location = useLocation();

  // ===================for test==========
  const userId = '66694566427b7b2ea34acd36';
  const isLoggedIn = true;
  const [isFavorite, setIsFavorite] = useState(favorite.includes(userId));
  // ===================================

  const cardStyles = location.pathname.includes('recipes')
    ? `${css.recipe_card} ${css.all_recipes}`
    : `${css.recipe_card} ${css.popular_recipes}`;

  const heartIconStyles = isFavorite
    ? `${css.heart_icon} ${css.favorite_heart}`
    : `${css.heart_icon}`;

  const handleOwnerBtnClick = () => {
    if (isLoggedIn) {
      navigate(`/user/${owner._id}/recipes`);
    } else {
      console.log('open SignInModal');
    }
  };

  const handleHeartIconClick = async () => {
    try {
      if (isFavorite) {
        setIsFavorite(false);
        await removeFavorite(_id);
      } else {
        setIsFavorite(true);
        await addFavorite(_id);
      }
      update();
    } catch (error) {
      throw Error(error.message);
    }
  };

  return (
    <li className={cardStyles}>
      <div className={css.thumb}>
        <Image publicId={thumb} alt={title} />
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
