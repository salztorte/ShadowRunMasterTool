/* eslint no-param-reassign: 0,
          no-restricted-syntax: 0,
          guard-for-in: 0,
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const dispatchMapper = list => (dispatch) => {
    const map = {};
    for (const item in list) {
        map[item] = bindActionCreators(list[item], dispatch);
    }
    return map;
};

export const connector = (listState, listDispatch = {}) => (
    connect(listState, dispatchMapper(listDispatch))
);


export const keyMirror = keys => keys.reduce((res, cur) => {
    res[cur] = Symbol(cur);
    return res;
}, {});
