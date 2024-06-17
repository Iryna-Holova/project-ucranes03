import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  updateCounterFavorites,
  updateCounterRecipes,
} from 'store/authSlice/slice';
import { removeFavorite, removeOwnRecipe } from 'services/recipes';
import { showError } from 'helpers/notification';
import Image from 'components/Shared/Image/Image';
import icons from 'images/icons.svg';
import css from './RecipePreview.module.css';

const RecipePreview = ({ recipe, update }) => {
  const dispatch = useDispatch();
  const { _id, title, description, thumb } = recipe;
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isFavorite = location.pathname.includes('favorites');

  const handleTrashIconClick = id => {
    if (isFavorite) {
      handleFavoriteRemove(id);
    } else {
      handleOwnRemove(id);
    }
  };

  const handleFavoriteRemove = async id => {
    try {
      await removeFavorite(id);
      dispatch(updateCounterFavorites(-1));
      if (update) update();
    } catch (error) {
      showError(error);
    }
  };

  const handleOwnRemove = async id => {
    try {
      await removeOwnRecipe(id);
      dispatch(updateCounterRecipes(-1));
      if (update) update();
    } catch (error) {
      showError(error);
    }
  };

  return (
    <li className={css.preview_item}>
      <div className={css.info_wrapper}>
        <Image
          publicId={thumb}
          alt={title}
          aspectRatio={1}
          className={css.thumb}
        />
        <div className={css.description_wrapper}>
          <h4 className={css.title}>{title}</h4>
          <p className={css.description}>{description}</p>
        </div>
      </div>
      <div className={css.icons_wrapper}>
        <button
          className={css.arrow_icon}
          onClick={() => navigate(`/recipe/${_id}`)}
        >
          <svg className={css.icon}>
            <use href={`${icons}#icon-arrow-up-right`} />
          </svg>
        </button>
        {id === 'current' && (
          <button
            className={css.trash_icon}
            onClick={() => handleTrashIconClick(_id)}
          >
            <svg className={css.icon}>
              <use href={`${icons}#icon-trash`} />
            </svg>
          </button>
        )}
      </div>
    </li>
  );
};

export default RecipePreview;
