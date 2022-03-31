import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAttachment from '../../utils/fetchAttachment';
import { useUserDetails } from '../auth/hooks';
import { addNewPost } from '../feed';
import { State } from '../types';

export const useNewPost = () => {
    const user = useUserDetails();
    const {attachments, content} = useSelector((state: State) => state.post.newPost);
    const dispatch = useDispatch();

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        if(content !== '' && user._id){
            const formData = new FormData(e.target);
            formData.append('author', user._id);
            if(attachments.gif.type){
                formData.append('gif', JSON.stringify(attachments.gif));
            }
            attachments.images.map(attachment => {
                formData.append('attachments', attachment);
            })
            dispatch(addNewPost(formData));
        }
    }

    return {attachments, content, handleSubmit};
}


export const useImages = (imagesToFetch: any[]) => {

    const [images, setImages] = React.useState<any[]>([])

    const checkImage = useCallback(async(image: any) => {
        return fetchAttachment(image);
    }, [])

    useEffect(() => {
        imagesToFetch.map(async(image) => {
            if(typeof image === 'string'){
                const imageData = await checkImage(image);
                setImages((prevState) => [...prevState, imageData]);
            }else if(image.url){
                setImages((prevState) => [...prevState, image.url]);
            }
        });
    }, [])


    console.log(images);

    return images

}