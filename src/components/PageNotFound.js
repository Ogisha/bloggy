import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <h2>404 - Page not found!</h2>
        <p>
            <Link to="/">Go to main</Link>
        </p>
    </div>
);

export default PageNotFound;
