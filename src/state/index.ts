import React from "react"
import { configureStore, createStore } from '@reduxjs/toolkit'
import feed from './feed'
import auth from './auth'
import post from "./post"
import bookmarks from "./bookmarks"
import StateLoader from "./persitent"
import { State } from "./types"

const {loadState, saveState} = new StateLoader();
const loadedState = loadState();

const store = configureStore({
    reducer: {
        feed,
        auth,
        post,
        bookmarks
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    preloadedState: loadedState
});

store.subscribe(() => {
    saveState(store.getState())
});

export default store;