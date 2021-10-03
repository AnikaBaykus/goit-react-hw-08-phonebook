import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter => filter.toLowerCase();
    return contacts.filter(contact =>
      normalizedFilter(contact.name).includes(normalizedFilter(filter)),
    );
  },
);
