import { Box, Flex, Heading, List, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HeaderPage } from "../../components/Layout/HeaderPage";
import NewPost from "../../components/NewPost";
import PostsWrapper from "./PostsWrapper";
import {useWindowSize} from "@nolannbiron/usehooks";

const FeedPage = () => {

    return (
        <Box pb={6}>
            <HeaderPage title='Home' />
            <Box>
                <NewPost />
                <PostsWrapper />
            </Box>
       </Box>
    );
};

export default FeedPage;