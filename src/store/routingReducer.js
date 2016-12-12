// @flow
import { Record } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const State = Record({
    location: undefined,
    locationBeforeTransitions: undefined,
});
export const initState = new State();

export const routing: State = (state: State = initState, { type, payload }) => {
    if (type === LOCATION_CHANGE) {
        return state.merge({
            location: payload.pathname,
            locationBeforeTransitions: payload,
        });
    }
    return state;
};
