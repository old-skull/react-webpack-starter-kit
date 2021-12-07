import { ICharacter } from '@features/characters';
import { createSlice } from '@reduxjs/toolkit';

export interface CharactersState {
  data: ICharacter[];
  loading: boolean;
  loaded: boolean;
  pageTitle: string;
}

const initialState: CharactersState = {
  data: [
    {
      id: '1',
      name: 'Geralt of Rivia',
      avatar: 'https://static.wikia.nocookie.net/witcher/images/5/54/Tw3_journal_geralt.png',
      caption:
        "Was a legendary witcher of the School of the Wolf active throughout the 13th century. He loved the sorceress Yennefer, considered the love of his life despite their tumultuous relationship, and became Ciri's adoptive father.",
    },
    {
      id: '2',
      name: 'Ciri',
      avatar: 'https://static.wikia.nocookie.net/witcher/images/f/f5/Tw3_journal_ciri.png',
      caption:
        'Was born in 1252 or 1253, and most likely during the Belleteyn holiday. She was the sole princess of Cintra, the daughter of Pavetta and Emhyr var Emreis (who was using the alias "Duny" at the time) as well as Queen Calanthe\'s granddaughter.',
    },
    {
      id: '3',
      name: 'Emiel Regis Rohellec Terzieff-Godefroy',
      avatar: 'https://static.wikia.nocookie.net/witcher/images/b/bd/Tw3_journal_regis.png',
      caption:
        'Better known simply as Regis, was a very powerful higher vampire, and more than four hundred years old when he first met Geralt of Rivia. He was the barber-surgeon of Dillingen. Intellectual person and polymath.',
    },
    {
      id: '4',
      name: 'Yennefer of Vengerberg',
      avatar: 'https://static.wikia.nocookie.net/witcher/images/4/47/Tw3_journal_yennefer.png',
      caption:
        "Born on Belleteyn in 1173, was a sorceress who lived in Vengerberg, the capital city of Aedirn. She was Geralt of Rivia's true love and a mother figure to Ciri, whom she viewed like a daughter.",
    },
  ],
  loading: false,
  loaded: false,
  pageTitle: 'Characters',
};

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

export const { setLoaded } = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
