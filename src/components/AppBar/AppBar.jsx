import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <div className={s.Navigation}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </div>
  );
};

export default AppBar;
