import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Toolbar from './Toolbar.jsx';

describe('<Toolbar/>', () => {
    it('should have a title', () => {
        const wrapper = shallow(<Toolbar title="test" clickIcon={() => {}}/>);
        console.log(wrapper.props());
        //expect(wrapper.props.children.find('title')).to.have.length(1);
    });


    it('test', () => {
        expect(true).to.be.true;
    });
});
