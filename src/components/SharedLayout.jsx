import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from './Shared/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
