import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Content from '../Componets/Content.jsx';
import Header from './Header.jsx';

import { action } from './Action';

const Initative = ({
    translate,
    openAdd,
    closeAdd,
    }) =>
    (
        <Content
            title={translate.TITLE}
        >
            <Header
                translate={translate}
                add={openAdd}
            />

        </Content>
    );

Initative.propTypes = {
    closeAdd: PropTypes.func,
    openAdd: PropTypes.func,
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    translate: state.translation.translate.INITATIVE,
});

const actionList = {
    closeAdd: action.closeAdd,
    openAdd: action.openAdd,
};

export default connect(mapStateToProps, actionList)(Initative);

