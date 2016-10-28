import { LOCATION_CHANGE } from 'react-router-redux';
import { initState, routing } from './routingReducer';

describe('routing reducer', () => {
    it('should return the initial state', () => {
        expect(routing(undefined, {})).toEqual(initState);
    });

    it('should handel OPEN_MENU', () => {
        const payload = {
            pathname: 'test',
        };
        const incommingAction = {
            type: LOCATION_CHANGE,
            payload,
        };

        const newState = routing(initState, incommingAction);

        expect(newState.location).toBe('test');
        expect(newState.locationBeforeTransitions.toJS()).toEqual(payload);
    });
});
