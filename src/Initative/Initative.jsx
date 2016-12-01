import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Content from '../Componets/Content.jsx';
import InitativeHeader from './InitativeHeader.jsx';
//import BoxItem from '../Componets/BoxItem.jsx';

const Initative = ({
    translate,
    }) =>
    (
        <Content
            title={translate.TITLE}
        >
            <InitativeHeader
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
