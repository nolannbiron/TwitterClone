import { Flex, Text, useTheme, Theme, Button, Box, Avatar, chakra } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {BiHomeCircle} from "react-icons/bi";
import {HiHashtag} from "react-icons/hi";
import {BsBookmark} from "react-icons/bs";
import {IoSettingsOutline} from "react-icons/io5";
import SearchBar from "../SearchBar";
import { Card } from "../Card";

interface StyledMenuItemProps {
    to: string, 
    icon: React.ReactNode, 
    text: string
}

const MenuItem = styled(NavLink)<{theme: Theme}>`
    text-decoration: none;
    font-size: 1.2rem;
    display: inline-flex;
    width: 190px;
    align-items: center;
    gap: 15px;
    padding: 10px 20px 10px 12px;
    border-radius: 50px;
    transition-duration: .2s;
    &.active{
        font-weight: bold;
    }
    &:hover{
        transition-property: background-color, box-shadow;
        background-color: rgba(217, 217, 217, 0.1);
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.md}){
        padding: 10px 20px;
        font-size: 1.3rem;
        width: auto;
        >span{
            display: none;
        }
    }
`

const StyledMenuItem = ({to, icon, text}: StyledMenuItemProps) => {
    const theme: Theme = useTheme();
    return(
        <MenuItem theme={theme} to={to} className={isActive => (isActive ? "active" : "")}>
            {icon}
            <span>{text}</span>
        </MenuItem>
    )
}

export const Menu = () => {
    const widthWrapper = ['100%', '', 'fit-content'];
    
    const navigate = useNavigate();

    return (
        <Flex flexDir={"column"} height="100vh" position="sticky" top="0" flex={['0 1 auto', '0 1 auto', '0 1 29%']} alignItems="flex-end" px={[0, "", 10]} pt={10} borderRight="solid 1px grey">
            <Flex height="100%" direction={"column"} justifyContent='space-between' alignItems={'self-start'}>
                <Flex flexDirection="column" gap={3} width={widthWrapper}>
                    <StyledMenuItem to="/" icon={<BiHomeCircle />} text="Feed" />
                    <StyledMenuItem to="/notifications" icon={<HiHashtag />} text="Notifications" />
                    <StyledMenuItem to="/sauvegarde" icon={<BsBookmark />} text="Sauvegardé" />
                    <StyledMenuItem to="/reglages" icon={<IoSettingsOutline />} text="Réglages" />
                    <Button onClick={() => navigate('/', {state: {newPost: true}})} display={['none', '', 'block']} mt={3} variant="primary">Publier un message</Button>
                </Flex>
                <Flex pb={5} gap={3} width={widthWrapper} justifyContent={['center', '', 'start']} alignItems={"center"}>
                    <Avatar src="https://pbs.twimg.com/profile_images/1207752002379407362/Yvp0iHI4_x96.jpg" width="40px" height="40px" />
                    <Box display={['none', '', 'block']}>
                        <Text fontWeight={"bold"} fontSize="md">Nolann</Text>
                        <Text fontSize="xs" opacity={0.7}>@nolannbiron</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
    
}

export const MenuRight = () => {

    return (
        <Flex position="sticky" top="0" borderLeft={"solid 1px grey"} display={["none", "none", "none", "flex"]} flexDir={"column"} height="100vh" flex={['1 1 auto', '1 1 auto', '1 1 auto', '1 1 22%', '0 1 22%']} alignItems="flex-start" px={[0, 0, 5]} pt={2}>
            <Flex height="100%" width="100%" gap={5} direction={"column"} alignItems={'self-start'}>
                <SearchBar />
                <Card>
                    <Box>
                        <Text fontSize="sm">
                            Anniversaire du mois
                        </Text>
                    </Box>
                </Card>
            </Flex>
        </Flex>
    )
}