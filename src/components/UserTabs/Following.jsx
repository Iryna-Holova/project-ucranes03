import ListItems from 'components/UserTabs/ListItems/ListItems';
import users from '../../temp/users.json';

const Following = () => {
  return (
    <div>
      <h3 className="visually-hidden">Following</h3>
      <ListItems users = {users.results} tabType ="following"/>
      {/* remove tabType */}
    </div>
  );
};

export default Following;
