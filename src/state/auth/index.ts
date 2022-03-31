import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthState, LoginCredentials, SignUpCredentials } from "../types";
import { login, signup } from "./helpers";

export const authInitialState: AuthState = {
    loggedIn: false, 
    loading: false,
    initialized: false, 
    user: {
        picture: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
    }
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        setUser: (state, action) => {
            const user = action.payload;
            if(typeof user === 'object'){
                state.user = user;
            }
            return state;
        },
        unsetUser: () => {
           return authInitialState;
        },
        fetching: (state) => {
            return {...state, loading: true, loggedIn: false, initialized: false};
        },
        success: (state) => {
            return {...state, loggedIn: true, loading: false, initialized: true};
        }
    }
});


export const { setUser, unsetUser, fetching, success } = AuthSlice.actions;

export const handleLogin = (email: string, password: string) => {
    return async (dispatch: any) => {
        dispatch(fetching());
        return login(email, password).then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(setUser(user));
            dispatch(success());
        }).catch(() => {
            dispatch(unsetUser());
        })
    }
}

export const handleSignup = (user: SignUpCredentials) => {
    return (dispatch: any) => {
        const newUser = signup(user);
        dispatch(setUser(newUser));
    }
}

export const fetchUser = () => {
    return async(dispatch: any) => {
        try{
            dispatch(fetching());
            const user = localStorage.getItem("user"); 
            if(user){
                dispatch(setUser(JSON.parse(user)));
                dispatch(success());
            }
        }catch(err: any){
            return dispatch(unsetUser())
        }
    }
}

export const handleLogout = () => {
    return (dispatch: any) => {
        localStorage.removeItem("user"); 
        dispatch(unsetUser());
    }
}

export default AuthSlice.reducer;

