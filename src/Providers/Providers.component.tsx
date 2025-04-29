import {tProvidersProps} from "./LayoutProvider/Layout.types.ts";

export default function Providers(props: tProvidersProps){
    const { children } = props;

    return(
        <>
            {children}
        </>
    );
}