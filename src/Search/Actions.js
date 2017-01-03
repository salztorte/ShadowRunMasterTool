// @flow weak
import { getSearchSelectors, createSearchAction } from 'redux-search';
import { createSelector } from 'reselect';

import { loadBookData } from '../Resources/BookIndex';
import { keyMirror } from '../tools';


export const resources = state => state.searchIndex;
export const resourceSelector = (resourceName, state) => state.searchIndex.get(resourceName);


export const bookSelector = createSelector([resources], _resources => _resources.bookIndex);

const selectors = getSearchSelectors({ resourceName: 'bookIndex', resourceSelector });
export const dataSearchText = selectors.text;
export const filteredIdArray = selectors.result;

export const ACTION_TYPES = keyMirror([
    'CLEAR_DATA',
    'SET_DATA',
]);
export const actions = {
    clearData: () => ({ type: ACTION_TYPES.CLEAR_DATA }),
    generateData: () => ({
        type: ACTION_TYPES.SET_DATA,
        payload: loadBookData,
    }),
    searchData: createSearchAction('bookIndex'),
};
