import { keyMirror } from '../tools';

export const ACTION_TYPES = keyMirror([
    'OPEN_MODAL',
    'CLOSE_MODAL',
]);

export const actions = {
    openModal: () => ({
        type: ACTION_TYPES.OPEN_MODAL,
    }),
    closeModal: () => ({
        type: ACTION_TYPES.CLOSE_MODAL,
    }),
};
