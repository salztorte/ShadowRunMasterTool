import React, { PropTypes } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/icons/base/Menu';
import Box from 'grommet/components/Box';

const toolbar = ({
    title,
    clickIcon,
    }) =>
    (
        <Header
            size="small"
            justify="between"
            colorIndex="neutral-1"
            full="horizontal"
            fixed
        >
            <Box
                onClick={clickIcon}
            >
                <Menu
                    size="small"
                />
            </Box>
            <Title>
                {title}
            </Title>
            <Title />
        </Header>
    );

toolbar.propTypes = {
    title: PropTypes.string.isRequired,
    clickIcon: PropTypes.func.isRequired,
};


export default toolbar;
