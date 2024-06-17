import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFollowing, setAvatar } from 'store/authSlice/slice';
import { getUserInfo } from 'store/authSlice/thunks';
import { selectFollowing, selectUser } from 'store/authSlice/selectors';
import { getInfo, updateAvatar } from 'services/userInfo';
import { addToFollowing, removeFromFollowing } from 'services/followers';
import { showError } from 'helpers/notification';
import Modal from 'components/Modal/Modal';
import LogOutModal from 'components/LogOutModal/LogOutModal';
import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import Image from 'components/Shared/Image/Image';
import defaultAvatar from 'images/placeholder-avatar.svg';
import icons from 'images/icons.svg';
import css from './UserInfo.module.css';

const UserInfo = () => {
  const followingArray = useSelector(selectFollowing);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const userId = useParams().id;
  const isCurrent = userId === 'current';
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAvatarPending, setIsAvatarPending] = useState(false);
  const [isFollowPending, setIsFollowPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setUserData(null);
      setIsLoading(true);
      try {
        if (isCurrent) {
          await dispatch(getUserInfo()).unwrap();
        } else {
          const { data } = await getInfo(userId);
          setUserData(data);
        }
      } catch (error) {
        showError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch, isCurrent, userId]);

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      setIsAvatarPending(true);
      try {
        const { data } = await updateAvatar(formData);
        setUserData(prevData => ({ ...prevData, avatar: data.avatar }));
        dispatch(setAvatar(data.avatar));
      } catch (error) {
        showError(error);
      } finally {
        setIsAvatarPending(false);
      }
    }
  };

  const handleRemoveFollowing = async id => {
    setIsFollowPending(true);
    try {
      const { data } = await removeFromFollowing(id);
      setUserData(prevData => ({
        ...prevData,
        followers: prevData.followers - 1,
      }));
      dispatch(setFollowing(data.following));
    } catch (error) {
      showError(error);
    } finally {
      setIsFollowPending(false);
      window.location.reload();
    }
  };

  const handleAddFollowing = async id => {
    setIsFollowPending(true);
    try {
      const { data } = await addToFollowing(id);
      setUserData(prevData => ({
        ...prevData,
        followers: prevData.followers + 1,
      }));
      dispatch(setFollowing(data.following));
    } catch (error) {
      showError(error);
    } finally {
      setIsFollowPending(false);
      window.location.reload();
    }
  };

  const { email, recipes, followers, name, avatar } = userData || {};

  return (
    <div className={css.user_info_container}>
      <div className={css.name_items_list_wrapper}>
        <div className={css.image_input_wrapper}>
          <Image
            publicId={isCurrent ? user.avatar : avatar}
            alt="avatar"
            defaultImage={defaultAvatar}
            className={css.avatar}
          />
          {isCurrent && (
            <label htmlFor="avatar" className={css.file_input_label}>
              <input
                id="avatar"
                disabled={isAvatarPending}
                className="visually-hidden"
                type="file"
                onChange={handleFileChange}
              />
              <svg className={css.icon_plus}>
                <use href={`${icons}#icon-plus`}></use>
              </svg>
            </label>
          )}
        </div>
        {isLoading && <span className={css.loader}></span>}
        <p className={css.name}>{isCurrent ? user?.name : name}</p>
        <ul className={css.list_items}>
          <li className={css.list_item}>
            <span className={css.item_name}>Email:</span>
            <span className={css.item_value}>
              {isCurrent ? user?.email : email}
            </span>
          </li>
          <li className={css.list_item}>
            <span className={css.item_name}>Added recipes:</span>
            <span className={css.item_value}>
              {!isLoading && (isCurrent ? user?.recipes : recipes)}
            </span>
          </li>
          {isCurrent && (
            <li className={css.list_item}>
              <span className={css.item_name}>Favorites:</span>
              <span className={css.item_value}>
                {!isLoading && user?.favorites}
              </span>
            </li>
          )}
          <li className={css.list_item}>
            <span className={css.item_name}>Followers:</span>
            <span className={css.item_value}>
              {!isLoading && (isCurrent ? user?.followers : followers)}
            </span>
          </li>
          {isCurrent && (
            <li className={css.list_item}>
              <span className={css.item_name}>Following:</span>
              <span className={css.item_value}>
                {!isLoading && user?.following?.length}
              </span>
            </li>
          )}
        </ul>
      </div>
      {isCurrent && (
        <ButtonLink
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label="Log out"
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
        >
          Log out
        </ButtonLink>
      )}
      {!isCurrent &&
        (followingArray?.includes(userId) ? (
          <ButtonLink
            type="button"
            onClick={() => handleRemoveFollowing(userId)}
            disabled={isFollowPending}
          >
            Following
          </ButtonLink>
        ) : (
          <ButtonLink
            type="button"
            onClick={() => handleAddFollowing(userId)}
            disabled={isFollowPending}
          >
            Follow
          </ButtonLink>
        ))}
      <Modal showModal={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LogOutModal onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default UserInfo;
