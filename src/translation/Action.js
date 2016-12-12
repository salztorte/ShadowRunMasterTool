// @flow weak
export const CHANGE_LANG = Symbol('CHANGE_LANG');

export const changeLang = lang => ({
    type: CHANGE_LANG,
    payload: lang,
});
