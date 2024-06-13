import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthModal } from "hooks/use-auth-modal";
import Modal from "../../Modal/Modal";
import AuthModal from "../../AuthModal/AuthModal";
import css from "./Auth.module.css";

const AuthBar = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const {
    onAuthClose,
    onOpenSignIn,
    onOpenSignUp,
    onToggleMode,
    isAuthOpen,
    isSignUp,
  } = useAuthModal();

  const isBlackTheme = useLocation().pathname !== "/";

  useEffect(() => {
    if (isSignUp) {
      setIsSignUpActive(true);
    } else {
      setIsSignUpActive(false);
    }
  }, [isSignUp]);

  return (
    <div className={css.authbar_wrap}>
      <Link
        className={`${css.authbar_btn} ${!isSignUpActive ? css.activeBtn : ""}`}
        onClick={isSignUpActive ? () => setIsSignUpActive(false) : onOpenSignIn}
      >
        SIGN IN
      </Link>
      <Link
        className={`${css.authbar_btn} ${isSignUpActive ? css.activeBtn : ""}`}
        onClick={isSignUpActive ? onOpenSignUp : () => setIsSignUpActive(true)}
      >
        SING UP{" "}
      </Link>
      {isAuthOpen && (
        <Modal onClose={onAuthClose}>
          <AuthModal isSignUp={isSignUp} onToggleMode={onToggleMode} />
        </Modal>
      )}
    </div>
  );
};

export default AuthBar;
