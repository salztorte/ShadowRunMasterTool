import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const dispatchMapper = list => dispatch => {
    const map = {};
    for (const item in list) {
        map[item] = bindActionCreators(list[item], dispatch);
    }
    return map;
};

export const connector = function (listState, listDispatch = {}) {
    return connect(listState, dispatchMapper(listDispatch));
};


export const keyMirror = keys => keys.reduce((res, cur) => {
    res[cur] = cur;
    return res
}, {});
