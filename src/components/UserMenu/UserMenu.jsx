import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div>
      <span>Hi, X!</span>
      <button className={s.button} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
