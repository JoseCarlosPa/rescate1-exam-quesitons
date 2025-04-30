import aaos from "../../assets/aaos.jpg";
import codes from "../../assets/codes.png";
import bls from "../../assets/bls.jpg";
import phtl from "../../assets/phtls.jpg";
import nudos from "../../assets/nudos.jpg";
import netter from "../../assets/netter.webp";


import {FaDownload} from "react-icons/fa";
import {NavLink} from "react-router";

export default function Resources() {
    return (
        <div className="flex flex-col min-h-screen  bg-gray-100 pb-12 md:p-12 px-4   p-4">
            <div className="flex flex-col justify-center items-center ">
                <p className="text-5xl font-bold mb-4 flex text-center">Recursos y Libros</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to="/"
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 mt-12 gap-12">
                <div className="col-span-1 grid grid-cols-12 items-center justify-center">
                    <div className="col-span-4 p-4 bg-white shadow rounded-md">
                        <img src={aaos} className=" mb-4 w-40 object-cover" alt="AAOS" />
                    </div>
                    <div className="col-span-8 flex flex-col gap-3 p-4 ">
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
                <div className="col-span-1 grid grid-cols-12  items-center justify-center">
                    <div className="p-4 col-span-4 bg-white shadow rounded-md">
                        <img src={codes} className=" mb-4 w-40 object-cover" alt="codes" />
                    </div>
                    <div className="col-span-8 flex flex-col gap-3 p-4 ">
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
                <div className="col-span-1 grid grid-cols-12 items-center justify-center">
                    <div className="p-4 col-span-4 bg-white shadow rounded-md">
                        <img src={bls} className=" mb-4 w-40 object-cover" alt="bls" />
                    </div>
                    <div className="col-span-8 flex flex-col gap-3 p-4 ">
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
                        <a href="https://shopcpr.heart.org/es/courses/bls"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-blue-500 hover:underline">Visitar sitio web</a>

                    </div>
                </div>
                <div className="col-span-1 grid grid-cols-12 items-center justify-center">
                    <div className="p-4 col-span-4 bg-white shadow rounded-md">
                        <img src={phtl} className=" mb-4 w-40 object-cover" alt="phtls" />
                    </div>
                    <div className="col-span-8 flex flex-col gap-3 p-4 ">
                        <p className="text-lg font-semibold">PHTLS Soporte vital prehospitalario para traumatismos</p>
                        <p className="text-sm italic">American collage of surgeans association</p>

                        <p className="text-sm"><strong>Edición:</strong> Decima edición 2023</p>
                        <a
                            target="_blank"
                            href="https://drive.google.com/uc?export=download&id=1J0PAh0nONBGmSpiYdyyjemKb-Ujx65fC"
                            className="flex gap-4 text-orange-500 underline"
                            download
                        >
                            <FaDownload className="w-5 h-5" />
                            <p>Descargar</p>
                        </a>
                        <a href="https://www.psglearning.com/es/phtls?srsltid=AfmBOorLGRrP95FMjmKsLpuMyQJA-dZGBP-GCCK5axFAL7XjcsSrsbGq"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-blue-500 hover:underline">Visitar sitio web</a>

                    </div>
                </div>
                <div className="col-span-1 grid grid-cols-12 items-center justify-center">
                    <div className="p-4 col-span-4 bg-white shadow rounded-md">
                        <img src={nudos} className=" mb-4 w-40 object-cover" alt="phtls" />
                    </div>
                    <div className="col-span-8 flex flex-col gap-3 p-4 ">
                        <p className="text-lg font-semibold">NUDOS BASICOS DE RESCATE Y DESCENSOS</p>
                        <a
                            target="_blank"
                            href="https://drive.google.com/uc?export=download&id=12rBumebSfvLmATWFMpGkbusxGobpnk8X"
                            className="flex gap-4 text-orange-500 underline"
                            download
                        >
                            <FaDownload className="w-5 h-5" />
                            <p>Descargar</p>
                        </a>

                    </div>
                </div>
                <div className="col-span-1 grid grid-cols-12 items-center justify-center">
                    <div className="p-4 col-span-4 bg-white shadow rounded-md">
                        <img src={netter} className=" mb-4 w-40 object-cover" alt="phtls" />
                    </div>
                    <div className="col-span-8 flex flex-col gap-3 p-4 ">
                        <p className="text-lg font-semibold">Netter Atlas de anatomia humana</p>
                        <p className="text-sm italic">Frank H.hetter,Elsevier</p>
                        <p className="text-sm"><strong>Edición:</strong> Septima edición 2023</p>
                        <a
                            target="_blank"
                            href="https://drive.google.com/uc?export=download&id=1w7Zmd73CK41ia1Lok0RYL4kdc4aK5hRV"
                            className="flex gap-4 text-orange-500 underline"
                            download
                        >
                            <FaDownload className="w-5 h-5" />
                            <p>Descargar</p>
                        </a>
                        <a href="https://www.amazon.com.mx/Netter-anatom%C3%ADa-humana-Abordaje-regional/dp/8413823986/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2LWDOLOA9WUX7&dib=eyJ2IjoiMSJ9.gkCj_-HZMdJkKvTwgd-BzlNH0bY9aRmYcShoRzuh3VbgUsFBGaivTESq9-l_l56vfK5XeqQRIl8vKYfh_W1Js2GqMzwSnVpF8-aDAvGMbXB4asHwKZokAPV9rAKknAXEq9nQr9cADfZoN91mgZ7-LlJO19X6fOAFi96tpomJKIAkp_faIf4aMmqdiN7Hd1byzWU8mHjWIAYWrR6o678BJEabsuBYO7Eolna-AQ40cVGOEau8FR-r_aqNNIA8_wxZhTFDKgJEI7-Hf2vjeLmM1w3aygDxwPcImzGoOpbE6rQ.ldXkP8YRQuCLMJ7kfO36x8IvTjHeGpBwhCMeVqkzsxw&dib_tag=se&keywords=Netter+Atlas+de+anatomia+humana&qid=1746026012&sprefix=netter+atlas+de+anatomia+humana,aps,390&sr=8-1&ufe=app_do:amzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-blue-500 hover:underline">Comprar</a>

                    </div>
                </div>

            </div>
        </div>
    );
}