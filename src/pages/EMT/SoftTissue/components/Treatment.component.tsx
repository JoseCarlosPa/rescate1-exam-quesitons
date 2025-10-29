import { FaHandHoldingMedical, FaBandAid, FaShieldAlt, FaExclamationCircle } from "react-icons/fa";
import { MdBloodtype, MdLocalHospital, MdWarning } from "react-icons/md";
import { GiPressureCooker, GiFirstAidKit, GiScalpel, GiBandaged, GiMedicalPack } from "react-icons/gi";
import { BiFirstAid } from "react-icons/bi";

export default function Treatment(){
    return(
        <div className="space-y-6">
            <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                    <FaHandHoldingMedical className="w-16 h-16 text-orange-500"/>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Manejo y Tratamiento</h2>
                <p className="text-gray-600">Lesiones de Tejido Blando</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md border-l-4 border-orange-500">
                <div className="flex items-center gap-3 mb-4">
                    <MdLocalHospital className="w-8 h-8 text-orange-600"/>
                    <h2 className="text-2xl font-bold text-gray-800">Manejo General de Lesiones de Tejido Blando (AAOS)</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 bg-white/50 p-4 rounded-lg">
                    El manejo prehospitalario de las lesiones de tejido blando se centra en
                    controlar la hemorragia, prevenir la contaminación, preservar el tejido
                    dañado y tratar el shock. Siga siempre los protocolos locales y las directrices de la
                    AAOS.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-5 rounded-lg shadow-sm border border-red-200">
                        <div className="flex items-center gap-2 mb-3">
                            <MdBloodtype className="w-7 h-7 text-red-600"/>
                            <h3 className="font-bold text-lg text-red-700">Control de Hemorragia</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <GiPressureCooker className="w-5 h-5 text-red-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <strong className="text-red-700">Presión directa:</strong> Aplicar con una gasa estéril sobre la herida.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiFirstAid className="w-5 h-5 text-red-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <strong className="text-red-700">Elevación:</strong> Elevar la extremidad lesionada por encima del nivel del corazón (si no hay sospecha de fractura).
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <GiBandaged className="w-5 h-5 text-red-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <strong className="text-red-700">Vendaje compresivo:</strong> Aplicar un vendaje firme sobre el apósito para mantener la presión.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <MdWarning className="w-5 h-5 text-red-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <strong className="text-red-700">Torniquete:</strong> Utilizar para hemorragias arteriales severas en extremidades que no se controlan con otros métodos. Anotar la hora de aplicación.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <GiFirstAidKit className="w-5 h-5 text-red-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <strong className="text-red-700">Agentes hemostáticos:</strong> Considerar según protocolo para hemorragias difíciles de controlar.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-5 rounded-lg shadow-sm border border-blue-200">
                        <div className="flex items-center gap-2 mb-3">
                            <FaBandAid className="w-7 h-7 text-blue-600"/>
                            <h3 className="font-bold text-lg text-blue-700">Cuidado de Heridas Abiertas Específicas</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold min-w-fit">•</span>
                                <div>
                                    <strong className="text-blue-700">Abrasiones:</strong> Limpiar si es posible, cubrir con apósito estéril.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold min-w-fit">•</span>
                                <div>
                                    <strong className="text-blue-700">Laceraciones:</strong> Controlar hemorragia, cubrir. Evaluar profundidad y posible daño a estructuras subyacentes.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold min-w-fit">•</span>
                                <div>
                                    <strong className="text-blue-700">Punciones:</strong> No retirar objetos empalados; estabilizarlos en su lugar. Cubrir la herida alrededor del objeto.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold min-w-fit">•</span>
                                <div>
                                    <strong className="text-blue-700">Avulsiones:</strong> Si el colgajo de piel está presente, reposicionarlo cuidadosamente en su lugar (si está limpio) antes de vendar. Si está separado, tratar como amputación parcial.
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold min-w-fit">•</span>
                                <div>
                                    <strong className="text-blue-700">Amputaciones:</strong> Controlar hemorragia del muñón. Envolver la parte amputada en gasa estéril humedecida con solución salina, colocar en bolsa plástica y luego en hielo (no directamente sobre el hielo).
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-md border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-4">
                    <FaShieldAlt className="w-8 h-8 text-purple-600"/>
                    <h2 className="text-2xl font-bold text-gray-800">Manejo de Heridas Cerradas</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 bg-white/50 p-4 rounded-lg">
                    Aunque la piel no esté rota, las heridas cerradas pueden ser graves. El
                    manejo se enfoca en el acrónimo <span className="font-bold text-purple-700">RICES</span> (o PRICE):
                </p>
                <div className="grid md:grid-cols-5 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-red-400">
                        <div className="text-2xl font-bold text-red-600 mb-2">R</div>
                        <div className="font-semibold text-gray-800 mb-1">Rest</div>
                        <p className="text-sm text-gray-600">Reposo: Evitar movimiento de la zona</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-blue-400">
                        <div className="text-2xl font-bold text-blue-600 mb-2">I</div>
                        <div className="font-semibold text-gray-800 mb-1">Ice</div>
                        <p className="text-sm text-gray-600">Hielo: Aplicar frío local para reducir hinchazón</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-green-400">
                        <div className="text-2xl font-bold text-green-600 mb-2">C</div>
                        <div className="font-semibold text-gray-800 mb-1">Compression</div>
                        <p className="text-sm text-gray-600">Compresión: Vendaje elástico para limitar hinchazón</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-yellow-400">
                        <div className="text-2xl font-bold text-yellow-600 mb-2">E</div>
                        <div className="font-semibold text-gray-800 mb-1">Elevation</div>
                        <p className="text-sm text-gray-600">Elevación: Elevar la parte lesionada</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-purple-400">
                        <div className="text-2xl font-bold text-purple-600 mb-2">S</div>
                        <div className="font-semibold text-gray-800 mb-1">Splinting</div>
                        <p className="text-sm text-gray-600">Inmovilización: Si hay sospecha de fractura</p>
                    </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start gap-2">
                        <FaExclamationCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1"/>
                        <p className="text-gray-700 leading-relaxed">
                            <strong className="text-yellow-700">Vigilar signos de síndrome compartimental</strong> en lesiones por aplastamiento o
                            hematomas extensos: dolor desproporcionado, palidez, ausencia de pulso,
                            parestesias, parálisis (las <strong className="text-yellow-700">"5 P's"</strong>).
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Consideraciones Especiales</h2>
                    <p className="text-gray-600">Situaciones críticas que requieren manejo específico</p>
                </div>

                <div className="p-5 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                        <GiScalpel className="w-7 h-7 text-orange-600 flex-shrink-0 mt-1"/>
                        <div>
                            <h3 className="font-bold text-xl mb-2 text-orange-700">Heridas Penetrantes en Tórax</h3>
                            <p className="text-sm text-orange-600 italic mb-2">(Neumotórax Abierto - "Herida Succionante")</p>
                        </div>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed">
                            Cubrir con un <strong className="text-orange-700">sello torácico oclusivo de tres lados</strong> (o según protocolo local)
                            para permitir la salida de aire y prevenir la entrada. Monitorear continuamente los signos vitales y
                            el estado respiratorio del paciente.
                        </p>
                    </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                        <GiMedicalPack className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1"/>
                        <div>
                            <h3 className="font-bold text-xl mb-2 text-blue-700">Evisceración Abdominal</h3>
                            <p className="text-sm text-blue-600 italic mb-2">(Exposición de Órganos Internos)</p>
                        </div>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg">
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <MdWarning className="w-5 h-5 text-red-600 flex-shrink-0 mt-1"/>
                                <p className="text-gray-700"><strong className="text-red-600">NO</strong> intentar reintroducir los órganos.</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <BiFirstAid className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"/>
                                <p className="text-gray-700">
                                    Cubrir con un <strong className="text-blue-700">apósito estéril grande humedecido con solución salina</strong> y luego con
                                    un vendaje oclusivo seco para mantener el calor y la humedad.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                        <GiFirstAidKit className="w-7 h-7 text-green-600 flex-shrink-0 mt-1"/>
                        <div>
                            <h3 className="font-bold text-xl mb-2 text-green-700">Lesiones por Mordedura</h3>
                            <p className="text-sm text-green-600 italic mb-2">(Humana o Animal)</p>
                        </div>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg">
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <MdWarning className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1"/>
                                <p className="text-gray-700">
                                    <strong className="text-yellow-700">Alto riesgo de infección.</strong> Controlar hemorragia,
                                    limpiar si es posible y cubrir con apósito estéril.
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <FaShieldAlt className="w-5 h-5 text-green-600 flex-shrink-0 mt-1"/>
                                <p className="text-gray-700">
                                    Considerar la necesidad de <strong className="text-green-700">profilaxis antirrábica y antitetánica</strong>
                                    en el hospital. Documentar las circunstancias de la mordedura.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}