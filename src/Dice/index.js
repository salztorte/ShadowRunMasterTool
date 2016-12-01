import Dice from './Dice.jsx';
import { actions } from './Actions';

export { reducer, initState } from './Reducer';
export const changeDefaultDiceCount = actions.changeDefaultDiceCount;
export default Dice;
