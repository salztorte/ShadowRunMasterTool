import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Paragraph from 'grommet/components/Paragraph';
import Content from '../Componets/Content.jsx';

const Initative = ({
    translate,
    }) =>
    (
        <Content title={translate.TITEL}>

            <Paragraph>
                DAs ist ein Test
            </Paragraph>
        </Content>
    );

Initative.propTypes = {
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    translate: state.translation.translate.IMPRESSUM,
});


export default connect(mapStateToProps)(Initative);
