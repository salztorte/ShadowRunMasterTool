import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import SVGIcon from 'grommet/components/SVGIcon';
import BoxItem from '../Componets/BoxItem.jsx';

import { Zero, One, Two, Three, Four, Five, Six } from '../Resources/Dice';

const Icon = {
    0: <Zero />,
    1: <One />,
    2: <Two />,
    3: <Three />,
    4: <Four />,
    5: <Five />,
    6: <Six />,
};
const Result = ({
    rollResult,
    }) =>
    (
        <BoxItem>
            <Box
                direction='row'
            >

                {
                    rollResult.map((cur, i) => (
                        <SVGIcon key={i} viewBox='0 0 130 108' type='logo'>
                            {Icon[cur]}
                        </SVGIcon>
                    ))
                }
            </Box>
        </BoxItem>
    );

Result.propTypes = {
    rollResult: PropTypes.arrayOf(PropTypes.number),
};

export default Result;