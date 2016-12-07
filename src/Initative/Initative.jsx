import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Content from '../Componets/Content.jsx';
import Header from './Header.jsx';

import NewEntry from './NewEntry.jsx';
import List from './List.jsx';

import { actions } from './Actions';

const Initative = ({
    translate,
    openNewEntry,
    closeNewEntry,
    isEntryOpen,
    setNewEntry,
    entrys,
    }) =>
    (
        <Content
            title={translate.TITLE}
        >
            <Header
                translate={translate}
                add={() => openNewEntry()}
            />
            <List
                entrys={entrys}
            />

            {isEntryOpen ? <NewEntry
                translate={translate.NEW_ENTRY}
                onClose={closeNewEntry}
                onSubmit={setNewEntry}
            /> : null}

        </Content>
    );

Initative.propTypes = {
    translate: PropTypes.object,
    entrys: PropTypes.array,
    isEntryOpen: PropTypes.bool,
    openNewEntry: PropTypes.func,
    setNewEntry: PropTypes.func,
    closeNewEntry: PropTypes.func,
};

const mapStateToProps = state => ({
    isEntryOpen: state.initative.isNewEntryOpen,
    entrys: state.initative.Entrys,
    translate: state.translation.translate.INITATIVE,
});

const actionList = {
    openNewEntry: actions.openNewEntry,
    closeNewEntry: actions.closeNewEntry,
    setNewEntry: actions.setNewEntry,
};

export default connect(mapStateToProps, actionList)(Initative);

