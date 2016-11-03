import { expect } from 'chai';

import { initStateResources, resourcesReducer } from './ResourcesReducer';
import { ACTION_TYPES } from './ResourcesActions';

describe('Resource reducer', () => {
    it('should return the initial state', () => {
        expect(resourcesReducer(undefined, {})).to
                                               .deep
                                               .equal(initStateResources);
    });

    it('should handel CLEAR_DATA', () => {
        const incommingAction = {
            type: ACTION_TYPES.CLEAR_DATA,
        };
        expect(resourcesReducer(initStateResources, incommingAction).bookIndex).to.be.empty;
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
        expect(resourcesReducer(initStateResources, incommingAction).bookIndex).to
                                                                               .deep
                                                                               .equal(payload);
    });
});
