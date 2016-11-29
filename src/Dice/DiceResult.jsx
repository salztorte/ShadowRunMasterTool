import React, { PropTypes } from 'react';

import Paragraph from 'grommet/components/Paragraph';
import SVGIcon from 'grommet/components/SVGIcon';
//import One from 'babel!svg-react!../../dice/one.svg';
import One from '../../dice/one.svg';
import BoxItem from '../Componets/BoxItem.jsx';

const DiceResult = ({
    rollResult,
    }) =>
    (
        <BoxItem>
            <Paragraph>
                {rollResult.join('; ')}
            </Paragraph>
            <SVGIcon viewBox="0 0 130 108" type="logo">
                <One />
            </SVGIcon>
        </BoxItem>
    );


DiceResult.propTypes = {
    rollResult: PropTypes.arrayOf(PropTypes.number),
};

export default DiceResult;
