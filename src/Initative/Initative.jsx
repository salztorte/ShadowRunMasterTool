// @flow
import React, { PropTypes } from 'react';

import { connect } from 'react-redux';

import Content from '../Componets/Content.jsx';
import Header from './Header.jsx';

import NewEntry from './NewEntry.jsx';
import SetIni from './SetIni.jsx';
import List from './List.jsx';

import { isOpen as isOpenType,
    isError as isErrorType,
    Entry as EntryType,
} from './InitState';

import { actions } from './Actions';


const isRound = entrys => !entrys.every(cur => cur.iniValue === 0);
const isEntryEmpty = entrys => entrys.length === 0;

const Initative:Function = ({
    translate,

    aktEntry,

    errors,
    entrys,
    isOpen,

    next,
    increaseIni,
    decreaseIni,

    openNewEntry,
    closeNewEntry,
    changeNewEntry,
    setNewEntry,

    closeSetIni,
    openSetIni,
    changeEntry,
    setIni,
    }) =>
    (
        <Content
            title={translate.TITLE}
        >
            <Header
                translate={translate}
                add={openNewEntry}
                next={() => next()}
                newRound={openSetIni}
                isRound={isRound(entrys)}
                isEmpty={isEntryEmpty(entrys)}
            />
            <List
                entrys={entrys}
                increaseIni={increaseIni}
                decreaseIni={decreaseIni}
            />
            {isOpen.newEntry ? <NewEntry
                translate={translate.NEW_ENTRY}
                onClose={closeNewEntry}
                onChange={changeNewEntry}
                onSubmit={setNewEntry}
                isError={errors.newEntry}
                newEntry={aktEntry}
            /> : null}

            {isOpen.setIni ? <SetIni
                isError={errors.setInit}
                onClose={closeSetIni}
                onChange={changeEntry}
                onSubmit={setIni}
                aktEntry={aktEntry}
                translate={translate.SET_INI}
            /> : null}
        </Content>
    );


Initative.propTypes = {
    translate: PropTypes.object,

    aktEntry: PropTypes.instanceOf(EntryType),

    errors: PropTypes.instanceOf(isErrorType),
    entrys: PropTypes.arrayOf(EntryType),
    isOpen: PropTypes.instanceOf(isOpenType),

    next: PropTypes.func,
    increaseIni: PropTypes.func,
    decreaseIni: PropTypes.func,

    openNewEntry: PropTypes.func,
    closeNewEntry: PropTypes.func,
    changeNewEntry: PropTypes.func,
    setNewEntry: PropTypes.func,

    closeSetIni: PropTypes.func,
    openSetIni: PropTypes.func,
    changeEntry: PropTypes.func,
    setIni: PropTypes.func,
};

const mapStateToProps = state => ({
    isOpen: state.initative.isOpen,
    entrys: state.initative.Entrys,
    aktEntry: state.initative.aktEntry,
    translate: state.translation.translate.INITATIVE,
    errors: state.initative.isError,
});

const actionList = {
    openNewEntry: actions.openNewEntry,
    closeNewEntry: actions.closeNewEntry,
    changeNewEntry: actions.changeNewEntry,
    setNewEntry: actions.setNewEntry,

    openSetIni: actions.openSetIni,
    closeSetIni: actions.closeSetIni,
    changeEntry: actions.changeEntry,
    setIni: actions.setIni,

    next: actions.next,
    increaseIni: actions.increaseIni,
    decreaseIni: actions.decreaseIni,
};

export default connect(mapStateToProps, actionList)(Initative);

