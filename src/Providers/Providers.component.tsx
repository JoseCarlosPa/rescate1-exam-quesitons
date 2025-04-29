import {tProvidersProps} from "./LayoutProvider/Layout.types.ts";
import LayoutProvider from "./LayoutProvider/Layout.provider.tsx";
import UserProvider from "./UserProvider/User.provider.tsx";

export default function Providers(props: tProvidersProps) {
    const {children} = props;

    return (
        <UserProvider>
            <LayoutProvider>
                {children}
            </LayoutProvider>
        </UserProvider>
    );
}