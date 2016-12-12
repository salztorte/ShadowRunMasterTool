/* eslint no-param-reassign: 0,
 no-restricted-syntax: 0,
 guard-for-in: 0,
 */



export const keyMirror = (keys: string[]): ActionTypes => keys.reduce((res, cur) => {
    res[cur] = cur;
    return res;
}, {});
