import { Button, Flex } from "@chakra-ui/react";
import { useNewPost } from "../../../state/post/hooks";
import { AttachmentsActions } from "./Actions";
import { AttachmentsViewer } from "./Attachments";

export const Footer = () => {
    
    const {content} = useNewPost();

    return(
        <>
            <Flex borderTop="solid 1px rgb(47, 51, 54)" mt={6} pt={3} justifyContent={"space-between"} alignItems="baseline">
                <AttachmentsActions />
                <Button type="submit" variant="primary" disabled={content === ''}>Poster</Button>
            </Flex>
        </>
    )

}