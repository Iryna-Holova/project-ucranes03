import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeFavorite, addFavorite } from 'services/recipes';
import { selectUser } from 'store/authSlice/selectors';
import { useAuthModalContext } from 'components/AuthModalContext';
import { useMobileMediaQuery, useTabletMediaQuery } from 'hooks/device-type';
import { showError } from 'helpers/notification';
import Image from 'components/Shared/Image/Image';
import defaultAvatar from 'images/placeholder-avatar.svg';
import icons from 'images/icons.svg';
import css from './RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {
  const { _id, title, owner, description, thumb, favorite } = recipe;
  const { onAuthOpen } = useAuthModalContext();
  const isMobile = useMobileMediaQuery();
  const isTablet = useTabletMediaQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    user && setIsFavorite(favorite.includes(user.id));
  }, [favorite, user]);

  const cardStyles = location.pathname.includes('recipes')
    ? `${css.recipe_card} ${css.all_recipes}`
    : `${css.recipe_card} ${css.popular_recipes}`;

  const handleOwnerBtnClick = () => {
    if (user) {
      navigate(`/user/${owner._id}/recipes`);
    } else {
      onAuthOpen(`/user/${owner._id}/recipes`);
    }
  };

  const handleHeartIconClick = async () => {
    if (!user) {
      onAuthOpen();
      return;
    }

    setIsPending(true);
    try {
      if (isFavorite) {
        await removeFavorite(_id);
        setIsFavorite(false);
      } else {
        await addFavorite(_id);
        setIsFavorite(true);
      }
    } catch (error) {
      showError(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <li className={cardStyles}>
      <Image
        publicId={thumb}
        alt={title}
        aspectRatio={isMobile ? 1.49 : isTablet ? 1.24 : 1}
        className={css.thumb}
      />
      <div className={css.card_details}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.description}>{description}</p>
        <div className={css.owner_info}>
          <button
            type="button"
            className={css.owner_btn}
            onClick={handleOwnerBtnClick}
          >
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
              type="button"
              className={css.heart_icon}
              onClick={handleHeartIconClick}
              disabled={isPending}
              aria-label={
                isFavorite ? 'Remove from favorites' : 'Add to favorites'
              }
              aria-pressed={isFavorite}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <svg className={css.icon}>
                <use
                  href={`${icons}${
                    isFavorite ? '#icon-heart-filled' : '#icon-heart'
                  }`}
                />
              </svg>
            </button>
            <button
              type="button"
              className={css.arrow_icon}
              onClick={() => navigate(`/recipe/${_id}`)}
              title="View recipe"
              aria-label="View recipe"
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
