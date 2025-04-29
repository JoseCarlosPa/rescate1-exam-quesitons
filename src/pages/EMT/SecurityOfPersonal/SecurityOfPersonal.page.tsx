import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./SecurityOfPersonal.questions.ts";
import {GiProtectionGlasses} from "react-icons/gi";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";

export default function SecurityOfPersonal(){
    return(
        <div className="">
            <div className="flex flex-col items-center  justify-center bg-gray-100 pb-12 md:px-0 px-4 dark:bg-gray-900 dark:text-gray-100 p-4">
                <GiProtectionGlasses className="w-24 h-24 mb-1 text-orange-500" />
                <p className="text-5xl font-bold mb-4 flex text-center">Seguridad y bienestar del personal</p>
                <p className="text-sm italic">Alumnos Generacion 2025 Sabados Rescate 1</p>
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/security-of-personal/exam"
                        className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Hacer examen</p>
                    </NavLink>
                    <a href="https://docs.google.com/presentation/d/1OtpAqjIRZ7Gya51-UDNSIl1x46aLJXcU/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out4">
                        <p className="text-lg">Presentación</p>
                    </a>
                </div>

                <section className="max-w-5xl mx-auto p-6">
                    <div className="space-y-8">
                        {/* Principios Básicos */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Principios Básicos</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Garantizar siempre la seguridad del personal antes de intervenir en cualquier emergencia.</li>
                                <li>Realizar una evaluación constante del entorno para prevenir peligros potenciales.</li>
                                <li>Asegurarse de tener el equipo de protección adecuado para cada situación.</li>
                            </ul>
                        </div>

                        {/* Normas y Reglamentos */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Normas y Reglamentos</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Norma Oficial Mexicana (NOM-035-STPS-2018):</strong> Establece las condiciones de trabajo que deben promover la seguridad y el bienestar psicológico del personal.</li>
                                <li><strong>Estándares de Seguridad para Servicios de Emergencias:</strong> Define los requisitos mínimos de seguridad para los paramédicos en el campo.</li>
                                <li><strong>Procedimientos de Evacuación y Primeros Auxilios:</strong> Deben ser realizados por el personal de manera periódica para garantizar la respuesta efectiva ante emergencias.</li>
                            </ul>
                        </div>

                        {/* Equipo de Protección Personal (EPP) */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Equipo de Protección Personal (EPP)</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Protección contra patógenos:</strong> Uso de guantes, mascarillas, gafas protectoras y batas para prevenir la transmisión de enfermedades.</li>
                                <li><strong>Seguridad en el manejo de equipo:</strong> El personal debe ser capacitado para usar adecuadamente el equipo y evitar accidentes relacionados con su uso.</li>
                                <li><strong>Protección durante el transporte:</strong> El personal debe contar con sistemas de retención adecuados dentro de las ambulancias para evitar lesiones durante el trayecto.</li>
                            </ul>
                        </div>

                        {/* Gestión de Riesgos y Amenazas */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Gestión de Riesgos y Amenazas</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Evaluación de la escena:</strong> Antes de intervenir, se debe realizar una evaluación inicial de riesgos, incluyendo la presencia de sustancias peligrosas o posibles agresores.</li>
                                <li><strong>Cooperación con autoridades:</strong> El TAMP debe coordinar con fuerzas de seguridad y otros equipos de emergencia para garantizar un ambiente seguro.</li>
                                <li><strong>Protocolos de seguridad:</strong> Los procedimientos estándar deben seguirse para minimizar el riesgo de accidentes o incidentes durante la atención prehospitalaria.</li>
                            </ul>
                        </div>

                        {/* Manejo de Situaciones de Alto Riesgo */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Manejo de Situaciones de Alto Riesgo</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Violencia y disturbios:</strong> En caso de incidentes violentos o disturbios, el personal debe mantenerse alejado hasta que las autoridades aseguren el área.</li>
                                <li><strong>Accidentes de tráfico:</strong> Durante accidentes de tráfico, se debe garantizar la seguridad del personal evitando la proximidad a los vehículos en movimiento o el riesgo de colisiones secundarias.</li>
                                <li><strong>Evacuación de áreas peligrosas:</strong> El TAMP debe seguir protocolos establecidos para evacuar a los pacientes de zonas de alto riesgo, como incendios o materiales peligrosos.</li>
                            </ul>
                        </div>

                        {/* Responsabilidad Profesional */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Responsabilidad Profesional</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>El TAMP es responsable de mantener un entorno seguro para él mismo, sus compañeros y los pacientes.</li>
                                <li>Se debe realizar una constante autoevaluación y capacitación para mejorar la seguridad personal en el campo.</li>
                                <li>Documentación precisa de incidentes de seguridad y bienestar es esencial para mejorar procedimientos futuros.</li>
                            </ul>
                        </div>

                        {/* Prevención de Fatiga y Estrés */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Prevención de Fatiga y Estrés</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Rotación de turnos:</strong> Los turnos deben ser rotativos y descansos frecuentes para prevenir la fatiga extrema.</li>
                                <li><strong>Apoyo psicológico:</strong> Proporcionar acceso a programas de apoyo psicológico para el personal, especialmente después de eventos traumáticos.</li>
                                <li><strong>Monitoreo de bienestar:</strong> Implementar mecanismos para evaluar el bienestar físico y mental del personal regularmente.</li>
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
                                        <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 dark:hover:bg-gray-700">
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