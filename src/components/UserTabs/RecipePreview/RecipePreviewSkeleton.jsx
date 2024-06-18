import css from './RecipePreview.module.css';

const RecipePreviewSkeleton = () => {
  return (
    <li
      style={{ pointerEvents: 'none' }}
      className={`${css.preview_item} ${css.preview_item_skeleton}`}
    >
      <div className={css.info_wrapper}>
        <div className={`${css.thumb} ${css.thumb_skeleton}`}></div>
        <div className={css.description_wrapper}>
          <div className={`${css.title} ${css.title_skeleton}`}></div>
          <div
            className={`${css.description} ${css.description_skeleton}`}
          ></div>
        </div>
      </div>
      <div className={css.icons_wrapper}>
        <div className={`${css.arrow_icon} ${css.arrow_icon_skeleton}`}></div>
        <div className={`${css.trash_icon} ${css.trash_icon_skeleton}`}></div>
      </div>
    </li>
  );
};

export default RecipePreviewSkeleton;
