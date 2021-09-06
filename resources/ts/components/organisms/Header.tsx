import { VFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header: VFC = () => {
    return (
        <SComponentContainer>
            <Link to="/">Top</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/home">Home</Link>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    width: 100%;
    height: 5vh;
    background-color: aqua;
`;
