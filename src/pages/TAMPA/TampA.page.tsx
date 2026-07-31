import {NavLink} from "react-router";
import logo from "../../assets/logo.png";
import {AllRoutes} from "../../components/Router/Router.constants.ts";
import {tampAModules} from "./TampA.constants.tsx";
import {IoReturnDownBack} from "react-icons/io5";
import {useSEO} from "../../hooks/useSEO.hook.ts";

export default function TampA() {
    useSEO({
        dynamicTitle: 'Plataforma de Estudio TAMP-A - Alumnos Rescate 1',
        dynamicDescription: 'Plataforma educativa para Técnico en Atención Médica Prehospitalaria Avanzado (TAMP-A / Paramédico).',
        dynamicKeywords: 'TAMP-A, paramédico, técnico avanzado, ACLS, atención prehospitalaria avanzada',
        type: 'website'
    });

    return (
        <div
            className="flex flex-col items-center min-h-screen h-full bg-gradient-to-b from-orange-50 to-gray-100 pb-16 p-4 ">
            <div className="flex flex-col items-center w-full max-w-3xl">
                <img src={logo}
                     alt="Logo" className="h-28 w-28 mb-2 drop-shadow-lg rounded-full "/>
                <p className="text-5xl font-extrabold mb-6 flex text-center mt-2 text-orange-500 tracking-tight drop-shadow">TAMP-A</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-4 w-full max-w-7xl mb-2 mt-2">
                <NavLink to={AllRoutes.MAIN}
                         className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-3 hover:bg-orange-100 border border-orange-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-orange-300 outline-none">
                    <IoReturnDownBack className="w-5 h-5 my-auto text-orange-400"/>
                    <p className="text-lg font-medium">Regresar</p>
                </NavLink>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-6 mt-12 w-full max-w-7xl ">
                {tampAModules.map((module) => (
                    <NavLink
                        key={module.id}
                        to={module.route}
                        className="bg-white shadow-lg border border-orange-100 rounded-2xl md:p-7 p-2 flex flex-col justify-center items-center hover:bg-orange-50 transition duration-300 ease-in-out group relative focus:ring-2 focus:ring-orange-300 outline-none"
                    >
                        <div
                            className="mb-2 mt-2 group-hover:scale-110 transition-transform duration-200">{module.icon}</div>
                        <p className="flex text-center text-orange-600 font-bold text-lg mt-2 group-hover:underline">{module.title}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
