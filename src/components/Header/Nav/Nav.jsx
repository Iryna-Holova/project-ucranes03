import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={css.header_nav}>
      <ul className={css.header_navlist}>
        <li className={css.header_navitem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.active_link : css.header_navlink
            }
          >
            Home
          </NavLink>
        </li>
        <li className={css.header_navitem}>
          <NavLink
            to="recipe/add"
            className={({ isActive }) =>
              isActive ? css.active_link : css.header_navlink
            }
          >
            Add Recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
