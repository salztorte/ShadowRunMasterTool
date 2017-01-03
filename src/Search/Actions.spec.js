/* eslint import/no-extraneous-dependencies: 0 */
import { expect } from 'chai';
import { createSearchAction } from 'redux-search';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { ACTION_TYPES, actions } from './Actions';
import { initState } from './Reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Resource Actions', () => {
    it('clearData', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLEAR_DATA,
        };

        expect(actions.clearData()).to.deep.equal(expectedAction);
    });
    it('searchData', () => {
        const expectedAction = createSearchAction('bookIndex')();
        expect(actions.searchData()).to.deep.equal(expectedAction);
    });


    it('generateDate', () => {
        const store = mockStore(initState);
        store.dispatch(actions.generateData());
        const resAction = store.getActions();

        expect(resAction).to.have.lengthOf(2);
        expect(resAction[0].type).to.be.equal(ACTION_TYPES.CLEAR_DATA);
        expect(resAction[1].type).to.be.equal(ACTION_TYPES.SET_DATA);
    });
});
