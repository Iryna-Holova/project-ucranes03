import React, { createContext, useContext } from 'react';
import { useAuthModal } from 'hooks/use-auth-modal';

const AuthModalContext = createContext();

export const AuthModalProvider = ({ children }) => {
  const authModal = useAuthModal();

  return (
    <AuthModalContext.Provider value={authModal}>
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModalContext = () => {
  return useContext(AuthModalContext);
};
