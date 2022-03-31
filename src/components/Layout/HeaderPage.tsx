import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
 
interface HeaderPageProps {
    title: string;
    withBack?: boolean;
}

export const HeaderPage = ({title, withBack}: HeaderPageProps) => {

    return(
        <Flex px={4} position={"sticky"} border="solid 1px black" top="0" py={4} bg="rgba(0, 0, 0, 0.65)" gap={5} alignItems="center" zIndex={"9999"} backdropFilter={'blur(12px)'}>
            {withBack && (
                <FaArrowLeft style={{cursor: "pointer"}} onClick={() => window.history.back()} size={16} color="white" />
            )}
            <Text as="h4" fontSize={"1.2rem"} fontWeight={"bold"}>{title}</Text>
        </Flex>
    )

}