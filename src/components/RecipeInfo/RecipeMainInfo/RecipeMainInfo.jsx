import Image from 'components/Shared/Image/Image';
import css from './RecipeMainInfo.module.css';
import defaultAvatar from 'images/placeholder-avatar.svg';

const RecipeMainInfo = ({
  thumb,
  title,
  category,
  time,
  description,
  owner,
}) => {
  return (
    <>
      <div className={css.img_container}>
        <Image publicId={thumb} alt={title} aspectRatio="1.078" />
      </div>
      <div className={css.container_info}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.list}>
          <li className={css.list_item}>
            <p className={css.item_text}>{category}</p>
          </li>
          <li className={css.list_item}>
            <p className={css.item_text}>{time} min</p>
          </li>
        </ul>
        <p className={css.description}>{description}</p>
        <button className={css.btn_wrapper}>
          <span className={css.avatar_container}>
            <Image
              publicId={owner.avatar}
              alt={owner.name}
              defaultImage={defaultAvatar}
            />
          </span>
          <span className={css.creator}>
            <span className={css.creator_info}>Created by:</span>
            <span className={css.creator_name}>{owner.name}</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default RecipeMainInfo;
