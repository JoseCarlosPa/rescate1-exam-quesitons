import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Pharmacology.questions.ts";
import {GiMedicines} from "react-icons/gi";

export default function Pharmacology(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <GiMedicines className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Principios de la Farmacología</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to="/emt"
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/pharmacology/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1qr0_uoihdOoUbp2bYr91hPmWs7hAnFXC/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué es la Farmacología?</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Es la ciencia que estudia las propiedades, acciones y uso de los medicamentos en el cuerpo.</li>
                                <li>Incluye el conocimiento de indicaciones, contraindicaciones, dosis, efectos secundarios y vías de administración.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Conceptos Básicos</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Fármaco:</strong> Sustancia química que modifica funciones corporales.</li>
                                <li><strong>Medicamento:</strong> Preparado que contiene uno o más fármacos para prevenir, tratar o curar enfermedades.</li>
                                <li><strong>Dosis:</strong> Cantidad específica que se debe administrar.</li>
                                <li><strong>Vía de administración:</strong> Método por el cual un medicamento entra al cuerpo (oral, sublingual, intramuscular, intravenosa, etc.).</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Medicamentos Comunes en el Ámbito Prehospitalario</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Aspirina:</strong> Inhibe la agregación plaquetaria en eventos cardiacos.</li>
                                <li><strong>Oxígeno:</strong> Tratamiento primario en hipoxia.</li>
                                <li><strong>Glucosa oral:</strong> Para hipoglucemia.</li>
                                <li><strong>Epinefrina:</strong> Utilizada en anafilaxia severa.</li>
                                <li><strong>Carbón activado:</strong> Adsorbe tóxicos en ciertos tipos de envenenamiento.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">5 Correctos de la Administración de Medicamentos</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Paciente correcto.</li>
                                <li>Medicamento correcto.</li>
                                <li>Dosis correcta.</li>
                                <li>Hora correcta.</li>
                                <li>Vía correcta.</li>
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