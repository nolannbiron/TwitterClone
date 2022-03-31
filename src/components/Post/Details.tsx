import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import useTimeSince from "../../hooks/useTimeSince";
import { useUserDetails } from "../../state/auth/hooks";
import { usePostById } from "../../state/feed/hooks";
import Name from "../User/Name";
import Username from "../User/Username";

interface PostTimeProps{
    date: string;
    shorten?: boolean;
}

interface PostUserDetailsProps{
    date?: string;
}

export const PostTime = ({date, shorten = false}: PostTimeProps) => {
    
    const time = useTimeSince(new Date(date));

    return (
        <time dateTime={date}>{shorten ? time : new Date(date).toLocaleString()}</time>
    );
}

const PostUserDetails = ({date}: PostUserDetailsProps) => {

    return (
        <Flex fontSize="15px" gap="4px" lineHeight={1} flexDirection={!date ? 'column' : "row"} alignItems={!date ? 'start' : "center"}>
            <Name />
            <Flex alignItems="center" color="rgb(113, 118, 123)" gap="2px">
                <Username />
                {date &&  <><Text fontSize="26px">·</Text> <PostTime date={date ?? ""} shorten /></>}
            </Flex>
       </Flex>
    );
}

export default PostUserDetails;
