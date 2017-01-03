// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions } from './Actions';
//import LanguagesSwitcher from './LanguagesSwitcher.jsx';
import DefaultDicePool from './DefaultDicePool.jsx';

import Content from '../Componets/Content.jsx';

//const langArray = ['GER', 'EN'];

const Settings: Function = ({
//    changeLang,
    changeDefaultDiceCount,
//    curLang,
    defaultDice,
    translate,
    }) =>
    (
        <Content title={translate.TITLE}>
            <DefaultDicePool
                translate={translate.DICE_POOL}
                defaultDice={defaultDice}
                onChange={event => {
                    changeDefaultDiceCount(event.target.value);
                }}
            />
        </Content>
    );

//<LanguagesSwitcher
//    langArray={langArray}
//    translate={translate.LANGUAGES}
//    changeLang={changeLang}
///>

Settings.propTypes = {
    changeDefaultDiceCount: PropTypes.func,
//    changeLang: PropTypes.func,
    defaultDice: PropTypes.number,
//    curLang: PropTypes.string,
    translate: PropTypes.objectOf(PropTypes.string),
};

const mapStateToProps = state => ({
    translate: state.translation.translate.SETTINGS,
    defaultDice: state.setting.defaultDiceCount,
    curLang: state.setting.curLang,
});

const actionList = {
//    changeLang: actions.changeLang,
    changeDefaultDiceCount: actions.changeDefaultDiceCount,
};
export default connect(mapStateToProps, actionList)(Settings);
