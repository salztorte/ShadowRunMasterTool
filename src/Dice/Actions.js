//@flow
import { keyMirror } from '../tools';

export const ACTION_TYPES:ActionTypes = keyMirror([
    'CHANGE_DICE_COUNT',
    'CLEAR_ROLLS',
    'ROLL_DICE',
    'TOGGLE_POPOVER',
]);

export const actions:Actions = {
    clearRoll: (): Action => ({ type: ACTION_TYPES.CLEAR_ROLLS }),
    changeDiceCount: (count: number): Action => ({
        type: ACTION_TYPES.CHANGE_DICE_COUNT,
        count,
    }),
    rollDice: (): Action => ({
        type: ACTION_TYPES.ROLL_DICE,
    }),
    showPopover: (): Action => ({
        type: ACTION_TYPES.TOGGLE_POPOVER,
        isOpen: true,
    }),
    hidePopover: (): Action => ({
        type: ACTION_TYPES.TOGGLE_POPOVER,
        isOpen: false,
    }),
};
