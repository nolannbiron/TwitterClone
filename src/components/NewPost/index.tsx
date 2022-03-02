import React, { useEffect } from "react";
import {Avatar, Box, Button, Flex, Textarea} from "@chakra-ui/react";
import {BsImageFill} from "react-icons/bs";
import {RiFileGifLine} from "react-icons/ri";
import {FiSmile} from "react-icons/fi";

const NewPost = ({focus}: {focus: boolean}) => {
    
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const [errorTextarea ,setErrorTextarea] = React.useState(true);
    const [rows, setRows] = React.useState(1);

    useEffect(() => {
        if(focus === true && textareaRef.current){
            textareaRef.current.focus();
        }
    }, [focus]);


    const handleTexteareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length > 0) {
            setErrorTextarea(false);
        } else {
            setErrorTextarea(true);
        }
    };

    useEffect(() => {
        const textArea = document.querySelector('textarea')
        const textRowCount = textArea ? textArea.value.split("\n").length : 0
        setRows(textRowCount + 1);
    }, [handleTexteareaChange]);

    return(
        <Box mt={2} pb={5} px={4} borderBottom="solid 1px grey">
            <Flex>
                <Avatar src="https://pbs.twimg.com/profile_images/1207752002379407362/Yvp0iHI4_x96.jpg" />
                <Box width="100%" ml={4}>
                    <Textarea pl={0} rows={rows} onChange={handleTexteareaChange} ref={textareaRef} variant={"newPost"} placeholder="What's up ?" width="100%"></Textarea>
                    <Flex mt={3} justifyContent={"space-between"}>
                        <Flex gap={4} color="blue.500" alignItems="center">
                            <BsImageFill />
                            <RiFileGifLine />
                            <FiSmile />
                        </Flex>
                        <Flex>
                            <Button variant="primary" disabled={errorTextarea}>Poster</Button>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default NewPost;