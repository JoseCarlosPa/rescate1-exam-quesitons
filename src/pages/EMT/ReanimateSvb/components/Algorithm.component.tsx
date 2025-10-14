import {FaFirstAid, FaUserMd} from "react-icons/fa";
import {BsStopwatch} from "react-icons/bs";
import {FiClock} from "react-icons/fi";
import {MdSpeed} from "react-icons/md";

export default function Algorithm() {
    return (<div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
            <FaUserMd className="w-6 h-6 mr-2 text-orange-500"/>
            Algoritmo de Soporte Vital Básico (SVB) - AHA 2020
        </h2>

        {/* Algoritmo visual paso a paso */}
        <div className="space-y-6">
            <div className="flex justify-center mb-6">
                <img src="/bls.jpg" alt="Algoritmo SVB"
                     className="max-h-80 rounded shadow"/>
            </div>

            {/* Pasos detallados */}
            <div className="grid gap-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <div className="flex items-center mb-2">
                        <div
                            className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold">1</span>
                        </div>
                        <h3 className="font-bold text-red-700">Verificar Seguridad y
                            Respuesta</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 ml-11">
                        <li>Asegurar la escena (tráfico, fuego, violencia)</li>
                        <li>Tocar hombros y gritar "¿Está bien?"</li>
                        <li>Verificar si respira normalmente (no más de 10 segundos)</li>
                    </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <div className="flex items-center mb-2">
                        <div
                            className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold">2</span>
                        </div>
                        <h3 className="font-bold text-orange-700">Activar Sistema de
                            Emergencias</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 ml-11">
                        <li>Llamar al 911 o pedir a alguien que lo haga</li>
                        <li>Solicitar DEA si está disponible</li>
                        <li>Si está solo con teléfono: activar altavoz</li>
                    </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex items-center mb-2">
                        <div
                            className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold">3</span>
                        </div>
                        <h3 className="font-bold text-green-700">Verificar Pulso (Solo
                            Personal Entrenado)</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 ml-11">
                        <li>Pulso carotídeo en adultos (máximo 10 segundos)</li>
                        <li>Si no hay pulso o no está seguro: iniciar RCP</li>
                        <li>Personal no entrenado: si no respira = RCP</li>
                    </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <div className="flex items-center mb-2">
                        <div
                            className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold">4</span>
                        </div>
                        <h3 className="font-bold text-blue-700">Iniciar Compresiones
                            Torácicas</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 ml-11">
                        <li>Posición: centro del pecho, entre pezones</li>
                        <li>Profundidad: al menos 5 cm, no más de 6 cm</li>
                        <li>Frecuencia: 100-120 compresiones por minuto</li>
                        <li>Permitir descompresión completa</li>
                    </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <div className="flex items-center mb-2">
                        <div
                            className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold">5</span>
                        </div>
                        <h3 className="font-bold text-purple-700">Ventilaciones (Si está
                            entrenado)</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 ml-11">
                        <li>Relación 30:2 en adultos</li>
                        <li>Apertura de vía aérea: frente-mentón</li>
                        <li>Ventilaciones de 1 segundo cada una</li>
                        <li>Ver elevación del pecho</li>
                    </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <div className="flex items-center mb-2">
                        <div
                            className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold">6</span>
                        </div>
                        <h3 className="font-bold text-yellow-700">Usar DEA</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 ml-11">
                        <li>Encender y seguir instrucciones de voz</li>
                        <li>Colocar parches según diagrama</li>
                        <li>Asegurar que nadie toque al paciente</li>
                        <li>Presionar botón de descarga si se indica</li>
                        <li>Reanudar RCP inmediatamente después</li>
                    </ul>
                </div>
            </div>

            {/* Recordatorios importantes */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <BsStopwatch className="w-5 h-5 mr-2"/>
                    Recordatorios de Tiempo Críticos
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white rounded">
                        <FiClock className="w-6 h-6 text-blue-500 mx-auto mb-2"/>
                        <p className="font-bold">≤ 10 seg</p>
                        <p className="text-sm text-gray-600">Verificar pulso</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded">
                        <MdSpeed className="w-6 h-6 text-green-500 mx-auto mb-2"/>
                        <p className="font-bold">100-120/min</p>
                        <p className="text-sm text-gray-600">Compresiones</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded">
                        <FaFirstAid className="w-6 h-6 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold">≤ 10 seg</p>
                        <p className="text-sm text-gray-600">Cambio de rescatista</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}