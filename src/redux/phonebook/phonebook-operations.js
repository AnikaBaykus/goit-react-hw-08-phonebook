import * as contactsActions from './phonebook-actions';
import * as contactsAPI from 'service/contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactsAPI.fetchContactsDefault();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContacts = (name, number) => async dispatch => {
  const addContact = await contactsAPI.fetchAddContacts(name, number);
  dispatch(contactsActions.addContact(addContact));
};

export const deleteContacts = id => async dispatch => {
  await contactsAPI.fetchDeleteContacts(id);
  dispatch(contactsActions.deleteContact(id));
};
