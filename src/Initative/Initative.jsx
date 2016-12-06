import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Content from '../Componets/Content.jsx';
import Header from './Header.jsx';
import NewEntry from './NewEntry.jsx';

import { actions } from './Actions';

const Initative = ({
    translate,
    openNewEntry,
    closeNewEntry,
    isEntryOpen,
    }) =>
    (
        <Content
            title={translate.TITLE}
        >
            <Header
                translate={translate}
                add={() => openNewEntry()}
            />

            {isEntryOpen ? <NewEntry
                translate={translate.NEW_ENTRY}
                onClose={closeNewEntry}
            /> : null}

        </Content>
    );

Initative.propTypes = {
    translate: PropTypes.object,
    isEntryOpen: PropTypes.bool,
    openNewEntry: PropTypes.func,
    closeNewEntry: PropTypes.func,
};

const mapStateToProps = state => ({
    isEntryOpen: state.initative.isNewEntryOpen,
    translate: state.translation.translate.INITATIVE,
});

const actionList = {
    openNewEntry: actions.openNewEntry,
    closeNewEntry: actions.closeNewEntry,
};

export default connect(mapStateToProps, actionList)(Initative);

