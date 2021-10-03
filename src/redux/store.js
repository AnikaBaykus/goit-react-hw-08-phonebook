import phoneBookReducer from './phonebook/phonebook-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]; // логирует экшн

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development', // Отключить девтулзы для общего пользования
});

export { store };
