import {createContext, useContext} from "react";
import {tUserContext} from "./User.types.ts";
import {initialState} from "./User.constants.ts";



export const UserContext = createContext<tUserContext>(initialState);

export const useUserContext = () => useContext(UserContext);
