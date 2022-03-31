import React from "react";
import { createAction } from "@reduxjs/toolkit";
import { Post } from "../types";
import axios from "axios"

export const createNewPost = async(formData: FormData) => {
    return axios({
        url: "http://localhost:3042/post",
        method: "POST",
        data: formData,
    }).then(res => {
        return res.data.data;
    }).catch(err => {
        console.log(err)
    });
}

export const fetchFeedFromServer = async() => {
    const response = await fetch("http://localhost:3042/post/");
    const {data} = await response.json();
    return {
        posts: data as Post[] 
    };
}