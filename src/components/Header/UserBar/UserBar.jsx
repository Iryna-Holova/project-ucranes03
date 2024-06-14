import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectUser } from 'store/authSlice/selectors';
import Image from "components/Shared/Image/Image";
import Modal from "components/Modal/Modal";
import LogOutModal from "components/LogOutModal/LogOutModal";
import defaultAvatar from "images/placeholder-avatar.svg";
import icons from "images/icons.svg";
import css from "./UserBar.module.css";

const UserBar = () => {
  const [isUserMenu, setIsUserMenu] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const user = useSelector(selectUser);
  console.log(user);

  const pagesArray = ["/", `/recipes`];
  const location = useLocation().pathname;
  const isBlackTheme = !pagesArray.some((page) => page === location);

  return (
    <div className={css.userbar_mobile_menu}>
      <div
        className={
          isBlackTheme
            ? `${css.userbar_wrap}`
            : `${css.userbar_wrap} ${css.userbar_transparent}`
        }
      >
        <div className={css.userbar_avatar}>
          <Image
                publicId={user.avatar}
                className={css.userbar_avatar_img}
                defaultImage={defaultAvatar}
                alt={user.name}
              />
        </div>
        <div className={css.userbar_dropdown_wrap}>
          <p className={css.userbar_dropdown_name}>{user.name}</p>
          <button
            className={
              isOpenMenu ? css.userbar_chevron_up : css.userbar_chevron_down
            }
            onClick={() => {
              setIsUserMenu((prev) => !prev);
              setIsOpenMenu((prev) => !prev);
            }}
          >
            <svg className={css.userbar_icon_chevron}>
              <use href={`${icons}#icon-chevron-down`} />
            </svg>
          </button>
        </div>

        <div
          className={
            isUserMenu
              ? css.userbar_dropdown_menu
              : css.userbar_dropdown_menu_none
          }
          style={
            isBlackTheme
              ? { borderColor: `rgba(5, 5, 5, 0.2)` }
              : { borderColor: `rgba(255, 255, 255, 0.20)` }
          }
        >
          <ul className={css.userbar_dropdown_menu_list}>
            <li className={isBlackTheme ? css.color_black : css.color_white}>
              <Link to="user/current" onClick={() => setIsUserMenu(false)}>
                profile
              </Link>
            </li>
            <li className={css.userbar_dropdown_menu_item}>
              <button
                className={isBlackTheme ? css.color_black : css.color_white}
                onClick={() => {
                  setShowLogOutModal(true);
                  setIsUserMenu(false);
                }}
              >
                log out
                <svg className={css.userbar_logout_icon}>
                  <use href={`${icons}#icon-arrow-up-right`} />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        className={
          isBurgerMenu ? `${css.burger_icon} ${css.open}` : `${css.burger_icon}`
        }
        onClick={() => setIsBurgerMenu((prev) => !prev)}
      >
        <span
          style={
            isBlackTheme
              ? { backgroundColor: `#050505` }
              : { backgroundColor: `#ffffff` }
          }
        ></span>
        <span
          style={
            isBlackTheme
              ? { backgroundColor: `#050505` }
              : { backgroundColor: `#ffffff` }
          }
        ></span>
        <span
          style={
            isBlackTheme
              ? { backgroundColor: `#050505` }
              : { backgroundColor: `#ffffff` }
          }
        ></span>
        <span
          style={
            isBlackTheme
              ? { backgroundColor: `#050505` }
              : { backgroundColor: `#ffffff` }
          }
        ></span>
        <span
          style={
            isBlackTheme
              ? { backgroundColor: `#050505` }
              : { backgroundColor: `#ffffff` }
          }
        ></span>
        <span
          style={
            isBlackTheme
              ? { backgroundColor: `#050505` }
              : { backgroundColor: `#ffffff` }
          }
        ></span>
      </button>
      {showLogOutModal && (
        <Modal onClose={() => setShowLogOutModal(false)}>
          <LogOutModal onClose={() => setShowLogOutModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default UserBar;