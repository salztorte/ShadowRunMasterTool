import React, { PropTypes } from 'react';

import Paragraph from 'grommet/components/Paragraph';
import BoxItem from '../Componets/BoxItem.jsx';

//const countSucAndFail = result => result.reduce((res, cur) => {
//  if (cur >= 5) {
//    res.succsess++;
//  } else if (cur == 1) {
//    res.fail++;
//  }
//  return res;
//}, {
//  succsess: 0,
//  fail: 0,
//});

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
