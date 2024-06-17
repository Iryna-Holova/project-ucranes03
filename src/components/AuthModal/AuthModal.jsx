import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import css from './AuthModal.module.css';

const AuthModal = () => {
  return (
    <div className={css.modal_wrapper}>
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default AuthModal;
