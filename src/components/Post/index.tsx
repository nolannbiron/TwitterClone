import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { usePostImages } from "../../state/feed/hooks";
import { Post as PostType } from "../../state/types";
import {Gif} from "@giphy/react-components";
import { ProfilePicture } from "../User/ProfilePicture";
import PostUserDetails, { PostTime } from "./Details";
import useTimeSince from "../../hooks/useTimeSince";
import { useNavigate } from "react-router-dom";
import Content from "./Content";
import { AttachmentsViewer } from "../NewPost/components/Attachments";

interface PostProps {
    post: PostType;
    isPostPage?: boolean;
    children?: React.ReactNode;
}   

const Post = ({post, children, isPostPage}: PostProps) => {

    const theme = useTheme();
    const navigate = useNavigate();

    return(
        <Box cursor="pointer" onClick={() => navigate(`/post/${post._id}`)} borderBottom="solid 1px" borderColor={theme.colors.borderColor}>
            <Box px={4} py={5}>
                {!isPostPage ?
                    <Flex gap={3}>
                        <ProfilePicture />
                        <Box>
                            <PostUserDetails date={post.created ?? ""} />
                            <Content content={post.content} />
                            <AttachmentsViewer {...post.attachments} />
                        </Box>
                    </Flex>
                :
                    <>
                        <Flex gap={3}>
                            <ProfilePicture />
                            <PostUserDetails />
                        </Flex>
                        <Box mt={3}>
                            <Content fontSize='23px' content={post.content} />
                            <AttachmentsViewer {...post.attachments} />
                        </Box>
                    </>
                }
            </Box>
        </Box>
    )

}

Post.Time = PostTime;

export default Post;