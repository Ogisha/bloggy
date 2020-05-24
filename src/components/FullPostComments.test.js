import React from 'react';
import { mount, shallow } from 'enzyme';
import FullPostComments from './FullPostComments';

FullPostComments.defaultProps = { 
    comments: [
        {
            id:"2",
            createdAt: 5686663436,
            name:"This is some text",
            postId: 5,
            text:"Description"
        }
    ]
};

it ('FullPostComments should render properly', () => {
    const component = mount(
        <FullPostComments>
            {FullPostComments.defaultProps.comments.map((comment, index) => {
                <div className="comment" key={comment.id}>
                </div>
            }) 
        }   
        </FullPostComments>        
    )
    const wrapper = component.find(".full-post-comments");
    expect(wrapper.length).toBe(1);
});
