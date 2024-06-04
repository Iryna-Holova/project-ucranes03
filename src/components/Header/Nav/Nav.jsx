import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="category/desserts">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="recipe/:id">Recipe</NavLink>
        </li>
        <li>
          <NavLink to="recipe/add">Add recipe</NavLink>
        </li>
        <li>
          <NavLink to="user/:id">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
