import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFollowing, selectUser } from 'store/authSlice/selectors';
import { setFollowing } from 'store/authSlice/slice';
import { useDesktopMediaQuery, useTabletMediaQuery } from 'hooks/device-type';
import { addToFollowing, removeFromFollowing } from 'services/followers';
import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import sprite from 'images/icons.svg';
import defaultAvatar from 'images/placeholder-avatar.svg';
import Image from 'components/Shared/Image/Image';
import css from './UserCard.module.css';

const UserCard = ({ user: { id, name, avatar, recipes }, onRemove = null }) => {
  const isTablet = useTabletMediaQuery();
  const isDesktop = useDesktopMediaQuery();
  const following = useSelector(selectFollowing);
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleRemoveFollowing = async id => {
    try {
      setLoading(true);
      const { data } = await removeFromFollowing(id);
      dispatch(setFollowing(data.following));
      onRemove && onRemove();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleAddFollowing = async id => {
    try {
      setLoading(true);
      const { data } = await addToFollowing(id);
      dispatch(setFollowing(data.following));
    } catch (error) {
    } finally {
      setLoading(false);
    }
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
        </div>
        <div className={css.user_name_container}>
          <h4 className={css.user_name}>{name}</h4>
          <p className={css.user_recepies}>Own recipes: {recipes.length}</p>
          {currentUser.id !== id &&
            (following.includes(id) ? (
              <ButtonLink
                type="button"
                color="light"
                size="small"
                disabled={isLoading}
                onClick={() => handleRemoveFollowing(id)}
              >
                Following
              </ButtonLink>
            ) : (
              <ButtonLink
                type="button"
                color="light"
                size="small"
                disabled={isLoading}
                onClick={() => handleAddFollowing(id)}
              >
                Follow
              </ButtonLink>
            ))}
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
      <Link
        to={`/user/${id}`}
        className={css.user_link_arrow}
      >
        <svg width="16" height="16">
          <use href={sprite + '#icon-arrow-up-right'}></use>
        </svg>
      </Link>
    </li>
  );
};

export default UserCard;
