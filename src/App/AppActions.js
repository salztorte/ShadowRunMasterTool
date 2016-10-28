import { keyMirror } from '../tools';


export const ACTION_TYPES = keyMirror([
    'OPEN_MENU',
    'CLOSE_MENU',
]);


export const appActions = {
    openMenu: () => ({
        type: ACTION_TYPES.OPEN_MENU,
        payload: true,
    }),
    closeMenu: () => ({
        type: ACTION_TYPES.CLOSE_MENU,
        payload: false,
    }),
};

