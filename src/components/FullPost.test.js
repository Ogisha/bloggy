import React from 'react';
import { mount } from 'enzyme';
import FullPost from './FullPost';
import { Provider } from 'react-redux';
import { store } from './../redux/store';
import { BrowserRouter, Link } from 'react-router-dom';

const activePost = {
    id: 1,
    createdAt: 1111,
    title: "Title",
    text: "Text"
}

const testSuiteSetup = (props={}) => mount(
    <Provider store={store}>
        <BrowserRouter>
            <Link to="/">Home</Link>
            <FullPost/>
        </BrowserRouter>     
    </Provider>);
let component = null;

beforeEach(() => component = testSuiteSetup());

it ('FullPost should render properly', () => {
    component.setProps({...activePost});
    expect(component.props).not.toBeFalsy();
});

it ('FullPost should fail to render without the props', () => {
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <FullPost />
            </BrowserRouter>
        </Provider>);
    const wrapper = component.find(".single-post");
    expect(wrapper.length).toBe(0);
});
