import {useState} from "react";
import {tUser, tUserContext} from "./User.types.ts";

export default function useUser(): tUserContext{

    const [user, setUser] = useState<tUser | null>(null)

    return {
        user,
        setUser,
    }
}