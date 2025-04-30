import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./MediTerms.questions.ts";
import {FaBookMedical} from "react-icons/fa";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";

export default function MedicTerms(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4   p-4">
                <FaBookMedical className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Terminología Médica</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/security-of-personal/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1zEIo1hIbfVHgW14HMe1GoLSouQqf-qqE/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        {/* Introducción a la Terminología Médica */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Introducción a la Terminología Médica</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>La terminología médica es un sistema de palabras y definiciones que se usan para describir las condiciones de salud, los procedimientos médicos, y las interacciones entre el cuerpo humano y las enfermedades.</li>
                                <li>El conocimiento de la terminología médica es esencial para que los profesionales de la salud, como paramédicos, comprendan y comuniquen de manera efectiva los hallazgos clínicos y las intervenciones.</li>
                                <li>Esta terminología se basa en raíces griegas, latinas y abreviaciones que permiten la precisión y claridad en la descripción de enfermedades, tratamientos y diagnósticos.</li>
                            </ul>
                        </div>

                        {/* Componentes de la Terminología Médica */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Componentes de la Terminología Médica</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Raíces:</strong> Son las bases de los términos médicos que indican la parte del cuerpo o el sistema afectado (ej. cardi- significa corazón, gastr- significa estómago).</li>
                                <li><strong>Prefijos:</strong> Se colocan antes de la raíz para modificar su significado, como <em>hipo-</em> que significa bajo o insuficiente.</li>
                                <li><strong>Sufijos:</strong> Se colocan al final de una raíz para indicar una condición o acción (ej. <em>-itis</em> significa inflamación, como en <em>gastritis</em>).</li>
                                <li><strong>Abreviaturas:</strong> Son formas más cortas de las palabras o frases, comúnmente usadas en las notas médicas y registros.</li>
                            </ul>
                        </div>

                        {/* Tipos Comunes de Terminología Médica */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Tipos Comunes de Terminología Médica</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Enfermedades y condiciones:</strong> Términos como <em>neumonía</em>, <em>diabetes mellitus</em>, o <em>hipertensión</em>.</li>
                                <li><strong>Procedimientos y tratamientos:</strong> Términos como <em>cirugía</em>, <em>quimioterapia</em>, <em>reanimación cardiopulmonar (RCP)</em>.</li>
                                <li><strong>Diagnósticos:</strong> El uso de términos como <em>infarto de miocardio</em>, <em>arritmia</em>, o <em>accidente cerebrovascular (ACV)</em>.</li>
                                <li><strong>Equipos y dispositivos médicos:</strong> Términos como <em>ventilador mecánico</em>, <em>marcapasos</em>, o <em>desfibrilador</em>.</li>
                            </ul>
                        </div>

                        {/* Importancia de la Terminología Médica en la Práctica Prehospitalaria */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia de la Terminología Médica en la Práctica Prehospitalaria</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>El dominio de la terminología médica permite una comunicación precisa entre los profesionales de la salud, reduciendo el riesgo de errores y mejorando los resultados en la atención.</li>
                                <li>Es fundamental para la documentación adecuada de los hallazgos clínicos y el tratamiento del paciente en los registros médicos y sistemas de salud.</li>
                                <li>El uso correcto de los términos médicos garantiza que el paramédico pueda transmitir información crítica de manera clara y comprensible durante el transporte del paciente o en las comunicaciones con el hospital.</li>
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
                                        <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100  px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 ">
                                            <span>{faq.question}</span>
                                            <ChevronUpIcon
                                                className={`${
                                                    open ? "transform rotate-180" : ""
                                                } h-5 w-5 text-gray-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-700 ">
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