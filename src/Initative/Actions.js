// @flow
import { keyMirror } from '../tools';


export const ACTION_TYPES:ActionTypes = keyMirror([
    'OPEN_NEW_ENTRY',
    'CLOSE_NEW_ENTRY',
    'CHANGE_NEW_ENTRY',
    'SET_NEW_ENTRY',

    'OPEN_SET_INI',
    'CLOSE_SET_INI',
    'CHANGE_ENTRY',
    'SET_INI',

    'CHANGE_ENTRY',
    'CLOSE_CHANGE_ENTRY',

    'INCREASE_INI',
    'DECREASE_INI',
    'NEW_ROUND',
    'NEXT',
]);

export const actions: Actions = {
    openNewEntry: (): Action => ({
        type: ACTION_TYPES.OPEN_NEW_ENTRY,
    }),
    closeNewEntry: (): Action => ({
        type: ACTION_TYPES.CLOSE_NEW_ENTRY,
    }),
    changeNewEntry: (name: string): Action => ({
        type: ACTION_TYPES.CHANGE_NEW_ENTRY,
        name,
    }),
    setNewEntry: (): Action => ({
        type: ACTION_TYPES.SET_NEW_ENTRY,
    }),

    openSetIni: (): Action => ({
        type: ACTION_TYPES.OPEN_SET_INI,
    }),
    closeSetIni: (): Action => ({
        type: ACTION_TYPES.CLOSE_SET_INI,
    }),
    changeEntry: (value: number): Action => ({
        type: ACTION_TYPES.CHANGE_ENTRY,
        value,
    }),
    setIni: (): Action => ({
        type: ACTION_TYPES.SET_INI,
    }),


    increaseIni: (key: number): Action => ({
        type: ACTION_TYPES.INCREASE_INI,
        key,
    }),
    decreaseIni: (key: number): Action => ({
        type: ACTION_TYPES.DECREASE_INI,
        key,
    }),
    newRound: (): Action => ({
        type: ACTION_TYPES.NEW_ROUND,
    }),
    next: (): Action => ({
        type: ACTION_TYPES.NEXT,
    }),
    closeChangeEntry: (value: number): Action => ({
        type: ACTION_TYPES.CLOSE_CHANGE_ENTRY,
        value,
    }),
};
