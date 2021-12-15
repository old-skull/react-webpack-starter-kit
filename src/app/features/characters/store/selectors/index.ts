import { RootState } from '@store';
import { charactersAdapter } from '../slices';

const adapterSelectors = charactersAdapter.getSelectors<RootState>(state => state.characters);
export const selectCharactersLoading = (state: RootState) => state.characters.loading;
export const selectCharactersLoaded = (state: RootState) => state.characters.loaded;
export const selectCharactersPageTitle = (state: RootState) => state.characters.pageTitle;

export const charactersSelectors = {
  ...adapterSelectors,
  selectCharactersLoading,
  selectCharactersLoaded,
  selectCharactersPageTitle,
};
