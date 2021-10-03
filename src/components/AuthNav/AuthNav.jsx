import s from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={s.NavigationLink}
        activeClassName={s.NavigationLinkActive}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={s.NavigationLink}
        activeClassName={s.NavigationLinkActive}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
