import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { PostState } from '../types';
import { Gif, ImageAttachment } from '../../components/types';

export const postInitialState: PostState = {
    newPost: {
        content: '',
        attachments: {
            images: [],
            gif: {},
        },
    }
}

const PostSlice = createSlice({
    name: 'post',
    initialState: postInitialState,
    reducers: {
        addPostContent: (state, action) => {
            const { content } = action.payload;
            state.newPost.content = content;            
        },
        addEmoji: (state, action) => {
            const { emoji } = action.payload;
            state.newPost.content += emoji;            
        },
        addGif: (state, action) => {
            const { gif } = action.payload;
            state.newPost.attachments.gif = gif;
            state.newPost.attachments.images = [];
        },
        addImage: (state, action) => {
            let { image } = action.payload;
            state.newPost.attachments.gif = {};
            state.newPost.attachments.images = [...state.newPost.attachments.images, image];
        },
        removeAttachment: (state, action) => {
            const { index } = action.payload;
            state.newPost.attachments.images.splice(index, 1);
        },
        removeGif: (state) => {
            state.newPost.attachments.gif = {};
        },
        resetPostContent: () => {
            return postInitialState;
        },
    }
});

export const { addPostContent, addEmoji, addGif, addImage, removeAttachment, resetPostContent, removeGif } = PostSlice.actions;

export const handleCreatePost = (content?: string, attachments?: any[]) => {
    return (dispatch: any) => {
        dispatch(addPostContent({ content, attachments }));
    }
}

export const handleAddEmoji = (emoji: string) => {
    return (dispatch: any) => {
        dispatch(addEmoji({ emoji }));
    }
}

export const handleAddGif = (gif: Gif) => {
    return (dispatch: any) => {
        dispatch(addGif({ gif }));
    }
}

export const handleAddImage = (image: ImageAttachment) => {
    return (dispatch: any) => {
        console.log(image);
        dispatch(addImage({ image }));
    }
}

export const handleRemoveAttachment = (index: number) => {
    return (dispatch: any) => {
        dispatch(removeAttachment({ index }));
    }
}


export const handleRemoveGif = () => {
    return (dispatch: any) => {
        dispatch(removeGif());
    }
}

export default PostSlice.reducer;
