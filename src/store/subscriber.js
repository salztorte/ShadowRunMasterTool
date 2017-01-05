// @flow
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

export default (store: any) => {
    const state = store.getState();
    changeHandler(state.translation.curLang, 'lang');
    changeHandler(state.dice.defaultCount, 'defaultDice');
};
