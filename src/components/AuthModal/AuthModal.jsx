import { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const AuthModal = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggleForm = () => {
    setIsSignUp(isSignUp => !isSignUp);
  };

  return (
    <>
      {isSignUp ? (
        <SignUpForm toggleForm={handleToggleForm} />
      ) : (
        <SignInForm toggleForm={handleToggleForm} />
      )}
    </>
  );
};

export default AuthModal;
