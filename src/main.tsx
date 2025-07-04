import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router'
import Router from "./components/Router/Router.component.tsx";
import {Toaster} from "sonner";
import Providers from "./Providers/Providers.component.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Providers>
            <Toaster richColors closeButton/>
            <Router/>
        </Providers>
    </BrowserRouter>
)
