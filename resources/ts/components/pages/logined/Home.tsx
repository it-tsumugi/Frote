import { useContext, useEffect, VFC } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import { useAuth } from "../../../hooks/useAuth";
import { useGetUser } from "../../../hooks/useGetUser";
import { useAuthContext } from "../../../providers/AuthProvider";
import { useUserContext } from "../../../providers/UserInfoProvder";
import { CardList } from "../../organisms/CardList";
import { allTaskLists } from "../../../assets/data/allTaskLists";

export const Home: VFC = () => {
    return (
        <>
            <CardList data={allTaskLists} />
        </>
    );
};
