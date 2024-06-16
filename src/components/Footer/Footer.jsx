import { Link } from 'react-router-dom';
import NetworkLinks from './NetworkLinks/NetworkLinks';
import Copyright from './Copyright/Copyright';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer_container}>
      <div className={css.footer_link}>
        <div className={css.footer_link_logo}>
          <Link to="/" className={css.footer_up_title}>
            Foodies
          </Link>
        </div>
        <NetworkLinks />
      </div>
      <hr className={css.footer_line} />
      <Copyright />
    </footer>
  );
};

export default Footer;
