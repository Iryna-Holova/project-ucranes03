import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from './Shared/Loader/Loader';
import Modal from './Modal/Modal';
import AuthModal from './AuthModal/AuthModal';
import LogOutModal from './LogOutModal/LogOutModal';
import { fetchCurrentUser } from '../redux/userSlice/thunks';
import { selectToken } from '../redux/userSlice/selectors';

const SharedLayout = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  if (token) {
    dispatch(fetchCurrentUser())
  }

  return (
    <>
      <Header />
      <main className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <button onClick={() => setShowAuthModal(true)} style={{ color: 'red' }}>
        SIGN UP
      </button>
      {showAuthModal && (
        <Modal onClose={() => setShowAuthModal(false)}>
          <AuthModal />
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
