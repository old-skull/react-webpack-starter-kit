import { useEffect, useRef } from 'react';

export const useDocumentTitle = (title: string, prevailOnUnmount: boolean = false) => {
  const defaultTitle = useRef(document.title);
  const baseTitle = 'Witcher';
  const separator = '|';

  useEffect(() => {
    if (!title) {
      document.title = 'Witcher';
    } else {
      document.title = `${baseTitle} ${separator} ${title}`;
    }
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) document.title = defaultTitle.current;
    },
    [],
  );
};
