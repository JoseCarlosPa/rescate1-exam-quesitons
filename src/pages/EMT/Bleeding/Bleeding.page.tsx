import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Bleeding.questions.ts";
import {MdBloodtype} from "react-icons/md";

export default  function Bleeding(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4   p-4">
                <MdBloodtype className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Hemorragias</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/bleeding/exam"
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
                            <h2 className="text-2xl font-semibold mb-2">¿Qué es una hemorragia?</h2>
                            <p className="text-gray-700">
                                Una hemorragia es la pérdida de sangre del sistema circulatorio. Puede ser externa o interna, y su gravedad depende del volumen, la velocidad de la pérdida y la localización.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Tipos de hemorragias</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><strong>Arterial:</strong> Sangre brillante, sale a presión, pulsátil.</li>
                                <li><strong>Venosa:</strong> Flujo constante, sangre más oscura.</li>
                                <li><strong>Capilar:</strong> Sangrado lento, de superficie.</li>
                                <li><strong>Interna:</strong> No visible, sospechar por signos clínicos.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Manejo prehospitalario</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Identificar el tipo de hemorragia.</li>
                                <li>Aplicar presión directa sobre la herida.</li>
                                <li>Usar apósitos hemostáticos o vendajes compresivos.</li>
                                <li>En hemorragias masivas, usar torniquete si está indicado.</li>
                                <li>Evaluar signos de shock hipovolémico y tratar con prioridad.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Importancia del control de hemorragias</h2>
                            <p className="text-gray-700">
                                El control rápido de una hemorragia puede ser la diferencia entre la vida y la muerte. El TAMP debe actuar con rapidez y eficacia para detener la pérdida de sangre y prevenir el shock.
                            </p>
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