//@flow
type ActionTypes = {[key: string]: string};

type Actions = {[key: string]: Function};

type Action = {
    type: string,
    isOpen?: boolean,
    count?: number,
    key?: string | number,
    name?: string,
    lang?: string,
    payload?: any,
    value?: number,
};

