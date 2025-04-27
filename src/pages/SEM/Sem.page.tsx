import {NavLink} from "react-router";
import {FaAmbulance} from "react-icons/fa";

export default function Sem(){
    return(
        <div className="">
            <div className="flex flex-col items-center w-screen justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <FaAmbulance className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Sistema SEM</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to="/"
                    className="flex gap-2 mb-4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/sem/exam"
                        className="flex gap-2 mb-4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://drive.google.com/file/d/1UZwgL6BvbwWvcmivQZ538n-n-jwR09jR/view?usp=sharing"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>
            </div>
        </div>
    );
}