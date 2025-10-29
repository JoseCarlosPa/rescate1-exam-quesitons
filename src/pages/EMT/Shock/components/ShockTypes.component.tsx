import {BsHeartPulse, BsLightbulb} from "react-icons/bs";
import {GiBlood} from "react-icons/gi";
import {FaHeartbeat, FaUserMd} from "react-icons/fa";
import {FiActivity, FiAlertTriangle} from "react-icons/fi";

export default function ShockTypes() {
    return(
        <div className="space-y-8">
            {/* Clasificación principal */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsHeartPulse className="w-6 h-6 mr-2 text-orange-500"/>
                    Clasificación del Shock por Mecanismo
                </h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Shock Hipovolémico */}
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                        <div className="flex items-center mb-4">
                            <GiBlood className="w-8 h-8 text-red-600 mr-3"/>
                            <h3 className="text-xl font-bold text-red-700">Shock
                                Hipovolémico</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-red-800 mb-2">Causa
                                Principal:</h4>
                            <p className="text-gray-700">Pérdida de volumen intravascular
                                (sangre o líquidos)</p>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-red-800 mb-2">Causas
                                    Específicas:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                    <li>Hemorragia externa o interna</li>
                                    <li>Deshidratación severa</li>
                                    <li>Quemaduras extensas</li>
                                    <li>Vómitos/diarrea profusa</li>
                                    <li>Diabetes insípida</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-red-800 mb-2">Signos
                                    Clínicos:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                    <li>Piel fría, pálida, sudorosa</li>
                                    <li>Taquicardia, pulso débil</li>
                                    <li>Hipotensión tardía</li>
                                    <li>Llenado capilar {'>'} 2 seg</li>
                                    <li>Sed intensa, ansiedad</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Shock Cardiogénico */}
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                        <div className="flex items-center mb-4">
                            <FaHeartbeat className="w-8 h-8 text-blue-600 mr-3"/>
                            <h3 className="text-xl font-bold text-blue-700">Shock
                                Cardiogénico</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-blue-800 mb-2">Causa
                                Principal:</h4>
                            <p className="text-gray-700">Falla de la bomba cardiaca para
                                mantener gasto cardíaco</p>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-blue-800 mb-2">Causas
                                    Específicas:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                    <li>Infarto agudo al miocardio</li>
                                    <li>Arritmias severas</li>
                                    <li>Insuficiencia cardiaca descompensada</li>
                                    <li>Miocarditis, cardiomiopatías</li>
                                    <li>Valvulopatías severas</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-800 mb-2">Signos
                                    Clínicos:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                    <li>Disnea, ortopnea</li>
                                    <li>Estertores pulmonares</li>
                                    <li>Ingurgitación yugular</li>
                                    <li>Piel fría, pálida</li>
                                    <li>Edema periférico</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Shock Obstructivo */}
                    <div
                        className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                        <div className="flex items-center mb-4">
                            <FiActivity className="w-8 h-8 text-purple-600 mr-3"/>
                            <h3 className="text-xl font-bold text-purple-700">Shock
                                Obstructivo</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-purple-800 mb-2">Causa
                                Principal:</h4>
                            <p className="text-gray-700">Obstrucción mecánica al flujo
                                sanguíneo</p>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-purple-800 mb-2">Causas
                                    Específicas:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                    <li>Neumotórax a tensión</li>
                                    <li>Taponamiento cardiaco</li>
                                    <li>Embolia pulmonar masiva</li>
                                    <li>Hemotórax masivo</li>
                                    <li>Estenosis aórtica crítica</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-purple-800 mb-2">Signos
                                    Clínicos:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                    <li>Ingurgitación yugular marcada</li>
                                    <li>Disnea súbita severa</li>
                                    <li>Dolor torácico</li>
                                    <li>Hipotensión severa</li>
                                    <li>Ruidos cardiacos apagados</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Shock Distributivo */}
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                        <div className="flex items-center mb-4">
                            <FaUserMd className="w-8 h-8 text-green-600 mr-3"/>
                            <h3 className="text-xl font-bold text-green-700">Shock
                                Distributivo</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-green-800 mb-2">Causa
                                Principal:</h4>
                            <p className="text-gray-700">Vasodilatación masiva y mala
                                distribución del flujo</p>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-green-800 mb-2">Subtipos:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                    <li><strong>Séptico:</strong> Infección sistémica</li>
                                    <li><strong>Anafiláctico:</strong> Reacción alérgica severa
                                    </li>
                                    <li><strong>Neurogénico:</strong> Lesión neurológica</li>
                                    <li><strong>Endocrino:</strong> Crisis adrenal</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-green-800 mb-2">Signos
                                    Clínicos:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                    <li>Piel caliente inicialmente</li>
                                    <li>Hipotensión marcada</li>
                                    <li>Taquicardia o bradicardia</li>
                                    <li>Alteración del estado mental</li>
                                    <li>Fiebre o hipotermia (séptico)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Diferenciación clínica rápida */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Diferenciación Rápida en
                        Campo</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="py-3 px-4 text-left">Tipo de Shock</th>
                            <th className="py-3 px-4 text-left">Piel</th>
                            <th className="py-3 px-4 text-left">Pulso</th>
                            <th className="py-3 px-4 text-left">Respiración</th>
                            <th className="py-3 px-4 text-left">Signo Distintivo</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b">
                            <td className="py-3 px-4 font-medium text-red-700">Hipovolémico</td>
                            <td className="py-3 px-4">Fría, pálida, sudorosa</td>
                            <td className="py-3 px-4">Rápido, débil</td>
                            <td className="py-3 px-4">Rápida, superficial</td>
                            <td className="py-3 px-4">Sed intensa, sangrado visible</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-3 px-4 font-medium text-blue-700">Cardiogénico</td>
                            <td className="py-3 px-4">Fría, pálida, sudorosa</td>
                            <td className="py-3 px-4">Rápido, irregular</td>
                            <td className="py-3 px-4">Disnea, ortopnea</td>
                            <td className="py-3 px-4">Estertores, dolor torácico</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-3 px-4 font-medium text-purple-700">Obstructivo</td>
                            <td className="py-3 px-4">Fría, cianótica</td>
                            <td className="py-3 px-4">Rápido, débil</td>
                            <td className="py-3 px-4">Disnea severa súbita</td>
                            <td className="py-3 px-4">Ingurgitación yugular marcada</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium text-green-700">Distributivo</td>
                            <td className="py-3 px-4">Caliente, seca (inicial)</td>
                            <td className="py-3 px-4">Variable</td>
                            <td className="py-3 px-4">Variable</td>
                            <td className="py-3 px-4">Fiebre, rash, historial de alergia</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Casos clínicos interactivos */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2 text-orange-500"/>
                    Ejercicios de Diferenciación
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-5 rounded-lg border">
                        <h4 className="font-bold text-orange-600 mb-3">Escenario A:</h4>
                        <p className="text-gray-700 mb-3">
                            Paciente de 45 años, dolor torácico súbito, disnea severa,
                            TA 70/40, FC 130, estertores bilaterales, ingurgitación yugular.
                        </p>
                        <p className="font-semibold text-blue-600">Diagnóstico más probable:
                            Shock Cardiogénico</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg border">
                        <h4 className="font-bold text-orange-600 mb-3">Escenario B:</h4>
                        <p className="text-gray-700 mb-3">
                            Joven de 20 años, accidente vehicular, piel fría y pálida,
                            TA 80/50, FC 140, sed intensa, abdomen rígido.
                        </p>
                        <p className="font-semibold text-red-600">Diagnóstico más probable:
                            Shock Hipovolémico</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg border">
                        <h4 className="font-bold text-orange-600 mb-3">Escenario C:</h4>
                        <p className="text-gray-700 mb-3">
                            Mujer de 30 años, picadura de abeja, eritema generalizado,
                            TA 60/40, FC 120, estridor, edema facial.
                        </p>
                        <p className="font-semibold text-green-600">Diagnóstico más probable:
                            Shock Anafiláctico</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg border">
                        <h4 className="font-bold text-orange-600 mb-3">Escenario D:</h4>
                        <p className="text-gray-700 mb-3">
                            Hombre de 60 años, dolor torácico súbito, disnea severa,
                            TA 70/45, FC 130, ingurgitación yugular, ruidos cardiacos apagados.
                        </p>
                        <p className="font-semibold text-purple-600">Diagnóstico más probable:
                            Shock Obstructivo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}