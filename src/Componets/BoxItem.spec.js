/* eslint import/no-extraneous-dependencies: 0
 no-unused-expressions: 0
 */
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import Menu from 'grommet/components/icons/base/Menu';

import BoxItem from './BoxItem.jsx';

chai.use(spies);

const setup = () => {
    const wrapper = shallow(
        <BoxItem>
            <div className="unique" />
        </BoxItem>
    );
    return wrapper;
};

describe('BoxItem', () => {
    it('shoulf have the rigth formate', () => {
        const wrapper = setup();
        //TODO css prüfen
        expect(wrapper.props().separator).to.be.equal('bottom');
        expect(wrapper.props().pad.horizontal).to.be.equal('small');
        expect(wrapper.props().pad.vertical).to.be.equal('small');
    });

    it('should render the child', () => {
        const wrapper = setup();
        expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    });
});
