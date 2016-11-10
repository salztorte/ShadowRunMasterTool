import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';

const BoxItem = ({
    children,
    })=>
    (
        <Box
            separator={'bottom'}
            pad={{
                horizontal: 'small',
                vertical: 'small',
            }}
        >
            {children}
        </Box>
    );


BoxItem.propTypes = {
    children: PropTypes.element,
};

export default BoxItem;
