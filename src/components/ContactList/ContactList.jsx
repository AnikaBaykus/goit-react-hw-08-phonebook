import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/phonebook';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.ul}>
      {contacts?.map(({ id, name, number }) => (
        <li className={s.li} key={id}>
          <p className={s.p}>
            {name}: {number}
          </p>
          <button
            className={s.button}
            onClick={() => dispatch(contactsOperations.deleteContacts(id))}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
