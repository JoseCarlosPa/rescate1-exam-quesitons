import { FaShieldAlt, FaExclamationTriangle, FaClipboardCheck, FaUserShield, FaTools, FaBook, FaCheckCircle } from 'react-icons/fa';
import { MdCheckCircle, MdWarning, MdVerifiedUser, MdHealthAndSafety } from 'react-icons/md';
import { BsShield, BsExclamationTriangle, BsClipboardCheck, BsLightbulb } from 'react-icons/bs';
import { GiRolledCloth } from 'react-icons/gi';

export default function Safety() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                    <FaShieldAlt className="w-10 h-10 text-red-500 mr-4"/>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Seguridad en Rescate con Cuerdas</h2>
                        <p className="text-gray-600">La seguridad no es negociable - es la base de toda operación</p>
                    </div>
                </div>
                <div className="bg-white/70 rounded-lg p-4 mt-4">
                    <p className="text-gray-700 italic">
                        "En rescate técnico, no existen atajos. Cada procedimiento, cada nudo, cada conexión
                        puede ser la diferencia entre una operación exitosa y una tragedia. La seguridad
                        comienza con el conocimiento y se mantiene con la disciplina."
                    </p>
                </div>
            </div>

            {/* Principios fundamentales */}
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <MdVerifiedUser className="w-6 h-6 text-blue-500 mr-2"/>
                    Principios Fundamentales de Seguridad
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        {
                            icon: <BsShield className="w-8 h-8"/>,
                            title: 'Redundancia',
                            desc: 'Siempre tener un backup. Si un sistema falla, otro debe sostener.',
                            color: 'blue'
                        },
                        {
                            icon: <MdCheckCircle className="w-8 h-8"/>,
                            title: 'Verificación',
                            desc: 'Revisar todo dos veces. Buddy check obligatorio.',
                            color: 'green'
                        },
                        {
                            icon: <BsExclamationTriangle className="w-8 h-8"/>,
                            title: 'Comunicación',
                            desc: 'Señales claras y confirmadas. Nunca asumir.',
                            color: 'amber'
                        },
                        {
                            icon: <FaUserShield className="w-8 h-8"/>,
                            title: 'Competencia',
                            desc: 'Solo realizar lo que se domina. Conocer límites.',
                            color: 'purple'
                        }
                    ].map((principle, idx) => (
                        <div
                            key={idx}
                            className={`bg-${principle.color}-50 border border-${principle.color}-200 rounded-xl p-5 text-center`}
                        >
                            <div className={`w-16 h-16 bg-${principle.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 text-${principle.color}-600`}>
                                {principle.icon}
                            </div>
                            <h4 className="font-bold text-gray-800 mb-2">{principle.title}</h4>
                            <p className="text-sm text-gray-600">{principle.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lista de verificación pre-operación */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <BsClipboardCheck className="w-6 h-6 text-green-500 mr-2"/>
                    Lista de Verificación Pre-Operación
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Personal */}
                    <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                            <FaUserShield className="w-5 h-5 mr-2"/>
                            Personal
                        </h4>
                        <ul className="space-y-2">
                            {[
                                'Todos los miembros briefeados',
                                'Roles y responsabilidades asignados',
                                'Capacitación verificada',
                                'Estado físico adecuado',
                                'EPP completo y verificado'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-sm">
                                    <input type="checkbox" className="mr-2 w-4 h-4 text-blue-500"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Equipo */}
                    <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-bold text-green-700 mb-3 flex items-center">
                            <FaTools className="w-5 h-5 mr-2"/>
                            Equipo
                        </h4>
                        <ul className="space-y-2">
                            {[
                                'Cuerdas inspeccionadas',
                                'Mosquetones funcionando correctamente',
                                'Arneses revisados',
                                'Dispositivos de descenso verificados',
                                'Equipo de comunicación probado'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-sm">
                                    <input type="checkbox" className="mr-2 w-4 h-4 text-green-500"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sitio */}
                    <div className="bg-amber-50 rounded-lg p-4">
                        <h4 className="font-bold text-amber-700 mb-3 flex items-center">
                            <MdHealthAndSafety className="w-5 h-5 mr-2"/>
                            Sitio de Operación
                        </h4>
                        <ul className="space-y-2">
                            {[
                                'Zona de trabajo delimitada',
                                'Peligros identificados y comunicados',
                                'Puntos de anclaje evaluados',
                                'Ruta de evacuación establecida',
                                'Condiciones climáticas evaluadas'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-sm">
                                    <input type="checkbox" className="mr-2 w-4 h-4 text-amber-500"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Plan */}
                    <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-bold text-purple-700 mb-3 flex items-center">
                            <FaClipboardCheck className="w-5 h-5 mr-2"/>
                            Plan de Operación
                        </h4>
                        <ul className="space-y-2">
                            {[
                                'Plan principal documentado',
                                'Plan de contingencia establecido',
                                'Protocolo de emergencia conocido',
                                'Recursos médicos disponibles',
                                'Comunicaciones establecidas'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-sm">
                                    <input type="checkbox" className="mr-2 w-4 h-4 text-purple-500"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Reglas de oro */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2 text-yellow-200"/>
                    Reglas de Oro del Rescate con Cuerdas
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        'Nunca confíes en un solo punto de anclaje',
                        'Siempre usa backup en operaciones de descenso',
                        'El equipo dañado se retira inmediatamente',
                        'Verifica nudos y conexiones antes de cargar',
                        'Comunica antes de cualquier movimiento',
                        'Si tienes dudas, NO procedas',
                        'Mantén manos en la cuerda de freno siempre',
                        'La seguridad del rescatista es prioridad'
                    ].map((rule, idx) => (
                        <div key={idx} className="flex items-start bg-white/10 rounded-lg p-3">
                            <span className="w-6 h-6 bg-white text-amber-500 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">
                                {idx + 1}
                            </span>
                            <span>{rule}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Criterios de retiro de equipo */}
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <GiRolledCloth className="w-6 h-6 text-red-500 mr-2"/>
                    Criterios de Retiro de Equipo
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                        <h4 className="font-bold text-red-700 mb-3">Cuerdas - Retirar si:</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                'Funda cortada o dañada',
                                'Alma visible o abultada',
                                'Exposición a químicos',
                                'Caída con factor >1',
                                'Antigüedad >10 años',
                                'Decoloración significativa',
                                'Rigidez anormal'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-red-800">
                                    <MdWarning className="w-4 h-4 mr-2 text-red-500 flex-shrink-0"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                        <h4 className="font-bold text-red-700 mb-3">Mosquetones - Retirar si:</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                'Gatillo no cierra correctamente',
                                'Seguro no funciona',
                                'Muescas o deformaciones',
                                'Corrosión significativa',
                                'Caída desde altura',
                                'Historia desconocida'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-red-800">
                                    <MdWarning className="w-4 h-4 mr-2 text-red-500 flex-shrink-0"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                        <h4 className="font-bold text-red-700 mb-3">Arneses - Retirar si:</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                'Costuras dañadas',
                                'Hebillas defectuosas',
                                'Tejido desgastado',
                                'Exposición a químicos',
                                'Antigüedad >7 años',
                                'Caída significativa previa'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-red-800">
                                    <MdWarning className="w-4 h-4 mr-2 text-red-500 flex-shrink-0"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Factores de caída */}
            <div className="bg-slate-800 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaExclamationTriangle className="w-6 h-6 mr-2 text-amber-400"/>
                    Entendiendo el Factor de Caída
                </h3>
                <p className="text-slate-300 mb-4">
                    El factor de caída es crucial para entender las fuerzas generadas en una caída.
                    En rescate con cuerdas estáticas, debemos evitar cualquier factor de caída significativo.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    {[
                        { factor: '0', desc: 'Sin caída - carga estática', risk: 'Mínimo', color: 'green' },
                        { factor: '0.5', desc: 'Caída controlada', risk: 'Bajo', color: 'yellow' },
                        { factor: '1', desc: 'Caída = longitud de cuerda', risk: 'Alto', color: 'orange' },
                        { factor: '2', desc: 'Máximo posible', risk: 'Extremo', color: 'red' }
                    ].map((item, idx) => (
                        <div key={idx} className={`bg-slate-700/50 rounded-lg p-4 border-l-4 border-${item.color}-500`}>
                            <p className="text-3xl font-bold text-white mb-1">Factor {item.factor}</p>
                            <p className="text-sm text-slate-300 mb-2">{item.desc}</p>
                            <span className={`text-xs px-2 py-1 rounded-full bg-${item.color}-500/30 text-${item.color}-300`}>
                                Riesgo: {item.risk}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 p-4 bg-red-900/30 rounded-lg border border-red-500/50">
                    <p className="text-red-200 text-sm flex items-start">
                        <FaExclamationTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/>
                        <span>
                            <strong>IMPORTANTE:</strong> Las cuerdas estáticas NO están diseñadas para absorber
                            caídas. En rescate técnico, el factor de caída debe mantenerse lo más cercano a 0
                            posible. Usa cuerdas dinámicas solo cuando haya riesgo real de caída.
                        </span>
                    </p>
                </div>
            </div>

            {/* Referencias y normativas */}
            <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaBook className="w-6 h-6 text-blue-500 mr-2"/>
                    Referencias y Normativas
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Estándares Internacionales:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <FaCheckCircle className="w-4 h-4 text-green-500 mr-2"/>
                                NFPA 1006 - Standard for Technical Rescue Personnel
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="w-4 h-4 text-green-500 mr-2"/>
                                NFPA 1983 - Standard on Life Safety Rope
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="w-4 h-4 text-green-500 mr-2"/>
                                EN 1891 - Cuerdas de trabajo
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="w-4 h-4 text-green-500 mr-2"/>
                                EN 892 - Cuerdas dinámicas
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Organizaciones de Referencia:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <MdCheckCircle className="w-4 h-4 text-blue-500 mr-2"/>
                                CMC Rescue - Material técnico
                            </li>
                            <li className="flex items-center">
                                <MdCheckCircle className="w-4 h-4 text-blue-500 mr-2"/>
                                Petzl - Guías técnicas
                            </li>
                            <li className="flex items-center">
                                <MdCheckCircle className="w-4 h-4 text-blue-500 mr-2"/>
                                Mountain Rescue Association
                            </li>
                            <li className="flex items-center">
                                <MdCheckCircle className="w-4 h-4 text-blue-500 mr-2"/>
                                IRATA - Industrial Rope Access
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

