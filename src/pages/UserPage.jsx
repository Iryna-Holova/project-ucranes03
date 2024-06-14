import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDesktopMediaQuery } from 'hooks/device-type';
import PageContainer from 'components/Shared/PageContainer/PageContainer';
import PathInfo from 'components/Shared/PathInfo/PathInfo';
import MainTitle from 'components/Shared/MainTitle/MainTitle';
import Subtitle from 'components/Shared/Subtitle/Subtitle';
import UserInfo from 'components/UserInfo/UserInfo';
import TabsList from 'components/UserTabs/TabsList/TabsList';
import Loader from 'components/Shared/Loader/Loader';

const UserPage = () => {
  const isDesktop = useDesktopMediaQuery();

  return (
    <PageContainer tag="section" page="profile">
      <div className="section">
        <PathInfo current="Profile" />
        <div>
          <MainTitle>Profile</MainTitle>
          <Subtitle>
            Reveal your culinary art, share your favorite recipe and create
            gastronomic masterpieces with us.
          </Subtitle>
        </div>
        {!isDesktop && <UserInfo />}
      </div>
      <div className="section_row">
        {isDesktop && <UserInfo />}
        <div className="section">
          <TabsList />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </PageContainer>
  );
};

export default UserPage;
