import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formEmailId = uuidv4();
  const formPasswordId = uuidv4();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={formEmailId}>
        Email{' '}
        <input
          className={s.input}
          id={formEmailId}
          type="email"
          name="email"
          pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
          title="Введите email, должен содержать @"
          required
          value={email}
          onChange={handleChange}
          placeholder={'Email...'}
        />
      </label>

      <label className={s.label} htmlFor={formPasswordId}>
        Password{' '}
        <input
          className={s.input}
          id={formPasswordId}
          type="password"
          name="password"
          pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          title="Пароль должен состоять минимум из 6 символов"
          required
          value={password}
          onChange={handleChange}
          placeholder={'Password...'}
        />
      </label>

      <button className={s.button} type="submit">
        Log In
      </button>
    </form>
  );
}
