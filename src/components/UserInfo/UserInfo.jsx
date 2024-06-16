import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnInfo, getInfo, updateAvatar } from 'services/userInfo';
import { addToFollowing, removeFromFollowing } from 'services/followers';
import { selectFollowing } from 'store/authSlice/selectors';
import { showError } from 'helpers/notification';
import { setFollowing, setAvatar } from 'store/authSlice/slice';
import Modal from 'components/Modal/Modal';
import LogOutModal from 'components/LogOutModal/LogOutModal';
import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import Image from 'components/Shared/Image/Image';
import defaultAvatar from 'images/placeholder-avatar.svg';
import icons from 'images/icons.svg';
import css from './UserInfo.module.css';

const UserInfo = () => {
  const followingArray = useSelector(selectFollowing);
  const dispatch = useDispatch();
  const user = useParams().id;
  const isCurrent = user === 'current';
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isCurrent) {
          const { data } = await getOwnInfo();
          setUserData(data);
        } else {
          const { data } = await getInfo(user);
          setUserData(data);
        }
      } catch (error) {
        showError(error);
      }
    };
    fetchData();
  }, [isCurrent, user]);

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      setIsPending(true);
      try {
        const { data } = await updateAvatar(formData);
        setUserData(prevData => ({ ...prevData, avatar: data.avatar }));
        dispatch(setAvatar(data.avatar));
      } catch (error) {
        showError(error);
      } finally {
        setIsPending(false);
      }
    }
  };
  const handleRemoveFollowing = async id => {
    try {
      const { data } = await removeFromFollowing(id);
      dispatch(setFollowing(data.following));
    } catch (error) {}
  };

  const handleAddFollowing = async id => {
    try {
      const { data } = await addToFollowing(id);
      dispatch(setFollowing(data.following));
    } catch (error) {}
  };

  const { email, recipes, favorites, followers, following, name, avatar } =
    userData || {};

  return (
    <div className={css.user_info_container}>
      <div className={css.name_items_list_wrapper}>
        <div className={css.image_input_wrapper}>
          <Image
            publicId={avatar}
            alt="avatar"
            defaultImage={defaultAvatar}
            className={css.avatar}
          />
          {isCurrent && (
            <label htmlFor="avatar" className={css.file_input_label}>
              <input
                id="avatar"
                disabled={isPending}
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

        <p className={css.name}>{name}</p>
        <ul className={css.list_items}>
          <li className={css.list_item}>
            <span className={css.item_name}>Email:</span>
            <span className={css.item_value}>{email}</span>
          </li>
          <li className={css.list_item}>
            <span className={css.item_name}>Added recipes:</span>
            <span className={css.item_value}>{recipes}</span>
          </li>
          {isCurrent && (
            <li className={css.list_item}>
              <span className={css.item_name}>Favorites:</span>
              <span className={css.item_value}>{favorites}</span>
            </li>
          )}
          <li className={css.list_item}>
            <span className={css.item_name}>Followers:</span>
            <span className={css.item_value}>{followers}</span>
          </li>
          {isCurrent && (
            <li className={css.list_item}>
              <span className={css.item_name}>Following:</span>
              <span className={css.item_value}>{following}</span>
            </li>
          )}
        </ul>
      </div>

      {isCurrent && (
        <ButtonLink type="button" onClick={() => setIsModalOpen(true)}>
          Log out
        </ButtonLink>
      )}
      {!isCurrent &&
        (followingArray?.includes(user) ? (
          <ButtonLink type="button" onClick={() => handleRemoveFollowing(user)}>
            Following
          </ButtonLink>
        ) : (
          <ButtonLink type="button" onClick={() => handleAddFollowing(user)}>
            Follow
          </ButtonLink>
        ))}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <LogOutModal onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default UserInfo;
