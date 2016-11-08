import React, { PropTypes } from 'react';

import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';

import { connector } from '../tools';

const Impressum = ({
    translate,
    }) =>
    (
        <Section>
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
        </Section>
    );

Impressum.propTypes = {
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    translate: state.translation.translate.IMPRESSUM,
});


export default connector(mapStateToProps)(Impressum);
