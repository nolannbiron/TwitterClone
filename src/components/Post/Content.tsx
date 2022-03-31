import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Content = ({content, ...props}) => {

    return(
        <Box {...props}>
            <Text>{content}</Text>
        </Box>
    )
}

export default Content;