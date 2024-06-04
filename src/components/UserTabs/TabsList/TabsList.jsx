import { NavLink } from 'react-router-dom';

const TabsList = () => {
  return (
    <ul>
      <li>
        <NavLink to="recipes">My recipes</NavLink>
      </li>
      <li>
        <NavLink to="favorites">My favorites</NavLink>
      </li>
      <li>
        <NavLink to="followers">Followers</NavLink>
      </li>
      <li>
        <NavLink to="following">Following</NavLink>
      </li>
    </ul>
  );
};

export default TabsList;
