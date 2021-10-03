import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './phonebook-actions';

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContact]: (state, action) => [...state, action.payload],
  [contactsActions.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [contactsActions.filterChange]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
