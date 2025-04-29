import {createRoot} from 'react-dom/client'
import './index.css'
import {HashRouter} from 'react-router'
import Router from "./components/Router/Router.component.tsx";
import {Toaster} from "sonner";
import Providers from "./Providers/Providers.component.tsx";

createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <Providers>
            <Toaster richColors closeButton/>
            <Router/>
        </Providers>
    </HashRouter>
)
