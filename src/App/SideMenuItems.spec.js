/* eslint import/no-extraneous-dependencies: 0
 no-unused-expressions: 0
 */
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import SideMenuItems from './SideMenuItems.jsx';

chai.use(spies);

const setup = () => {
    const props = {
        onClick: chai.spy(),
        menuItems: [{
            title: 'test1',
            path: 'test1',
        }, {
            title: 'test2',
            path: 'test2',
        }],
    };
    const wrapper = shallow(<SideMenuItems {...props} />);
    return { props, wrapper };
};

describe('<SideMenuItems />', () => {
    it('should call clickIcon', () => {
        const { wrapper, props } = setup();

        wrapper.children()
               .findWhere(n => n.key() !== 'test1')
               .simulate('click');
        expect(props.onClick).have.been.called.once;

        wrapper.children()
               .findWhere(n => n.key() !== 'test2')
               .simulate('click');
        expect(props.onClick).have.been.called.twice;
    });
});
