import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Trauma.questions.ts";
import {FaCarCrash} from "react-icons/fa";

export default function Trauma(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <FaCarCrash className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Conceptos generales de trauma</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/trauma/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1cshonwi1NXgFzcxxmJYUUDFBMNabtgjg/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>
                <section className="max-w-5xl mx-auto p-6">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué es el trauma?</h2>
                            <p className="text-gray-700">
                                El trauma es una lesión o daño físico causado por una fuerza externa. Es una de las principales causas de muerte y discapacidad en personas menores de 45 años.
                                La atención prehospitalaria temprana es vital para reducir la mortalidad y mejorar los resultados.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Mecanismo de lesión (MOI)</h2>
                            <p className="text-gray-700">
                                Comprender el mecanismo de lesión ayuda a predecir el tipo y la gravedad de las lesiones. Se clasifica en trauma contuso (golpes) y penetrante (heridas abiertas).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Cinética del trauma</h2>
                            <p className="text-gray-700">
                                Analiza cómo la energía del impacto se transfiere al cuerpo. Incluye factores como velocidad, desaceleración, masa del objeto y punto de impacto.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Evaluación primaria y secundaria</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Evaluación primaria:</strong> Identifica y trata amenazas inmediatas a la vida (ABCDE).</li>
                                <li><strong>Evaluación secundaria:</strong> Examen físico detallado y evaluación de antecedentes (SAMPLE, OPQRST).</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia del tiempo</h2>
                            <p className="text-gray-700">
                                El concepto de la “hora dorada” enfatiza la necesidad de atención rápida. El transporte al hospital adecuado debe ser una prioridad en pacientes traumatizados graves.
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