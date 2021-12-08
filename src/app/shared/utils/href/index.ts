import { To } from 'react-router-dom';

export const normalizeHref = (to: To) =>
  to.toString().toLocaleLowerCase().trim().replace(/\s+/g, '-');
