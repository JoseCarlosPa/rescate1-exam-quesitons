import {useState} from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md";
import {TbHandClick} from "react-icons/tb";
import {FaUserFriends} from "react-icons/fa";

const CHECKLIST_ITEMS = [
    'Anclaje principal inspeccionado y firme',
    'Anclaje de respaldo (belay) inspeccionado y firme',
    'Nudos correctos, bien vestidos y con cola suficiente',
    'Mosquetones cerrados y con seguro',
    'Dispositivo de descenso/ascenso conectado correctamente',
    'Protección de arista colocada donde la cuerda hace contacto',
    'Casco, arnés y EPP del rescatista verificados',
    'Comunicación establecida con el equipo (señales de voz acordadas)',
];

export default function SafetyChecklist() {
    const [checked, setChecked] = useState<Record<number, boolean>>({});

    const toggle = (idx: number) => {
        setChecked((prev) => ({...prev, [idx]: !prev[idx]}));
    };

    const total = CHECKLIST_ITEMS.length;
    const done = Object.values(checked).filter(Boolean).length;
    const allDone = done === total;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <TbHandClick className="w-6 h-6 mr-2 text-red-500"/>
                    Verificar y Volver a Verificar
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    El tiempo que toma hacer una verificación de seguridad de tu sistema es tan pequeño, y tan
                    valioso para tu seguridad, que no hay excusa para no hacerlo. Recuerda revisar lo que otros
                    armaron para ti, además de tu propio trabajo.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
                        <div className="flex items-center mb-2">
                            <FaUserFriends className="w-6 h-6 text-red-500 mr-2"/>
                            <h3 className="font-bold text-gray-800">Verificación de Seguridad</h3>
                        </div>
                        <p className="text-gray-700 text-sm">
                            Ya sea trabajando en pareja o con un oficial de seguridad separado, alguien más
                            verifica tu montaje. Un par de ojos diferente puede detectar algo que los tuyos
                            pasaron por alto. Verifica el sistema después de armarlo, y de nuevo cada vez que se
                            modifique.
                        </p>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
                        <div className="flex items-center mb-2">
                            <TbHandClick className="w-6 h-6 text-red-500 mr-2"/>
                            <h3 className="font-bold text-gray-800">Sistema del Tacto</h3>
                        </div>
                        <p className="text-gray-700 text-sm">
                            Es fácil pensar en un procedimiento de verificación sin realmente ver lo que se está
                            revisando, y así omitir un paso. Los pilotos usan el sistema del tacto al revisar sus
                            instrumentos: toca cada parte para asegurarte de que realmente la estás viendo. Si no
                            puedes alcanzarla, al menos señálala.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Práctica: Checklist de Verificación</h3>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${allDone ? 'bg-green-500' : 'bg-slate-600'}`}>
                        {done} / {total}
                    </span>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                    Simula una verificación de seguridad real: haz clic en cada elemento a medida que lo
                    revisas antes de cargar el sistema.
                </p>
                <div className="space-y-2">
                    {CHECKLIST_ITEMS.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => toggle(idx)}
                            className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg transition-all ${
                                checked[idx] ? 'bg-green-600/30 border border-green-400' : 'bg-slate-600/50 border border-transparent hover:bg-slate-600/80'
                            }`}
                        >
                            {checked[idx]
                                ? <MdCheckBox className="w-6 h-6 text-green-400 flex-shrink-0"/>
                                : <MdCheckBoxOutlineBlank className="w-6 h-6 text-slate-400 flex-shrink-0"/>}
                            <span className={checked[idx] ? 'line-through text-slate-300' : ''}>{item}</span>
                        </button>
                    ))}
                </div>
                {allDone && (
                    <div className="mt-4 bg-green-500/20 border border-green-400 rounded-lg p-3 text-center font-semibold text-green-300">
                        Sistema verificado — listo para cargar de forma segura.
                    </div>
                )}
            </div>

            <p className="text-gray-700 leading-relaxed text-sm">
                Las evoluciones repetitivas durante los ejercicios de entrenamiento requieren verificaciones de
                seguridad repetitivas. El montaje adecuado para un rescate puede comenzar a mostrar desgaste
                significativo durante evoluciones repetidas — verifica antes de cada una.
            </p>
        </div>
    );
}
