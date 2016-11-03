import { PropTypes } from 'react';
import {Button, Popover} from 'react-onsenui'

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
    hideModal,
    showModal,
    isModalOpen,
    }) => {
    return (
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
};

//            <Button id="test" onClick={showModal}> Show Popover </Button>
//<Popover
//    getTarget={() => BindButton}
//    isOpen={isModalOpen}
//>
//    <Button onClick={hideModal}> Hide Popover </Button>
//</Popover>
//
//<Popover
//  isOpen={isModalOpen}
//  onOpen={showModal}
//  onHide={hideModal}
//  isCancelable={true}
//  getTarget={ref.test}
//>
//  <section style={{margin: '16px'}}>
//    <p style={{opacity: 0.6}}>
//      This is a popover. Show some information here.
//    </p>
//  </section>
//</Popover>
Dice.propTypes = {
    diceCount: PropTypes.number.isRequired,
    changeDiceCount: PropTypes.func.isRequired,
    rollDice: PropTypes.func.isRequired,
    rollResult: PropTypes.arrayOf(PropTypes.number),
    translate: PropTypes.object,
    hideModal: PropTypes.any,
    showModal: PropTypes.any,
    isModalOpen: PropTypes.any,
};


const mapStateToProps = state => ({
    diceCount: state.dice.diceCount,
    rollResult: state.dice.rollResult,
    translate: state.translation.translate.DICE_CUP,
    isModalOpen: state.dice.showModal
});

const actionList = {
    changeDiceCount: diceActions.changeDiceCount,
    rollDice: diceActions.rollDice,
    showModal: diceActions.showModal,
    hideModal: diceActions.hideModal,
};

export default connector(mapStateToProps, actionList)(Dice);

