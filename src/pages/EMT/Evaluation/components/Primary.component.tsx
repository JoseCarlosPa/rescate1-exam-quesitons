import {FaStethoscope} from "react-icons/fa";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {useState} from "react";

export default function Primary(){
    const [selectedStep, setSelectedStep] = useState<string | null>(null);


    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                <FaStethoscope className="text-red-500"/>
                Evaluación Primaria (ABCDE)
            </h2>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
                <h3 className="font-medium text-lg mb-2 text-red-700">🎯 Objetivo principal</h3>
                <p className="text-red-600">Identificar y tratar inmediatamente las condiciones
                    que amenazan la vida del paciente en orden de prioridad.</p>
            </div>

            <div className="space-y-4">
                {[
                    {
                        letter: 'A',
                        title: 'AIRWAY - Vía Aérea',
                        color: 'red',
                        icon: '🫁',
                        content: {
                            evaluation: ['¿Puede hablar?', '¿Hay sonidos anormales?', '¿Obstrucción visible?', '¿Protección cervical?'],
                            actions: ['Aspiración si es necesario', 'Maniobras de apertura', 'Dispositivos de vía aérea', 'Inmovilización cervical'],
                            critical: 'Una vía aérea obstruida causa muerte en minutos'
                        }
                    },
                    {
                        letter: 'B',
                        title: 'BREATHING - Respiración',
                        color: 'blue',
                        icon: '💨',
                        content: {
                            evaluation: ['Frecuencia respiratoria', 'Esfuerzo respiratorio', 'Simetría torácica', 'Saturación de O₂'],
                            actions: ['Oxígeno suplementario', 'Ventilación asistida', 'Descompresión si indicado', 'Posicionamiento'],
                            critical: 'Evalúa calidad, no solo frecuencia'
                        }
                    },
                    {
                        letter: 'C',
                        title: 'CIRCULATION - Circulación',
                        color: 'green',
                        icon: '❤️',
                        content: {
                            evaluation: ['Pulso central y periférico', 'Color y temperatura', 'Relleno capilar', 'Hemorragias visibles'],
                            actions: ['Control de hemorragias', 'Acceso vascular', 'Reposición de volumen', 'Posición de shock'],
                            critical: 'Control de hemorragias tiene prioridad'
                        }
                    },
                    {
                        letter: 'D',
                        title: 'DISABILITY - Discapacidad',
                        color: 'purple',
                        icon: '🧠',
                        content: {
                            evaluation: ['Escala AVDI', 'Escala de Glasgow', 'Respuesta pupilar', 'Déficits neurológicos'],
                            actions: ['Protección cervical', 'Control de glucosa', 'Posicionamiento', 'Preparar traslado'],
                            critical: 'Los cambios neurológicos indican urgencia'
                        }
                    },
                    {
                        letter: 'E',
                        title: 'EXPOSURE - Exposición',
                        color: 'orange',
                        icon: '🔍',
                        content: {
                            evaluation: ['Lesiones ocultas', 'Sangrado no visible', 'Deformidades', 'Temperatura corporal'],
                            actions: ['Exposición controlada', 'Prevención de hipotermia', 'Evaluación completa', 'Protección de privacidad'],
                            critical: 'Exponerás lo necesario, cubrir lo demás'
                        }
                    }
                ].map((step, index) => (
                    <div key={index}
                         className={`border border-gray-200 rounded-lg overflow-hidden ${selectedStep === step.letter ? 'ring-2 ring-orange-500' : ''}`}>
                        <button
                            onClick={() => setSelectedStep(selectedStep === step.letter ? null : step.letter)}
                            className={`w-full p-4 text-left transition-colors hover:bg-gray-50 ${selectedStep === step.letter ? 'bg-gray-50' : ''}`}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl bg-${step.color}-500`}>
                                    {step.letter}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                        <span>{step.icon}</span>
                                        {step.title}
                                    </h3>
                                </div>
                                <ChevronUpIcon
                                    className={`w-5 h-5 text-gray-500 transition-transform ${
                                        selectedStep === step.letter ? 'rotate-180' : ''
                                    }`}
                                />
                            </div>
                        </button>

                        {selectedStep === step.letter && (
                            <div className="p-4 border-t bg-gray-50">
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium text-gray-800">🔍
                                            Evaluar:</h4>
                                        <ul className="text-sm text-gray-700 space-y-1">
                                            {step.content.evaluation.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                                            <span
                                                                                className="text-green-500 mt-0.5">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-medium text-gray-800">⚡ Actuar:</h4>
                                        <ul className="text-sm text-gray-700 space-y-1">
                                            {step.content.actions.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                                            <span
                                                                                className="text-blue-500 mt-0.5">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div
                                        className={`p-3 bg-${step.color}-50 rounded border border-${step.color}-200`}>
                                        <h4 className="font-medium text-gray-800 mb-1">💡 Punto
                                            clave:</h4>
                                        <p className="text-sm text-gray-700">{step.content.critical}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-medium text-lg mb-3 text-yellow-800">⏱️ Tiempos
                    críticos</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-3 bg-white rounded">
                        <div className="text-2xl font-bold text-red-500">4-6 min</div>
                        <div className="text-gray-600">Sin oxígeno → daño cerebral</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded">
                        <div className="text-2xl font-bold text-orange-500">{'<'}10 min</div>
                        <div className="text-gray-600">Evaluación primaria completa</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded">
                        <div className="text-2xl font-bold text-green-500">{'<'}15 min</div>
                        <div className="text-gray-600">En escena para trauma severo</div>
                    </div>
                </div>
            </div>
        </div>
    );
}