// @flow
import { keyMirror } from '../tools';
import { changeLang } from '../translation';

export const ACTION_TYPES:ActionTypes = keyMirror([
    'CHANGE_DEFAULT_DICE_COUNT',
    'CHANGE_LANG',
]);

export const actions:Actions = {
    changeLang: (lang: string): Action=> ({
        type: ACTION_TYPES.CHANGE_LANG,
        lang,
    }),
    changeDefaultDiceCount: (count:number):Action=> ({
        type: ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT,
        count,
    }),
};
