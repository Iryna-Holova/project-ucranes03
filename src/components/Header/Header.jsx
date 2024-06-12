import Logo from "components/Shared/Logo/Logo";
import Nav from "./Nav/Nav";
import AuthBar from "./AuthBar/AuthBar";
import UserBar from "./UserBar/UserBar";
import css from "./Header.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isUser, setIsUser] = useState(false);

  const isBlackTheme = useLocation().pathname !== "/";

  return (
    <header className={css.header_section}>
      <div className="container">
        <div className={isBlackTheme ? css.header_black : css.header_white}>
          <Logo />
          {isUser ? (
            <AuthBar />
          ) : (
            <>
              <Nav />
              <UserBar />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
