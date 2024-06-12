import ListItems from 'components/UserTabs/ListItems/ListItems';
import users from '../../temp/users.json';
import UserCard from './UserCard/UserCard';
const usersFollow = users.results;

const Following = () => {
  return (
    <div>
      <h3 className="visually-hidden">Following</h3>
      <ListItems>
        {usersFollow.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </ListItems>
    </div>
  );
};

export default Following;
