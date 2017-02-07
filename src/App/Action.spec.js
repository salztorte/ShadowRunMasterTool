import { expect }from 'chai';
import { actions, ACTION_TYPES } from './Actions';


describe('App Actions', () => {
    it('ACTION_TYPES', () => {
        TOGGLE_MENU: 'TOGGLE_MENU'
    });

    it('openMenu', () => {
        const expectedAction = {
            type: ACTION_TYPES.TOGGLE_MENU,
            isOpen: true,
        };
        expect(actions.openMenu()).to.be.eql(expectedAction);
    });

    it('closeMenu', () => {
        const expectedAction = {
            type: ACTION_TYPES.TOGGLE_MENU,
            isOpen: false,
        };
        expect(actions.closeMenu()).to.be.eql(expectedAction);
    });
});