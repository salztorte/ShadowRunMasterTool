import { expect } from 'chai';

import { ACTION_TYPES, actions } from './Actions';

describe('AppActions', () => {
    it('openMenu', () => {
        const expectedAction = {
            type: ACTION_TYPES.OPEN_NEW_ENTRY,
        };

        expect(actions.openNewEntry()).to.deep.equal(expectedAction);
    });

    it('closeMenu', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLOSE_NEW_ENTRY,
        };
        expect(actions.closeNewEntry()).to
                                      .deep
                                      .equal(expectedAction);
    });
});
