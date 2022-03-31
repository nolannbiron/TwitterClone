import { Text } from "@chakra-ui/react";
import React from "react";
import { useUserDetails } from "../../state/auth/hooks";

const Name = () => {

    const {firstname, name} = useUserDetails();
    
    return(
        <Text fontWeight="bold">{firstname + ' ' + name}</Text>
    )
}

export default Name;