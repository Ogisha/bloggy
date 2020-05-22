import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FullPostBody from './FullPostBody';
import FullPostForm from './FullPostForm';
import FullPostComments from './FullPostComments';

const FullPost = (props) => {
    const [ comments, setComments ] = useState([])
    const { id, createdAt, title, text } = props.obj;

    useEffect(() => {
        fetch(`https://5ebd9842ec34e900161923e7.mockapi.io/post/${id}/comments`)
        .then(response => response.json())
        .then(json => {
            let arrangedByCreatedAt = json.sort((a, b) => (a.createdAt > b.createdAt ?  -1 : 1))
            setComments(arrangedByCreatedAt)
        })
    }, [id])

    const handleCommSubmit = (obj) => setComments(comments => [obj,...comments]);
    const handleCommentsUpdate = () => props.updateComments(id);

    return (
        <div className="full-post">
            <Link to="/" onClick={handleCommentsUpdate(id)}>Back</Link>
            <FullPostBody 
                title={title} 
                createdAt={createdAt} 
                text={text} 
            />
            <FullPostForm 
                id={id} 
                handleCommSubmit={handleCommSubmit} 
            />
            <FullPostComments comments={comments} />
        </div>
    );
}

export default FullPost;
