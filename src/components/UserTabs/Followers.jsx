import ListItems from 'components/UserTabs/ListItems/ListItems';
import UserCard from 'components/UserTabs/UserCard/UserCard';

const Followers = () => {
  return (
    <>
      <h3 className="visually-hidden">Followers</h3>
      <ListItems />
      <UserCard />
    </>
  );
};

export default Followers;
