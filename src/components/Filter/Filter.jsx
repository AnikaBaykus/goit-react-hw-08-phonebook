import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.css';
import { contactsActions } from 'redux/phonebook';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const inputID = uuidv4();
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(contactsActions.filterChange(e.target.value));

  return (
    <div>
      <label className={s.label} htmlFor={inputID}>
        Find contacts by name{' '}
        <input
          className={s.input}
          id={inputID}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter name..."
        />
      </label>
    </div>
  );
}
