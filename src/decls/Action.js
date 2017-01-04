type ActionTypes = {[key: string]: string};

type Actions = {[key: string]: Function};

type Action = {
    type: string,
    isOpen?: boolean,
    count?: number,
    key?: string | number,
    lang?: string,
    value?: number,
};

