import { getSearchSelectors } from 'redux-search';
import { createSelector } from 'reselect';

export const resources = state => state.resources;
export const resourceSelector = (resourceName, state) => state.resources.get(resourceName);


export const bookSelector = createSelector([resources], _resources => _resources.bookIndex);

const selectors = getSearchSelectors({ resourceName: 'bookIndex', resourceSelector });
export const dataSearchText = selectors.text;
export const filteredIdArray = selectors.result;
