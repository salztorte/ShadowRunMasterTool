import { expect } from 'chai';

import { initState, reducer } from './Reducer';
import { ACTION_TYPES } from './Actions';

describe('Initative reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to
                                      .deep
                                      .equal(initState);
    });

    it('should handel OPEN_NEW_ENTRY', () => {
        const incommingAction = {
            type: ACTION_TYPES.OPEN_NEW_ENTRY,
        };
        expect(reducer(initState, incommingAction)).to
                                                   .deep
                                                   .property('isNewEntryOpen', true);
    });

    it('should handel CLOSE_NEW_ENTRY', () => {
        const incommingAction = {
            type: ACTION_TYPES.CLOSE_NEW_ENTRY,
        };
        expect(reducer(initState, incommingAction)).to
                                                   .deep
                                                   .property('isNewEntryOpen', false);
    });


//    it('should handel SET_NEW_ENTRY', () => {
//        const entry = {
//            name: 'Test',
//            iniValue: 15,
//        };
//
//        const incommingAction = {
//            type: ACTION_TYPES.SET_NEW_ENTRY,
//            name: entry.name,
//            iniValue: entry.iniValue,
//        };
//        expect(reducer(initState, incommingAction).Entrys).to
//                                                          .be
//                                                          .eql([entry]);
//    });
});

