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
       } from './Reducer';

import { actions } from './Actions';


const isRound = entrys => !entrys.every(cur => cur.iniValue === 0);

const Initative: Function = ({
    translate,
    toggleModal,
    changeNewEntry,
    isOpen,
    setNewEntry,
    entrys,
    errors,
    newEntry,
    newRound,
    next,
    increaseIni,
    decreaseIni,
    }) =>
    (
        <Content
            title={translate.TITLE}
        >
            <Header
                translate={translate}
                add={() => toggleModal('newEntry', true)}
                next={() => next()}
                newRound={() => toggleModal('setIni', true)}
                isRound={isRound(entrys)}
            />
            <List
                entrys={entrys}
                increaseIni={increaseIni}
                decreaseIni={decreaseIni}
            />

            {isOpen.newEntry ? <NewEntry
                translate={translate.NEW_ENTRY}
                onClose={() => toggleModal('newEntry', false)}
                onChange={changeNewEntry}
                onSubmit={setNewEntry}
                isError={errors.newEntry}
                newEntry={newEntry}
            /> : null}
        </Content>
    );

//{isOpen.setIni ? <SetIni
//    isError={errors.setInit}
//    onClose={() => toggleModal('setIni', false)}
//    translate={translate.SET_INI}
///> : null}

Initative.propTypes = {
    translate: PropTypes.object,
    newEntry: PropTypes.instanceOf(EntryType),
    errors: PropTypes.instanceOf(isErrorType),
    entrys: PropTypes.arrayOf(EntryType),
    isOpen: PropTypes.instanceOf(isOpenType),
    toggleModal: PropTypes.func,
    changeNewEntry: PropTypes.func,
    next: PropTypes.func,
    newRound: PropTypes.func,
    setNewEntry: PropTypes.func,
    increaseIni: PropTypes.func,
    decreaseIni: PropTypes.func,
};

const mapStateToProps = state => ({
    isOpen: state.initative.isOpen,
    entrys: state.initative.Entrys,
    translate: state.translation.translate.INITATIVE,
    errors: state.initative.isError,
    newEntry: state.initative.NewEntry,
});

const actionList = {
    toggleModal: actions.toggleModal,
    changeNewEntry: actions.changeNewEntry,
    setNewEntry: actions.setNewEntry,
    newRound: actions.newRound,
    next: actions.next,
    increaseIni: actions.increaseIni,
    decreaseIni: actions.decreaseIni,
};

export default connect(mapStateToProps, actionList)(Initative);

