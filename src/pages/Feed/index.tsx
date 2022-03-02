import { Box, Flex, Heading, List, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Location, useLocation, useParams, useSearchParams } from "react-router-dom";
import NewPost from "../../components/NewPost";

type LocationProps = {
    state: {
        newPost: boolean;
    }
}

const FeedPage = () => {

    const [focusPost, setFocusPost] = useState<boolean>(false);
    const location = useLocation();
    let newPost = (location as LocationProps).state?.newPost;

    useEffect(() => {
        if(newPost && !focusPost){
            setFocusPost(true) 
        }else{
            setFocusPost(false)
        }
    }, [newPost, location]);

    return (
        <Box pb={6}>
            <Box px={4} position={"sticky"} border="solid 1px black" top="0" py={4} bg="rgba(0, 0, 0, 0.65)" zIndex={"9999"} backdropFilter={'blur(12px)'}>
                <Text as="h4" fontSize={"1.2rem"} fontWeight={"bold"}>Home</Text>
            </Box>
            <Box>
                <NewPost focus={focusPost ?? false} />
                <Flex px={4} mt={5} flexDir={"column"} gap="20px">
                    <Box bg="white" width={"100%"} height="400px"></Box>
                    <Box bg="white" width={"100%"} height="400px"></Box>
                    <Box bg="white" width={"100%"} height="400px"></Box>
                    <Box bg="white" width={"100%"} height="400px"></Box>
                    <Box bg="white" width={"100%"} height="400px"></Box>
                    <Box bg="white" width={"100%"} height="400px"></Box>
                    <Box bg="white" width={"100%"} height="400px"></Box>
                    <Box bg="white" width={"100%"} height="400px"></Box>
                    <Box bg="white" width={"100%"} height="400px"></Box>

                </Flex>
            </Box>
       </Box>
    );
};

export default FeedPage;