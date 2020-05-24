import React from 'react';
import { mount } from 'enzyme';
import Posts from './Posts';

Posts.defaultProps = { posts: [] };

it ('Posts should render properly', () => {
    const component = mount(<Posts />);
    const wrapper = component.find(".posts");
    expect(wrapper.length).toBe(1);
});
