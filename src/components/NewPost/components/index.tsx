import { Flex, useTheme } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { AttachmentsViewer } from "./Attachments";
import { Form } from "./Form";

const NewPost = ({children}) => {

    const theme = useTheme();

    return(
        <>
            <Flex  mt={2} pb={5} px={4} borderBottom="solid 1px" borderColor={theme.colors.borderColor}>
                {children}
            </Flex>
        </>
    )
}

NewPost.Footer = Footer;
NewPost.Attachments = AttachmentsViewer;
NewPost.Form = Form; 

export default NewPost;
