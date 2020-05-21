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
        .then(json => setComments(json))
    }, [id])

    const handleCommSubmit = (obj) => setComments(comments => [obj,...comments]);

    return (
        <div className="full-post">
            <Link to="/">Back</Link>
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
