//@flow
import { keyMirror } from '../tools';

export const ACTION_TYPES: ActionTypes = keyMirror([
    'TOGGLE_MENU',
]);

export const actions: Actions = {
    openMenu: (): Action => ({
        type: ACTION_TYPES.TOGGLE_MENU,
        isOpen: true,
    }),
    closeMenu: (): Action => ({
        type: ACTION_TYPES.TOGGLE_MENU,
        isOpen: false,
    }),
};
