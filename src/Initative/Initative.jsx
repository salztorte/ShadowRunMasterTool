import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
;
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

const Initative = ({
    translate,
    }) =>
    (
        <Box
            pad={{
                horizontal: 'small',
            }}
        >

            <Paragraph>
                DAs ist ein Test
            </Paragraph>
        </Box>
    );

Initative.propTypes = {
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
});


export default connect(mapStateToProps)(Initative);
