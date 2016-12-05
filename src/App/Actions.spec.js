import { expect } from 'chai';

import { ACTION_TYPES, actions } from './Actions';

describe('InitativeActions', () => {
    it('openModal', () => {
        const expectedAction = {
            type: ACTION_TYPES.OPEN_MENU,
            payload: true,
        };

        expect(actions.openMenu()).to.deep.equal(expectedAction);
    });

    it('closeModal', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLOSE_MENU,
            payload: false,
        };
        expect(actions.closeMenu()).to
                                      .deep
                                      .equal(expectedAction);
    });
});
