import React, { useState, useRef } from 'react';
import nextId from "react-id-generator";

const FullPostForm = (props) => {
    const [ name, saveName ] = useState("");
    const [ text, saveText ] = useState("");
    const nameInput = useRef(null);
    const textInput = useRef(null);

    const handleNameForm = (e) => saveName(e.target.value);
    const handleTextForm = (e) => saveText(e.target.value);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        let newComment = {
            id: nextId(),
            postId: String(props.id),
            name,
            text,
            createdAt: new Date().getTime()
        };

        nameInput.current.value = "";
        textInput.current.value = "";

        fetch(`https://5ebd9842ec34e900161923e7.mockapi.io/post/${props.id}/comments`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {id: newComment.id, postId: newComment.postId, name: newComment.name, text: newComment.text, createdAt: newComment.createdAt})
        })
        .then(() => props.handleCommSubmit(newComment))
    }

    return (
        <div className="full-post-form">
            <h4>Enter new comment: </h4>
            <form onSubmit={handleCommentSubmit}>
                <p>Your name:</p>
                <input 
                    type="text" 
                    onChange={handleNameForm} 
                    ref={nameInput}
                />
                <p>Comment: </p>
                <textarea 
                    rows="5" 
                    onChange={handleTextForm} 
                    ref={textInput}
                    required={true}
                ></textarea>
                <div className="submit-btn-container">
                    <button type="submit" >SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default FullPostForm;
