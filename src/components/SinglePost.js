import React from 'react';

const SinglePost = (props) => {
    return (
        <div className="single-post">
            <h4>{props.title}<small> - {props.description}</small></h4>
            <p className="total-comments">comments: {props.commentsNo}</p>
            <hr></hr>
        </div>
    );
}

export default SinglePost;
