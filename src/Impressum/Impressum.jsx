import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Toolbar from '../Componets/Toolbar.jsx';

const Impressum = ({
    translate,
    }) =>
    (
        <Box>
            <Toolbar
                title={translate.TITLE}
                showMenuIcon
            />
            <Box
                pad={{
                    horizontal: 'small',
                    vertical: 'small',
                }}
            >
                <Heading
                    tag="h1"
                >
                    {'Shadowrun Mastertool'}
                </Heading>
                <Paragraph
                    size="large"
                >
                    Version 0.1.0
                </Paragraph>
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
                <br />
                <br />
                <Paragraph
                    size="large"
                    style={{
                        maxWidth: '100%',
                    }}
                >
                    {translate.COPY_RIGTH}
                </Paragraph>
            </Box>
        </Box>
    );

Impressum.propTypes = {
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    translate: state.translation.translate.IMPRESSUM,
});


export default connect(mapStateToProps)(Impressum);
