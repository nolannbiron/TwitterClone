import React, { useEffect, useState } from "react";
import { Card } from "../../../components/Card";
import styled from "@emotion/styled";
import { Heading, Input, Button, FormControl} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../../state/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../state/auth/hooks";

export const StyledLoginCard = styled(Card)`
    max-width: 640px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 80px 120px;
`;

export const LoginCard = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useUser();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(email !== '' && password !== '') {
            console.log(email, password)
            return dispatch(handleLogin(email, password))
        }
    }

    useEffect(() => {
        if(user.loggedIn) {
            navigate('/')
        }
    }, [user])

    return(
        <StyledLoginCard>
            <Heading as="h3" fontSize="23px">Se connecter à SeppaDiary</Heading>
            <form onSubmit={handleSubmit}>
                <Input id="email" name="email" mb="3" placeholder="addresse mail" type="email" onChange={(e) => setEmail(e.target.value)} />
                <Input id="password" name="password" mb="3" placeholder="Mot de passe" type="password" onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" isFullWidth variant="primary">Connexion</Button>
            </form>
        </StyledLoginCard>
    )

}