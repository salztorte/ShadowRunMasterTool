import React, { PropTypes } from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

const SearchItem = ({
    item,
    }) =>
    (
        <Box
            separator="bottom"
            direction="row"
            pad={{
                vertical: 'small',
                horizontal: 'small',
            }}
        >
            <Box
                textAlign="left"
                style={{
                    width: '50%',
                }}
            >
                {item.term}
            </Box>
            <Box
                textAlign="right"
                style={{
                    width: '50%',
                }}
            >

                {item.pages}
            </Box>
        </Box>
    );

SearchItem.propTypes = {
    item: PropTypes.any.isRequired,
};

export default SearchItem;
