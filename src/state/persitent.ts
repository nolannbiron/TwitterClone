import React from "react";
import { authInitialState } from "./auth";
import { bookmarksInitialstate } from "./bookmarks";
import { feedInitialState } from "./feed";
import { postInitialState } from "./post";
import { State } from "./types";

class StateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("http://seppadiary.com:state");

            if (serializedState === null) {
                throw new Error;
            }

            return {
                post: JSON.parse(serializedState)
            };
        }
        catch (err) {
        }
    }

    saveState(state: State) {
        try {
            let serializedState = JSON.stringify(state.post);
            localStorage.setItem("http://seppadiary.com:state", serializedState);
        }
        catch (err) {
        }
    }
}

export default StateLoader;