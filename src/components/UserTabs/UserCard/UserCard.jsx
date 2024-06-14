import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import sprite from '../../../images/icons.svg';
import css from './UserCard.module.css';

const UserCard = ({ user: { name, avatar_preview, recipes } }) => {
  return (
    <li className={css.follow_list_item}>
      <div className={css.user_info_container}>
        <div className={css.user_avatar_container}>
          <img
            className={css.user_avatar}
            src={avatar_preview}
            alt={name + "'s photo"}
          />
          <div className={css.selected_user}></div>
        </div>
        <div>
          <p className={css.user_name}>{name}</p>
          <p className={css.user_recepies}>Own recipes: {recipes.length}</p>
          {/* <ButtonLink
            type="button"
            color="light"
            size="small"
            onClick={console.log('Follow')}
          >
            Follow
          </ButtonLink> */}
          <ButtonLink
            type="button"
            color="light"
            size="small"
            onClick={console.log}
          >
            Following
          </ButtonLink>
        </div>
      </div>
      <ul className={css.recipes_pictures_list}>
        {recipes.map(recipe => (
          <li className={css.recipes_pictures_item} key={recipe.id}>
            <img src={recipe.preview} alt="recipe" />
          </li>
        ))}
      </ul>
      <div className={css.user_link_arrow}>
        <svg width="16" height="16">
          <use href={sprite + '#icon-arrow-up-right'}></use>
        </svg>
      </div>
    </li>
  );
};

export default UserCard;
