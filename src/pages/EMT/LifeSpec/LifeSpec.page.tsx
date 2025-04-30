import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./LifeSpec.questions.ts";
import {FaBaby} from "react-icons/fa";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";

export default function LifeSpec(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4   p-4">
                <FaBaby className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Desarrollo y esperanza de vida</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/life-spect/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1Jw5ONtWNz3ajHTwdxvTE3fS8JanopiVy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Etapas del Desarrollo Humano</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Neonatos (0-1 mes):</strong> Alta dependencia, reflejos primitivos, respiración nasal.</li>
                                <li><strong>Lactantes (1 mes - 1 año):</strong> Desarrollo rápido de habilidades motoras y sensoriales.</li>
                                <li><strong>Niños pequeños (1-3 años):</strong> Desarrollo del lenguaje y autonomía inicial.</li>
                                <li><strong>Niños en edad preescolar (3-6 años):</strong> Crecimiento emocional y social significativo.</li>
                                <li><strong>Niños escolares (6-12 años):</strong> Mayor coordinación, socialización y razonamiento lógico.</li>
                                <li><strong>Adolescentes (12-18 años):</strong> Pubertad, identidad personal y pensamiento abstracto.</li>
                                <li><strong>Adultos jóvenes (19-40 años):</strong> Máxima condición física, formación de familia y carrera.</li>
                                <li><strong>Adultos de mediana edad (41-60 años):</strong> Disminución gradual de capacidades físicas.</li>
                                <li><strong>Adultos mayores ( Mayor 60 años):</strong> Disminución marcada de la función fisiológica, importancia del apoyo social.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Aspectos Vitales en el Desarrollo</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>La frecuencia respiratoria y cardiaca disminuye progresivamente con la edad.</li>
                                <li>La presión arterial tiende a aumentar a medida que la persona envejece.</li>
                                <li>El sistema inmunológico madura en la infancia y declina en la vejez.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Consideraciones Especiales en Atención Prehospitalaria</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>En neonatos y lactantes, la vía aérea es más pequeña y flexible: se requiere un manejo delicado.</li>
                                <li>En niños, la cabeza es proporcionalmente más grande, aumentando el riesgo de trauma craneal.</li>
                                <li>En adultos mayores, considerar comorbilidades, fragilidad ósea y comunicación clara.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Esperanza de Vida</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Factores como genética, estilo de vida, acceso a servicios de salud y entorno social impactan la esperanza de vida.</li>
                                <li>Actualmente, la esperanza de vida promedio en muchos países supera los 70 años.</li>
                                <li>Las enfermedades crónicas y el deterioro fisiológico afectan la calidad de vida en la vejez.</li>
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