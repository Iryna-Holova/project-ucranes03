
import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import Image from 'components/Shared/Image/Image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOwnInfo, getInfo, updateAvatar } from 'services/userInfo';
import defaultAvatar from 'images/placeholder-avatar.svg';
import icons from 'images/icons.svg';
import css from './UserInfo.module.css';
import { setAvatar } from 'store/authSlice/slice';
import Modal from 'components/Modal/Modal';
import LogOutModal from 'components/LogOutModal/LogOutModal';



const UserInfo = () => {

  const dispatch = useDispatch();
  const user = useParams().id;
  const isCurrent = user === 'current';
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        console.log(error);
      }
    };
    fetchData();
  }, [isCurrent, user]);
  
  const handleFileChange = async(event) => {
    
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      try {
        const { data } = await updateAvatar(formData);
        setUserData(prevData => ({ ...prevData, avatar: data.avatar }));
        dispatch(setAvatar(data.avatar));
    }
    catch (error) { 
      console.log(error)
    }

    }
  };

  const { email, recipes, favorites, followers, following, name, avatar } = userData || {};

  return (
    <>
      <Image publicId={avatar} alt="avatar" defaultImage={defaultAvatar} className={css.avatar} />
      { isCurrent&&
      <div className={css.fileInputWrapper}>
         <input
          className={css.input_file}
          type="file"
          onChange={handleFileChange}
        />
        <svg className={css.icon_plus}>
          <use href={`${icons}#icon-plus`}></use>
        </svg>
      </div>}
      <div>
        <p>{name}</p>
        <ul>
          <li><span>Email</span>: <span>{email}</span></li>
          <li><span>Added recipes</span>: <span>{recipes}</span></li>
          {isCurrent && <li><span>Favorites</span>: <span>{favorites}</span></li>}
          <li><span>Followers</span>: <span>{followers}</span></li>
          {isCurrent && <li><span>Following</span>: <span>{following}</span></li>}
        </ul>
        {isCurrent && (
          <ButtonLink type="button" onClick={() =>setIsModalOpen(true)}>
            Log out
          </ButtonLink>
        )}
        {!isCurrent && (
          <ButtonLink type="button" onClick={() => console.log('Follow clicked')}>
            Follow
          </ButtonLink>
          
        )}
        {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <LogOutModal onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
      </div>
    </>
  );
};

export default UserInfo;