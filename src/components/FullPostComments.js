import React from 'react';

const FullPostComments = (props) => {
    const convertTime = (x) => new Date(x).toUTCString();

    return (
        <div className="full-post-comments">
            {props.comments.map((comment, index) => {
                return (
                    <div className="comment" key={comment.id}>
                        <h4>
                            <small>from </small> {comment.name}
                            <small> at {convertTime(comment.createdAt)}</small>
                        </h4>
                        <blockquote>{comment.text}</blockquote>
                        {props.comments.length > index + 1 ? <hr></hr> : null }
                    </div>
                );
            })}
        </div>
    );
}

export default FullPostComments;
