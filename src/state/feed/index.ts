import React from 'react';
import { createReducer, createSlice, Dispatch } from '@reduxjs/toolkit';
import {FeedState, Post} from "../types";
import { createNewPost, fetchFeedFromServer } from './helpers';
import { resetPostContent } from '../post';

export const feedInitialState: FeedState = {
    posts: [],
}

export const FeedSlice = createSlice({
    name: 'feed',
    initialState: feedInitialState,
    reducers: {
        setFeed: (state, action) => {
            const posts: Post[] = action.payload;
            state.posts = posts;
        },
        addPost: (state, action) => {
            const post: Post = action.payload;
            state.posts.push(post);
        },
    }
});

export const { setFeed, addPost } = FeedSlice.actions

export const fetchFeedData = () => async (dispatch: Dispatch) => {
    const {posts} = await fetchFeedFromServer()
    console.log(posts);
    dispatch(setFeed(posts))
}

export const addNewPost = (formData: FormData) => async (dispatch: any) => {
    const newPost = await createNewPost(formData);
    dispatch(addPost(newPost));
    dispatch(resetPostContent());
}

export default FeedSlice.reducer