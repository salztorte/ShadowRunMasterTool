export const CHANGE_LANG = '@@TRANSLATE@@CHANGE_LANG';

export const changeLang = lang => ({
    type: CHANGE_LANG,
    payload: lang,
});
