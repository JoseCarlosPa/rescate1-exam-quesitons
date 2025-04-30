import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./EndocryEmergency.questions.ts";
import {CiMedicalCross} from "react-icons/ci";
import {IoReturnDownBack} from "react-icons/io5";

export default function EndocryEmergency(){
    return(
        <div className="">
            <div
                className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4   p-4">
                <CiMedicalCross className="w-24 h-24 mb-1 text-orange-500"/>
                <p className="text-5xl font-bold mb-4 flex text-center">Emergencias Endocrinas y Hematológicas</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/endocrine-emergency/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1vI8Dc6pfyv3jVunQdy99BFJlJ4dpdBiy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>

                </div>

                <section className="max-w-5xl mx-auto p-6">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué son?</h2>
                            <p className="text-gray-700">
                                Las emergencias endocrinas y hematológicas son condiciones médicas que afectan al sistema hormonal y a la sangre, respectivamente, y pueden representar amenazas inmediatas para la vida del paciente si no se reconocen y tratan rápidamente en el entorno prehospitalario.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Emergencias Endocrinas</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Hipoglucemia:</strong> Bajos niveles de glucosa en sangre. Síntomas: alteración del estado mental, sudoración, palpitaciones, convulsiones.</li>
                                <li><strong>Hiperglucemia:</strong> Niveles elevados de glucosa, puede progresar a cetoacidosis diabética (CAD) o estado hiperosmolar. Síntomas: poliuria, polidipsia, piel seca, respiración de Kussmaul.</li>
                                <li><strong>Tratamiento:</strong> Administración de glucosa oral si está consciente. Asistencia avanzada si está inconsciente o presenta vómitos.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Emergencias Hematológicas</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Anemia:</strong> Reducción de glóbulos rojos o hemoglobina. Puede causar fatiga, disnea, palidez.</li>
                                <li><strong>Hemofilia:</strong> Trastorno de coagulación; riesgo de sangrado excesivo, incluso interno. Manejo cuidadoso del paciente.</li>
                                <li><strong>Enfermedad de células falciformes:</strong> Trastorno hereditario que provoca crisis dolorosas por obstrucción de vasos sanguíneos. Riesgo de infartos, ACV, daño renal.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia para el TAMP</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reconocer signos tempranos de alteraciones metabólicas y hematológicas graves.</li>
                                <li>Administrar tratamiento inmediato según el protocolo local.</li>
                                <li>Transportar rápidamente a centros especializados cuando sea necesario.</li>
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
                                            className="flex w-full justify-between items-center bg-gray-100  px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 ">
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