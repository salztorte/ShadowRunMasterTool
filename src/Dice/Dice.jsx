import { PropTypes } from 'react';

import { diceActions } from './DiceActions';
import DiceInput from './DiceInput.jsx';
import DiceResult from './DiceResult.jsx';
import { connector } from '../tools';


const Dice = ({
  diceCount,
  changeDiceCount,
  rollDice,
  rollResult,
  translate,
  }) => (
  <section className="myList">
    <DiceInput
      translate={translate}
      changeDiceCount={changeDiceCount}
      diceCount={diceCount}
      rollDice={rollDice}
    />
    <DiceResult
      rollResult={rollResult}
    />
  </section>
);


Dice.propTypes = {
  diceCount: PropTypes.number.isRequired,
  changeDiceCount: PropTypes.func.isRequired,
  rollDice: PropTypes.func.isRequired,
  rollResult: PropTypes.arrayOf(PropTypes.number),
  translate: PropTypes.object,
};

const mapStateToProps = state => ({
  diceCount: state.dice.diceCount,
  rollResult: state.dice.rollResult,
  translate: state.translation.translate.DICE_CUP,
});

const actionList = {
  changeDiceCount: diceActions.changeDiceCount,
  rollDice: diceActions.rollDice,
};

export default connector(mapStateToProps, actionList)(Dice);

