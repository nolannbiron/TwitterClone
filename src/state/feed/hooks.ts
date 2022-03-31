import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeedData } from ".";
import fetchAttachment from "../../utils/fetchAttachment";
import { State } from "../types";

export const useAllPosts = () => {
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch(fetchFeedData())
    }, [dispatch])
  
    return useSelector((state: State) => state.feed.posts);
}

export const usePostById = (id: string) => {
    return useSelector((state: State) => state.feed.posts.find(post => post._id === id));  
}

export const usePostImages = (id: string) => {

    const post = usePostById(id);
    console.log(post);
    const [images, setImages] = React.useState<any[]>([])
    
    useMemo(() => {
        if(typeof post?.attachments === "undefined") {
            return;
        }

        post.attachments.images.map(async(attachment) => {
            const file = await fetchAttachment(attachment).then(data => data);
            images.indexOf(file) === -1 && setImages((prev) => [...prev, file]);
        });
    }, [])

    return images

}