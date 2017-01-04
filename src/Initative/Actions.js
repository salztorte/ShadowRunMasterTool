// @flow
import { keyMirror } from '../tools';

export const ACTION_TYPES:ActionTypes = keyMirror([
    'CHANGE_NEW_ENTRY',
    'INCREASE_INI',
    'DECREASE_INI',
    'NEW_ROUND',
    'NEXT',
    'SET_NEW_ENTRY',
    'TOGGLE_MODAL',
]);

export const actions:Actions = {
    changeNewEntry: (key: string, value: number): Action => ({
        type: ACTION_TYPES.CHANGE_NEW_ENTRY,
        key,
        value,
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
    setNewEntry: (): Action => ({
        type: ACTION_TYPES.SET_NEW_ENTRY,
    }),
    toggleModal: (name: string, isOpen: boolean): Action => ({
        type: ACTION_TYPES.TOGGLE_MODAL,
        name,
        isOpen,
    }),
};
