import React from "react";
import { HiSearch } from "react-icons/hi";
import { StyledSearchBar } from "./styled";

const SearchBar = () => {
    return (
        <>
            <StyledSearchBar Icon={<HiSearch color="rgba(255, 255, 255, 0.23)" size={22} />} /> 
        </>
    )
}

export default SearchBar;