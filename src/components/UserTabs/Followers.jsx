import ListItems from 'components/UserTabs/ListItems/ListItems';
import users from '../../temp/users.json';
import UserCard from './UserCard/UserCard';

const Followers = () => {
  return (
    <div>
      <h3 className="visually-hidden">Followers</h3>
      <ListItems>
        {users.map(user => (
          <UserCard key={user.id} user={user} tabType="folowers" />
        ))}
      </ListItems>
      {/* remove tabType */}
    </div>
  );
};

export default Followers;
