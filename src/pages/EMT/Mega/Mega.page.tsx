import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {FaQrcode} from "react-icons/fa";
import {faqData} from "./Mega.questions.ts";

export default function Mega(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <FaQrcode className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Codigo Mega</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to="/emt"
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/mega/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/15fdQZsSUuF9ViCqGwilGhDpF4zVoU5f8/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué es el Código MEGA?</h2>
                            <p className="text-gray-700">
                                El Código MEGA es una herramienta para la evaluación inicial prehospitalaria
                                rápida, estructurada y segura del paciente en situaciones de emergencia. Es una estrategia para tomar decisiones clínicas priorizadas y reducir el riesgo tanto para el paciente como para el TAMP.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Significado de MEGA</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>M:</strong> Mecanismo de lesión o naturaleza de la enfermedad.</li>
                                <li><strong>E:</strong> Entorno seguro para el equipo y la víctima.</li>
                                <li><strong>G:</strong> Generalidades del paciente: nivel de conciencia, posición, edad, sexo, etc.</li>
                                <li><strong>A:</strong> ABCDE – Evaluación primaria (A: Vía aérea, B: Respiración, C: Circulación, D: Déficit neurológico, E: Exposición).</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia del Código MEGA</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Establece prioridades en la atención de pacientes críticos.</li>
                                <li>Previene riesgos adicionales para el personal y los pacientes.</li>
                                <li>Facilita una revaluación constante del estado del paciente.</li>
                                <li>Permite una transición clara a la evaluación secundaria.</li>
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