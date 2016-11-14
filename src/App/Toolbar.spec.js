/* eslint import/no-extraneous-dependencies: 0
 no-unused-expressions: 0
 */

import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import Menu from 'grommet/components/icons/base/Menu';

import Toolbar from './Toolbar.jsx';

chai.use(spies);

const setup = () => {
    const props = {
        title: 'Test',
        toggleMenu: chai.spy(),
        icon: <Menu size="small" />,
    };
    const wrapper = shallow(<Toolbar {...props} />);
    return { props, wrapper };
};

describe('<Toolbar/>', () => {
    it('should have props the rigth Props', () => {
        Toolbar.defaultProps = {
            title: '',
        };
        const instance = shallow(<Toolbar />).instance();
        expect(instance.props.title).to.be.defined;
        expect(instance.props.toggleMenu).to.be.defined;
        expect(instance.props.icon).to.be.defined;
    });

    it('should have a MenuIcon ,Title and a RigthDiv', () => {
        const { wrapper } = setup();
        expect(wrapper.children()).to.have.length.above(2);
        expect(wrapper.children().find('Menu')).to.have.length(1);
        expect(wrapper.children().find('Title')).to.have.length(1);
    });

    it('should call clickIcon', () => {
        const { wrapper, props } = setup();
        wrapper.find('Menu').parent().simulate('click');
        expect(props.toggleMenu).have.been.called.once;
    });
});
