import React from "react";
import {Flex, Box, useTheme} from "@chakra-ui/react";
import { BsImageFill } from "react-icons/bs";
import styled from "@emotion/styled";
import { RiFileGifFill } from "react-icons/ri";
import { FiSmile, FiTarget } from "react-icons/fi";
//@ts-ignore
import 'emoji-mart-lazyload/css/emoji-mart.css';
//@ts-ignore
import { Picker } from 'emoji-mart-lazyload';
//@ts-ignore
import ReactGiphySearchbox from "react-giphy-searchbox";
import { Gif } from "../../types";
import { useDispatch } from "react-redux";
import { handleAddEmoji, handleAddGif, handleAddImage} from "../../../state/post";
import { IconType } from "react-icons";

export enum ModalType {
    Gif = 0,
    Emoji = 1
}

interface Props {
    active?: ModalType | undefined;
    onOpen: (type: any) => void;
}



const AddEmoji = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    
    const onEmojiClick = (emojiObject: any) => {
        dispatch(handleAddEmoji(emojiObject.native));
    }

    const categories = { 
        search: 'Résultats de recherche', 
        recent: 'Récents', 
        smileys: 'Smileys & Emotion',
        people: 'Personnes',
        nature: 'Animaux & Nature',
        foods: 'Nourriture & Boissons',
        activity: 'Activité',
        places: 'Voyage & Lieux',
        objects: 'Objets',
        symbols: 'Symbols',
        flags: 'Drapeaux',
        custom: 'Custom', 
    }

    return(
        <Box mt="3" position="absolute" top="100%">
            <Picker color={theme.colors.blue[500]} theme="dark" i18n={categories} onSelect={onEmojiClick} />
        </Box>
    )
    
}

const AddImage = ({onOpen}: Props) => {
    const dispatch = useDispatch();
    const handleImage = (e: any) => {
        if (e.target.files){
            Array.from(e.target.files).map((file: any) => {
                file.url = URL.createObjectURL(file);
                dispatch(handleAddImage(file));
            })
        }
    }

    const ImageInput = styled.input`
        position: absolute;
        left: -9990px;
    `;


    return(
        <Box onClick={() => onOpen(undefined)} position="relative">
            <label>
                <BsImageFill style={{cursor: 'pointer'}} />
                <ImageInput name="images" multiple accept="image/*" onChange={handleImage} type="file" />
            </label>
        </Box>
    )
}


const AddGif = () => {
    const dispatch = useDispatch();

    const inputStyles = {
        'input':{
            backgroundColor: "rgb(32, 35, 39)", 
            border: "solid 1px transparent",
            color: "white",
            "&:focus": {
                border: "solid 1px transparent"
            }
        },
        'form': {
            marginBottom: '5px'
        }
    } as React.CSSProperties;

    return(
        <Box mt={2} padding='0' sx={inputStyles} position="absolute" top="100%" background="black">
            <ReactGiphySearchbox
                apiKey="obGbGhfyvuFoIP40cI6Szq6cRE4BMkqr"
                onSelect={(item: Gif) => dispatch(handleAddGif(item))}
                masonryConfig={[
                { columns: 2, imageWidth: 150, gutter: 5 },
                // { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
                ]}
            />
        </Box>
    )

}

interface ActionProps extends Props {
    Icon: IconType;
    type: ModalType
    children?: React.ReactNode;
}

const ActionModal = ({active, onOpen, type, Icon, children}: ActionProps) => {

    return(
        <Flex zIndex="999999" sx={{cursor: "pointer"}} position="relative" direction="column" alignItems="start">
            <Box onClick={() => onOpen(active === type ? undefined : type)}>
                <Icon  />
            </Box>
            {active === type &&
                <Box mt={2} position="absolute" top="100%">
                    {children}
                </Box>
            }
        </Flex>
    )


}

export const AttachmentsActions = () => {

    const [open, setOpen] = React.useState<ModalType | undefined>();

    return(
        <Flex gap={4} color="blue.500" alignItems="center">
            <AddImage onOpen={setOpen}/>
            <ActionModal active={open} onOpen={setOpen} type={ModalType.Gif} Icon={RiFileGifFill}>
                <AddGif />
            </ActionModal>
            <ActionModal active={open} onOpen={setOpen} type={ModalType.Emoji} Icon={FiSmile}>
                <AddEmoji />
            </ActionModal>
        </Flex>
    )

}