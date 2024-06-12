import css from "./Auth.module.css";

const AuthBar = () => {
  return (
    <div className={css.authbar_wrap}>
      <div className={css.authbar_signin}>SIGN IN</div>
      <div className={css.authbar_signup}>SING UP</div>
    </div>
  );
};

export default AuthBar;
