import { expect } from 'chai';

import { initState, reducer } from './Reducer';
import { ACTION_TYPES } from './Actions';

describe('App reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to
                                         .deep
                                         .equal(initState);
    });

    it('should handel OPEN_MENU', () => {
        const incommingAction = {
            type: ACTION_TYPES.OPEN_MENU,
        };
        expect(reducer(initState, incommingAction)).to
                                                         .have
                                                         .deep
                                                         .property('isOpen', true);
    });

    it('should handel CLOSE_MENU', () => {
        const incommingAction = {
            type: ACTION_TYPES.CLOSE_MENU,
        };
        expect(reducer(initState, incommingAction)).to
                                                         .have
                                                         .deep
                                                         .property('isOpen', false);
    });
});
