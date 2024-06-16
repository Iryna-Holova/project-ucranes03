import { useDesktopMediaQuery, useTabletMediaQuery } from 'hooks/device-type';
import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';
import css from './UserCard.module.css';

const UserCardSkeleton = () => {
  const style = { backgroundColor: '#05050570' };
  const isTablet = useTabletMediaQuery();
  const isDesktop = useDesktopMediaQuery();
  return (
    <li style={{ height: '142.02px' }} className={css.follow_list_item}>
      <div className={css.user_info_container}>
        <div
          style={{ ...style, marginRight: '16px' }}
          className={css.user_avatar}
        ></div>
        <div>
          <p
            style={{
              ...style,
              width: '64px',
              height: '20px',
              marginBottom: '16px',
            }}
            className={css.user_name}
          >
            {' '}
          </p>
          <p
            style={{ ...style, width: '80px', height: '12px' }}
            className={css.user_recepies}
          >
            {' '}
          </p>
          <ButtonLink
            style={{ backgroundColor: '#05050570', color: '#05050500' }}
            type="button"
            color="light"
            size="small"
          >
            Following
          </ButtonLink>
        </div>
      </div>

      <ul className={css.recipes_pictures_list}>
        {isDesktop &&
          [...Array(4)].map((item, idx) => (
            <li
              style={style}
              className={css.recipes_pictures_item}
              key={idx}
            ></li>
          ))}
        {isTablet &&
          [...Array(3)].map((item, idx) => (
            <li
              style={style}
              className={css.recipes_pictures_item}
              key={idx}
            ></li>
          ))}
      </ul>

      <div
        style={{ backgroundColor: '#05050570' }}
        className={css.user_link_arrow}
      ></div>
    </li>
  );
};

export default UserCardSkeleton;
