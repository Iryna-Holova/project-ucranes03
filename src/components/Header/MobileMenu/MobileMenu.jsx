import { Link } from "react-router-dom";
import css from "./MobileMenu.module.css";

const MobileMenu = ({ onCloseBurgerMenu, isBurgerMenu }) => {
  return (
    <div
      className={
        isBurgerMenu
          ? `${css.mobile_menu} ${css.menu_open}`
          : `${css.mobile_menu}`
      }
    >
      <div className={css.mobile_menu_header}>
        <Link
          to="/"
          className={css.mobile_menu_logo}
          onClick={() => onCloseBurgerMenu()}
        >
          Foodies
        </Link>
        <button
          className={
            isBurgerMenu
              ? `${css.burger_icon} ${css.open}`
              : `${css.burger_icon}`
          }
          onClick={() => onCloseBurgerMenu()}
        >
          {[...Array(6)].map((_, index) => (
            <span key={index}></span>
          ))}
        </button>
      </div>
      <ul className={css.mobile_menu_navlist}>
        <li className={css.mobile_menu_navitem}>
          <Link
            to="/"
            className={css.mobile_menu_navlink}
            onClick={() => onCloseBurgerMenu()}
          >
            Home
          </Link>
        </li>
        <li className={css.mobile_menu_navitem}>
          <Link
            to="recipe/add"
            className={css.mobile_menu_navlink}
            onClick={() => onCloseBurgerMenu()}
          >
            Add Recipe
          </Link>
        </li>
      </ul>
      {isBurgerMenu && <div className={css.mobile_menu_hero}></div>}
    </div>
  );
};

export default MobileMenu;
