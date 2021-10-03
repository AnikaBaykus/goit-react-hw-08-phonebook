import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={s.Navigation}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
