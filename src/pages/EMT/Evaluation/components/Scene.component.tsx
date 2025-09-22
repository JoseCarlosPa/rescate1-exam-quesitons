import {FaEye} from "react-icons/fa";

export default function Scene(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                <FaEye className="text-blue-500"/>
                Evaluación de la Escena
            </h2>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
                <h3 className="font-medium text-lg mb-2 text-red-700">🚨 Principio
                    fundamental</h3>
                <p className="text-red-600">La seguridad de la escena es SIEMPRE la prioridad
                    #1. Un paramédico lesionado no puede ayudar a nadie.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Componentes de la
                        evaluación</h3>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                            🛡️ Seguridad de la escena
                        </h4>
                        <ul className="text-blue-700 space-y-1 text-sm">
                            <li>• Peligros para el personal, pacientes y testigos</li>
                            <li>• Materiales peligrosos, fuego, cables eléctricos</li>
                            <li>• Violencia doméstica, armas, drogas</li>
                            <li>• Condiciones del terreno y clima</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                            🔍 Naturaleza del incidente
                        </h4>
                        <ul className="text-green-700 space-y-1 text-sm">
                            <li>• <strong>Trauma:</strong> Mecanismo de lesión (MOI)</li>
                            <li>• <strong>Médico:</strong> Naturaleza de la enfermedad (NOI)
                            </li>
                            <li>• Fuerzas involucradas, velocidad, altura</li>
                            <li>• Posición del paciente encontrado</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-medium text-purple-800 mb-2 flex items-center gap-2">
                            👥 Recursos y logística
                        </h4>
                        <ul className="text-purple-700 space-y-1 text-sm">
                            <li>• Número total de pacientes</li>
                            <li>• Necesidad de apoyo adicional</li>
                            <li>• Acceso y rutas de evacuación</li>
                            <li>• Equipos especiales requeridos</li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Protocolo de
                        seguridad</h3>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-3">Lista de verificación
                            rápida:</h4>
                        <div className="space-y-2">
                            {[
                                "¿La escena es segura para acercarse?",
                                "¿Hay peligros obvios o potenciales?",
                                "¿Necesito EPP adicional?",
                                "¿Requiero apoyo de otros servicios?",
                                "¿Tengo rutas de escape identificadas?"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-orange-500 rounded"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                e.target.parentElement!.style.opacity = '0.6';
                                            } else {
                                                e.target.parentElement!.style.opacity = '1';
                                            }
                                        }}
                                    />
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-medium text-yellow-800 mb-2">⚡ Tips prácticos</h4>
                        <ul className="text-yellow-700 space-y-1 text-sm">
                            <li>• Evalúa desde la distancia antes de acercarte</li>
                            <li>• Reevalúa la seguridad constantemente</li>
                            <li>• Comunica hallazgos a tu compañero</li>
                            <li>• Mantén contacto visual con rutas de escape</li>
                            <li>• Si dudas, retírate y pide apoyo</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="font-medium text-lg mb-3 text-orange-800 flex items-center gap-2">
                    🎯 Situaciones especiales
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-white rounded border">
                        <h4 className="font-medium text-gray-800 mb-1">Accidentes
                            vehiculares</h4>
                        <p className="text-gray-600">Evalúa estabilidad del vehículo, fugas,
                            airbags desplegados</p>
                    </div>
                    <div className="p-3 bg-white rounded border">
                        <h4 className="font-medium text-gray-800 mb-1">Violencia doméstica</h4>
                        <p className="text-gray-600">Espera a que la policía asegure la
                            escena</p>
                    </div>
                    <div className="p-3 bg-white rounded border">
                        <h4 className="font-medium text-gray-800 mb-1">Múltiples pacientes</h4>
                        <p className="text-gray-600">Solicita recursos adicionales
                            inmediatamente</p>
                    </div>
                </div>
            </div>
        </div>
    );
}