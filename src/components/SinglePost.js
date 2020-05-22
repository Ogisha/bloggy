import React from 'react';
import { connect } from 'react-redux';
import { setActivePost } from './../redux/actions';

const SinglePost = (props) => {
    const handleOnPostClick = () => {
        props.setActivePost({
            id: props.id,
            title: props.title,
            text: props.text,
            createdAt: props.createdAt
        })
    }
        
    return (
        <div onClick={() => handleOnPostClick()} className="single-post">
            <h4>{props.title}<small> - {props.description}</small></h4>
            <p className="total-comments">comments: {props.commentsNo}</p>
            <hr />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setActivePost: post => dispatch(setActivePost(post))
});

export default connect(null, mapDispatchToProps)(SinglePost);
