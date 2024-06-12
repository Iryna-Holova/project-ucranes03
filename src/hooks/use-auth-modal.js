import { useState } from 'react';

export const useAuthModal = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const onAuthOpen = () => {
    setIsAuthOpen(true);
  };

  const onOpenSignIn = () => {
    setIsSignUp(false);
    setIsAuthOpen(true);
  };

  const onOpenSignUp = () => {
    setIsSignUp(true);
    setIsAuthOpen(true);
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
  };
};
