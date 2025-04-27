import {IoMdBriefcase} from "react-icons/io";
import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Communications.questions.ts";

export default function Communications(){
    return(
        <div className="">
            <div className="flex flex-col items-center justify-center bg-gray-100 pb-12 md:px-0  dark:bg-gray-900 dark:text-gray-100 ">
                <IoMdBriefcase className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Comunicaciones y documentación</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to="/"
                    className="flex gap-2 mb-4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/communications/exam"
                        className="flex gap-2 mb-4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://drive.google.com/file/d/1UZwgL6BvbwWvcmivQZ538n-n-jwR09jR/view?usp=sharing"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia de la Comunicación</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Una comunicación efectiva es esencial para coordinar atención, transmitir información precisa y brindar seguridad al paciente.</li>
                                <li>Incluye comunicación verbal (palabras habladas) y no verbal (gestos, expresiones, postura).</li>
                                <li>La escucha activa y el lenguaje corporal positivo generan confianza en el paciente.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Comunicación en Radio</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Antes de hablar, presionar el botón de transmisión y esperar un segundo.</li>
                                <li>Transmitir de forma clara, breve y pausada.</li>
                                <li>Utilizar códigos de radio si están autorizados, para facilitar la comunicación.</li>
                                <li>Confirmar recepción de mensajes importantes repitiéndolos de vuelta.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Reportes Verbales</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Al llegar al hospital, el TAMP debe entregar un reporte verbal breve pero completo al personal de salud.</li>
                                <li>Debe incluir: edad del paciente, quejas principales, signos vitales, tratamientos realizados y respuesta a tratamientos.</li>
                                <li>Evitar opiniones personales, enfocarse en datos objetivos y relevantes.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Documentación (FRAP)</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>El Formato de Registro de Atención Prehospitalaria (FRAP) es el documento oficial que detalla toda la atención brindada.</li>
                                <li>Debe ser objetivo, claro, preciso, sin tachaduras ni enmiendas indebidas.</li>
                                <li>Errores deben corregirse con una línea simple, inicialar y añadir la corrección.</li>
                                <li>Todo rechazo de tratamiento debe ser documentado cuidadosamente, incluyendo advertencia de riesgos y firma de testigos.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Sistema SAMPLE y OPQRST</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>SAMPLE:</strong> Signos/Síntomas, Alergias, Medicamentos, Pasado médico, Última ingesta, Eventos previos.</li>
                                <li><strong>OPQRST:</strong> Onset (Inicio), Provocation (Provocación), Quality (Calidad), Radiation (Irradiación), Severity (Severidad), Time (Tiempo).</li>
                                <li>Estas herramientas ayudan a obtener información estructurada y relevante durante la evaluación inicial del paciente.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Buenas Prácticas</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Documentar todas las observaciones relevantes, tratamientos y cambios en la condición del paciente.</li>
                                <li>Conservar la confidencialidad del paciente en todo momento.</li>
                                <li>Informar cualquier error o corrección de manera formal mediante adendas oficiales.</li>
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
                                        <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
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