import { keyMirror } from '../tools';

export const ACTION_TYPES = keyMirror([
    'CHANGE_NEW_ENTRY',
    'CHECK_INPUT',
    'TOGGEL_NEW_ENTRY',
    'NEW_ROUND',
    'NEXT',
    'SET_NEW_ENTRY',
]);

export const actions = {
    closeNewEntry: () => ({
        type: ACTION_TYPES.TOGGEL_NEW_ENTRY,
        payload: false,
    }),
    openNewEntry: () => ({
        type: ACTION_TYPES.TOGGEL_NEW_ENTRY,
        payload: true,
    }),
    changeNewEntry: (key, value) => ({
        type: ACTION_TYPES.CHANGE_NEW_ENTRY,
        key,
        value,
    }),
    newRound: () => ({
        type: ACTION_TYPES.NEW_ROUND,
    }),
    next: () => ({
        type: ACTION_TYPES.NEXT,
    }),
    setNewEntry: () => ({
        type: ACTION_TYPES.SET_NEW_ENTRY,
    }),

};
