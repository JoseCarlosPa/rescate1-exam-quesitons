import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Shock.questions.ts";
import {TbMedicalCrossCircle} from "react-icons/tb";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";

export default function Shock(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4   p-4">
                <TbMedicalCrossCircle className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Shock en Atención Prehospitalaria</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/shock/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1cshonwi1NXgFzcxxmJYUUDFBMNabtgjg/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>
                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué es el Shock?</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>El shock es un estado de perfusión inadecuada de los tejidos y órganos del cuerpo.</li>
                                <li>Resulta en falta de oxígeno y nutrientes esenciales, llevando a disfunción celular y muerte si no se trata a tiempo.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Tipos Principales de Shock</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Shock hipovolémico:</strong> Por pérdida de volumen sanguíneo o de líquidos.</li>
                                <li><strong>Shock cardiogénico:</strong> Fallo de la bomba cardiaca.</li>
                                <li><strong>Shock obstructivo:</strong> Obstrucción al flujo sanguíneo (ej. neumotórax a tensión, embolia pulmonar).</li>
                                <li><strong>Shock distributivo:</strong> Alteración en la distribución del flujo (ej. anafilaxia, sépsis, shock neurogénico).</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Signos y Síntomas de Shock</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Piel fría, pálida y sudorosa.</li>
                                <li>Taquicardia.</li>
                                <li>Hipotensión.</li>
                                <li>Estado mental alterado (confusión, ansiedad, pérdida de conciencia).</li>
                                <li>Respiración rápida y superficial.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Tratamiento Prehospitalario Básico del Shock</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Controlar hemorragias externas de inmediato.</li>
                                <li>Administrar oxígeno suplementario si está indicado.</li>
                                <li>Colocar al paciente en posición supina si es posible (excepto contraindicaciones).</li>
                                <li>Mantener la temperatura corporal adecuada (evitar la hipotermia).</li>
                                <li>Transportar rápidamente a un centro médico adecuado.</li>
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