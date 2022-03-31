import { chakra } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { handleCreatePost } from "../../../state/post";
import { useNewPost } from "../../../state/post/hooks";
import Textarea from "../../Form/Textarea";

const PostForm = chakra("form", {})

export const Form = ({children}) => {

    const {handleSubmit, content} = useNewPost();
    const dispatch = useDispatch();

    return(
        <PostForm onSubmit={handleSubmit} width="100%" ml={4}>
            <Textarea value={content} minRows={1} name="content" pl={0} onChange={(e) => dispatch(handleCreatePost(e.target.value))} placeholder="What's up ?"></Textarea>
            {children}
        </PostForm>
    )
}