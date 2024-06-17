import { useAuthModalContext } from 'components/AuthModalContext';
import css from './Auth.module.css';

const AuthBar = () => {
  const { onOpenSignIn, onOpenSignUp, isSignUp, isAuthOpen } =
    useAuthModalContext();

  return (
    <div className={css.authbar_wrap}>
      <button
        type="button"
        className={`${css.authbar_btn} ${!isSignUp ? css.activeBtn : ''}`}
        style={{ transform: 'translateX(-1px)' }}
        onClick={() => onOpenSignIn()}
        aria-haspopup="dialog"
        aria-expanded={isAuthOpen && !isSignUp}
        aria-label="Sign in"
      >
        Sign in
      </button>
      <button
        type="button"
        className={`${css.authbar_btn} ${isSignUp ? css.activeBtn : ''}`}
        style={{ transform: 'translateX(1px)' }}
        onClick={() => onOpenSignUp()}
        aria-haspopup="dialog"
        aria-expanded={isAuthOpen && isSignUp}
        aria-label="Sign up"
      >
        Sign up
      </button>
    </div>
  );
};

export default AuthBar;
