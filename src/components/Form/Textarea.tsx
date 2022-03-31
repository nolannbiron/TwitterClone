import React from "react";
import { chakra, Textarea as InputArea } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNewPost } from "../../state/post/hooks";

import TextareaAutosize from 'react-textarea-autosize'

const CustomTextarea = chakra(TextareaAutosize, {
    baseStyle:{
        fontSize: "1.3rem",
        border: "none",
        resize: "none",
        background: "transparent",
        paddingBottom: "1rem",
        borderRadius: 0,
        "_focus": {
            outline: 0,
            // borderBottom: "solid 1px",
            // borderColor: "blue.500",
        }
    }
});

const Textarea = ({value, onChange, placeholder, ...props}) => {
    const textareaRef = React.createRef<HTMLTextAreaElement>();
    const [rows, setRows] = React.useState<number>(1);

    React.useEffect(() => {
        const textRowCount = textareaRef.current ? textareaRef.current?.value.split("\n").length : 0;
        setRows(textRowCount + 1);
    });


    return(
        <CustomTextarea value={value} minRows={1} ref={textareaRef} onChangeCapture={(e) => onChange(e)} name="content" placeholder={placeholder} width={props?.width ?? "100%"} />
    )

}


export default Textarea;