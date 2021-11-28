import React from 'react';
import PostList from './PostList';

function PortPage(props) {
    return (
        <div className="conten">
            <h2 style={{ marginBottom: "30px" }}>TIN TỨC</h2>
            <PostList
                PostPages
                enpont="/post"
            />
        </div>
    )
};

export default PortPage;