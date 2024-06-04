import ListItems from 'components/UserTabs/ListItems/ListItems';
import UserCard from 'components/UserTabs/UserCard/UserCard';

const Following = () => {
  return (
    <>
      <h3 className="visually-hidden">Following</h3>
      <ListItems />
      <UserCard />
    </>
  );
};

export default Following;
