import css from "./UserBar.module.css";
import icons from "../../../images/icons.svg";
import UserAvatar from "../../../images/user_avatar.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const UserBar = () => {
  const [isUserMenu, setIsUserMenu] = useState(false);
  const isBlackTheme = useLocation().pathname !== "/";

  return (
    <div className={css.userbar_wrap}>
      <div className={css.userbar_avatar}>
        <img
          className={css.userbar_avatar_img}
          src={UserAvatar}
          alt="User avatar"
        />
      </div>
      <div className={css.userbar_dropdown_wrap}>
        <p className={css.userbar_dropdown_name}>VICTORIA</p>
        <button
          className={css.userbar_dropdown_chevron}
          onClick={() => setIsUserMenu((prev) => !prev)}
        >
          <svg className={css.userbar_icon_chevron}>
            <use href={`${icons}#icon-chevron-${isUserMenu ? "up" : "down"}`} />
          </svg>
        </button>
      </div>
      {isUserMenu && (
        <div className={css.userbar_dropdown_menu}>
          <ul className={css.userbar_dropdown_menu_list}>
            <li className={isBlackTheme ? css.color_black : css.color_white}>
              <Link to="/" s onClick={() => setIsUserMenu(false)}>
                PROFILE{" "}
              </Link>
            </li>
            <li className={css.userbar_dropdown_menu_item}>
              <div className={css.userbar_logout_wrap}>
                <p className={isBlackTheme ? css.color_black : css.color_white}>
                  LOG OUT
                </p>
                <p className={css.userbar_logout_arrow}>
                  <svg
                    className={
                      isBlackTheme
                        ? css.userbar_logout_icon_black
                        : css.userbar_logout_icon_white
                    }
                  >
                    <use href={`${icons}#icon-arrow-up-right`} />
                  </svg>
                </p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserBar;
