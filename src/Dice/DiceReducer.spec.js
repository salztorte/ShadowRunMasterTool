import { expect } from 'chai';
import { diceReducer, diceInitState } from './DiceReducer';
import { ACTION_TYPES } from './DiceActions';

describe('DiceReducer', () => {
    it('should return the initial state', () => {
        expect(diceReducer(undefined, {})).to
                                          .be
                                          .eql(diceInitState);
    });

    it('should handel CHANGE_DICE_COUNT', () => {
        const inAction = {
            type: ACTION_TYPES.CHANGE_DICE_COUNT,
            payload: 20,
        };

        expect(diceReducer(diceInitState, inAction).diceCount).to
                                                              .be
                                                              .equal(20);
    });

    it('should handel CLEAR_ROLLS', () => {
        const inAction = {
            type: ACTION_TYPES.CLEAR_ROLLS,
        };
        const inState = diceInitState;
        inState.set('rollResult', [1, 5, 6, 4, 3, 4, 6]);
        expect(diceReducer(inState, inAction).rollResult.length).to
                                                                .be
                                                                .equal(0);
    });

    it('should handel show and hide POPOVER', () => {
        let incommingShowAction = {
            type: ACTION_TYPES.SHOW_POPOVER,
        };
        const incommingHideAction = {
            type: ACTION_TYPES.HIDE_POPOVER,
        };


        const showResult = diceReducer(diceInitState, incommingShowAction);
        const hideResult = diceReducer(showResult, incommingHideAction);

        expect(showResult.isPopoverOpen).to.be.true;
        expect(hideResult.isPopoverOpen).to.be.false;
    });
});

