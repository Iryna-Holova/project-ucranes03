import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Image from 'components/Shared/Image/Image';
import icons from 'images/icons.svg';
import css from './RecipePreview.module.css';

const RecipePreview = ({ recipe, onRemove }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const { _id, title, description, thumb } = recipe;
  const { id } = useParams();
  const navigate = useNavigate();

  const handleTrashIconClick = async () => {
    setIsRemoving(true);
    await onRemove(_id);
    setIsRemoving(false);
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
            onClick={handleTrashIconClick}
            disabled={isRemoving}
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
