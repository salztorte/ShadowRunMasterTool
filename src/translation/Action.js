// @flow
export const CHANGE_LANG = Symbol('CHANGE_LANG');

export const changeLang = (lang : string) => ({
    type: CHANGE_LANG,
    payload: lang,
});
