import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
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
        <Box
            separator={'bottom'}
            pad={{
                horizontal: 'small',
                vertical: 'small',
            }}
        >
            <Paragraph>
                {rollResult.join('; ')}
            </Paragraph>
        </Box>

    );

DiceResult.propTypes = {
    rollResult: PropTypes.arrayOf(PropTypes.number),
};

export default DiceResult;
