import { settingsReducer, createSettingsInitState} from './SettingsReducer';
import { ACTION_TYPES } from './SettingsActions';

describe('DiceReducer', () => {
  it('should handel CHANGE_DEFAULT_DICE_COUNT', () => {
    const inAction = {
      type: ACTION_TYPES.CHANGE_DEFAULT_DICE_COUNT,
      payload: 20,
    };
    const inState = createSettingsInitState();
    expect(settingsReducer(inState, inAction).defaultDiceCount).toBe(20);
  });

});



