import React from 'react';
import { shallow } from 'enzyme';
import FullPostForm from './FullPostForm';

it ('FullPostForm should render properly', () => {
    const component = shallow(<FullPostForm />);
    const wrapper = component.find(".full-post-form");
    expect(wrapper.length).toBe(1);
});
