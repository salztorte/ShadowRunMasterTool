import Dice from './Dice.jsx';
import { diceActions } from './DiceActions';

export { diceReducer, diceInitState } from './DiceReducer';
export const changeDefaultDiceCount = diceActions.changeDefaultDiceCount;
export default Dice;
