import { Link } from 'react-router-dom';
import sprite from 'images/icons.svg';
import css from './NetworkLinks.module.css';

const NetworkLinks = () => {
  return (
    <ul className={css.links_container}>
      <li>
        <Link to='https://www.facebook.com/goITclub/' target='_blank' className={css.network_link_item}>
          <svg width="20" height="20">
            <use href={sprite + '#icon-facebook'}></use>
          </svg>
        </Link>
      </li>
      <li>
        <Link to='https://www.instagram.com/goitclub/' target='_blank' className={css.network_link_item}>
          <svg width="20" height="20">
            <use href={sprite + '#icon-instagram'}></use>
          </svg>
        </Link>
      </li>
      <li>
        <Link to='https://www.youtube.com/c/GoIT' target='_blank' className={css.network_link_item}>
          <svg width="20" height="20">
            <use href={sprite + '#icon-youtube'}></use>
          </svg>
        </Link>
      </li>
    </ul>
  );
};

export default NetworkLinks;
