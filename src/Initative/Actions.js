import { keyMirror } from '../tools';

export const ACTION_TYPES = keyMirror([
    'OPEN_NEW_ENTRY',
    'CLOSE_NEW_ENTRY',
    'SET_NEW_ENTRY',
]);

export const actions = {
    openNewEntry: () => ({
        type: ACTION_TYPES.OPEN_NEW_ENTRY,
    }),
    closeNewEntry: () => ({
        type: ACTION_TYPES.CLOSE_NEW_ENTRY,
    }),
    setNewEntry: (name, iniValue) => ({
        type: ACTION_TYPES.SET_NEW_ENTRY,
        name,
        iniValue,
    }),
};
