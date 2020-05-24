import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound';

const testSuiteSetup = (props={}) => shallow(<PageNotFound {...props} />);
let component = null;

beforeEach(() => component = testSuiteSetup());

it ('PageNotFound should render properly', () => {
    const wrapper = component.find(".page-not-found");
    expect(wrapper.length).toBe(1);
});
