import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Hi, {userName}!</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
