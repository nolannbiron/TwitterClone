import React from "react";
import styled from "@emotion/styled";
import { IconType } from "react-icons";

export const StyledInput = styled.input`
    width: 100%;
    padding: 15px 0;
    background-color: transparent;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: rgba(255, 255, 255, 0.23);
    }
`;

const StyledSearchBarWrapper = styled.div`
    width: 100%;
    border-radius: 50px;
    border: solid 1px rgb(32, 35, 39);
    background: rgb(32, 35, 39);
    padding: 0px 24px;
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const StyledSearchBar = ({Icon}: {Icon?: React.ReactNode}) => {
    return(
        <StyledSearchBarWrapper>
            {Icon ?? ""}
            <StyledInput placeholder="Recherchez" type={"text"} />
        </StyledSearchBarWrapper>
    )
}