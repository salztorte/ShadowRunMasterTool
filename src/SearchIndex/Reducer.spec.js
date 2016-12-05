import { expect } from 'chai';

import { initState, reducer } from './Reducer';
import { ACTION_TYPES } from './Actions';

describe('Resource reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to.deep.equal(initState);
    });

    it('should handel CLEAR_DATA', () => {
        const incommingAction = {
            type: ACTION_TYPES.CLEAR_DATA,
        };
        expect(reducer(initState, incommingAction).bookIndex).to.be.empty;
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
        expect(reducer(initState, incommingAction).bookIndex).to
                                                             .deep
                                                             .equal(payload);
    });
});
