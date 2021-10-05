import { VFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { path } from "../../../assets/data/path";
import { useAuth } from "../../../hooks/useAuth";
import { useAuthContext } from "../../../providers/AuthProvider";

export const Header: VFC = () => {
    const { isLogin, setIsLogin } = useAuthContext();
    useAuth();

    return (
        <SComponentContainer>
            <Link to={path.top}>Top</Link>
            {!isLogin ? (
                <>
                    <Link to={path.login}>Login</Link>
                    <Link to={path.register}>Register</Link>
                </>
            ) : null}
            {isLogin ? <Link to={path.home}>Home</Link> : null}
            <Link to={path.help}>Help</Link>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    width: 100%;
    height: 5vh;
    background-color: #201a22;
`;
