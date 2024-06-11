import UserCard from '../UserCard/UserCard';

const ListItems = ({ users, tabType }) => {
  return (
    <ul>
      {/* {users.map((user) => (
        <UserCard key={user.id} user={user} tabType = {tabType} />
      ))} */}
    </ul>
  );
};

export default ListItems;

// {id, name, avatar_preview, recipes}
// name={name} avatar_preview={avatar_preview} recipes={recipes}
