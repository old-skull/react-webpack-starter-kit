import { ICharacter } from '@features/characters';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { charactersInitialState } from '../state';

export const charactersAdapter = createEntityAdapter<ICharacter>({
  selectId: character => character.id,
  sortComparer: false,
});

export const charactersSlice = createSlice({
  name: 'characters',
  // mock initial state instead of `charactersAdapter.getInitialState()`
  initialState: charactersInitialState,
  reducers: {
    addOne: charactersAdapter.addOne,
    removeOne: charactersAdapter.removeOne,
    removeAll: charactersAdapter.removeAll,
    updateOne: charactersAdapter.updateOne,
    setLoaded: state => {
      state.loaded = true;
      state.loading = false;
    },
  },
});

export const { actions: charactersActions, reducer: charactersReducer } = charactersSlice;
