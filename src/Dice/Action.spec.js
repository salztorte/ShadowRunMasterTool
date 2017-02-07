import { expect }from 'chai';
import { actions, ACTION_TYPES } from './Actions';


describe('App Actions', () => {
    it('ACTION_TYPES', () => {
        expect(ACTION_TYPES).to
                            .be
                            .eql({
                                'CHANGE_DICE_COUNT': 'CHANGE_DICE_COUNT',
                                'CLEAR_ROLLS': 'CLEAR_ROLLS',
                                'ROLL_DICE': 'ROLL_DICE',
                                'TOGGLE_POPOVER': 'TOGGLE_POPOVER',
                            });
    });

    it('clearRoll', () => {
        const expectedAction = {
            type: ACTION_TYPES.CLEAR_ROLLS,
        };
        expect(actions.clearRoll()).to.be.eql(expectedAction);
    });

    it('changeDiceCount', () => {
        const expectedAction = {
            type: ACTION_TYPES.CHANGE_DICE_COUNT,
            count: 50,
        };
        expect(actions.changeDiceCount(50)).to.be.eql(expectedAction);
    });

    it('rollDice', () => {
        const expectedAction = {
            type: ACTION_TYPES.ROLL_DICE,
        };
        expect(actions.rollDice()).to.be.eql(expectedAction);
    })

    it('showPopover', () => {
        const expectedAction = {
            type: ACTION_TYPES.TOGGLE_POPOVER,
            isOpen: true,
        };
        expect(actions.showPopover()).to.be.eql(expectedAction);
    });

    it('hidePopover', () => {
        const expectedAction = {
            type: ACTION_TYPES.TOGGLE_POPOVER,
            isOpen: false,
        };
        expect(actions.hidePopover()).to.be.eql(expectedAction);
    });

});