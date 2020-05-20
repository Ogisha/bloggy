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
        props.handleCommSubmit(newComment);
        nameInput.current.value = "";
        textInput.current.value = "";
    }

    return (
        <div className="full-post-form">
            <h4>Enter new comment: </h4>
            <form>
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
                ></textarea>
                <div className="submit-btn-container">
                    <button type="submit" onClick={handleCommentSubmit}>SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default FullPostForm;
