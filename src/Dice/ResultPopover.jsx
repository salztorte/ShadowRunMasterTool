//@flow
import React, { PropTypes } from 'react';

import Layer from 'grommet/components/Layer';
import Paragraph from 'grommet/components/Paragraph';


const ResultObj  = function (rollResult: number[]) {
    this.succsess = rollResult.filter(v => v >= 5).length;
    this.ones = rollResult.filter(v => v === 1).length;
    this.allRolls = rollResult.length;
    this.isSlip = this.allRolls / 2 <= this.ones;
    this.isCrit = this.isSlip && this.ones > this.succsess;
};

const ResultPopover: Function  = ({
    onClose,
    rollResult,
    translate,
    }) => {
    const result = new ResultObj(rollResult);
    return (
        <Layer
            algin="top"
            onClose={onClose}
        >
            <Paragraph> {translate.TEXT_POPOVER.replace('COUNT', result.succsess)}</Paragraph>
            { result.isSlip ? <Paragraph>
                {result.isCrit ? translate.RESULT_CRIT_SLIP : translate.RESULT_SLIP}
            </Paragraph> : null
            }
        </Layer>
    );
};

ResultPopover.propTypes = {
    onClose: PropTypes.func,
    rollResult: PropTypes.arrayOf(PropTypes.number),
    translate: PropTypes.object,
};

export default ResultPopover;
