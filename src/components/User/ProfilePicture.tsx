import React from "react";
import { Avatar } from "@chakra-ui/react";
import { useUserDetails } from "../../state/auth/hooks";
import { useNavigate } from "react-router-dom";


export const ProfilePicture = (props) => {
    const {picture, _id} = useUserDetails();
    const navigate = useNavigate();

    return (
        <Avatar zIndex={99} onClick={(e) => {e.stopPropagation(); navigate(`/profile/${_id}`)}} src={picture} width="48px" height="48px" {...props} />
    )
}