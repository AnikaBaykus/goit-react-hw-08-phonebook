import Section from '../components/Section';
import Filter from '../components/Filter';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Notification from '../components/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/phonebook';
import { useEffect } from 'react';

export default function ContactsViews() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => contactsSelectors.getContacts(state));
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="No contacts"></Notification>
        )}
      </Section>
    </>
  );
}
