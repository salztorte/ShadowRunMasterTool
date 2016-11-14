/* eslint no-param-reassign: 0,
          no-restricted-syntax: 0,
          guard-for-in: 0,
 */

export const keyMirror = keys => keys.reduce((res, cur) => {
    res[cur] = Symbol(cur);
    return res;
}, {});
