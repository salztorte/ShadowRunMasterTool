import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';

import { settingsActions } from './SettingsActions';
import LanguagesSwitcher from './LanguagesSwitcher.jsx';
import DefaultDicePool from './DefaultDicePool.jsx';

import Toolbar from '../Componets/Toolbar.jsx';
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
            <Toolbar
                title={translate.TITLE}
                showMenuIcon
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

//<LanguagesSwitcher
//    langArray={langArray}
//    translate={translate.LANGUAGES}
//    changeLang={changeLang}
///>

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
export default connect(mapStateToProps, actionList)(Settings);
