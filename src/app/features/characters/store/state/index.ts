import { ICharacter } from '@features/characters';
import { Dictionary } from '@reduxjs/toolkit';

export interface CharactersState {
  entities: Dictionary<ICharacter>;
  ids: string[];
  loading: boolean;
  loaded: boolean;
  pageTitle: string;
}

// mock initial state
export const charactersInitialState: CharactersState = {
  pageTitle: 'Characters',
  loading: false,
  loaded: false,
  entities: {
    '1': {
      id: '1',
      name: 'Geralt of Rivia',
      avatar: 'https://static.wikia.nocookie.net/witcher/images/5/54/Tw3_journal_geralt.png',
      caption:
        "Was a legendary witcher of the School of the Wolf active throughout the 13th century. He loved the sorceress Yennefer, considered the love of his life despite their tumultuous relationship, and became Ciri's adoptive father.",
      description: [
        "Geralt of Rivia was a legendary witcher of the School of the Wolf active throughout the 13th century. He loved the sorceress Yennefer, considered the love of his life despite their tumultuous relationship, and became Ciri's adoptive father.",
        'During the Trial of the Grasses, Geralt exhibited unusual tolerance for the mutagens that grant witchers their abilities. Accordingly, Geralt was subjected to further experimental mutagens which rendered his hair white and may have given him greater speed, strength, and stamina than his fellow witchers.',
      ],
    },
    '2': {
      id: '2',
      name: 'Ciri',
      avatar: 'https://static.wikia.nocookie.net/witcher/images/f/f5/Tw3_journal_ciri.png',
      caption:
        'Was born in 1252 or 1253, and most likely during the Belleteyn holiday. She was the sole princess of Cintra, the daughter of Pavetta and Emhyr var Emreis (who was using the alias "Duny" at the time) as well as Queen Calanthe\'s granddaughter.',
      description: [
        'Cirilla Fiona Elen Riannon (better known as Ciri), was born in 1252 or 1253,[4] and most likely during the Belleteyn holiday.[5] She was the sole princess of Cintra, the daughter of Pavetta and Emhyr var Emreis (who was using the alias "Duny" at the time) as well as Queen Calanthe\'s granddaughter.',
        "After Geralt of Rivia helped lift Duny's curse, Duny asked what reward the witcher would like and Geralt evoked the Law of Surprise, as it turned out Pavetta was pregnant with Ciri, unbeknownst to Duny.",
      ],
    },
    '3': {
      id: '3',
      name: 'Emiel Regis Rohellec Terzieff-Godefroy',
      avatar: 'https://static.wikia.nocookie.net/witcher/images/b/bd/Tw3_journal_regis.png',
      caption:
        'Better known simply as Regis, was a very powerful higher vampire, and more than four hundred years old when he first met Geralt of Rivia. He was the barber-surgeon of Dillingen. Intellectual person and polymath.',
      description: [
        "In his younger years, Regis had developed some bad habits to fit in with the rest of his kind. While drinking blood wasn't necessary for higher vampires, it was seen similar in substance to alcohol: if one didn't drink they were considered lame. So under peer pressure he began to partake in it and soon found he was no longer shy around vampire women when he was \"under the influence\". However, his habit got worse and worse to the point he'd spend several nights away before returning to the crypt and just a drop of blood would make him lose control and eventually began to go solo, not caring about any friends going with him or not. He later settled down with a vampire female but not for long as she soon left, and in his grief he dove further into his drinking habit.",
        "It all came to a head, though, when one night he was sent out by some of the boys to fetch some blood. Flying under the influence, he missed his target and instead smashed into the village's well and the villagers nearly killed him, chopping his head off, stabbing him with stakes, and pouring holy water on him before burying him. Fortunately, none of this could actually kill him but, in no condition to move anytime soon, he spent the next 50 years regenerating underground, giving him time to think on his behavior and decided to not drink again.",
      ],
    },
    '4': {
      id: '4',
      name: 'Yennefer of Vengerberg',
      avatar: 'https://static.wikia.nocookie.net/witcher/images/4/47/Tw3_journal_yennefer.png',
      caption:
        "Born on Belleteyn in 1173, was a sorceress who lived in Vengerberg, the capital city of Aedirn. She was Geralt of Rivia's true love and a mother figure to Ciri, whom she viewed like a daughter.",
      description: [
        "Yennefer of Vengerberg, born on Belleteyn in 1173, was a sorceress who lived in Vengerberg, the capital city of Aedirn. She was Geralt of Rivia's true love and a mother figure to Ciri, whom she viewed like a daughter to the point that she did everything she could to rescue the girl and keep her from harm.",

        "She helped advise King Demavend of Aedirn (though was never a formal royal advisor), a close friend of Triss Merigold, and the youngest member of the Council of Wizards within the Brotherhood of Sorcerers. After its fall, the Lodge of Sorceresses attempted to recruit her, but they didn't see eye to eye as the Lodge wanted to advance their own political agenda by using Ciri.",
      ],
    },
  },
  ids: ['1', '2', '3', '4'],
};
