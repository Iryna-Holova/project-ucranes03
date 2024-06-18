import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/authSlice/selectors';
import MobileMenu from '../MobileMenu/MobileMenu';
import Image from 'components/Shared/Image/Image';
import Modal from 'components/Modal/Modal';
import LogOutModal from 'components/LogOutModal/LogOutModal';
import defaultAvatar from 'images/placeholder-avatar.svg';
import icons from 'images/icons.svg';
import css from './UserBar.module.css';

const UserBar = () => {
  const [isUserMenu, setIsUserMenu] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const user = useSelector(selectUser);

  const pagesArray = ['/', `/recipes`];
  const location = useLocation().pathname;
  const isBlackTheme = !pagesArray.some(page => page === location);

  const onCloseBurgerMenu = () => setIsBurgerMenu(false);

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
            type="button"
            className={
              isOpenMenu ? css.userbar_chevron_up : css.userbar_chevron_down
            }
            onClick={() => {
              setIsUserMenu(prev => !prev);
              setIsOpenMenu(prev => !prev);
            }}
            aria-haspopup="true"
            aria-expanded={isUserMenu}
            aria-label="Open user menu"
            aria-controls="userbar-dropdown-menu"
            title="Open user menu"
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
              ? { borderColor: `var(--color-main-20)` }
              : { borderColor: `rgba(255, 255, 255, 0.20)` }
          }
          id="userbar-dropdown-menu"
          role="menu"
          aria-hidden={!isUserMenu}
        >
          <ul className={css.userbar_dropdown_menu_list}>
            <li className={isBlackTheme ? css.color_black : css.color_white}>
              <Link to={`user/${user.id}`} onClick={() => setIsUserMenu(false)}>
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
                aria-label="Log out"
                aria-haspopup="dialog"
                aria-expanded={showLogOutModal}
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
        onClick={() => setIsBurgerMenu(true)}
        aria-haspopup="true"
        aria-expanded={isBurgerMenu}
        aria-controls="mobile-menu"
        aria-label="Open mobile menu"
      >
        {[...Array(6)].map((_, index) => (
          <span
            key={index}
            style={
              isBlackTheme
                ? { backgroundColor: `var(--color-main)` }
                : { backgroundColor: `var(--color-white)` }
            }
          ></span>
        ))}
      </button>
      <MobileMenu
        onCloseBurgerMenu={onCloseBurgerMenu}
        isBurgerMenu={isBurgerMenu}
      />
      <Modal
        showModal={showLogOutModal}
        onClose={() => setShowLogOutModal(false)}
      >
        <LogOutModal onClose={() => setShowLogOutModal(false)} />
      </Modal>
    </div>
  );
};

export default UserBar;
