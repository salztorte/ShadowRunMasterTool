// @flow
import { keyMirror } from '../tools';

export const ACTION_TYPES: ActionTypes = keyMirror([
    'CHANGE_NEW_ENTRY',
    'CHECK_INPUT',
    'TOGGEL_NEW_ENTRY',
    'NEW_ROUND',
    'NEXT',
    'SET_NEW_ENTRY',
]);

export const actions: Actions = {
    closeNewEntry: (): Action => ({
        type: ACTION_TYPES.TOGGEL_NEW_ENTRY,
        isOpen: false,
    }),
    openNewEntry: (): Action => ({
        type: ACTION_TYPES.TOGGEL_NEW_ENTRY,
        isOpen: true,
    }),
    changeNewEntry: (key: string, value: number): Action => ({
        type: ACTION_TYPES.CHANGE_NEW_ENTRY,
        key,
        value,
    }),
    newRound: (): Action => ({
        type: ACTION_TYPES.NEW_ROUND,
    }),
    next: (): Action => ({
        type: ACTION_TYPES.NEXT,
    }),
    setNewEntry: (): Action => ({
        type: ACTION_TYPES.SET_NEW_ENTRY,
    }),

};
