import { useEffect, useState, VFC } from "react";
import axios from "axios";

type usersType = [
    {
        id: string;
        name: string;
        email: string;
        created_at: string;
        updated_at: string;
        email_verified_at: string;
    }
];

export const User: VFC = () => {
    const [users, setUsers] = useState<usersType>();
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("/api/users");
        setUsers(response.data.users);
        console.log(response.data.users);
    };

    return (
        <div>
            <h1>Userページ</h1>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};
