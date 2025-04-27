import './App.css'
import {NavLink} from "react-router";
import logo from "./assets/logo.png";
import {CiMedicalCross} from "react-icons/ci";
import {IoIosBody, IoMdBriefcase} from "react-icons/io";
import {LuRadioTower} from "react-icons/lu";
import {
    FaAmbulance,
    FaBaby, FaBacteria, FaBomb,
    FaBookMedical, FaCarCrash, FaChild, FaFireAlt,
    FaHandHoldingMedical,
    FaHeadSideMask,
    FaLaptopMedical,
    FaNotesMedical, FaQrcode, FaWineBottle
} from "react-icons/fa";
import {
    GiMedicines,
    GiMorgueFeet,
    GiProtectionGlasses,
    GiStomach,
    GiTrenchBodyArmor,
    GiTripleNeedle
} from "react-icons/gi";
import {RxLetterSpacing} from "react-icons/rx";
import {TbBodyScan, TbDisabled, TbMedicalCrossCircle} from "react-icons/tb";
import {FaHeartPulse, FaMaskVentilator, FaPersonCane, FaTruckMedical} from "react-icons/fa6";
import {RiBrain2Fill} from "react-icons/ri";
import {MdBloodtype, MdFace6, MdOutlineFireTruck} from "react-icons/md";
import {SiSpine} from "react-icons/si";
import {PiBabyBold, PiBrainFill} from "react-icons/pi";
import {AiOutlineWoman} from "react-icons/ai";
import {IoWoman} from "react-icons/io5";
import {BsSignStopFill} from "react-icons/bs";

function App() {
    return(
        <div className="flex flex-col items-center w-screen h-full bg-gray-100 pb-12 md:px-0 dark:bg-gray-900 dark:text-gray-100 p-4 ">
            <img src={logo}
                 alt="Logo" className="h-24 w-24 mb-4" />
            <p className="text-sm italic">Generación 2025 Rescate 1: Esta plataforma fue hecha por y para los alumnos de la clase sabados R1 2025</p>
            <p className="text-5xl font-bold mb-4 flex text-center mt-2">TAMP-B</p>
            <NavLink to="/"
                        className="flex gap-2 mb-4">
                    <p className="text-lg">Regresar</p>
            </NavLink>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-12 w-full md:px-20 ">
                <NavLink
                    to="/general"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col  justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaLaptopMedical className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500 ">Examen General</p>
                </NavLink>
                <NavLink
                    to="/legal"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <IoMdBriefcase className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Aspectos médicos, legales y éticos </p>
                </NavLink>
                <NavLink
                    to="/communications"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <LuRadioTower className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Comunicaciones y documentacion</p>
                </NavLink>
                <NavLink
                    to="/sem"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaAmbulance className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Sistemas de SEM</p>
                </NavLink>
                <NavLink
                    to="/security-of-personal"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out ">
                    <GiProtectionGlasses className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Seguridad y bienestar del personal</p>
                </NavLink>
                <NavLink
                    to="/medic-terms"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaBookMedical className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Terminología médica</p>
                </NavLink>
                <NavLink
                    to="/human-body"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <IoIosBody className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">El cuerpo humano</p>
                </NavLink>
                <NavLink
                    to="/life-spect"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaBaby className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Desarrollo de la esperanza de vida</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaNotesMedical className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Evaluación del paciente</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <RxLetterSpacing className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Nemotecnias</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaHeadSideMask className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Manejo de la vía aérea</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <GiMedicines className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Principios de farmacología</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <GiTripleNeedle className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Administración medicamentos</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <TbMedicalCrossCircle className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Shock</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaHandHoldingMedical className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Reanimación de SVB</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaQrcode className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">CÓDIGO MEGA</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <CiMedicalCross className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Visión médica general</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaMaskVentilator className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias respiratorias</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaHeartPulse className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias cardiovasculares</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <RiBrain2Fill className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias neurológicas</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <GiStomach  className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias gastrointestinales y urológicas</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <CiMedicalCross className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias endocrinas y hematológicas</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaCarCrash className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Conceptos generales de trauma</p>
                </NavLink>

                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <TbBodyScan className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">INMOVILIZACION</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <MdBloodtype className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Hemorragia</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <BsSignStopFill className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">STOP THE BLEED</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <MdFace6 className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Lesiones de cara y cuello</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <CiMedicalCross className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Lesiones del tejido blando</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <SiSpine  className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Lesiones de cabeza y columna vertebral</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <GiTrenchBodyArmor className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Lesiones del torax</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <GiMorgueFeet className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Lesiones ortopédicas</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <CiMedicalCross className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Lesiones abdominales y genitourinarias</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaBacteria className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias inmunologicas</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaWineBottle className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Toxicología</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaFireAlt className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias ambientales</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <PiBrainFill className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias psiquiátricas</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <AiOutlineWoman  className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias ginecológicas</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <PiBabyBold className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Cuidados obstétricos y neonatales</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <IoWoman className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Práctica parto</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaChild className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias pediátricas</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaPersonCane className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Emergencias geriátricas</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <TbDisabled className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Pacientes con necesidades especiales</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaTruckMedical className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Operaciones de transporte</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <MdOutlineFireTruck className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Manejo de incidentes</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <CiMedicalCross className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Un abordaje de equipo para la atención medica</p>
                </NavLink>
                <NavLink
                    to="/"
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    <FaBomb className="w-12 h-12 mb-1 text-orange-500" />
                    <p className="flex text-center text-orange-500">Respuesta al terrorismo y manejo de desastres</p>
                </NavLink>

            </div>
        </div>
    );
}

export default App
