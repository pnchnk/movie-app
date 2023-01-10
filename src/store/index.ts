import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import movies from './slices/movies';
import profile from './slices/profile';

export const store = configureStore({
  reducer: {
    movies,
    profile
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
