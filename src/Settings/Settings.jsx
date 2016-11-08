import React, { PropTypes } from 'react';

import Section from 'grommet/components/Section';
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
            <Box
                separator={'bottom'}
                pad={{
                    horizontal: 'small',
                }}
            >
                <LanguagesSwitcher
                    langArray={langArray}
                    translate={translate.LANGUAGES}
                    changeLang={changeLang}
                />
            </Box>
            <Box
                separator={'bottom'}
                pad={{
                    horizontal: 'small',
                }}
            >
                <DefaultDicePool
                    translate={translate.DICE_POOL}
                    onChange={(event) => {
                    changeDefaultDiceCount(event.target.value);
                }}
                    defaultDice={defaultDice}
                />
            </Box>
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
