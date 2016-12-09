// @flow
import { keyMirror } from '../tools';

export const ACTION_TYPES = keyMirror([
    'TOGGLE_MENU',
]);

export type Action =  { type: ACTION_TYPES.TOGGLE_MENU, payload: boolean }

export const actions = {
    openMenu: () : Action => ({
        type: ACTION_TYPES.TOGGLE_MENU,
        payload: true,
    }),
    closeMenu: (): Action => ({
        type: ACTION_TYPES.TOGGLE_MENU,
        payload: false,
    }),
};
