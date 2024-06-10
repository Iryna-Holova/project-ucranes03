import UserCard from '../UserCard/UserCard';

const ListItems = ({ users, tabType }) => {  
  return (
    <ul>
      {users.map(({id, name, avatar_preview, recipes}) => (
        <li key={id}><UserCard name={name} avatar_preview={avatar_preview} recipes={recipes} tabType = {tabType} /></li>
      ))}
    </ul>
  );
};

export default ListItems;
