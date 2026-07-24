import {useState} from "react";
import {GiBreakingChain, GiWeightScale} from "react-icons/gi";
import {FaCogs, FaUserAlt, FaComments} from "react-icons/fa";
import {MdCheckCircle} from "react-icons/md";

const FAILURE_TYPES = [
    {
        id: 'system',
        icon: <FaCogs className="w-8 h-8"/>,
        title: 'Falla del Sistema',
        question: '¿Los anclajes y componentes son suficientemente fuertes?',
        color: 'from-red-500 to-red-600',
        detail: 'La resistencia de un sistema de rescate con cuerdas es esencialmente la resistencia de su eslabón más débil. La resistencia de cada componente está determinada por su resistencia a la tracción cuando es nuevo, menos lo que la edad y el uso han debilitado, más los efectos causados por su ubicación dentro del sistema. Un buen ejemplo es la cuerda de rescate: pierde resistencia por edad y uso, y al colocarse en un sistema casi siempre incluye un nudo con la correspondiente reducción de resistencia.',
    },
    {
        id: 'human',
        icon: <FaUserAlt className="w-8 h-8"/>,
        title: 'Falla Humana',
        question: '¿El entrenamiento es apropiado y las habilidades están vigentes?',
        color: 'from-amber-500 to-orange-600',
        detail: 'El rescate con cuerdas combina conocimiento técnico con juicio en muchos pasos del proceso. Algunas organizaciones no responden a incidentes de rescate con cuerdas frecuentemente, y como toda habilidad perecedera, se requiere entrenamiento regular para mantener tanto a los individuos como al equipo en un nivel seguro de competencia.',
    },
    {
        id: 'communication',
        icon: <FaComments className="w-8 h-8"/>,
        title: 'Falla de Comunicación',
        question: '¿Existe un plan y los miembros del equipo se están comunicando?',
        color: 'from-blue-500 to-blue-600',
        detail: 'Las decisiones sobre los tipos de sistemas y equipo que se usarán impactan directamente la seguridad del rescate. ¿Se asegurará (belay) todo sistema o solo los de ángulo alto? ¿Se usarán dos operadores en un rescate de ángulo alto o solo uno? Estas preguntas deben responderse ANTES del rescate, no durante — y solo se resuelven con comunicación clara dentro del equipo.',
    },
];

export default function RiskAnalysis() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <GiWeightScale className="w-6 h-6 mr-2 text-red-500"/>
                    Análisis de Riesgo
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Comprender las exposiciones al riesgo permite determinar cómo minimizarlas mejor. Revisa tus
                    procedimientos y trata de identificar las áreas de debilidad. Haz clic en cada tarjeta para
                    conocer qué te puede hacer daño:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                    {FAILURE_TYPES.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => setSelected(selected === f.id ? null : f.id)}
                            className={`text-left rounded-xl p-5 text-white shadow-lg transition-all duration-300 bg-gradient-to-br ${f.color} ${
                                selected === f.id ? 'ring-4 ring-offset-2 ring-gray-400 scale-[1.02]' : 'hover:scale-[1.02]'
                            }`}
                        >
                            <div className="mb-3 opacity-90">{f.icon}</div>
                            <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                            <p className="text-sm opacity-90">{f.question}</p>
                        </button>
                    ))}
                </div>

                {selected && (
                    <div className="mt-4 bg-white border-2 border-gray-200 rounded-lg p-5 animate-fadeIn">
                        <p className="text-gray-700 leading-relaxed">
                            {FAILURE_TYPES.find((f) => f.id === selected)?.detail}
                        </p>
                    </div>
                )}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
                <div className="flex items-center mb-2">
                    <GiBreakingChain className="w-6 h-6 text-amber-600 mr-2"/>
                    <p className="font-bold text-amber-700">NFPA 1670</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                    La norma NFPA 1670 (Estándar sobre Operaciones y Entrenamiento para Incidentes de Búsqueda y
                    Rescate Técnico) ofrece una guía para las organizaciones que desean brindar servicios de
                    rescate a su comunidad. Sus capítulos enumeran las capacidades que una organización debe
                    tener para realizar un rescate a nivel operacional o técnico — es un buen punto de partida,
                    aunque no todos los elementos aplicarán a cada organización.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <MdCheckCircle className="w-5 h-5 text-green-500 mr-2"/>
                    Preguntas clave al diseñar tu programa
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>¿Se asegurará (belay) todo sistema de rescate con cuerdas, o solo los de ángulo alto?</li>
                    <li>¿Será más segura la técnica de cuerda simple (SRT) que usar una línea de aseguramiento?</li>
                    <li>¿Se usarán dos operadores en un rescate de ángulo alto, o solo uno?</li>
                    <li>¿El sistema de aseguramiento es mecánicamente fuerte pero depende de un operador muy habilidoso?</li>
                    <li>¿Se puede ahorrar peso seleccionando equipo que sea adecuadamente resistente?</li>
                </ul>
            </div>
        </div>
    );
}
