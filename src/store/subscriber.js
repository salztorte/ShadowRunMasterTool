// @flow weak
const preVal = {
    lang: localStorage.getItem('lang'),
    defaultDice: localStorage.getItem('defaultDice'),
};

const changeHandler = (curVal, key) => {
    if (curVal !== preVal[key]) {
        preVal[key] = curVal;
        localStorage.setItem(key, curVal);
    }
};

export default (store) => {
    const state = store.getState();
    const curVal = {
        lang: state.translation.curLang,
        defaultDice: state.dice.defaultCount,
    };
    changeHandler(curVal.lang, 'lang');
    changeHandler(curVal.defaultDice, 'defaultDice');
};
