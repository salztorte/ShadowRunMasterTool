// @flow
import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Menu from 'grommet/components/icons/base/Menu';
import Toolbar from './Toolbar.jsx';


const Content: Function = ({
    title,
    children,
    pad,
    }) =>
    (
        <Box>
            <Toolbar
                title={title}
                icon={<Menu size='small' />}
            />
            <Box
                pad={pad}
            >
                {children}
            </Box>
        </Box>
    );

Content.propTypes = {
    title: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
    pad: PropTypes.string,
};

Content.defaultProps = {
    pad: 'none',
};

export default Content;
