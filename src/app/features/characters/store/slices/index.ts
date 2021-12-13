import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../state';

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setLoaded: state => {
      state.loaded = true;
      state.loading = false;
    },
  },
});

export const charactersActions = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
