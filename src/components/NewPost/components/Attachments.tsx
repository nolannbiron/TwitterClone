import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { handleRemoveAttachment, handleRemoveGif } from "../../../state/post";
import { useImages, useNewPost } from "../../../state/post/hooks";
import {Gif} from "@giphy/react-components";
import { Attachments } from "../../../state/types";

export const AttachmentsViewer = ({images, gif}: Attachments) => {

    const dispatch = useDispatch();
    images = useImages(images);

    return(
        <Grid gap={3} gridTemplateColumns={`repeat(${images.length > 0 ? images.length : 1}, 1fr)`}>
            {images.length > 0 && images.map((attachment, index) => {                
                return (
                    <GridItem key={'att'+index}>
                        <img onClick={() => dispatch(handleRemoveAttachment(index))} style={{width: '100%'}} src={attachment} /> 
                    </GridItem>
                )
            })}
            {gif && gif.type && (  
                <Box onClick={(e) => {dispatch(handleRemoveGif())}} zIndex="99999">
                    <Gif hideAttribution width={300} gif={gif as any} noLink />
                </Box>
            )}
        </Grid>
    )

}