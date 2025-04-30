import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./NeuroEmergency.questions.ts";
import {RiBrain2Fill} from "react-icons/ri";
import {IoReturnDownBack} from "react-icons/io5";

export default function NeuroEmergency(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4   p-4">
                <RiBrain2Fill className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Emergencias Neurologicas</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/neuro-emergency/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/15fdQZsSUuF9ViCqGwilGhDpF4zVoU5f8/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué son las Emergencias Neurológicas?</h2>
                            <p className="text-gray-700">
                                Las emergencias neurológicas son condiciones que afectan al sistema nervioso central y periférico, y pueden comprometer rápidamente la vida o causar discapacidad permanente. El reconocimiento temprano y la intervención prehospitalaria son clave para mejorar el pronóstico del paciente.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Principales tipos de emergencias neurológicas</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Accidente Cerebrovascular (ACV):</strong> Causa común de discapacidad y muerte. Se divide en isquémico (oclusión) y hemorrágico (ruptura de vasos).</li>
                                <li><strong>Convulsiones:</strong> Descargas eléctricas anormales en el cerebro que causan pérdida de conciencia, movimientos involuntarios o alteraciones sensoriales.</li>
                                <li><strong>Estado epiléptico:</strong> Crisis convulsivas prolongadas o recurrentes sin recuperación del estado de conciencia entre episodios.</li>
                                <li><strong>Traumatismo craneoencefálico (TCE):</strong> Lesión del encéfalo por traumatismo directo. Requiere monitoreo constante del nivel de conciencia.</li>
                                <li><strong>Síncope:</strong> Pérdida transitoria de la conciencia por disminución temporal del flujo cerebral.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Evaluación prehospitalaria</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Utiliza la escala AVPU (Alerta, responde a Voz, responde a Dolor, No responde).</li>
                                <li>Evalúa el nivel de glucosa: hipoglucemia puede simular déficit neurológico.</li>
                                <li>Aplica la escala de Cincinnati para sospecha de ACV.</li>
                                <li>Controla la vía aérea y administra oxígeno si es necesario.</li>
                                <li>Transporta rápido a un centro con capacidad neurológica.</li>
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