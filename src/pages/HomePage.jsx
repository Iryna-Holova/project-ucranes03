import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Hero from 'components/Hero/Hero';
import Testimonials from 'components/Testimonials/Testimonials';
import Loader from 'components/Shared/Loader/Loader';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Testimonials />
    </>
  );
};

export default HomePage;
