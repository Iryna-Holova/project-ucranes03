import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  const pagesArray = ["/", `/recipes`];
  const location = useLocation().pathname;
  const isBlackTheme = !pagesArray.some((page) => page === location);

  return (
    <Link to="/" className={isBlackTheme ? css.logo_black : css.logo_white}>
      Foodies
    </Link>
  );
};

export default Logo;