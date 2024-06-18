import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = ({ inFooter = false }) => {
  const pagesArray = ['/', `/recipes`];
  const location = useLocation().pathname;
  const isBlackTheme = !inFooter
    ? !pagesArray.some(page => page === location)
    : pagesArray.some(page => page === location);

  return (
    <Link
      to="/"
      className={`${isBlackTheme ? css.logo_black : css.logo_white} ${
        inFooter ? css.footer : ''
      }`}
      aria-label="Foodies - Home page"
    >
      Foodies
    </Link>
  );
};

export default Logo;
