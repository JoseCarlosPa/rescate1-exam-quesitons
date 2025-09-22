import {TbMedicalCrossFilled} from "react-icons/tb";
import logo from "../../assets/logo.png";
import {NavLink} from "react-router";
import {FaHandScissors} from "react-icons/fa";
import {ImBooks} from "react-icons/im";
import {AllRoutes} from "../../components/Router/Router.constants.ts";
import SEOWrapper from "../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function Main() {
    return (
        <SEOWrapper
            title="EMT EXAM - Plataforma de Estudio para Técnico en Urgencias Médicas"
            description="Recursos educativos para estudiantes de EMT: TAMP-B, BLS, Stop the Bleed, Lengua de Señas y más"
            keywords="emt, técnico urgencias médicas, tamp-b, bls, stop the bleed, emergencias médicas"
            section="main"
            difficulty="Beginner"
            timeRequired="PT30M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="">
                <div
                    className="flex flex-col items-center min-h-screen h-full justify-center bg-gradient-to-b from-orange-50 to-gray-100 pb-12 md:px-0 px-4 p-4 ">
                    <img src={logo}
                         alt="Logo" className="h-24 w-24 mb-4"/>
                    <p className="text-5xl font-bold mb-12 flex text-center">Rescate 1: Alumnos</p>

                    <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                        <NavLink to={AllRoutes.EMT}
                                 className="flex flex-col items-center justify-center gap-2 mb-4 bg-white rounded-lg shadow-md p-4   hover:bg-orange-100 hover:scale-105 transition duration-300 ease-in-out h-32 md:w-52 w-full">
                            <TbMedicalCrossFilled className="text-orange-500 w-10 h-10"/>
                            <p className="text-lg text-orange-500">TAMP-B</p>
                        </NavLink>
                        <NavLink to={AllRoutes.LMS}
                                 className="flex flex-col items-center justify-center gap-2 mb-4 bg-white rounded-lg shadow-md p-4   hover:bg-orange-100 hover:scale-105 transition duration-300 ease-in-out h-32 md:w-52 w-full">
                            <FaHandScissors className="text-orange-500 w-10 h-10"/>
                            <p className="text-lg text-orange-500">Lengua de señas</p>
                        </NavLink>
                        <NavLink to={AllRoutes.RESOURCES}
                                 className="flex flex-col items-center justify-center gap-2 mb-4 bg-white rounded-lg shadow-md p-4   hover:bg-orange-100 hover:scale-105 transition duration-300 ease-in-out h-32 md:w-52 w-full">
                            <ImBooks className="text-orange-500 w-10 h-10"/>
                            <p className="text-lg text-orange-500">Recursos</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}