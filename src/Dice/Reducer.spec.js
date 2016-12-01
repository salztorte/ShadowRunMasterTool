import { expect } from 'chai';
import { diceReducer, initState } from './Reducer';
import { ACTION_TYPES } from './Actions';

describe('DiceReducer', () => {
    it('should return the initial state', () => {
        expect(diceReducer(undefined, {})).to
                                          .be
                                          .eql(initState);
    });

    it('should handel CHANGE_DICE_COUNT', () => {
        const inAction = {
            type: ACTION_TYPES.CHANGE_DICE_COUNT,
            payload: 20,
        };

        expect(diceReducer(initState, inAction).diceCount).to
                                                          .be
                                                          .equal(20);
    });

    it('should handel CLEAR_ROLLS', () => {
        const inAction = {
            type: ACTION_TYPES.CLEAR_ROLLS,
        };
        const inState = initState;
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


        const showResult = diceReducer(initState, incommingShowAction);
        const hideResult = diceReducer(showResult, incommingHideAction);

        expect(showResult.isPopoverOpen).to.be.true;
        expect(hideResult.isPopoverOpen).to.be.false;
    });
});

