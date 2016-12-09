// @flow
import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

const BoxItem: Function = ({
    label,
    children,
    }) =>
    (
        <Box
            separator={'bottom'}
            pad={{
                horizontal: 'small',
                vertical: 'small',
            }}
        >
            <Heading
                tag='h4'
                strong
            >
                {label}
            </Heading>
            {children}
        </Box>
    );


BoxItem.propTypes = {
    label: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
};

export default BoxItem;
