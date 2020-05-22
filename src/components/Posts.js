import React from 'react';
import { Link } from 'react-router-dom';
import SinglePost from './SinglePost';

const Posts = (props) => (
    <div className="posts">
    {props.posts.map(post => 
        <Link key={post.id} to={`/post/${post.id}`}>
            <SinglePost
                id={post.id} 
                title={post.title}
                createdAt={post.createdAt}
                text={post.text}
                commentsNo={props.commentsNo[post.id - 1]} 
                description={post.description}
            />
        </Link>
    )}
    </div>
)

export default Posts;
