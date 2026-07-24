import {ReactNode, useState} from "react";
import {BsShieldFillCheck, BsToggleOn} from "react-icons/bs";
import {MdCheckCircle} from "react-icons/md";
import {FaHandPointer} from "react-icons/fa";

type Mode = 'belay' | 'srt';

const MODES: Record<Mode, {
    label: string;
    icon: ReactNode;
    color: string;
    when: string[];
    considerations: string[];
}> = {
    belay: {
        label: 'Sistema con Aseguramiento (Belay)',
        icon: <BsShieldFillCheck className="w-10 h-10"/>,
        color: 'from-blue-500 to-blue-600',
        when: [
            'La falla del sistema principal podría causar una lesión al rescatista, a la víctima o a ambos.',
            'El terreno es difícil, los anclajes disponibles no son adecuados, o las condiciones de trabajo son complicadas.',
            'La ruta completa de evacuación debe considerarse, incluso si empieza en terreno fácil y tiene una sección vertical.',
            'Se está entrenando o enseñando a estudiantes — proteger a los estudiantes es igual de importante.',
        ],
        considerations: [
            'El sistema de aseguramiento debe soportar el peso completo del sistema, más la fuerza dinámica añadida de una falla de la línea principal.',
            'En Sistemas de Doble Tensión, cada lado debe ser capaz de soportar la carga por sí solo.',
        ],
    },
    srt: {
        label: 'Técnica de Cuerda Simple (SRT)',
        icon: <BsToggleOn className="w-10 h-10"/>,
        color: 'from-amber-500 to-orange-600',
        when: [
            'Se trabaja en rapeles o ascensos largos, donde la línea de aseguramiento puede enredarse con la línea principal y detener el movimiento.',
            'Los espeleólogos (cavers) desarrollaron esta técnica precisamente para resolver ese problema de enredo.',
            'Se elige reducir la redundancia a cambio de tener un sistema funcional.',
        ],
        considerations: [
            'Requiere ser más meticuloso y analítico — se necesita la cuerda de mayor calidad posible, ya que es el único medio de soporte.',
            'Siempre usar protección de arista (edge protection) en el anclaje, sin sistema de respaldo que lo cubra.',
            'Regla de los dos puntos de contacto: mantener siempre dos puntos de contacto con la cuerda; al remover uno (ej. cambiar de descensor a ascensor), primero se agrega un tercer punto.',
        ],
    },
};

export default function BelayVsSrt() {
    const [mode, setMode] = useState<Mode>('belay');
    const current = MODES[mode];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaHandPointer className="w-6 h-6 mr-2 text-red-500"/>
                    Belay vs. Técnica de Cuerda Simple (SRT)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    La técnica de cuerda simple es la excepción a la regla de siempre usar un sistema de
                    aseguramiento. Selecciona una opción para ver cuándo se usa cada una:
                </p>
            </div>

            <div className="flex justify-center gap-3">
                {(Object.keys(MODES) as Mode[]).map((key) => (
                    <button
                        key={key}
                        onClick={() => setMode(key)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all ${
                            mode === key
                                ? `bg-gradient-to-br ${MODES[key].color} text-white shadow-lg scale-105`
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {MODES[key].icon}
                        {MODES[key].label}
                    </button>
                ))}
            </div>

            <div className={`rounded-xl p-6 bg-gradient-to-br ${current.color} text-white shadow-lg`}>
                <h3 className="text-xl font-bold mb-4">¿Cuándo usarlo?</h3>
                <ul className="space-y-2">
                    {current.when.map((item, idx) => (
                        <li key={idx} className="flex items-start bg-white/10 rounded-lg p-3">
                            <MdCheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"/>
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Consideraciones de seguridad</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    {current.considerations.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
