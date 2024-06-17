import { useAuthModalContext } from 'components/AuthModalContext';
import { useLocation } from 'react-router-dom';
import css from './Auth.module.css';


const AuthBar = () => {
  const { onOpenSignIn, onOpenSignUp, isSignUp } = useAuthModalContext();

  const pagesArray = ["/", `/recipes`];
  const location = useLocation().pathname;
  const isBlackTheme = !pagesArray.some((page) => page === location);

  return (
    <div className={css.authbar_wrap}>
      <button
        type="button"
        className={`${css.authbar_btn} ${!isSignUp ? css.activeBtn : ''}`}
        style={
          isBlackTheme
            ? { borderColor: `var(--color-main-20)` }
            : { borderColor: `rgba(255, 255, 255, 0.20)` }
        }
        onClick={() => onOpenSignIn()}
      >
        Sign in
      </button>
      <button
        type="button"
        className={`${css.authbar_btn} ${isSignUp ? css.activeBtn : ''}`}
        style={
          isBlackTheme
            ? { borderColor: `var(--color-main-20)` }
            : { borderColor: `rgba(255, 255, 255, 0.20)` }
        }
        onClick={() => onOpenSignUp()}
      >
        Sign up
      </button>
    </div>
  );
};

export default AuthBar;
