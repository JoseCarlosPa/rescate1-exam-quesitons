import {useState} from "react";
import {FaExclamationTriangle} from "react-icons/fa";
import {MdCancel, MdCheckCircle} from "react-icons/md";

const MYTHS = [
    {
        myth: 'NFPA 1983 es un documento que te dice qué equipo usar en un rescate.',
        fact: 'NFPA 1983 NO es un documento de uso. No indica a un departamento o rescatista qué equipo usar para una operación de rescate — esa información está en NFPA 1500 y 1858.',
    },
    {
        myth: 'NFPA 1983 exige usar una cuerda de dos personas.',
        fact: 'Falso. Además de no ser un documento de uso, los términos "una persona" y "dos personas" no aparecen en ninguna edición reciente del estándar.',
    },
    {
        myth: 'NFPA 1983 exige que los departamentos usen mosquetones de acero.',
        fact: 'Se escucha con frecuencia, pero la palabra "acero" no aparece en ese contexto en el documento. De nuevo: no es un documento de uso.',
    },
    {
        myth: 'NFPA 1983 exige una calificación de 8,992 lbf (40 kN) en todo el equipo.',
        fact: 'Ese es el requisito de desempeño solo para cuerda de seguridad de vida de "uso general". Otras cuerdas y la mayoría del equipo tienen sus propios requisitos de resistencia específicos.',
    },
    {
        myth: 'NFPA 1983 exige un margen de seguridad de 15:1.',
        fact: 'Este malentendido viene del cálculo inicial usado para determinar la especificación de desempeño de la cuerda de uso general: partiendo de una carga de diseño de 600 lbf, el comité eligió un múltiplo de 15 para llegar a 8,992 lbf — no es un requisito de margen de seguridad para el usuario final.',
    },
    {
        myth: 'Un fabricante puede autocertificar que su producto cumple con NFPA 1983.',
        fact: 'Falso. El estándar exige una organización de certificación independiente cuya etiqueta debe estar en el producto. Además, el nombre "NFPA" no puede usarse con ningún producto que no cumpla completamente con la certificación.',
    },
];

export default function MythsVsFacts() {
    const [revealed, setRevealed] = useState<Record<number, boolean>>({});

    const toggle = (idx: number) => {
        setRevealed((prev) => ({...prev, [idx]: !prev[idx]}));
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaExclamationTriangle className="w-6 h-6 mr-2 text-blue-500"/>
                    Mito vs. Realidad: NFPA 1983
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Existen varios malentendidos persistentes sobre NFPA 1983. Haz clic en cada tarjeta para
                    revelar la verdad:
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {MYTHS.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => toggle(idx)}
                        className="text-left rounded-xl p-5 shadow-md transition-all duration-300 border-2 h-full"
                        style={{
                            borderColor: revealed[idx] ? '#22c55e' : '#e5e7eb',
                            backgroundColor: revealed[idx] ? '#f0fdf4' : '#fef2f2',
                        }}
                    >
                        <div className="flex items-center mb-2">
                            {revealed[idx]
                                ? <MdCheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"/>
                                : <MdCancel className="w-6 h-6 text-red-500 mr-2 flex-shrink-0"/>}
                            <span className={`font-bold text-sm ${revealed[idx] ? 'text-green-700' : 'text-red-700'}`}>
                                {revealed[idx] ? 'REALIDAD' : 'MITO — haz clic para revelar'}
                            </span>
                        </div>
                        <p className="text-gray-800 text-sm leading-relaxed">
                            {revealed[idx] ? item.fact : item.myth}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}
