
import icons from 'images/icons.svg';
import css from './RecipePreview.module.css';

const RecipePreviewSkeleton = () => {
  
  return (
    <li className={css.preview_item}>
      <div className={css.info_wrapper}>
        <div className={css.thumb}></div>        
        <div className={css.description_wrapper}>          
          <p className={css.description}></p>
        </div>
      </div>
      <div className={css.icons_wrapper}>
        <div
          className={css.arrow_icon}          
        >
          <svg className={css.icon}>
            <use href={`${icons}#icon-arrow-up-right`} />
          </svg>
        </div>
        
          <div
            className={css.trash_icon}
            
          >
            <svg className={css.icon}>
              <use href={`${icons}#icon-trash`} />
            </svg>
          </div>
        
      </div>
    </li>
  );
};

export default RecipePreviewSkeleton;
