import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeFavorite, addFavorite } from 'services/recipes';
import { selectUser } from 'store/authSlice/selectors';
import { useAuthModal } from 'hooks/use-auth-modal';
import AuthModal from 'components/AuthModal/AuthModal';
import Image from 'components/Shared/Image/Image';
import Modal from 'components/Modal/Modal';
import icons from 'images/icons.svg';
import defaultAvatar from 'images/placeholder-avatar.svg';
import css from './RecipeCard.module.css';
import { useMobileMediaQuery, useTabletMediaQuery } from 'hooks/device-type';

const RecipeCard = ({ recipe }) => {
  const isMobile = useMobileMediaQuery();
  const isTablet = useTabletMediaQuery();
  const { _id, title, owner, description, thumb, favorite } = recipe;

  const { onAuthOpen, onAuthClose, onToggleMode, isAuthOpen, isSignUp } =
    useAuthModal();

  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector(selectUser);

  const [isFavorite, setIsFavorite] = useState(
    user ? favorite.includes(user.id) : false
  );

  const cardStyles = location.pathname.includes('recipes')
    ? `${css.recipe_card} ${css.all_recipes}`
    : `${css.recipe_card} ${css.popular_recipes}`;

  const heartIconStyles = isFavorite
    ? `${css.heart_icon} ${css.favorite_heart}`
    : `${css.heart_icon}`;

  const handleOwnerBtnClick = () => {
    if (user) {
      navigate(`/user/${owner._id}/recipes`);
    } else {
      onAuthOpen(true);
    }
  };

  const handleHeartIconClick = async () => {
    if (!user) {
      onAuthOpen(true);
      return;
    }
    try {
      if (isFavorite) {
        await removeFavorite(_id);
        setIsFavorite(false);
      } else {
        await addFavorite(_id);
        setIsFavorite(true);
      }
    } catch (error) {
      throw Error(error.message);
    }
  };

  return (
    <>
      <li className={cardStyles}>
        <Image
          publicId={thumb}
          alt={title}
          aspectRatio={isMobile ? 1.49 : isTablet ? 1.24 : 1}
          className={css.thumb}
        />
        <div className={css.card_details}>
          <h4 className={css.title}>{title}</h4>
          <p className={css.description}>{description}</p>
          <div className={css.owner_info}>
            <button className={css.owner_btn} onClick={handleOwnerBtnClick}>
              <Image
                publicId={owner.avatar}
                className={css.avatar}
                defaultImage={defaultAvatar}
                alt={owner.name}
              />
              {owner.name}
            </button>
            <div className={css.icons_wrapper}>
              <button
                className={heartIconStyles}
                onClick={handleHeartIconClick}
              >
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
      {isAuthOpen && (
        <Modal onClose={onAuthClose}>
          <AuthModal isSignUp={isSignUp} onToggleMode={onToggleMode} />
        </Modal>
      )}
    </>
  );
};

export default RecipeCard;
