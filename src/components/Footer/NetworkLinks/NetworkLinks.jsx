import icons from 'images/icons.svg';
import css from '../Footer.module.css';

const NetworkLinks = () => {
  return (
    <div className={css.footer_up_social}>
      <a
        className={css.footer_up_social_item}
        href="https://www.facebook.com/goITclub/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg>
          <use href={`${icons}#icon-facebook`} />
        </svg>
      </a>
      <a
        className={css.footer_up_social_item}
        href="https://www.instagram.com/goitclub/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg>
          <use href={`${icons}#icon-instagram`} />
        </svg>
      </a>
      <a
        className={css.footer_up_social_item}
        href="https://www.youtube.com/c/GoIT"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg>
          <use href={`${icons}#icon-youtube`} />
        </svg>
      </a>
    </div>
  );
};

export default NetworkLinks;
