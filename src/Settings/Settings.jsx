import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';

import { connector } from '../tools';

import { settingsActions } from './SettingsActions';
import LanguagesSwitcher from './LanguagesSwitcher.jsx';
import DefaultDicePool from './DefaultDicePool.jsx';


const langArray = ['GER', 'EN'];


const Settings = ({
    changeLang,
    changeDefaultDiceCount,
    curLang,
    defaultDice,
    translate,
    }) =>
    (
        <Box>
            <LanguagesSwitcher
                langArray={langArray}
                translate={translate.LANGUAGES}
                changeLang={changeLang}
            />
            <DefaultDicePool
                translate={translate.DICE_POOL}
                defaultDice={defaultDice}
                onChange={(event) => {
                    changeDefaultDiceCount(event.target.value);
                }}
            />
        </Box>
    );


Settings.propTypes = {
    changeDefaultDiceCount: PropTypes.func.isRequired,
    changeLang: PropTypes.func.isRequired,
    defaultDice: PropTypes.number.isRequired,
    curLang: PropTypes.string.isRequired,
    translate: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    translate: state.translation.translate.SETTINGS,
    defaultDice: state.setting.defaultDiceCount,
    curLang: state.setting.curLang,
});

const actionList = {
    changeLang: settingsActions.changeLang,
    changeDefaultDiceCount: settingsActions.changeDefaultDiceCount,
};
export default connector(mapStateToProps, actionList)(Settings);
