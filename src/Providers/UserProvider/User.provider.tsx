import {tProvidersProps} from "../LayoutProvider/Layout.types.ts";
import { UserContext } from "./User.context.tsx";
import useUser from "./User.hook.ts";

export default function UserProvider(props: tProvidersProps){
    const { children } = props;

    const value = useUser()

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}