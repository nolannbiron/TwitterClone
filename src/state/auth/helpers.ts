import React from "react";
import { SignUpCredentials, User } from "../types";
import axios from "axios";

export const login = async(email: string, password: string): Promise<User> => {
    const res: any = await axios("http://localhost:3042/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            email,
            password,
        })
    }).then((res) => res.data.data).catch((err) => console.log(err));

    return res ?? null;
}

export const signup = (user: SignUpCredentials) => {
    const res: any = fetch("http://localhost:3042/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...user
        })
    }).then(res => res.json());

    return res.data as User ?? null;
}