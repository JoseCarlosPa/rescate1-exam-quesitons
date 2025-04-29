import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./HumanBody.questions.ts";
import {IoIosBody} from "react-icons/io";

export default function HumanBody() {
    return (
        <div className="">
            <div
                className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <IoIosBody className="w-24 h-24 mb-1 text-orange-500"/>
                <p className="text-5xl font-bold mb-4 flex text-center">El Cuerpo Humano</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to="/emt"
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/human-body/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1Rnfsa9yfGk1X8vWPptTCUSNO46Snf2nq/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">El Cuerpo Humano</h2>
                            <p>
                                El cuerpo humano está compuesto por varios sistemas y órganos que trabajan juntos para
                                mantener la homeostasis, es decir, un equilibrio que permite el funcionamiento adecuado
                                de los órganos. Los sistemas principales incluyen el sistema circulatorio, respiratorio,
                                nervioso, digestivo, muscular, esquelético, entre otros. Cada uno de estos sistemas
                                desempeña un papel fundamental en el bienestar general y la salud del cuerpo. La
                                comprensión de la anatomía y la fisiología del cuerpo humano es crucial para los
                                profesionales de la salud, especialmente aquellos en atención prehospitalaria, ya que
                                les permite evaluar, diagnosticar y tratar a los pacientes de manera efectiva y
                                oportuna.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="max-w-5xl mx-auto p-6">
                    <h2 className="text-2xl font-semibold mb-4">Sistemas Principales</h2>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="text-lg font-bold">Sistema Circulatorio</h3>
                            <p>Compuesto por el corazón, la sangre y los vasos sanguíneos. Su función principal es transportar oxígeno, nutrientes, hormonas y desechos a través del cuerpo.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-bold">Sistema Respiratorio</h3>
                            <p>Compuesto por los pulmones y las vías respiratorias. Su principal función es intercambiar oxígeno y dióxido de carbono entre el cuerpo y el aire.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-bold">Sistema Nervioso</h3>
                            <p>Incluye el cerebro, la médula espinal y los nervios. Controla y coordina las funciones del cuerpo, además de permitir la percepción sensorial y la respuesta a estímulos.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-bold">Sistema Muscular</h3>
                            <p>Comprende los músculos esqueléticos, lisos y cardíacos. Es responsable del movimiento y la estabilidad corporal.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-bold">Sistema Esquelético</h3>
                            <p>Está formado por huesos y articulaciones. Proporciona soporte, protección y movimiento al cuerpo.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-bold">Sistema Digestivo</h3>
                            <p>Incluye órganos como el estómago, los intestinos y el hígado. Su función es descomponer los alimentos y absorber los nutrientes necesarios para el cuerpo.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-bold">Sistema Endocrino</h3>
                            <p>Se compone de glándulas que producen hormonas. Regula procesos como el metabolismo, el crecimiento y la función reproductiva.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-bold">Sistema Urinario</h3>
                            <p>Incluye los riñones, la vejiga y los conductos urinarios. Su función es filtrar los desechos del cuerpo y mantener el equilibrio hídrico y electrolítico.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-bold">Sistema Inmunológico</h3>
                            <p>Protege al cuerpo contra infecciones y enfermedades a través de una red de células y órganos que identifican y destruyen patógenos.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-bold">Sistema Tegumentario</h3>
                            <p>Formado por la piel, cabello y uñas, protege al cuerpo de los agentes externos y regula la temperatura.</p>
                        </li>
                    </ul>
                </section>
                <section className="max-w-5xl mx-auto p-6">
                    <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>

                    <div className="space-y-4">
                        {faqData.map((faq, idx) => (
                            <Disclosure key={idx}>
                                {({open}) => (
                                    <div className="border rounded-lg overflow-hidden">
                                        <Disclosure.Button
                                            className="flex w-full justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 dark:hover:bg-gray-700">
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