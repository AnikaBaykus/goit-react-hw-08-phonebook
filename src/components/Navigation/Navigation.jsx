import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        className={s.NavigationLink}
        activeClassName={s.NavigationLinkActive}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={s.NavigationLink}
        activeClassName={s.NavigationLinkActive}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
