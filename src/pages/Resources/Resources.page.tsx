import aaos from "../../assets/aaos.jpg";
import codes from "../../assets/codes.png";
import bls from "../../assets/bls.jpg";

import {FaDownload} from "react-icons/fa";
import {NavLink} from "react-router";

export default function Resources() {
    return (
        <div className="flex flex-col min-h-screen  bg-gray-100 pb-12 md:p-12 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
            <div className="flex flex-col justify-center items-center ">
                <p className="text-5xl font-bold mb-4 flex text-center">Recursos y Libros</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to="/"
                    className="flex gap-2 mb-4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 mt-12 gap-12">
                <div className="col-span-1 flex items-center justify-center">
                    <div className="p-4 bg-white shadow rounded-md col-span-2">
                        <img src={aaos} className=" mb-4 w-40 object-cover" alt="AAOS" />
                    </div>
                    <div className="flex flex-col gap-3 p-4 ">
                        <p className="text-lg font-semibold">Atención Prehospitalaria Básica</p>
                        <p className="text-sm italic">American Academy of Orthopaedic Surgeons</p>
                        <p className="text-sm"><strong>Edición:</strong> Undécima edición</p>
                        <p className="text-sm"><strong>Editor de la serie:</strong> Andrew N. Pollak, MD, FAAOS</p>
                        <a
                            target="_blank"
                            href="https://drive.google.com/uc?export=download&id=18b2vE-8waCgmiM6ncd_uljH8fXbin7_U"
                            className="flex gap-4 text-orange-500 underline"
                            download
                        >
                            <FaDownload className="w-5 h-5" />
                            <p>Descargar</p>
                        </a>
                        <a href="https://www.aaos.org/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-blue-500 hover:underline">Visitar sitio web</a>
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <div className="p-4 bg-white shadow rounded-md col-span-2">
                        <img src={codes} className=" mb-4 w-40 object-cover" alt="codes" />
                    </div>
                    <div className="flex flex-col gap-3 p-4 ">
                        <p className="text-lg font-semibold">Claves rescate 1</p>
                        <p className="text-sm italic">Claves utilziadas para comunicación</p>

                        <p className="text-sm"><strong>Edición:</strong> 2006</p>
                        <a
                            target="_blank"
                            href="https://drive.google.com/uc?export=download&id=1ToAaWjKVdXpQYgTZSD7E5lgrn688JMbv"
                            className="flex gap-4 text-orange-500 underline"
                            download
                        >
                            <FaDownload className="w-5 h-5" />
                            <p>Descargar</p>
                        </a>
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <div className="p-4 bg-white shadow rounded-md col-span-2">
                        <img src={bls} className=" mb-4 w-40 object-cover" alt="bls" />
                    </div>
                    <div className="flex flex-col gap-3 p-4 ">
                        <p className="text-lg font-semibold">Soporte vital basico</p>
                        <p className="text-sm italic">American Heart association</p>

                        <p className="text-sm"><strong>Edición:</strong> 2021</p>
                        <a
                            target="_blank"
                            href="https://drive.google.com/uc?export=download&id=1bCx4PrzkIiNuXz-Y4ZU0jM8UFvynoufL"
                            className="flex gap-4 text-orange-500 underline"
                            download
                        >
                            <FaDownload className="w-5 h-5" />
                            <p>Descargar</p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}