import React from "react";
import { Flex } from "@chakra-ui/react";
import { LoginCard as LoginWrapper } from "./styled";

const LoginPage = () => {
    return(
        <Flex h="100vh" w="100%" justifyContent='center' alignItems="center" bg="#242d35">
            <LoginWrapper />
        </Flex>
    )
}

export default LoginPage;