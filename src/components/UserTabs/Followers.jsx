import ListItems from 'components/UserTabs/ListItems/ListItems';
import UserCard from 'components/UserTabs/UserCard/UserCard';

const Followers = () => {
  return (
    <div>
      <h3 className="visually-hidden">Followers</h3>
      <ListItems />
      <UserCard />
    </div>
  );
};

export default Followers;
