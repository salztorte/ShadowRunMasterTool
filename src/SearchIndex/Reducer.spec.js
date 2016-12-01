import { expect } from 'chai';

import { initStateSearchIndex, searchIndexReducer } from './SearchIndexReducer';
import { ACTION_TYPES } from './SearchIndexActions';

describe('Resource reducer', () => {
    it('should return the initial state', () => {
        expect(searchIndexReducer(undefined, {})).to.deep.equal(initStateSearchIndex);
    });

    it('should handel CLEAR_DATA', () => {
        const incommingAction = {
            type: ACTION_TYPES.CLEAR_DATA,
        };
        expect(searchIndexReducer(initStateSearchIndex, incommingAction).bookIndex).to.be.empty;
    });

    it('should handel SET_DATA', () => {
        const payload = {
            id: 0,
            name: 'test',
            title: 'Testing for Dummies',
        };

        const incommingAction = {
            type: ACTION_TYPES.SET_DATA,
            payload,
        };
        expect(searchIndexReducer(initStateSearchIndex, incommingAction).bookIndex).to
                                                                                 .deep
                                                                                 .equal(payload);
    });
});
