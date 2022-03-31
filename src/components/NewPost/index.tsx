import  NewPost  from "./components";
import { ProfilePicture } from "../User/ProfilePicture";
import { useNewPost } from "../../state/post/hooks";

const NewPostWrapper = () => {

    const {attachments} = useNewPost();

    return(
        <NewPost>
            <ProfilePicture />
            <NewPost.Form>
                <NewPost.Attachments {...attachments} />
                <NewPost.Footer />
            </NewPost.Form>
        </NewPost>
    )
}

export default NewPostWrapper;