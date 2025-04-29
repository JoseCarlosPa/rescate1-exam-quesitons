import './App.css'
import {NavLink} from "react-router";
import logo from "./assets/logo.png";
import {AllRoutes} from "./components/Router/Router.constants.ts";
import {lections} from "./App.constants.tsx";

function App() {
    return(
        <div className="flex flex-col items-center h-full bg-gray-100 pb-12 md:px-0 dark:bg-gray-900 dark:text-gray-100 p-4 ">
            <img src={logo}
                 alt="Logo" className="h-24 w-24 mb-4" />
            <p className="text-sm italic">Generación 2025 Rescate 1: Esta plataforma fue hecha por y para los alumnos de la clase sabados R1 2025</p>
            <p className="text-5xl font-bold mb-4 flex text-center mt-2">TAMP-B</p>
            <NavLink to={AllRoutes.MAIN} className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                <p className="text-lg">Regresar</p>
            </NavLink>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-12 w-full md:px-20 ">

                {lections.map((lection)=>{
                    return(
                        <NavLink
                            key={lection.id}
                            to={lection.route} className={`${lection.active ? 'bg-white' : 'bg-gray-200' } shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out`}>
                            {lection.icon}
                            <p className="flex text-center text-orange-500">{lection.title}</p>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export default App
