import { createSearchAction } from 'redux-search';

import { loadBookData } from './BookIndex';
import { keyMirror } from '../tools';


export const ACTION_TYPES = keyMirror([
    'CLEAR_DATA',
    'SET_DATA',
]);

export const resourcesActions = {
    clearData: () => ({ type: ACTION_TYPES.CLEAR_DATA }),
    generateData: () => (dispatch) => {
        dispatch(resourcesActions.clearData());
        dispatch({
            type: ACTION_TYPES.SET_DATA,
            payload: loadBookData,
        });
    },
    searchData: createSearchAction('bookIndex'),
};
