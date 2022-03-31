import React from "react";
import { useParams } from "react-router-dom";
import { HeaderPage } from "../../components/Layout/HeaderPage";
import Post from "../../components/Post";
import { usePostById } from "../../state/feed/hooks";

const PostPage = () => {

    const {id} = useParams();
    const post = usePostById(id ?? "");

    if(typeof id === 'undefined' || typeof post === 'undefined'){
        return <div>No post</div>;
    }

    return (
        <>
            <HeaderPage title='Post' withBack />
            <Post post={post} isPostPage />
        </>
    );
}

export default PostPage;