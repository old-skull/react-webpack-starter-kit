import { charactersReducer, charactersSlice } from '@features/characters';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [charactersSlice.name]: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
