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
            >
                Shadowrun-Logo und Inhalte mit freundlicher Genehmigung von Pegasus Spiele unter Lizenz von
                Catalyst Game Labs und Topps Company, Inc. © 2014 Toppy Company, Inc. Alle Rechte vorbehalten.
                Shadowrun ist eine eingetragene Handelsmarke von Topps Company, Inc.
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
