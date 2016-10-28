import { diceReducer, diceInitState } from './DiceReducer';
import { ACTION_TYPES } from './DiceActions';

describe('DiceReducer', () => {
    it('should return the initial state', () => {
        expect(diceReducer(undefined, {})).toEqual(diceInitState);
    });

    it('should handel CHANGE_DICE_COUNT', () => {
        const inAction = {
            type: ACTION_TYPES.CHANGE_DICE_COUNT,
            payload: 20,
        };

        expect(diceReducer(diceInitState, inAction).diceCount).toBe(20);
    });

    it('should handel CLEAR_ROLLS', () => {
        const inAction = {
            type: ACTION_TYPES.CLEAR_ROLLS,
        };
        const inState = diceInitState;
        inState.set('rollResult', [1, 5, 6, 4, 3, 4, 6]);
        expect(diceReducer(inState, inAction).rollResult.length).toBe(0);
    });

    it('should handel SHOW_MODAL', () => {
        const incommingAction = {
            type: ACTION_TYPES.SHOW_MODAL,
        };
        expect(diceReducer(diceInitState, incommingAction).showModal).toBeTruthy();
    });

    it('should handel HIDE_MODAL', () => {
        const incommingAction = {
            type: ACTION_TYPES.HIDE_MODAL,
        };
        expect(diceReducer(diceInitState, incommingAction).showModal).toBeFalsy();
    });
});

