import { PropTypes } from 'react';

import { changeDefaultDiceCount } from '../Dice';

import { connector } from '../tools';
import { changeLang } from '../translation';

import LanguagesSwitcher from './LanguagesSwitcher.jsx';
import DefaultDicePool from './DefaultDicePool.jsx';


const langArray = ['GER', 'EN'];

const Settings = ({
    changeLang,
    changeDefaultDiceCount,
    defaultDice,
    translate,
    }) => (
    <section className="myList">
        <LanguagesSwitcher
            langArray={langArray}
            translate={translate.LANGUAGES}
            changeLang={changeLang}
        />
        <DefaultDicePool
            translate={translate.DICE_POOL}
            onChange={(event) => {
                changeDefaultDiceCount(event.target.value);
            }}
            defaultDice={defaultDice}
        />
    </section>
);


Settings.propTypes = {
    changeDefaultDiceCount: PropTypes.func.isRequired,
    changeLang: PropTypes.func.isRequired,
    defaultDice: PropTypes.number.isRequired,
    translate: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    translate: state.translation.translate.SETTINGS,
    defaultDice: state.dice.defaultCount,
});

const actionList = {
    changeLang,
    changeDefaultDiceCount
};
export default connector(mapStateToProps, actionList)(Settings);
