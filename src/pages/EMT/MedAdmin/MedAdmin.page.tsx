import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {GiTripleNeedle} from "react-icons/gi";
import {faqData} from "./MedAdmin.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";

export default function MedAdmin(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4   p-4">
                <GiTripleNeedle className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Administración de Medicamentos</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/med-admin/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1gwDn5-fcA1qLFbYfkqIPET6kvnzZAvmu/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Concepto General</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>La administración de medicamentos es una habilidad crítica en la atención prehospitalaria.</li>
                                <li>Requiere conocer las indicaciones, dosis, efectos secundarios, vías de administración y precauciones de cada medicamento.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">5 Correctos de la Administración de Medicamentos</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Paciente correcto.</li>
                                <li>Medicamento correcto.</li>
                                <li>Dosis correcta.</li>
                                <li>Hora o momento correcto.</li>
                                <li>Vía de administración correcta.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Principales Vías de Administración en el Ámbito Prehospitalario</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Oral:</strong> Administración por boca.</li>
                                <li><strong>Sublingual:</strong> Debajo de la lengua para absorción rápida.</li>
                                <li><strong>Inhalada:</strong> Medicamentos respiratorios.</li>
                                <li><strong>Intramuscular (IM):</strong> Inyección en un músculo.</li>
                                <li><strong>Intravenosa (IV):</strong> Administración directa al torrente sanguíneo (generalmente en niveles avanzados).</li>
                                <li><strong>Subcutánea (SC):</strong> Inyección debajo de la piel.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Consideraciones de Seguridad</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Confirmar alergias antes de administrar cualquier medicamento.</li>
                                <li>Observar signos de efectos adversos tras la administración.</li>
                                <li>Documentar todos los medicamentos administrados, dosis, vía, hora y respuesta del paciente.</li>
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