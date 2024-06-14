import { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "components/Shared/Logo/Logo";
import Nav from "./Nav/Nav";
import AuthBar from "./AuthBar/AuthBar";
import UserBar from "./UserBar/UserBar";
import css from "./Header.module.css";

const Header = () => {
  const [isUser] = useState(false);

  const pagesArray = ["/", `/recipes`];
  const location = useLocation().pathname;
  const isBlackTheme = !pagesArray.some((page) => page === location);

  return (
    <header className={`container ${css.header_section}`}>
      <div className={isBlackTheme ? css.header_black : css.header_white}>
        <Logo />
        {isUser ? (
          <>
            <Nav />
            <UserBar />
          </>
        ) : (
          <AuthBar />
        )}
      </div>
    </header>
  );
};

export default Header;
