// @flow
/* eslint no-param-reassign: 0 */
import bookIndex from './bookIndex';

export const IndexEntry = (id: number, term: string, pages: string) => ({ id, term, pages });

export const loadBookData = bookIndex.reduce((res, cur, id) => {
    const { term, pages } = cur;
    res[id] = new IndexEntry(id, term, pages);
    return res;
}, {});

export const searchIndexName = 'bookIndex';
export const searchIndex = ['term', 'pages'];
