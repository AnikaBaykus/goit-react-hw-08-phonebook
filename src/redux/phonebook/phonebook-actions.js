import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/addContact');
const deleteContact = createAction('contact/deleteContact');
const filterChange = createAction('contact/filterChange');

// pending
const fetchContactsRequest = createAction('contacts/fetchContactsRequest');

// fullfilled
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');

// rejected
const fetchContactsError = createAction('contacts/fetchContactsError');

export {
  addContact,
  deleteContact,
  filterChange,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};
