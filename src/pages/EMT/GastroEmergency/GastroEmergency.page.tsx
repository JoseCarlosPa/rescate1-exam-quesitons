import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./GastroEmergency.questions.ts";
import {GiStomach} from "react-icons/gi";

export default function GastroEmergency() {
    return (
        <div className="">
            <div
                className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <GiStomach className="w-24 h-24 mb-1 text-orange-500"/>
                <p className="text-5xl font-bold mb-4 flex text-center">Emergencias gastrointestinales y urológicas</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/gastro-emergency/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1vI8Dc6pfyv3jVunQdy99BFJlJ4dpdBiy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>

                </div>

                <section className="max-w-5xl mx-auto p-6">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué son?</h2>
                            <p className="text-gray-700">
                                Son afecciones que involucran órganos del sistema digestivo o del aparato urinario, que pueden representar
                                emergencias potencialmente graves si no se identifican y tratan a tiempo. En muchos casos, el dolor abdominal
                                es el síntoma principal.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Signos y síntomas comunes</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Dolor abdominal localizado o generalizado.</li>
                                <li>Náuseas, vómitos y diarrea.</li>
                                <li>Distensión abdominal o abdomen rígido.</li>
                                <li>Hematemesis (vómito con sangre) o melena (heces negras).</li>
                                <li>Disuria (dolor al orinar), hematuria (sangre en la orina).</li>
                                <li>Síntomas acompañantes como fiebre, taquicardia o hipotensión.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Evaluación prehospitalaria</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Aplicar el Código MEGA para evaluar la gravedad inicial.</li>
                                <li>Identificar el tipo de dolor: somático, visceral o referido.</li>
                                <li>Realizar una evaluación detallada con enfoque en OPQRST y SAMPLE.</li>
                                <li>Monitorizar signos vitales con frecuencia.</li>
                                <li>Evitar dar comida, agua o medicamentos sin indicación médica.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Tratamiento prehospitalario</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Colocar al paciente en posición de confort (generalmente en decúbito supino con rodillas flexionadas).</li>
                                <li>Administrar oxígeno si hay hipoxia.</li>
                                <li>Evitar aplicar calor en abdomen.</li>
                                <li>Preparar para traslado inmediato si hay signos de shock.</li>
                                <li>Notificar al hospital receptor sobre la condición del paciente.</li>
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