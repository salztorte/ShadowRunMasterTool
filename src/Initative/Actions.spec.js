import { expect } from 'chai';

import { ACTION_TYPES, actions } from './Actions';

describe('AppActions', () => {
    it('openNewEntry', () => {
        const expectedAction = {
            type: ACTION_TYPES.OPEN_NEW_ENTRY,
        };

        expect(actions.openNewEntry()).to.deep.equal(expectedAction);
    });

    it('closeNewEntry', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLOSE_NEW_ENTRY,
        };
        expect(actions.closeNewEntry()).to
                                       .deep
                                       .equal(expectedAction);
    });

    it('checkInput', () => {
        const expectedAction = {
            type: ACTION_TYPES.CHECK_INPUT,
            input: 'test',
        };
        expect(actions.checkInput('test')).to
                                          .deep
                                          .equal(expectedAction);
    });

    it('newRound', () => {
        const expectedAction = {
            type: ACTION_TYPES.NEW_ROUND,
        };
        expect(actions.newRound()).to
                                  .deep
                                  .equal(expectedAction);
    });

    it('setNewEntry', () => {
        const expectedAction = {
            type: ACTION_TYPES.SET_NEW_ENTRY,
        };
        expect(actions.setNewEntry()).to
                                     .deep
                                     .equal(expectedAction);
    });
});
