import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeFavorite, addFavorite } from 'services/recipes';
import { selectUser } from 'store/userSlice/selectors';
import { useAuthModal } from 'hooks/use-auth-modal';
import AuthModal from 'components/AuthModal/AuthModal';
import Image from 'components/Shared/Image/Image';
import Modal from 'components/Modal/Modal';
import icons from 'images/icons.svg';
import css from './RecipeCard.module.css';

const RecipeCard = ({ recipe, update }) => {
  const { _id, title, owner, description, thumb, favorite } = recipe;

  const { onToggleMode, isSignUp } = useAuthModal();

  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector(selectUser);

  const [isFavorite, setIsFavorite] = useState(
    user ? favorite.includes(user.id) : false
  );
  const [isAuthOpen, setIsAuthOpen] = useState(false);

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
      setIsAuthOpen(true);
    }
  };

  const handleHeartIconClick = async () => {
    if (!user) {
      setIsAuthOpen(true);
      return;
    }
    try {
      if (isFavorite) {
        setIsFavorite(false);
        await removeFavorite(_id);
      } else {
        setIsFavorite(true);
        await addFavorite(_id);
      }
      if (update) update();
    } catch (error) {
      throw Error(error.message);
    }
  };

  const onAuthClose = () => {
    setIsAuthOpen(false);
  };

  return (
    <>
      <li className={cardStyles}>
        <div className={css.thumb}>
          <Image publicId={thumb} alt={title} aspectRatio={1} />
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
