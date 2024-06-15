import { useState } from 'react';

export const useAuthModal = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [path, setPath] = useState(null);

  const onAuthOpen = (redirect = null) => {
    setIsAuthOpen(true);
    setPath(redirect);
  };

  const onOpenSignIn = (redirect = null) => {
    setIsSignUp(false);
    setIsAuthOpen(true);
    setPath(redirect);
  };

  const onOpenSignUp = (redirect = null) => {
    setIsSignUp(true);
    setIsAuthOpen(true);
    setPath(redirect);
  };

  const onAuthClose = () => {
    setIsAuthOpen(false);
  };

  const onToggleMode = () => {
    setIsSignUp(prev => !prev);
  };

  return {
    onAuthOpen,
    onAuthClose,
    onOpenSignIn,
    onOpenSignUp,
    onToggleMode,
    isAuthOpen,
    isSignUp,
    path,
  };
};
