import './App.css';
import Container from './Container';
import Section from './Section';
import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Notification from './Notification';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/phonebook';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => contactsSelectors.getContacts(state));
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
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
    </Container>
  );
}
