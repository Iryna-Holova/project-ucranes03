import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthModalContext } from './AuthModalContext';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from './Shared/Loader/Loader';
import Modal from './Modal/Modal';
import AuthModal from './AuthModal/AuthModal';

const SharedLayout = () => {
  const { onAuthClose, isAuthOpen } = useAuthModalContext();

  return (
    <>
      <Header />
      <main className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Modal showModal={isAuthOpen} onClose={onAuthClose}>
        <AuthModal />
      </Modal>
    </>
  );
};

export default SharedLayout;
