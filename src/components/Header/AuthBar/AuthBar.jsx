import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import AuthModal from '../../AuthModal/AuthModal';
import css from "./Auth.module.css";

const AuthBar = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const isBlackTheme = useLocation().pathname !== "/";

  return (
    <div className={css.authbar_wrap}>
      <Link className={`${css.authbar_btn} ${!isSignUp ? css.activeBtn : ''}`} onClick={() => {
        setIsSignUp(false)

      }}>SIGN IN </Link>
      <Link className={`${css.authbar_btn} ${isSignUp ? css.activeBtn : ''}`} onClick={() => {
        setIsSignUp(true)
        
      }}>SING UP </Link>
    </div>
  );
};

export default AuthBar;
