import { Record } from 'immutable';

Record.prototype.concatToArray = function concatToArray(a: Array<any>) {
    return [this].concat(a);
};
Record.prototype.update = function update(path: Array<string>, val: any) {
    if (path.length === 1)
        return this.set(path[0], val);
    return this.set(path[0], this.get(path[0]).update(path.slice(1), val));
};

export const keyMirror = keys => keys.reduce((res, cur) => {
    const newKeys = res;
    newKeys[cur] = cur;
    return newKeys;
}, {});
