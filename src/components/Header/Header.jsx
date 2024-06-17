import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { useEffect, useState } from "react";
import { themeStorageKey } from "constants/themes";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { toggleTheme } from "helpers/themes-toggler";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "store/authSlice/selectors";
import Loader from "components/Shared/Loader/Loader";
import Logo from "components/Shared/Logo/Logo";
import Nav from "./Nav/Nav";
import AuthBar from "./AuthBar/AuthBar";
import UserBar from "./UserBar/UserBar";
import css from "./Header.module.css";

const Header = () => {
  const [isToggled, setToggle] = useState(false);

  useEffect(() => {
    localStorage.getItem(themeStorageKey) === "LIGHT"
      ? setToggle(false)
      : setToggle(true);
  }, []);

  const pagesArray = ["/", `/recipes`];
  const location = useLocation().pathname;
  const isBlackTheme = !pagesArray.some((page) => page === location);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={`container ${css.header_section}`}>
      <div className={isBlackTheme ? css.header_black : css.header_white}>
        <Logo />
        {isRefreshing ? (
          <Loader />
        ) : isLoggedIn ? (
          <>
            <Nav />
            <div className={css.toggle_wrap}>
              <div onClick={toggleTheme}>
                <Expand
                  className={css.toggle_btn}
                  duration={750}
                  toggled={isToggled}
                  toggle={setToggle}
                />
              </div>
              <UserBar />
            </div>
          </>
        ) : (
          <div className={css.toggle_wrap}>
            <div onClick={toggleTheme}>
              <Expand
                className={css.toggle_btn}
                duration={750}
                toggled={isToggled}
                toggle={setToggle}
              />
            </div>
            <AuthBar />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
