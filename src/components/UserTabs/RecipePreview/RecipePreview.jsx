import css from './RecipePreview.module.css';
import icons from '../../../images/icons.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const RecipePreview = ({ recipes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFavorite = location.pathname.includes('favorites');

  const handleTrashIconClick = id => {
    if (isFavorite) {
      console.log(`Remove recipe with id: ${id} from favorite recipes.`);
    } else {
      console.log(`Remove recipe with id: ${id} from own recipes.`);
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
                <img src={thumb} alt={title} />
              </div>
              <div>
                <h2 className={css.title}>{title}</h2>
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
