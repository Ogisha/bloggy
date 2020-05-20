import React from 'react';
import SinglePost from './SinglePost';

const Posts = (props) => {
    return (
        <div className="posts">
            {props.posts.map(post => <SinglePost title={post.title} commentsNo={props.commentsNo[post.id -1]} description={post.description}/>)}
        </div>
    );
}

export default Posts;
