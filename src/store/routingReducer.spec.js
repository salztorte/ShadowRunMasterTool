import { expect } from 'chai';

import { LOCATION_CHANGE } from 'react-router-redux';
import { initState, routing } from './routingReducer';

describe('routing reducer', () => {
    it('should return the initial state', () => {
        expect(routing(undefined, {})).to.be.eql(initState);
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

        expect(newState.location).to.be.equal('test');
        expect(newState.locationBeforeTransitions.toJS()).to.eql(payload);
    });
});
