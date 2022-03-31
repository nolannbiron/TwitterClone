import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from ".";
import { State } from "../types";

export const useUser = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return useSelector((state: State) => state.auth);
}

export const useUserDetails = () => {

    const dispatch = useDispatch();
    const user = useSelector((state: State) => state.auth.user);
    
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);


    return user;

}