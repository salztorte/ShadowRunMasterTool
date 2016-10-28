import { appInitState, appReducer } from './AppReducer';
import { ACTION_TYPES } from './AppActions';

describe('App reducer', () => {
    it('should return the initial state', () => {
        expect(appReducer(undefined, {})).toEqual(appInitState);
    });

    it('should handel OPEN_MENU', () => {
        const incommingAction = {
            type: ACTION_TYPES.OPEN_MENU,
        };
        expect(appReducer(appInitState, incommingAction).isOpen).toBeTruthy();
    });

    it('should handel CLOSE_MENU', () => {
        const incommingAction = {
            type: ACTION_TYPES.CLOSE_MENU,
        };
        expect(appReducer(appInitState, incommingAction).isOpen).toBeFalsy();
    });
});
