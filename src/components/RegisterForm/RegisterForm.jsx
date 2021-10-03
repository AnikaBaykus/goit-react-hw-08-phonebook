import s from './RegisterForm.module.css';

import { useDispatch } from 'react-redux';
// import { authOperations } from 'redux/auth';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formNameId = uuidv4();
  const formEmailId = uuidv4();
  const formPasswordId = uuidv4();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    // dispatch(authOperations.Register({ name, email, password }));
    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={formNameId}>
        Name{' '}
        <input
          className={s.input}
          id={formNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          placeholder={'Add name...'}
        />
      </label>

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
          title="Пароль должен состоять минимум из 8 символов"
          required
          value={password}
          onChange={handleChange}
          placeholder={'Password...'}
        />
      </label>

      <button className={s.button} type="submit">
        Register now
      </button>
    </form>
  );
}
