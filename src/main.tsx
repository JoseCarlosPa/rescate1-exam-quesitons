import {createRoot} from 'react-dom/client'
import './index.css'
import {HashRouter} from 'react-router'
import Router from "./components/Router/Router.component.tsx";

createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <Router />
    </HashRouter>
)
