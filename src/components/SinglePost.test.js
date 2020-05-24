import React from 'react';
import { mount, shallow } from 'enzyme';
import SinglePost from './SinglePost';
import { Provider } from 'react-redux';
import { store } from './../redux/store';

const tempProps = [{
    id:"2",
    title:"Title",
    createdAt: "5686663436",
    text:"This is some text",
    commentsNo:5,
    description:"Description"
}]

const testSuiteSetup = () => mount(
    <Provider store={store}>
        <SinglePost
            id={tempProps}
            title={tempProps.title} 
            createdAt={tempProps.createdAt} 
            text={tempProps.text} 
            commentsNo={tempProps.commentsNo} 
        />
    </Provider>
);
let component = null;

beforeEach(() => component = testSuiteSetup());

it ('SinglePost should render properly', () => {
    const wrapper = component.find(".single-post");
    expect(wrapper.length).toBe(1)
});

it ('SinglePost shouldn\'t render without props', () => {
    const component = shallow(<Provider store={store}><SinglePost /></Provider>);
    const wrapper = component.find(".single-post");
    expect(wrapper.length).toBe(0);
});
