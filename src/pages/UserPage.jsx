import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PathInfo from 'components/Shared/PathInfo/PathInfo';
import UserInfo from 'components/UserInfo/UserInfo';
import TabsList from 'components/UserTabs/TabsList/TabsList';
import Loader from 'components/Shared/Loader/Loader';
import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';

const UserPage = () => {
  return (
    <>
      <PathInfo />
      <MainTitle>Profile</MainTitle>
      <Subtitle>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </Subtitle>
      <UserInfo />
      <TabsList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UserPage;
