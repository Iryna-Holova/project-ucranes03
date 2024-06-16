import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import css from './LogOutModal.module.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'store/authSlice/thunks';

const LogOutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <h2 className={css.title}>Are you logging out?</h2>
      <p className={css.text}>You can always log back in at my time.</p>
      <div className={css.buttons}>
        <ButtonLink onClick={onClose} type="button" color="secondary">
          Cancel
        </ButtonLink>
        <ButtonLink type="button" onClick={handleLogout}>Log out</ButtonLink>
      </div>
    </>
  );
};

export default LogOutModal;
