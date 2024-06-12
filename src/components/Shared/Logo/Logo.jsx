import { Link } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link
      to="/"
      className={
        window.location.pathname.includes("recipes")
          ? css.logo_black
          : css.logo_white
      }
    >
      Foodies
    </Link>
  );
};

export default Logo;
