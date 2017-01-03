// @flow
import React, { PropTypes } from 'react';
import { Record } from 'immutable';
import { recordOf } from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import Content from '../Componets/Content.jsx';
import Header from './Header.jsx';

import NewEntry from './NewEntry.jsx';
import SetIni from './SetIni.jsx';
import List from './List.jsx';

import { isOpen as isOpenType,
         isError as isErrorType,
         Entry as EntryType
       } from './Reducer';

import { actions } from './Actions';

const Initative: Function = ({
    translate,
    openNewEntry,
    closeNewEntry,
    changeNewEntry,
    isOpen,
    setNewEntry,
    entrys,
    errors,
    newEntry,
    newRound,
    next
    }) =>
    (
        <Content
            title={translate.TITLE}
        >
            <Header
                translate={translate}
                add={() => openNewEntry()}
                next={() => next()}
                newRound={() => newRound()}
            />
            <List
                entrys={entrys}
            />

            {isOpen.newEntry ? <NewEntry
                translate={translate.NEW_ENTRY}
                onClose={closeNewEntry}
                onChange={changeNewEntry}
                onSubmit={setNewEntry}
                isError={errors.newEntry}
                newEntry={newEntry}
            /> : null}

            {isOpen.setIni ? <SetIni
            /> : null}

        </Content>
    );


Initative.propTypes = {
    translate: PropTypes.object,
    newEntry: PropTypes.instanceOf(EntryType),
    errors: PropTypes.instanceOf(isErrorType),
    entrys: PropTypes.array,
    isOpen: PropTypes.instanceOf(isOpenType),
    openNewEntry: PropTypes.func,
    setNewEntry: PropTypes.func,
    closeNewEntry: PropTypes.func,
    changeNewEntry: PropTypes.func,
    next: PropTypes.func,
    newRound: PropTypes.func,
};

const mapStateToProps = state => ({
    isOpen: state.initative.isOpen,
    entrys: state.initative.Entrys,
    translate: state.translation.translate.INITATIVE,
    errors: state.initative.isError,
    newEntry: state.initative.NewEntry,
});

const actionList = {
    openNewEntry: actions.openNewEntry,
    closeNewEntry: actions.closeNewEntry,
    changeNewEntry: actions.changeNewEntry,
    setNewEntry: actions.setNewEntry,
    newRound: actions.newRound,
    next: actions.next,
};

export default connect(mapStateToProps, actionList)(Initative);

