import React, { PropTypes } from 'react';
import { ListItem } from 'react-onsenui';

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
        <ListItem style={{ width: '100%' }}>
            <div className="myListItem">
                <div style={{ height: '1em'}}>{rollResult.join("; ")}</div>
            </div>
        </ListItem>
    );

DiceResult.propTypes = {
    rollResult: PropTypes.arrayOf(PropTypes.number),
};

export default DiceResult;
