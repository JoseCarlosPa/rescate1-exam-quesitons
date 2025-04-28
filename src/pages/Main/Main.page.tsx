import { TbMedicalCrossFilled } from "react-icons/tb";
import logo from "../../assets/logo.png";
import {NavLink} from "react-router";
import {BsSignStopFill} from "react-icons/bs";
import {FaHandScissors, FaHeartbeat} from "react-icons/fa";
import {ImBooks} from "react-icons/im";

export default function Main() {
    return (
        <div className="">
            <div
                className="flex flex-col items-center min-h-screen  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <img src={logo}
                     alt="Logo" className="h-24 w-24 mb-4"/>
                <p className="text-sm italic text-center">Generación 2025 Rescate 1: Esta plataforma fue hecha por y para los
                    alumnos de la clase sabados R1 2025</p>
                <p className="text-5xl font-bold mb-12 flex text-center">Rescate 1: Alumnos</p>

                <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
                    <NavLink to="/emt"
                             className="flex flex-col items-center justify-center gap-2 mb-4 bg-white rounded-lg shadow-md p-4 hover:bg-orange-100 hover:scale-105 transition duration-300 ease-in-out h-32 md:w-52 w-full">
                        <TbMedicalCrossFilled className="text-orange-500 w-10 h-10" />
                        <p className="text-lg text-orange-500">TAMP-B</p>
                    </NavLink>
                    <NavLink to="/lms"
                             className="flex flex-col items-center justify-center gap-2 mb-4 bg-white rounded-lg shadow-md p-4 hover:bg-orange-100 hover:scale-105 transition duration-300 ease-in-out h-32 md:w-52 w-full">
                        <FaHandScissors className="text-orange-500 w-10 h-10" />
                        <p className="text-lg text-orange-500">Lengua de señas</p>
                    </NavLink>
                    <NavLink to="/bls"
                             className="flex flex-col items-center justify-center gap-2 mb-4 bg-white rounded-lg shadow-md p-4 hover:bg-orange-100 hover:scale-105 transition duration-300 ease-in-out h-32 md:w-52 w-full">
                        <FaHeartbeat className="text-orange-500 w-10 h-10" />
                        <p className="text-lg text-orange-500">BLS</p>
                    </NavLink>
                    <NavLink to="/stop-the-bleed"
                             className="flex flex-col items-center justify-center gap-2 mb-4 bg-white rounded-lg shadow-md p-4 hover:bg-orange-100 hover:scale-105 transition duration-300 ease-in-out h-32 md:w-52 w-full">
                        <BsSignStopFill className="text-orange-500 w-10 h-10" />
                        <p className="text-lg text-orange-500">STOP THE BLEED</p>
                    </NavLink>
                    <NavLink to="/resources"
                             className="flex flex-col items-center justify-center gap-2 mb-4 bg-white rounded-lg shadow-md p-4 hover:bg-orange-100 hover:scale-105 transition duration-300 ease-in-out h-32 md:w-52 w-full">
                        <ImBooks  className="text-orange-500 w-10 h-10" />
                        <p className="text-lg text-orange-500">Recursos</p>
                    </NavLink>
                </div>

            </div>
        </div>
    );
}