/* eslint import/no-extraneous-dependencies: 0
          no-unused-expressions: 0
 */
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import Toolbar from './Toolbar.jsx';

chai.use(spies);

describe('<Toolbar/>', () => {
    let setup;
    before(() => {
        const props = {
            title: 'Test',
            clickIcon: chai.spy(),
        };
        const wrapper = shallow(<Toolbar {...props} />);
        setup = { props, wrapper };
    });

    it('should have a MenuIcon ,Title and a RigthDiv', () => {
        const { wrapper } = setup;
        expect(wrapper.children()).to.have.length(3);
        expect(wrapper.children().find('Menu')).to.have.length(1);
        expect(wrapper.children().find('Title')).to.have.length(1);
    });

    it('should have props for title and clickIcon', () => {
        const { wrapper } = setup;
        expect(wrapper.props('title')).to.be.defined;
        expect(wrapper.props('clickIcon')).to.be.defined;
    });

    it('should call clickIcon', () => {
        const { wrapper, props } = setup;
        wrapper.find('Menu').simulate('click');
        expect(props.clickIcon).have.been.called.once;
    });
});
