import {tProvidersProps} from "./LayoutProvider/Layout.types.ts";
import LayoutProvider from "./LayoutProvider/Layout.provider.tsx";
import {AuthProvider} from "./AuthProvider";

export default function Providers(props: tProvidersProps) {
    const {children} = props;

    return (
        <AuthProvider>
            <LayoutProvider>
                {children}
            </LayoutProvider>
        </AuthProvider>
    );
}