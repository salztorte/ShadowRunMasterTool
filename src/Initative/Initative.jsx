import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Content from '../Componets/Content.jsx';
import Header from './Header.jsx';
//import BoxItem from '../Componets/BoxItem.jsx';

const Initative = ({
    translate,
    }) =>
    (
        <Content
            title={translate.TITLE}
        >
            <Header
                translate={translate}
            />
        </Content>
    );

Initative.propTypes = {
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    translate: state.translation.translate.INITATIVE,
});


export default connect(mapStateToProps)(Initative);
