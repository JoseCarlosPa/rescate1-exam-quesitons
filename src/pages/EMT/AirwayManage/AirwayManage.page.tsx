import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {FaHeadSideMask} from "react-icons/fa";
import {faqData} from "./AirwayManage.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";

export default function AirwayManage(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4   p-4">
                <FaHeadSideMask  className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Manejo de la Vía Aérea</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/airway-manage/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                    <a href="https://www.easyauscultation.com/lung-sounds"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Practica escuchando</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia del Manejo de la Vía Aérea</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Garantizar una vía aérea abierta y funcional es la prioridad absoluta en la atención prehospitalaria.</li>
                                <li>La obstrucción de la vía aérea puede llevar rápidamente a hipoxia y muerte si no se maneja adecuadamente.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Pasos para Evaluar la Vía Aérea</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Evaluar si el paciente puede hablar o respirar normalmente.</li>
                                <li>Buscar sonidos anormales: estridor, ronquidos, gorgoteo.</li>
                                <li>Observar movimientos torácicos y signos de dificultad respiratoria.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Técnicas de Apertura de la Vía Aérea</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Inclinación de cabeza y elevación del mentón:</strong> Técnica estándar en pacientes sin trauma.</li>
                                <li><strong>Tracción mandibular:</strong> Técnica utilizada si se sospecha lesión cervical.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Dispositivos Básicos de Manejo de Vía Aérea</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Aspirador:</strong> Para eliminar secreciones o vómito.</li>
                                <li><strong>Cánula orofaríngea (OPA):</strong> Evita la obstrucción por la lengua en pacientes inconscientes sin reflejo de vómito.</li>
                                <li><strong>Cánula nasofaríngea (NPA):</strong> Para mantener la vía aérea en pacientes conscientes o semiconscientes.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Oxigenoterapia</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Administrar oxígeno suplementario según necesidad clínica del paciente.</li>
                                <li>Dispositivos: cánula nasal, mascarilla simple, mascarilla de no reinhalación, bolsa-válvula-mascarilla (BVM).</li>
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