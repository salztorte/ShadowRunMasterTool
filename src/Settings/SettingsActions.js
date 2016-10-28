import { keyMirror } from '../tools';
import { changeLang } from '../translation';
export const ACTION_TYPES = keyMirror([
    'CHANGE_DEFAULT_DICE_COUNT',
    'CHANGE_LANG',
]);


export const settingsActions = {
    changeLang: lang => (dispatch) => {
        dispatch(changeLang);
        dispatch({
            type: ACTION_TYPES.CHANGE_LANG,
            payload: lang,
        });
    },
    changeDefaultDiceCount: count => ({
        type: ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT,
        payload: count,
    }),
}