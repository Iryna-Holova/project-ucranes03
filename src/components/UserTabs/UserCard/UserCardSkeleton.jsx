import { useDesktopMediaQuery, useTabletMediaQuery } from 'hooks/device-type';
import css from './UserCard.module.css';

const UserCardSkeleton = () => {
  const isTablet = useTabletMediaQuery();
  const isDesktop = useDesktopMediaQuery();
  return (
    <li className={`${css.follow_list_item} ${css.follow_list_item_skeleton}`}>
      <div className={css.user_info_container}>
        <div className={`${css.user_avatar} ${css.user_avatar_skeleton}`}></div>
        <div>
          <p className={`${css.user_name} ${css.user_name_skeleton}`}> </p>
          <p className={`${css.user_recepies} ${css.user_recepies_skeleton}`}>
            {' '}
          </p>
          <div className={css.button_skeleton}></div>
        </div>
      </div>

      <ul className={css.recipes_pictures_list}>
        {isDesktop &&
          [...Array(4)].map((item, idx) => (
            <li
              className={`${css.recipes_pictures_item} ${css.recipes_pictures_item_skeleton}`}
              key={idx}
            ></li>
          ))}
        {isTablet &&
          [...Array(3)].map((item, idx) => (
            <li
              className={`${css.recipes_pictures_item} ${css.recipes_pictures_item_skeleton}`}
              key={idx}
            ></li>
          ))}
      </ul>

      <div
        className={`${css.user_link_arrow} ${css.user_link_arrow_skeleton}`}
      ></div>
    </li>
  );
};

export default UserCardSkeleton;
