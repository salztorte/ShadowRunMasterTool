//TODO
import { keyMirror } from '../tools';

export const ACTION_TYPES = keyMirror([
    'CHANGE_DICE_COUNT',
    'CLEAR_ROLLS',
    'ROLL_DICE',
    'TOGGLE_POPOVER',
]);

export type Action ={
    type: ACTION_TYPES.TOGGLE_POPOVER
        | ACTION_TYPES.CHANGE_DICE_COUNT
        | ACTION_TYPES.CLEAR_ROLLS
        | ACTION_TYPES.ROLL_DICE,
    payload: any,
};

export const actions = {
    clearRoll: ():Action => ({ type: ACTION_TYPES.CLEAR_ROLLS }),
    changeDiceCount: (count:number) => ({
        type: ACTION_TYPES.CHANGE_DICE_COUNT,
        payload: count,
    }),
    rollDice: ():Action => ({
        type: ACTION_TYPES.ROLL_DICE,
    }),
    showPopover: ():Action => ({
        type: ACTION_TYPES.TOGGLE_POPOVER,
        payload: true,
    }),
    hidePopover: ():Action => ({
        type: ACTION_TYPES.TOGGLE_POPOVER,
        payload: false,
    }),
};
