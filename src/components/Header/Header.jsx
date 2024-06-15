import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'store/authSlice/selectors';
import Loader from "components/Shared/Loader/Loader";
import Logo from "components/Shared/Logo/Logo";
import Nav from "./Nav/Nav";
import AuthBar from "./AuthBar/AuthBar";
import UserBar from "./UserBar/UserBar";
import css from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing)
  const pagesArray = ["/", `/recipes`];
  const location = useLocation().pathname;
  const isBlackTheme = !pagesArray.some((page) => page === location);

  return (
    <header className={`container ${css.header_section}`}>
      <div className={isBlackTheme ? css.header_black : css.header_white}>
        <Logo />
        {isRefreshing ? <Loader /> : (isLoggedIn ? (
          <>
            <Nav />
            <UserBar />
          </>
        ) : (
          <AuthBar />
        ))}
      </div>
    </header>
  );
};

export default Header;
