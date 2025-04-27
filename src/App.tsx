import './App.css'
import {NavLink} from "react-router";
import logo from "./assets/logo.png";
import {CiMedicalCross} from "react-icons/ci";
import {IoIosBody, IoMdBriefcase} from "react-icons/io";
import {LuRadioTower} from "react-icons/lu";
import {
    FaAmbulance,
    FaBaby,
    FaBookMedical,
    FaHandHoldingMedical,
    FaHeadSideMask,
    FaLaptopMedical,
    FaNotesMedical
} from "react-icons/fa";
import {GiMedicines, GiProtectionGlasses, GiTripleNeedle} from "react-icons/gi";
import {RxLetterSpacing} from "react-icons/rx";
import {TbMedicalCrossCircle} from "react-icons/tb";

function App() {
    return(
        <div className="flex flex-col items-center w-screen md:h-screen h-full bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4 ">
            <img src={logo}
                 alt="Logo" className="h-24 w-24 mb-4" />
            <p className="text-sm italic">Generacion 2025 Rescate 1: Este examen fue hecho por los alumnos de la clase sabados R1 2025</p>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-12 w-full md:px-20">
                <NavLink
                    to="/general"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaLaptopMedical className="w-12 h-12 mb-1" />
                    <p className="">Examen General</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <IoMdBriefcase className="w-12 h-12 mb-1" />
                    <p className="">Aspectos médicos, legales y éticos </p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <LuRadioTower className="w-12 h-12 mb-1" />
                    <p className="">Comunicaciones y documentacion</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaAmbulance className="w-12 h-12 mb-1" />
                    <p className="">Sistemas de SEM</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <GiProtectionGlasses className="w-12 h-12 mb-1" />
                    <p className="">Seguridad y bienestar del personal</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaBookMedical className="w-12 h-12 mb-1" />
                    <p className="">Terminología médica</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <IoIosBody className="w-12 h-12 mb-1" />
                    <p className="">El cuerpo humano</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaBaby className="w-12 h-12 mb-1" />
                    <p className="">Desarrollo de la esperanza de vida</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaNotesMedical className="w-12 h-12 mb-1" />
                    <p className="">Evaluación del paciente</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <RxLetterSpacing className="w-12 h-12 mb-1" />
                    <p className="">Nemotecnias</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaHeadSideMask className="w-12 h-12 mb-1" />
                    <p className="">Manejo de la vía aérea</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <GiMedicines className="w-12 h-12 mb-1" />
                    <p className="">Principios de farmacología</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <GiTripleNeedle className="w-12 h-12 mb-1" />
                    <p className="">Administración medicamentos</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <TbMedicalCrossCircle className="w-12 h-12 mb-1" />
                    <p className="">Shock</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaHandHoldingMedical className="w-12 h-12 mb-1" />
                    <p className="">Reanimación de SVB</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <CiMedicalCross className="w-12 h-12 mb-1" />
                    <p className="">CÓDIGO MEGA</p>
                </NavLink>

            </div>
        </div>
    );
}

export default App
