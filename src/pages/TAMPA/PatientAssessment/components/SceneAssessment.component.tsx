import { MdSecurity, MdLocalCarWash, MdGroup, MdWarning } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { GiDropWeapon, GiFalling } from "react-icons/gi";
import { BsEyeFill } from "react-icons/bs";

export default function SceneAssessment() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdSecurity className="w-8 h-8 text-orange-500 mr-3" />
                    <h2 className="text-2xl font-bold text-orange-700">Evaluación de la Escena</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    La evaluación de la escena es el primer paso crítico al llegar a una emergencia. Garantiza la seguridad del personal, determina la naturaleza del incidente y evalúa la necesidad de recursos adicionales antes de tener contacto con el paciente.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <MdWarning className="w-6 h-6 mr-2 text-orange-500" />
                    Seguridad y Precauciones
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                        <h4 className="font-bold text-gray-800 mb-2">Seguridad de la escena</h4>
                        <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                            <li>Aislamiento de Sustancias Corporales (BSI) / Equipo de Protección Personal (EPP).</li>
                            <li>Verificar si la escena es segura para entrar.</li>
                            <li>Identificar peligros: eléctricos, químicos, fuego, tráfico, violencia.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                        <h4 className="font-bold text-gray-800 mb-2">Recursos Adicionales y Pacientes</h4>
                        <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                            <li>Determinar el número total de pacientes (triaje si es necesario).</li>
                            <li>Solicitar ayuda adicional: más ambulancias, rescate urbano, bomberos, policía, helicóptero.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiDropWeapon className="w-6 h-6 mr-2 text-orange-500" />
                    Mecanismo de Lesión (ML) vs Naturaleza de la Enfermedad (NE)
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-blue-700 mb-3 flex items-center">
                            <GiFalling className="w-5 h-5 mr-2" />
                            Trauma (Mecanismo de Lesión)
                        </h3>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Energía Cinética:</strong> EC = ½mv² (la velocidad afecta más que la masa).
                        </p>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                            <li><strong>Trauma contuso:</strong> Golpes, accidentes automovilísticos.</li>
                            <li><strong>Trauma penetrante:</strong> Armas blancas, armas de fuego (cavitación).</li>
                            <li><strong>Caídas:</strong> Graves si son {">"}3x la altura del adulto (o {">"}2x en niños).</li>
                            <li><strong>CVA (Colisión):</strong> Importancia de la posición, cinturón, bolsas de aire, deformidad del vehículo.</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center">
                            <FaAmbulance className="w-5 h-5 mr-2" />
                            Médico (Naturaleza de la Enfermedad)
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                            <li>Determinar qué llevó al paciente a pedir ayuda (queja principal).</li>
                            <li>Identificar pistas en el entorno (medicamentos, tanque de oxígeno, drogas).</li>
                            <li>Preguntar a familiares o testigos.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <BsEyeFill className="w-5 h-5 mr-2 text-gray-600" />
                    Impresión General Inicial
                </h3>
                <p className="text-sm text-gray-700">
                    Se forma al acercarse al paciente, antes del primer contacto físico. Se evalúa el aspecto general, color de la piel, posición (ej. trípode en dificultad respiratoria), olores inusuales y la interacción con el entorno (si nos sigue con la mirada).
                </p>
            </div>
        </div>
    );
}
