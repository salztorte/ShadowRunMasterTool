import { createSearchAction } from 'redux-search';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { ACTION_TYPES, resourcesActions } from './ResourcesActions';
import { initState } from './ResourcesReducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Resource Actions', () => {
    it('clearData', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLEAR_DATA,
        };

        expect(resourcesActions.clearData()).toEqual(expectedAction);
    });
    it('searchData', () => {
        const expectedAction = createSearchAction('bookIndex')();
        expect(resourcesActions.searchData()).toEqual(expectedAction);
    });


    it('generateDate', () => {
        const store = mockStore(initState);
        store.dispatch(resourcesActions.generateData());
        const resAction = store.getActions();

        expect(resAction.length).toBe(2);
        expect(resAction[0].type).toBe(ACTION_TYPES.CLEAR_DATA);
        expect(resAction[1].type).toBe(ACTION_TYPES.SET_DATA);
    });
});
