import React from "react";
import { useSelector } from 'react-redux';

function PostItem() {
    const post = useSelector(state => state.product.postslice);
    return (
        <div>
            <div className="post-header">
                <img src={post.img} alt={post.name} />
                <div className="overlay">
                    <h2 >{post.name}</h2>
                </div>
            </div>
            <div className="conten">
                <div className="post-body">
                    <div className="font16 fontbold font-left mb50">
                        {post.title}
                    </div>
                    {
                        post.listContent ? <div>
                            {
                                post.listContent.map((list, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={list.img} alt="ảnh" className="mb50" />
                                            <p className="font16 font-left mb50">{list.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div> : "không có bài viết nào"
                    }
                </div>

            </div>
        </div>
    )
};

export default PostItem;