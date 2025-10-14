import {FaHeart} from "react-icons/fa";
import {RiGovernmentLine} from "react-icons/ri";
import {AiOutlineWarning} from "react-icons/ai";
import {MdVerifiedUser} from "react-icons/md";
import {HiDocumentText} from "react-icons/hi";
import {BsShieldCheck} from "react-icons/bs";

export default function Overview() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué
                    son fundamentales los aspectos legales y éticos?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Para un TAMP, conocer el marco legal y ético no es opcional: es una
                    responsabilidad profesional que protege tanto al paciente como al
                    paramédico.
                    Cada decisión en campo tiene implicaciones legales que pueden determinar el
                    futuro profesional del técnico y la seguridad del paciente.
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-red-700">
                                <strong>Punto crítico:</strong> Un error legal puede resultar en
                                demandas civiles, penales, pérdida de certificación y daño a la
                                reputación profesional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-blue-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <FaHeart className="w-6 h-6 text-blue-500 mr-3"/>
                        <h3 className="text-xl font-semibold text-blue-700">Principios éticos
                            fundamentales</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                                                    <span
                                                        className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Primum non nocere:</strong> "Lo primero es no dañar" -
                                base de toda intervención médica.
                            </div>
                        </li>
                        <li className="flex items-start">
                                                    <span
                                                        className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Beneficencia:</strong> Actuar siempre en beneficio del
                                paciente.
                            </div>
                        </li>
                        <li className="flex items-start">
                                                    <span
                                                        className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Autonomía:</strong> Respetar las decisiones del paciente
                                competente.
                            </div>
                        </li>
                        <li className="flex items-start">
                                                    <span
                                                        className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Justicia:</strong> Tratar a todos los pacientes con
                                equidad.
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-white border border-green-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <RiGovernmentLine className="w-6 h-6 text-green-500 mr-3"/>
                        <h3 className="text-xl font-semibold text-green-700">Marco normativo
                            mexicano</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                                                    <span
                                                        className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>NOM-034-SSA3-2013:</strong> Regulación de servicios de
                                emergencias médicas.
                            </div>
                        </li>
                        <li className="flex items-start">
                                                    <span
                                                        className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Código Penal:</strong> Responsabilidad penal por
                                negligencia médica.
                            </div>
                        </li>
                        <li className="flex items-start">
                                                    <span
                                                        className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Ley General de Salud:</strong> Marco general de atención
                                médica.
                            </div>
                        </li>
                        <li className="flex items-start">
                                                    <span
                                                        className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>FRAP:</strong> Obligatoriedad del registro de atención
                                prehospitalaria.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                    <AiOutlineWarning className="mr-2 text-xl"/>
                    Responsabilidades clave del TAMP
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <div className="flex items-center mb-2">
                            <MdVerifiedUser className="text-yellow-600 mr-2"/>
                            <strong className="text-yellow-800">Certificación vigente</strong>
                        </div>
                        <p className="text-sm text-yellow-700">
                            Mantener certificación actualizada y participar en educación
                            continua cada 3 años.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <div className="flex items-center mb-2">
                            <HiDocumentText className="text-yellow-600 mr-2"/>
                            <strong className="text-yellow-800">Documentación completa</strong>
                        </div>
                        <p className="text-sm text-yellow-700">
                            Registrar toda intervención en FRAP de manera clara, completa y
                            veraz.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <div className="flex items-center mb-2">
                            <BsShieldCheck className="text-yellow-600 mr-2"/>
                            <strong className="text-yellow-800">Protección de datos</strong>
                        </div>
                        <p className="text-sm text-yellow-700">
                            Mantener confidencialidad y proteger información médica del
                            paciente.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Tip profesional</h3>
                <p className="text-blue-700">
                    "Cuando tengas dudas sobre un aspecto legal o ético, siempre prioriza la
                    seguridad del paciente y consulta con supervisión médica.
                    Es mejor pedir orientación que enfrentar consecuencias legales por una
                    decisión incorrecta."
                </p>
            </div>
        </div>
    );
}