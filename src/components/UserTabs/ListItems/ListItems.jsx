import UserCard from '../UserCard/UserCard';

const ListItems = ({ users, tabType }) => {  
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}><UserCard user={user} tabType = {tabType} /></li>
      ))}
    </ul>
  );
};

export default ListItems;

// {id, name, avatar_preview, recipes}
// name={name} avatar_preview={avatar_preview} recipes={recipes}