import Logo from 'components/Shared/Logo/Logo';
import Nav from './Nav/Nav';
import AuthBar from './AuthBar/AuthBar';
import UserBar from './UserBar/UserBar';

const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
      <AuthBar />
      <UserBar />
    </header>
  );
};

export default Header;
