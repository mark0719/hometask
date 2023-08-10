import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import usersSlices from '../slices/usersSlices';
import invitesSlices from '../slices/invitesSlices';

const store = configureStore({
  reducer: {
    users: usersSlices,
    invites: invitesSlices,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export {store};
