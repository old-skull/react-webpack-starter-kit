import { RootState } from '@store';

export const selectCharactersData = (state: RootState) => state.characters.data;
export const selectCharactersLoading = (state: RootState) => state.characters.loading;
export const selectCharactersLoaded = (state: RootState) => state.characters.loaded;
export const selectCharactersPageTitle = (state: RootState) => state.characters.pageTitle;
