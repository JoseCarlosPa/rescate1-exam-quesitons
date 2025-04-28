import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./ReanimateSvb.questions.ts";
import {FaHandHoldingMedical} from "react-icons/fa";

export default function ReanimateSvb() {
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <FaHandHoldingMedical className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Reanimación: Soporte Vital Básico (SVB)</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to="/emt"
                    className="flex gap-2 mb-4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/reanimation-svb/exam"
                        className="flex gap-2 mb-4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1OtpAqjIRZ7Gya51-UDNSIl1x46aLJXcU/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué es el Soporte Vital Básico (SVB)?</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Conjunto de maniobras destinadas a reconocer un paro cardiorrespiratorio (PCR) y mantener la circulación y la oxigenación hasta la llegada de ayuda avanzada.</li>
                                <li>Incluye RCP (reanimación cardiopulmonar), desfibrilación temprana y manejo básico de la vía aérea.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Cadena de Supervivencia</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reconocimiento temprano y activación del sistema de emergencias.</li>
                                <li>RCP de alta calidad e inmediata.</li>
                                <li>Desfibrilación temprana.</li>
                                <li>Soporte vital avanzado.</li>
                                <li>Cuidados post paro cardíaco.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Pasos Básicos de la RCP de Alta Calidad</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Compresiones torácicas efectivas (al menos 5 cm de profundidad en adultos, frecuencia de 100-120 por minuto).</li>
                                <li>Permitir la descompresión completa entre compresiones.</li>
                                <li>Minimizar interrupciones en las compresiones.</li>
                                <li>Ventilar adecuadamente (si entrenado).</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Uso del Desfibrilador Externo Automático (DEA)</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Encender el DEA y seguir instrucciones.</li>
                                <li>Colocar los parches adhesivos.</li>
                                <li>Permitir que el DEA analice el ritmo y seguir sus indicaciones.</li>
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