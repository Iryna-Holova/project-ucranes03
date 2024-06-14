import { useLocation } from "react-router-dom";
import { useAuthModal } from "hooks/use-auth-modal";
import Modal from "components/Modal/Modal";
import AuthModal from "components/AuthModal/AuthModal";
import css from "./Auth.module.css";

const AuthBar = () => {
  const {
    onAuthClose,
    onOpenSignIn,
    onOpenSignUp,
    onToggleMode,
    isAuthOpen,
    isSignUp,
  } = useAuthModal();

  const pagesArray = ["/", `/recipes`];
  const location = useLocation().pathname;
  const isBlackTheme = !pagesArray.some((page) => page === location);

  return (
    <div className={css.authbar_wrap}>
      <button
        type="button"
        className={`${css.authbar_btn} ${!isSignUp ? css.activeBtn : ""}`}
        onClick={onOpenSignIn}
      >
        Sign in
      </button>
      <button
        type="button"
        className={`${css.authbar_btn} ${isSignUp ? css.activeBtn : ""}`}
        onClick={onOpenSignUp}
      >
        Sign up
      </button>
      {isAuthOpen && (
        <Modal onClose={onAuthClose}>
          <AuthModal isSignUp={isSignUp} onToggleMode={onToggleMode} />
        </Modal>
      )}
    </div>
  );
};

export default AuthBar;