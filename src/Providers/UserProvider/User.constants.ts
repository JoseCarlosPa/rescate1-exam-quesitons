import {tUser} from "./User.types.ts";

export const cUser: tUser = {
    id: null,
    email: null,
    name: null,
    photoURL: null,
    role: null
}

export const initialState = {
    user: cUser,
    setUser: () => {},
}