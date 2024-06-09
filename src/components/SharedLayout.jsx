import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from './Shared/Loader/Loader';
import Modal from './Modal/Modal';
import AuthModal from './AuthModal/AuthModal';

const SharedLayout = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Header />
      <main className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <button onClick={() => setShowModal(true)} style={{ color: 'red' }}>
        SIGN UP
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AuthModal />
        </Modal>
      )}
    </>
  );
};

export default SharedLayout;
