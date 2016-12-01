import { keyMirror } from '../tools';

export const ACTION_TYPES = keyMirror([
    'CHANGE_DICE_COUNT',
    'CHANGE_DEFAULT_DICE_COUNT',
    'CLEAR_ROLLS',
    'ROLL_DICE',
    'SHOW_POPOVER',
    'HIDE_POPOVER',
]);
const rollDice = (diceCount) => {
    const result = [];
    for (let i = 0; i < diceCount; i++) {
        result.push(Math.floor((Math.random() * 6) + 1));
    }
    result.sort()
          .reverse();
    return result;
};

export const actions = {
    clearRoll: () => ({ type: ACTION_TYPES.CLEAR_ROLLS }),
    changeDiceCount: count => (dispatch) => {
        dispatch(actions.clearRoll());
        dispatch({
            type: ACTION_TYPES.CHANGE_DICE_COUNT,
            payload: count,
        });
    },
    rollDice: diceCount => ({
        type: ACTION_TYPES.ROLL_DICE,
        payload: rollDice(diceCount),
    }),
    showPopover: () => ({
        type: ACTION_TYPES.SHOW_POPOVER,
    }),
    hidePopover: () => ({
        type: ACTION_TYPES.HIDE_POPOVER,
    }),
};
