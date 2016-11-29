import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';

import SVGIcon from 'grommet/components/SVGIcon';
//import One from 'babel!svg-react!../../dice/one.svg';
import Zero from '../../dice/zero.svg';
import One from '../../dice/one.svg';
import Two from '../../dice/two.svg';
import Three from '../../dice/three.svg';
import Four from '../../dice/four.svg';
import Five from '../../dice/five.svg';
import Six from '../../dice/six.svg';
import BoxItem from '../Componets/BoxItem.jsx';

const DiceIcon = {
    0: <Zero />,
    1: <One />,
    2: <Two />,
    3: <Three />,
    4: <Four />,
    5: <Five />,
    6: <Six />,
};

//<Paragraph>
//    {rollResult.join('; ')}
// </Paragraph>

const DiceResult = ({
    rollResult,
    }) =>
    (
        <BoxItem>
            <Box
                direction="row"
            >

                {
                    rollResult.map((cur, i) => (
                        <SVGIcon key={i} viewBox="0 0 130 108" type="logo">
                            {DiceIcon[cur]}
                        </SVGIcon>
                    ))
                }
            </Box>
        </BoxItem>
    );

//<ListPlaceholder unfilteredTotal={2} emptyMessage="You do not have any items at the moment." addControl={<Button a11yTitle="Add item" />} />

//{
//    rollResult.map((cur, i) => (
//        <SVGIcon key={i} viewBox="0 0 130 108" type="logo">
//            {DiceIcon[cur]}
//        </SVGIcon>
//    ))
//}

//<BoxItem>
//    <Box
//        direction="row"
//    >
//        {
//            rollResult.map((cur, i) => (
//                <SVGIcon key={i} viewBox="0 0 130 108" type="logo">
//                    {DiceIcon[cur]}
//                </SVGIcon>
//            ))
//        }
//    </Box>
//</BoxItem>


DiceResult.propTypes = {
    rollResult: PropTypes.arrayOf(PropTypes.number),
};

export default DiceResult;
