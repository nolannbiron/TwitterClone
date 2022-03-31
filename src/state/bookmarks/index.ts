import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { BookmarksState } from "../types";

export const bookmarksInitialstate: BookmarksState = {
    bookmarks: [],
}

const BookmarksSlice = createSlice({
    name: "bookmarks",
    initialState: bookmarksInitialstate,
    reducers: {
        unsetBookmarks: () => {
            return bookmarksInitialstate;
        },
        addBookmarks: (state, action) => {
            const bookmark = action.payload;
            if(typeof bookmark === 'object'){
                state.bookmarks.push(bookmark);
            }
            return state;
        },
        removeBookmarks: (state, action) => {
            const index = action.payload;
            if(typeof index === 'number'){
                if(index > -1){
                    state.bookmarks.splice(index, 1);
                }
            }
            return state;
        }
    }
});

const { unsetBookmarks, addBookmarks, removeBookmarks } = BookmarksSlice.actions;

const handleAddBookmarks = (bookmark: any) => {
    return (dispatch: any) => {
        dispatch(addBookmarks(bookmark));
    }
}

const handleRemoveBookmarks = (index: number) => {
    return (dispatch: any) => {
        dispatch(removeBookmarks(index));
    }
}



export default BookmarksSlice.reducer;