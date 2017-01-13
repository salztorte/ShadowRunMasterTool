//@flow
import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import SVGIcon from 'grommet/components/SVGIcon';
import BoxItem from '../Componets/BoxItem.jsx';

import { Zero, One, Two, Three, Four, Five, Six } from '../Resources/Dice';
//
//const Icon: Function[] = [
//    <Zero />,
//    <One />,
//    <Two />,
//    <Three />,
//    <Four />,
//    <Five />,
//    <Six />,
//];
const Result: Function = ({
    rollResult,
    }) =>
    (
        <BoxItem>

        </BoxItem>
    );

//<Box
//    direction='row'
//>
//
//    {
//        rollResult.map((cur, i) => (
//            <SVGIcon key={i} viewBox='0 0 130 108' type='logo'>
//                {Icon[cur]}
//            </SVGIcon>
//        ))
//    }
//</Box>

Result.propTypes = {
    rollResult: PropTypes.arrayOf(PropTypes.number),
};

export default Result;
