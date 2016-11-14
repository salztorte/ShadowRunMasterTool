import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

const Impressum = ({
    translate,
    }) =>
    (
        <Box
            pad={{
                horizontal: 'small',
            }}
        >
            <Heading
                tag="h1"
            >
                Shadowrun Mastertool
            </Heading>
            <Paragraph
                size="large"
            >
                Version 0.1.0
            </Paragraph>
            <br />

            <Heading
                tag="h2"
            >
                {`${translate.DEVELOPER}:`}
            </Heading>
            <Paragraph
                size="large"
            >
                Oliver Franzen
            </Paragraph>
        </Box>
    );

Impressum.propTypes = {
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    translate: state.translation.translate.IMPRESSUM,
});


export default connect(mapStateToProps)(Impressum);
