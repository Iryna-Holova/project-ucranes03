import { useLocation, useNavigate } from 'react-router-dom';
import { removeFavorite, removeOwnRecipe } from 'services/recipes';
import Image from 'components/Shared/Image/Image';
import icons from 'images/icons.svg';
import css from './RecipePreview.module.css';

const RecipePreview = ({ recipe, update }) => {
  const { _id, title, description, thumb } = recipe;
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
      if (update) update();
    } catch (error) {
      throw Error(error.message);
    }
  };

  const handleOwnRemove = async id => {
    try {
      await removeOwnRecipe(id);
      if (update) update();
    } catch (error) {
      throw Error(error.message);
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
        <div>
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
        <button
          className={css.trash_icon}
          onClick={() => handleTrashIconClick(_id)}
        >
          <svg className={css.icon}>
            <use href={`${icons}#icon-trash`} />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default RecipePreview;
