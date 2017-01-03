// @flow
import { keyMirror } from '../tools';

export const ACTION_TYPES: ActionTypes = keyMirror([
    'CHANGE_NEW_ENTRY',
    'CHECK_INPUT',
    'TOGGEL_MODAL',
    'NEW_ROUND',
    'NEXT',
    'SET_NEW_ENTRY',
]);

export const actions: Actions = {
    closeNewEntry: (): Action => ({
        type: ACTION_TYPES.TOGGEL_MODAL,
        name: 'newEntry',
        isOpen: false,
    }),
    openNewEntry: (): Action => ({
        type: ACTION_TYPES.TOGGEL_MODAL,
        name: 'newEntry',
        isOpen: true,
    }),
    openSetIni: (): Action => ({
        type: ACTION_TYPES.TOGGEL_MODAL,
        name: 'setIni',
        isOpen: true,
    }),
    closeSetIni: (): Action => ({
        type: ACTION_TYPES.TOGGEL_MODAL,
        name: 'setIni',
        isOpen: false,
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


