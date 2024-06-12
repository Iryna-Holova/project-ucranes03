import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const AuthModal = ({ isSignUp, onToggleMode }) => {
  return (
    <>
      {isSignUp ? (
        <SignUpForm onToggleMode={onToggleMode} />
      ) : (
        <SignInForm onToggleMode={onToggleMode} />
      )}
    </>
  );
};

export default AuthModal;
