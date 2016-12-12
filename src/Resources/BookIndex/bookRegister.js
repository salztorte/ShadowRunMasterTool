// @flow weak
/* eslint no-param-reassign: 0 */
import bookIndex from './bookIndex';

export const loadBookData = bookIndex.reduce((res, cur, id) => {
    const { term, pages } = cur;
    res[id] = {
        id,
        term,
        pages,
    };
    return res;
}, {});

export const searchIndexName = 'bookIndex';
export const searchIndex = ['term', 'pages'];
