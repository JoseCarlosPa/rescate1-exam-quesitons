import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./CardioEmergency.questions.ts";
import {FaHeartPulse} from "react-icons/fa6";
import {IoReturnDownBack} from "react-icons/io5";

export default function CardioEmergency() {
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4   p-4">
                <FaHeartPulse className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Emergencias Cardiovasculares</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/cardio-emergency/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">¿Qué son las emergencias cardiovasculares?</h2>
                            <p className="text-gray-700">
                                Son afecciones críticas que comprometen el sistema cardiovascular, como el infarto agudo al miocardio,
                                arritmias graves, paro cardíaco, insuficiencia cardíaca y taponamiento cardíaco. Estas emergencias
                                requieren una evaluación y tratamiento inmediato para preservar la vida y reducir el daño al miocardio.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Signos y síntomas frecuentes</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Dolor torácico opresivo, irradiado o persistente.</li>
                                <li>Disnea (dificultad para respirar).</li>
                                <li>Palpitaciones o pérdida súbita del pulso.</li>
                                <li>Sudoración profusa, náuseas o mareo.</li>
                                <li>Cambios en el estado de conciencia.</li>
                                <li>Coloración azulada (cianosis) o palidez.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia de la intervención prehospitalaria</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reconocer signos tempranos de infarto o paro cardíaco puede salvar vidas.</li>
                                <li>Las compresiones torácicas de alta calidad aumentan las posibilidades de supervivencia.</li>
                                <li>El uso rápido de un DEA (desfibrilador externo automático) es crucial en ritmos desfibrilables.</li>
                                <li>El monitoreo continuo y el traslado oportuno mejoran los resultados clínicos.</li>
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