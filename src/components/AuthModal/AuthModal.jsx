import { useAuthModalContext } from 'components/AuthModalContext';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const AuthModal = () => {
  const { isSignUp } = useAuthModalContext();

  return isSignUp ? <SignUpForm /> : <SignInForm />;
};

export default AuthModal;
