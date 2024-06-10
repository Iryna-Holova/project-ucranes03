import ListItems from 'components/UserTabs/ListItems/ListItems';
import users from '../../temp/users.json';

const Followers = () => {  
  return (
    <div>
      <h3 className="visually-hidden">Followers</h3>      
      <ListItems users = {users.results} tabType ="followers"/>
    </div>
  );
};

export default Followers;
