import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import sprite from 'images/icons.svg';
import css from './UserCard.module.css';
import { useDesktopMediaQuery, useTabletMediaQuery } from 'hooks/device-type';
import Image from 'components/Shared/Image/Image';
import defaultAvatar from 'images/placeholder-avatar.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFollowing } from 'store/authSlice/selectors';
import { addToFollowing, removeFromFollowing } from 'services/followers';
import { addFollowing, removeFollowing } from 'store/authSlice/slice';


const UserCard = ({ user: { id, name, avatar, recipes } }) => {
  const isTablet = useTabletMediaQuery();
  const isDesktop = useDesktopMediaQuery();
  const following = useSelector(selectFollowing);
  const dispatch = useDispatch();

  const handleRemoveFollowing = id => {
    try {
      removeFromFollowing(id);
      dispatch(removeFollowing(id));
    } catch (error) {}
  };

  const handleAddFollowing = id => {
    try {
      addToFollowing(id);
      dispatch(addFollowing(id));
    } catch (error) {}
  };

  return (
    <li className={css.follow_list_item}>
      <div className={css.user_info_container}>
        <div className={css.user_avatar_container}>
          <Image
            className={css.user_avatar}
            publicId={avatar}
            alt={name + "'s photo"}
            defaultImage={defaultAvatar}
          />
          <div className={css.selected_user}></div>
        </div>
        <div>
          <p className={css.user_name}>{name}</p>
          <p className={css.user_recepies}>Own recipes: {recipes.length}</p>
          {following.includes(id) ? (
            <ButtonLink
              type="button"
              color="light"
              size="small"
              onClick={() => handleRemoveFollowing(id)}
            >
              Following
            </ButtonLink>
          ) : (
            <ButtonLink
              type="button"
              color="light"
              size="small"
              onClick={() => handleAddFollowing(id)}
            >
              Follow
            </ButtonLink>
          )}
        </div>
      </div>
      {(isDesktop || isTablet) && (
        <ul className={css.recipes_pictures_list}>
          {recipes.slice(0, isTablet ? 3 : 4).map(({ id, thumb, title }) => (
            <li className={css.recipes_pictures_item} key={id}>
              <Link to={`/recipe/${id}`}>
                <Image publicId={thumb} alt={title} />
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className={css.user_link_arrow}>
        <svg width="16" height="16">
          <use href={sprite + '#icon-arrow-up-right'}></use>
        </svg>
      </div>
    </li>
  );
};

export default UserCard;
