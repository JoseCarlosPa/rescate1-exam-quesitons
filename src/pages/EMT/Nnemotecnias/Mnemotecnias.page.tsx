import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {RxLetterSpacing} from "react-icons/rx";
import {faqData} from "./Mnemotecnias.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";

export default function Mnemotecnias(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <RxLetterSpacing className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Nemotecnias en Atención Prehospitalaria</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/nemotecnias/exam"
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
                            <h2 className="text-2xl font-semibold mb-2">¿Qué son las Nemotecnias?</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Son herramientas que ayudan a recordar secuencias de evaluación, intervenciones o pasos críticos en la atención prehospitalaria.</li>
                                <li>Facilitan respuestas rápidas, organizadas y sistemáticas en situaciones de alta presión.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Principales Nemotecnias</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>ABC:</strong> Airway (vía aérea), Breathing (respiración), Circulation (circulación).</li>
                                <li><strong>SAMPLE:</strong> Signos/Síntomas, Alergias, Medicamentos, Pasado médico, Última comida, Eventos previos.</li>
                                <li><strong>OPQRST:</strong> Inicio, Provocación, Calidad, Irradiación, Severidad, Tiempo.</li>
                                <li><strong>AVPU:</strong> Alerta, Responde a Voz, Responde a Dolor, Inconsciente (Unresponsive).</li>
                                <li><strong>DCAP-BTLS:</strong> Deformidades, Contusiones, Abrasiones, Punciones, Quemaduras (Burns), Sensibilidad (Tenderness), Laceraciones, Hinchazón (Swelling).</li>
                                <li><strong>PEARL:</strong> Pupilas Iguales y Reactivas a la Luz.</li>
                                <li><strong>AEIOU-TIPS:</strong> Causas comunes de alteración del estado mental: Alcohol, Epilepsia, Insulina, Sobredosis, Trauma, Infección, Psicógenos, Stroke (ACV).</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia en el Campo</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Permiten evaluaciones rápidas bajo presión.</li>
                                <li>Disminuyen errores y omisiones en la atención del paciente.</li>
                                <li>Mejoran la comunicación con otros proveedores de salud.</li>
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