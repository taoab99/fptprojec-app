import React from "react";
import { Link } from "react-router-dom";

function Post({ post, onpost }) {
    return (
        <div className="post">
            <div className="postItem">
                <Link
                    onClick={() => onpost(post)}
                    to={`/post/${post.name}`}
                >
                    <div className="postItem-box">
                        <div className="pt50">
                            <img src={post.img} alt="ảnh bài đăng" />
                        </div>
                    </div>
                    <div className="postTitle">
                        <p>{post.name}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
};


export default Post;