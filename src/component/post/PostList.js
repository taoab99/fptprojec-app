import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "antd";
import axiosCliean from "../../RestApi/ClientAPI";
import Post from "./post";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addPostSlice } from "../../app/SliceReducer/ProductSlice";

function PostList(props) {
    const [PostList, setPostList] = useState(null);
    const dispatch = useDispatch();
    const postPages = props.PostPages;
    useEffect(() => {
        const getPost = async () => {
            const post = await axiosCliean.get(props.enpont);
            setPostList(post);
        };
        getPost();
    }, []);

    const handlePushPost = (post) => {
        const actions = addPostSlice(post);
        dispatch(actions);
    }
    const handlePost = (post) => {
        return post.map((post, index) => {
            return (
                <Post
                    key={index}
                    post={post}
                    onpost={() => handlePushPost(post)}
                />
            )
        });
    }
    if (postPages)
        return <div>
            <Row gutter={[20, 20]}>
                {
                    PostList ? PostList.map((post, index) => {
                        return (
                            <Col
                                span={24}
                                sm={12}
                                md={8}
                                key={index}
                            >
                                <Link
                                    onClick={() => handlePushPost(post)}
                                    to={`post/${post.name}`}
                                >

                                    <Card
                                        className="post-item"
                                        hoverable
                                        cover={<img alt={post.name} src={post.img} />}
                                    >
                                        <div className="cardTitle" >
                                            {post.name}
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    }) : null
                }
            </Row>
        </div >
    return (
        <>
            {PostList ? handlePost(PostList) : null}
        </>
    )
};

export default PostList;