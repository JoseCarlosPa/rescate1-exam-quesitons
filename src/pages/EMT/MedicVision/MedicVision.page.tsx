import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./MedicVision.questions.ts";
import {CiMedicalCross} from "react-icons/ci";
import { AllRoutes } from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";

export default function MedicVision(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4   p-4">
                <CiMedicalCross className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Vision médica general</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/medic-vision/exam"
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
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué es la Visión Médica General?</h2>
                            <p className="text-gray-700">
                                Se refiere a la capacidad del Técnico en Atención Médica Prehospitalaria (TAMP) de realizar una
                                valoración completa, rápida y estructurada del estado general de un paciente médico, es decir,
                                no traumático. Inicia con la evaluación del entorno y culmina con un abordaje diagnóstico basado
                                en signos y síntomas.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Componentes Clave</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Escena segura:</strong> Verificar que no existan riesgos.</li>
                                <li><strong>Evaluación inicial:</strong> Nivel de conciencia, posición del paciente, signos evidentes.</li>
                                <li><strong>Signos vitales:</strong> FC, FR, PA, temperatura, oximetría.</li>
                                <li><strong>Signos y síntomas:</strong> Información subjetiva y objetiva del paciente.</li>
                                <li><strong>Historial médico relevante:</strong> Medicamentos, alergias, antecedentes.</li>
                                <li><strong>Abordaje sistemático:</strong> Aplicar herramientas como OPQRST, SAMPLE.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia</h2>
                            <p className="text-gray-700">
                                La valoración médica permite identificar enfermedades que requieren intervención urgente,
                                como infartos, EVC, crisis hipertensivas, disnea severa o alteraciones metabólicas, y
                                priorizar el traslado y tratamiento.
                            </p>
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