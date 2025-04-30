import {NavLink} from "react-router";
import {FaAmbulance} from "react-icons/fa";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Sem.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";

export default function Sem(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <FaAmbulance className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Sistema SEM</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/sem/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1z_yrMHjG6PCtLZkRgKFEoZKRE-zcD-BV/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>
                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        {/* Introducción al Sistema SEM */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Introducción al Sistema SEM</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>El Sistema de Emergencias Médicas (SEM) es un conjunto organizado de servicios y recursos que permite la atención inmediata a emergencias médicas fuera del ámbito hospitalario.</li>
                                <li>El objetivo principal del SEM es salvar vidas mediante una respuesta rápida, profesional y adecuada a situaciones críticas de salud.</li>
                                <li>En México, SEM depende de los gobiernos locales o estatales, y se coordina a través de servicios de ambulancias, hospitales y autoridades de salud.</li>
                            </ul>
                        </div>

                        {/* Funciones y Estructura del SEM */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Funciones y Estructura del SEM</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Atención prehospitalaria:</strong> La atención médica que se brinda a pacientes fuera del hospital, en el lugar del incidente.</li>
                                <li><strong>Transporte sanitario:</strong> El SEM organiza el transporte de pacientes a centros hospitalarios en ambulancias equipadas.</li>
                                <li><strong>Coordinación interinstitucional:</strong> El SEM trabaja de manera coordinada con otras entidades, como fuerzas de seguridad, bomberos y protección civil.</li>
                            </ul>
                        </div>

                        {/* Componentes del Sistema SEM */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Componentes del Sistema SEM</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Centro de atención telefónica:</strong> El número de emergencia (911 en México) es la primera línea de contacto para solicitar ayuda.</li>
                                <li><strong>Ambulancias:</strong> Equipadas con personal y equipo médico especializado para ofrecer atención inmediata.</li>
                                <li><strong>Personal capacitado:</strong> Paramédicos y médicos entrenados para ofrecer cuidados adecuados en el lugar del incidente y durante el transporte.</li>
                            </ul>
                        </div>

                        {/* Protocolo de Activación del SEM */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Protocolo de Activación del SEM</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>La activación del SEM se realiza llamando al número de emergencia, proporcionando detalles de la ubicación, tipo de incidente y condición de la víctima.</li>
                                <li>Una vez activada la llamada, el centro de atención coordina el envío de recursos adecuados y sigue un protocolo para la atención de la emergencia.</li>
                                <li>El personal de SEM puede dar indicaciones iniciales para la atención en el lugar mientras la ambulancia llega.</li>
                            </ul>
                        </div>

                        {/* Mejora continua y evaluación */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Mejora Continua y Evaluación</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>El SEM realiza evaluaciones periódicas de sus protocolos y respuesta para identificar áreas de mejora y garantizar una atención de alta calidad.</li>
                                <li>Se realizan capacitaciones y simulacros para mejorar las habilidades del personal y el tiempo de respuesta.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="max-w-5xl mx-auto p-6">
                    <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>

                    <div className="space-y-4">
                        {faqData.map((faq, idx) => (
                            <Disclosure key={idx}>
                                {({ open }) => (
                                    <div className="border rounded-lg overflow-hidden">
                                        <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 dark:hover:bg-gray-700">
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