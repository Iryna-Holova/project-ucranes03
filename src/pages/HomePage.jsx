import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Hero from 'components/Hero/Hero';
import PageContainer from 'components/Shared/PageContainer/PageContainer';
import Testimonials from 'components/Testimonials/Testimonials';
import Loader from 'components/Shared/Loader/Loader';

const HomePage = () => {
  return (
    <>
      <Hero />
      <PageContainer page="home">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Testimonials />
      </PageContainer>
    </>
  );
};

export default HomePage;
