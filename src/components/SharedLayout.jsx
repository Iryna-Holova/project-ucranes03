import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from './Shared/Loader/Loader';
import Modal from './Modal/Modal';
import AuthModal from './AuthModal/AuthModal';
import LogOutModal from './LogOutModal/LogOutModal';
import { useAuthModal } from '../hooks/use-auth-modal';

const SharedLayout = () => {
  const {
    onAuthOpen,
    onAuthClose,
    onOpenSignIn,
    onOpenSignUp,
    onToggleMode,
    isAuthOpen,
    isSignUp,
  } = useAuthModal();
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  return (
    <>
      <Header />
      <main className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <button onClick={onAuthOpen} style={{ color: 'red' }}>
        AUTH
      </button>
      <button onClick={onOpenSignUp} style={{ color: 'red' }}>
        SIGN UP
      </button>
      <button onClick={onOpenSignIn} style={{ color: 'red' }}>
        SIGN IN
      </button>
      {isAuthOpen && (
        <Modal onClose={onAuthClose}>
          <AuthModal isSignUp={isSignUp} onToggleMode={onToggleMode} />
        </Modal>
      )}
      <button onClick={() => setShowLogOutModal(true)} style={{ color: 'red' }}>
        LOG OUT
      </button>
      {showLogOutModal && (
        <Modal onClose={() => setShowLogOutModal(false)}>
          <LogOutModal onClose={() => setShowLogOutModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default SharedLayout;
