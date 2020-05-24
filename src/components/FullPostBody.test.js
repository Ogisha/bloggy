import React from 'react';
import { shallow } from 'enzyme';
import FullPostBody from './FullPostBody';

it ('FullPostBody should render properly', () => {
    const component = shallow(<FullPostBody />);
    const wrapper = component.find(".post-title");
    expect(wrapper.length).toBe(1);
});
