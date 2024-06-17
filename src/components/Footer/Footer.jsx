import Logo from 'components/Shared/Logo/Logo';
import NetworkLinks from './NetworkLinks/NetworkLinks';
import Copyright from './Copyright/Copyright';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footerWide}>
      <div className={css.line}></div>
      <div className="container">
        <div className={css.footerContent}>
          <Logo inFooter={true} />
          <NetworkLinks />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
