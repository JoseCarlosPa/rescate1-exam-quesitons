import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Evaluation.questions.ts";
import {FaNotesMedical} from "react-icons/fa";

export default function Evaluation(){
    return (
        <div className="">
            <div
                className="flex flex-col items-center w-screen justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <FaNotesMedical className="w-24 h-24 mb-1 text-orange-500"/>
                <p className="text-5xl font-bold mb-4 flex text-center">El Cuerpo Humano</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to="/emt"
                    className="flex gap-2 mb-4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/evaluation/exam"
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
                    <h1 className="text-3xl font-bold mb-6 text-center">Evaluación del Paciente</h1>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué es la Evaluación del Paciente?</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Es un proceso sistemático que permite identificar lesiones o enfermedades que amenazan la vida y requieren intervención inmediata.</li>
                                <li>Es una habilidad crítica en la atención prehospitalaria para brindar el tratamiento adecuado.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Pasos Principales en la Evaluación</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Evaluación de la escena:</strong> Seguridad de la escena, mecanismo de lesión o naturaleza de la enfermedad, número de pacientes y necesidad de recursos adicionales.</li>
                                <li><strong>Evaluación primaria:</strong> Detectar amenazas inmediatas a la vida (ABC: vía aérea, respiración, circulación).</li>
                                <li><strong>Evaluación secundaria:</strong> Examen físico completo o enfocado según el caso, historial SAMPLE y medición de signos vitales.</li>
                                <li><strong>Reevaluación:</strong> Monitoreo continuo para detectar cambios en el estado del paciente.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Herramientas de Evaluación</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>SAMPLE:</strong> Signos y síntomas, Alergias, Medicamentos, Pasado médico, Última comida, Eventos previos.</li>
                                <li><strong>OPQRST:</strong> Inicio, Provocación, Calidad, Radiación, Severidad, Tiempo (para dolor).</li>
                                <li><strong>Glasgow Coma Scale (GCS):</strong> Valora el estado neurológico (respuesta ocular, verbal y motora).</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia de la Evaluación Continua</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Detectar deterioro o mejoría del paciente.</li>
                                <li>Permitir ajustes en el tratamiento según cambios clínicos.</li>
                                <li>Documentar adecuadamente cada hallazgo.</li>
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
                                            className="flex w-full justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
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