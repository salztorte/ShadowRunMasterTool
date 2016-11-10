import { expect } from 'chai';

import { ACTION_TYPES, appActions } from './AppActions';

describe('AppActions', () => {
    it('openMenu', () => {
        const expectedAction = {
            type: ACTION_TYPES.OPEN_MENU,
            payload: true,
        };

        expect(appActions.openMenu()).to.deep.equal(expectedAction);
    });

    it('closeMenu', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLOSE_MENU,
            payload: false,
        };
        expect(appActions.closeMenu()).to
                                      .deep
                                      .equal(expectedAction);
    });
});
