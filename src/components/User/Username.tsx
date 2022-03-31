import React from "react";
import { useUserDetails } from "../../state/auth/hooks";

const Username = () => {

    const {firstname, name} = useUserDetails();
    
    return(
        <span>@{(`${firstname}${name}`).toLocaleLowerCase()}</span>
    )
}

export default Username;