import { useAuthModalContext } from 'components/AuthModalContext';
import css from './Auth.module.css';

const AuthBar = () => {
  const { onOpenSignIn, onOpenSignUp, isSignUp } = useAuthModalContext();

  return (
    <div className={css.authbar_wrap}>
      <button
        type="button"
        className={`${css.authbar_btn} ${!isSignUp ? css.activeBtn : ''}`}
        onClick={() => onOpenSignIn()}
      >
        Sign in
      </button>
      <button
        type="button"
        className={`${css.authbar_btn} ${isSignUp ? css.activeBtn : ''}`}
        onClick={() => onOpenSignUp()}
      >
        Sign up
      </button>
    </div>
  );
};

export default AuthBar;
