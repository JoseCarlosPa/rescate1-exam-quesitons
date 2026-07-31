import {NavLink, useLocation} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {MdOutlineConstruction} from "react-icons/md";
import {tampAModules} from "../TampA.constants.tsx";
import {useSEO} from "../../../hooks/useSEO.hook.ts";

export default function ComingSoon() {
    const location = useLocation();
    const module = tampAModules.find((m) => m.route === location.pathname);
    const title = module?.title ?? "Módulo";

    useSEO({
        dynamicTitle: `${title} (Próximamente) - TAMP-A`,
        dynamicDescription: `Contenido en preparación para el módulo "${title}" del Técnico en Atención Médica Prehospitalaria Avanzado.`,
        type: 'website'
    });

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen h-full bg-gradient-to-b from-orange-50 to-gray-100 p-4 text-center">
            <MdOutlineConstruction className="w-24 h-24 mb-4 text-orange-500"/>
            <h1 className="text-4xl font-extrabold text-orange-600 mb-2">{title}</h1>
            <p className="text-xl font-semibold text-gray-600 mb-6">Próximamente</p>
            <p className="text-gray-500 max-w-md mb-8">
                Este módulo del Técnico Avanzado (TAMP-A) está en preparación. Vuelve pronto para acceder al contenido completo.
            </p>
            <NavLink to={AllRoutes.TAMPA}
                     className="flex gap-2 items-center bg-white shadow-md rounded-xl px-4 py-3 hover:bg-orange-100 border border-orange-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-orange-300 outline-none">
                <IoReturnDownBack className="w-5 h-5 text-orange-400"/>
                <p className="text-lg font-medium">Regresar a TAMP-A</p>
            </NavLink>
        </div>
    );
}
