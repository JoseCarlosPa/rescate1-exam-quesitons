import {NavLink} from "react-router";
import { faqData } from "./LegalAspects.questions.ts";
import { Disclosure } from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {IoMdBriefcase} from "react-icons/io";

export default function LegalAspects(){
    return(
        <div className="">
            <div className="flex flex-col items-center w-screen justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <IoMdBriefcase className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Aspectos Médicos, Legales y Éticos</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to="/emt"
                    className="flex gap-2 mb-4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/legal/exam"
                        className="flex gap-2 mb-4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://drive.google.com/file/d/1UZwgL6BvbwWvcmivQZ538n-n-jwR09jR/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-2 mb-4">
                            <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Principios Básicos</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>No ocasionar más daño durante los cuidados de urgencia.</li>
                                <li>Considerar siempre circunstancias éticas.</li>
                                <li>Responder todas las dudas legales relacionadas al campo de trabajo.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Normas y Reglamentos</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Modelo de Atención Prehospitalaria (STCONAPRA):</strong> Define los alcances y objetivos del TAMP.</li>
                                <li><strong>NOM-034-SSA3-2013:</strong> Establece equipamiento e insumos mínimos de ambulancias.</li>
                                <li><strong>Artículo 72:</strong> Define urgencia médica como riesgo inmediato para la vida, órgano o función.</li>
                                <li><strong>Artículo 79:</strong> TAMP es profesional de salud y debe recertificarse cada 3 años.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Conceptos Legales Clave</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Deber de Actuar:</strong> Obligación de prestar ayuda según los códigos penales estatales.</li>
                                <li><strong>Negligencia:</strong> Fallar en proporcionar cuidados adecuados.</li>
                                <li><strong>Impericia:</strong> Falta de conocimientos técnicos necesarios.</li>
                                <li><strong>Abandono:</strong> Interrumpir el cuidado sin transferencia adecuada.</li>
                                <li><strong>Consentimiento:</strong> El paciente debe autorizar el tratamiento después de ser informado.</li>
                                <li><strong>Consentimiento Implícito:</strong> Aplicable en casos de inconsciencia o amenaza grave a la vida.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Muerte y Reanimación</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Signos negativos de vida:</strong> Ausencia de pulso, respiración y actividad cerebral.</li>
                                <li><strong>Signos positivos de muerte:</strong> Livor mortis, rigor mortis, algor mortis, decapitación, putrefacción.</li>
                                <li><strong>RCP:</strong> Se inicia solo si los signos de muerte no están presentes y la causa puede ser reversible.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Reglamento de Tránsito y Código Penal</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Prioridad de paso:</strong> Ambulancias con sirena y torreta activadas tienen prioridad en vías públicas.</li>
                                <li><strong>Código Penal de Querétaro:</strong> Homicidio, lesiones, aborto, allanamiento de morada, omisión de auxilio, entre otros.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Responsabilidad Profesional</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>El TAMP es considerado primer respondiente y responsable de la escena y cadena de custodia.</li>
                                <li>Debe actuar siempre bajo estándares éticos y legales establecidos.</li>
                                <li>Documentar detalladamente todo procedimiento en medios físicos o digitales (FRAP).</li>
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
                                        <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
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