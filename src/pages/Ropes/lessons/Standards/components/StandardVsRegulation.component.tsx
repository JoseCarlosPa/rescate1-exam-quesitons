import {ReactNode, useState} from "react";
import {FaFileContract, FaGavel} from "react-icons/fa";
import {MdCheckCircle} from "react-icons/md";

type Mode = 'standard' | 'regulation';

const MODES: Record<Mode, {
    label: string;
    icon: ReactNode;
    color: string;
    who: string;
    points: string[];
}> = {
    standard: {
        label: 'Estándar (Standard)',
        icon: <FaFileContract className="w-10 h-10"/>,
        color: 'from-blue-500 to-blue-600',
        who: 'Escrito por un comité, bajo la autoridad de una organización dedicada a la redacción de estándares (como NFPA, ASTM o ASSP).',
        points: [
            'Los comités están compuestos por miembros de la comunidad relacionada que donan su tiempo voluntariamente.',
            'Los estándares de consenso se envían a un grupo más amplio, a menudo toda la comunidad, para revisión antes de publicarse.',
            'La mayoría de los estándares tienen un ciclo de revisión y son revisados o confirmados por el comité en un calendario establecido.',
            'Están protegidos por derechos de autor — la venta de los estándares es la fuente de ingresos de estas organizaciones.',
        ],
    },
    regulation: {
        label: 'Regulación (Regulation)',
        icon: <FaGavel className="w-10 h-10"/>,
        color: 'from-red-500 to-red-600',
        who: 'Creada por legisladores y funcionarios de gobierno — es muy diferente de un estándar, aunque a menudo se relacionan entre sí.',
        points: [
            'No seguirla puede resultar en multas u otras penalidades legales.',
            'A menudo la regulación hace referencia a un estándar existente, o incluso lo adopta, convirtiéndolo en regulación.',
            'Las regulaciones estatales y federales entran en la categoría de "obligatorio" (must-do).',
            'Ejemplo: OSHA es una agencia federal que emite regulaciones de cumplimiento obligatorio para proteger a los trabajadores.',
        ],
    },
};

export default function StandardVsRegulation() {
    const [mode, setMode] = useState<Mode>('standard');
    const current = MODES[mode];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2">
                    Estándar vs. Regulación: ¿Cuál es la diferencia?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Ambos afectan cómo se planea y conduce una respuesta de rescate, pero no son lo mismo.
                    Selecciona uno para explorar sus características:
                </p>
            </div>

            <div className="flex justify-center gap-3 flex-wrap">
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
                <p className="mb-4 text-white/90">{current.who}</p>
                <ul className="space-y-2">
                    {current.points.map((item, idx) => (
                        <li key={idx} className="flex items-start bg-white/10 rounded-lg p-3">
                            <MdCheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"/>
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
