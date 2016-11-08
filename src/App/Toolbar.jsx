import React, { PropTypes } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

const Toolbar = ({
    title,
    clickIcon,
    icon,
    }) =>
    (
        <Header
            size="small"
            justify="between"
            colorIndex="neutral-1"
            full="horizontal"
            fixed
            separator="bottom"
        >
            <Box
                onClick={clickIcon}
            >
                {icon}
            </Box>
            <Title>
                {title}
            </Title>
            <Box />
        </Header>
    );

Toolbar.propTypes = {
    title: PropTypes.string.isRequired,
    clickIcon: PropTypes.func,
    icon: PropTypes.element,
};

Toolbar.defaultProps = {
    clickIcon: () => {},
};

export default Toolbar;
