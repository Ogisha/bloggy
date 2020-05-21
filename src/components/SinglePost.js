import React from 'react';

const SinglePost = (props) => {
    const handleOnPostClick = () => props.saveSelectedPostId(props.id);

    return (
        <div onClick={() => handleOnPostClick()} className="single-post">
            <h4>{props.title}<small> - {props.description}</small></h4>
            <p className="total-comments">comments: {props.commentsNo}</p>
            <hr/>
        </div>
    );
}

export default SinglePost;
