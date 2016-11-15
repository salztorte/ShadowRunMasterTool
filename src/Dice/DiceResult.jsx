import React, { PropTypes } from 'react';

import Paragraph from 'grommet/components/Paragraph';
import BoxItem from '../Componets/BoxItem.jsx';

const DiceResult = ({
    rollResult,
    }) =>
    (
        <BoxItem>
            <Paragraph>
                {rollResult.join('; ')}
            </Paragraph>
        </BoxItem>

    );

DiceResult.propTypes = {
    rollResult: PropTypes.arrayOf(PropTypes.number),
};

export default DiceResult;
