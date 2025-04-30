import {IoIosBody} from "react-icons/io";
import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Immobilization.questionts.ts";
import {IoReturnDownBack} from "react-icons/io5";

export default function Immobilization() {
    return (
        <div className="">
            <div
                className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <IoIosBody className="w-24 h-24 mb-1 text-orange-500"/>
                <p className="text-5xl font-bold mb-4 flex text-center">Inmovilización</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/inmobilization/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1Rnfsa9yfGk1X8vWPptTCUSNO46Snf2nq/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué es la Inmovilización?</h2>
                            <p className="text-gray-700">
                                Es el proceso mediante el cual se restringe el movimiento de una parte del cuerpo lesionada para prevenir daños adicionales, reducir el dolor y facilitar el traslado del paciente en el entorno prehospitalario.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Objetivos principales</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Evitar el empeoramiento de lesiones musculoesqueléticas.</li>
                                <li>Prevenir lesiones en columna vertebral o médula espinal.</li>
                                <li>Reducir el dolor y controlar el sangrado asociado.</li>
                                <li>Facilitar el transporte seguro del paciente.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Técnicas comunes de inmovilización</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Uso de férulas rígidas, neumáticas y de vacío.</li>
                                <li>Colocación de collarines cervicales.</li>
                                <li>Inmovilización espinal con camillas rígidas o de cuchara.</li>
                                <li>Fijación con tablas espinales largas y dispositivos de sujeción.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Precauciones</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Evaluar circulación, sensibilidad y movimiento antes y después de aplicar férulas.</li>
                                <li>No reducir desplazamientos óseos evidentes.</li>
                                <li>Evitar presionar puntos óseos o heridas abiertas.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="max-w-5xl mx-auto p-6">
                    <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>

                    <div className="space-y-4">
                        {faqData.map((faq, idx) => (
                            <Disclosure key={idx}>
                                {({open}) => (
                                    <div className="border rounded-lg overflow-hidden">
                                        <Disclosure.Button
                                            className="flex w-full justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 dark:hover:bg-gray-700">
                                            <span>{faq.question}</span>
                                            <ChevronUpIcon
                                                className={`${
                                                    open ? "transform rotate-180" : ""
                                                } h-5 w-5 text-gray-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-700 dark:text-gray-300">
                                            {faq.answer}
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}