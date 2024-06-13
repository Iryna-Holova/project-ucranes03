import { useLocation, useNavigate } from 'react-router-dom';
import { removeFavorite, removeOwnRecipe } from 'services/recipes';
import Image from 'components/Shared/Image/Image';
import icons from 'images/icons.svg';
import css from './RecipePreview.module.css';

const RecipePreview = ({ recipes, update }) => {
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

  return recipes.length === 0 ? (
    <div className={css.empty_recipes_wrapper}>
      <p>
        Nothing has been added to your {isFavorite && 'favorite'} recipes list
        yet. Please browse our recipes and add your favorites for easy access in
        the future.
      </p>
    </div>
  ) : (
    <ul className={css.preview_list}>
      {recipes.map(recipe => {
        const { _id, title, description, thumb } = recipe;
        return (
          <li key={_id} className={css.preview_item}>
            <div className={css.info_wrapper}>
              <div className={css.thumb}>
                <Image publicId={thumb} alt={title} aspectRatio={1} />
              </div>
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
      })}
    </ul>
  );
};

export default RecipePreview;
