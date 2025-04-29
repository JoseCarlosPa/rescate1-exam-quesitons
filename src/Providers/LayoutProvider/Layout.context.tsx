import {createContext, useContext} from "react";

const initialState = {}

export const LayoutContext = createContext(initialState);

export const useLayoutContext = () => useContext(LayoutContext);
