import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./AirwayEmergency.questions.ts";
import {FaMaskVentilator} from "react-icons/fa6";
import {IoReturnDownBack} from "react-icons/io5";

export default function AirwayEmergency(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <FaMaskVentilator  className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Emergencias Respiratorias</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/airway-emergency/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué son las emergencias respiratorias?</h2>
                            <p className="text-gray-700">
                                Las emergencias respiratorias son condiciones en las que el cuerpo no recibe suficiente oxígeno, lo que puede resultar en hipoxia, hipoxemia o paro respiratorio si no se actúa a tiempo.
                                Incluyen desde obstrucción de la vía aérea hasta enfermedades crónicas como EPOC, asma, neumonía o edema pulmonar.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Signos comunes</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Dificultad para respirar (disnea)</li>
                                <li>Ruidos respiratorios anormales (sibilancias, estridor, ronquidos)</li>
                                <li>Cianosis (coloración azulada)</li>
                                <li>Taquipnea o bradipnea</li>
                                <li>Uso de músculos accesorios para respirar</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Manejo prehospitalario</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Asegurar la vía aérea y administrar oxígeno.</li>
                                <li>Evaluar saturación con pulsioxímetro.</li>
                                <li>Ventilar si hay respiración inefectiva.</li>
                                <li>Uso de dispositivos como cánula nasal, mascarilla o BVM.</li>
                                <li>Administrar medicamentos si está indicado (ej. broncodilatadores).</li>
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