import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Post from "../../components/Post";
import { useAllPosts } from "../../state/feed/hooks";
import fetchAttachment from "../../utils/fetchAttachment";

const PostsWrapper = () => {
    const posts = useAllPosts();

    return(
        <Flex direction="column">
            {posts.map((post) => {
                if(typeof post.created !== 'undefined'){
                    return (
                        <Post key={'index'+post._id} post={post} />
                    )
                }
            })}
        </Flex>
    )


}

export default PostsWrapper;