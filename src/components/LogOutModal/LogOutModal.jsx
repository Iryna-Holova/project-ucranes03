import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'store/authSlice/thunks';
import { selectIsLoading, selectIsLoggedIn } from 'store/authSlice/selectors';
import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import css from './LogOutModal.module.css';

const LogOutModal = ({ onClose }) => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      onClose();
    }
  }, [isLoggedIn, onClose]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <h2 id="modal-title" className={css.title}>
        Are you logging out?
      </h2>
      <p id="modal-description" className={css.text}>
        You can always log back in at my time.
      </p>
      <div className={css.buttons}>
        <ButtonLink
          onClick={onClose}
          type="button"
          color="secondary"
          aria-label="Cancel log out"
        >
          Cancel
        </ButtonLink>
        <ButtonLink type="button" onClick={handleLogout} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Log out'}
        </ButtonLink>
      </div>
    </>
  );
};

export default LogOutModal;
