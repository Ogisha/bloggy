import React from 'react';

const FullPostBody = (props) => (
    <div className="post-title">
        <h2>{props.title}</h2>
        <p>&nbsp;&nbsp;&nbsp;{props.text}
            <span>created at: {props.createdAt}</span>
        </p>
    </div>
);

export default FullPostBody;
