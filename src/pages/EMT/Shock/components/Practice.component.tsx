import {MdCheckCircle} from "react-icons/md";
import {FiActivity} from "react-icons/fi";
import {FaHeartbeat, FaUserMd} from "react-icons/fa";
import {GiBlood} from "react-icons/gi";
import {BsLightbulb} from "react-icons/bs";

export default function Practice(){
    return(
        <div className="space-y-8">
            {/* Metodología de casos */}
            <div
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-8 h-8 text-blue-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-blue-700">Metodología de Análisis de
                        Casos</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <span
                                                    className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mx-auto mb-2">1</span>
                        <h3 className="font-bold text-blue-700">Evaluación Inicial</h3>
                        <p className="text-sm text-gray-600">ABC, signos vitales, estado
                            mental</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <span
                                                    className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mx-auto mb-2">2</span>
                        <h3 className="font-bold text-green-700">Clasificación</h3>
                        <p className="text-sm text-gray-600">Tipo de shock, severidad</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <span
                                                    className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mx-auto mb-2">3</span>
                        <h3 className="font-bold text-orange-700">Intervención</h3>
                        <p className="text-sm text-gray-600">Tratamiento específico</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <span
                                                    className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mx-auto mb-2">4</span>
                        <h3 className="font-bold text-red-700">Transporte</h3>
                        <p className="text-sm text-gray-600">Prioridad, destino</p>
                    </div>
                </div>
            </div>

            {/* Casos clínicos detallados */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Casos
                    Clínicos Interactivos</h2>

                {/* Caso 1: Shock Hipovolémico */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center mb-4">
                        <GiBlood className="w-8 h-8 text-red-600 mr-3"/>
                        <h3 className="text-xl font-bold text-red-700">Caso 1: Shock
                            Hipovolémico Severo</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-red-800 mb-2">Escenario:</h4>
                                <p className="text-gray-700 mb-3">
                                    Trabajador de construcción de 35 años cayó de andamio de 3
                                    metros.
                                    Presenta herida abierta en muslo derecho con sangrado
                                    activo, dolor abdominal severo.
                                    Está consciente pero ansioso y confundido.
                                </p>
                                <h4 className="font-bold text-red-800 mb-2">Evaluación
                                    Inicial:</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li><strong>Signos vitales:</strong> TA 70/45 mmHg, FC
                                            140/min, FR 32/min
                                        </li>
                                        <li><strong>Piel:</strong> Pálida, fría, sudorosa</li>
                                        <li><strong>Llenado capilar:</strong> 4 segundos</li>
                                        <li><strong>Estado mental:</strong> Ansioso, confundido
                                        </li>
                                    </ul>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li><strong>Pulso:</strong> Débil, filiforme</li>
                                        <li><strong>SatO₂:</strong> 94% aire ambiente</li>
                                        <li><strong>Sed:</strong> Intensa</li>
                                        <li><strong>Abdomen:</strong> Rígido, dolor a la
                                            palpación
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg">
                                <h4 className="font-bold text-red-800 mb-2">Plan de Manejo:</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li><strong>Control inmediato de hemorragia:</strong>
                                        <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                                            <li>Presión directa en herida del muslo</li>
                                            <li>Torniquete si la presión no es efectiva</li>
                                            <li>Vendaje de presión</li>
                                        </ul>
                                    </li>
                                    <li><strong>Manejo respiratorio:</strong> Oxígeno 15 L/min
                                        mascarilla
                                    </li>
                                    <li><strong>Posición:</strong> Supina con piernas elevadas
                                    </li>
                                    <li><strong>Protección térmica:</strong> Mantas, evitar
                                        hipotermia
                                    </li>
                                    <li><strong>Transporte:</strong> Código rojo a trauma center
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-red-800 mb-2">Índices
                                    Calculados:</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><strong>Índice de Shock:</strong> 140/70 = <span
                                        className="text-red-600 font-bold">2.0</span> (Crítico)
                                    </li>
                                    <li><strong>PAM:</strong> (70 + 2×45)/3 = <span
                                        className="text-red-600 font-bold">53 mmHg</span> (Crítico)
                                    </li>
                                    <li><strong>Presión de pulso:</strong> 70-45 = <span
                                        className="text-red-600 font-bold">25 mmHg</span> (Estrecha)
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-100 p-3 rounded-lg">
                                <h4 className="font-bold text-yellow-800 mb-2">Puntos
                                    Clave:</h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Shock hipovolémico descompensado</li>
                                    <li>• Probable hemorragia interna abdominal</li>
                                    <li>• Requiere cirugía urgente</li>
                                    <li>• Tiempo crítico {'<'} 15 minutos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Caso 2: Shock Anafiláctico */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center mb-4">
                        <FaUserMd className="w-8 h-8 text-green-600 mr-3"/>
                        <h3 className="text-xl font-bold text-green-700">Caso 2: Shock
                            Anafiláctico</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-green-800 mb-2">Escenario:</h4>
                                <p className="text-gray-700 mb-3">
                                    Mujer de 28 años en picnic familiar. 15 minutos después de
                                    ser picada por avispa,
                                    desarrolla urticaria generalizada, dificultad respiratoria y
                                    se siente mareada.
                                    Antecedente de alergia a picaduras.
                                </p>
                                <h4 className="font-bold text-green-800 mb-2">Evaluación
                                    Inicial:</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li><strong>Signos vitales:</strong> TA 85/55 mmHg, FC
                                            125/min, FR 28/min
                                        </li>
                                        <li><strong>Piel:</strong> Caliente, eritematosa,
                                            urticaria
                                        </li>
                                        <li><strong>Respiración:</strong> Estridor audible</li>
                                        <li><strong>Estado mental:</strong> Ansiosa, alerta</li>
                                    </ul>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li><strong>Edema:</strong> Facial y periorbital</li>
                                        <li><strong>SatO₂:</strong> 90% aire ambiente</li>
                                        <li><strong>Voz:</strong> Ronca</li>
                                        <li><strong>Llenado capilar:</strong> 3 segundos</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg">
                                <h4 className="font-bold text-green-800 mb-2">Plan de
                                    Manejo:</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li><strong>Epinefrina IM inmediata:</strong>
                                        <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                                            <li>0.3 mg (1:1000) muslo anterolateral</li>
                                            <li>Preparar segunda dosis en 5-15 minutos</li>
                                        </ul>
                                    </li>
                                    <li><strong>Oxígeno:</strong> 15 L/min mascarilla</li>
                                    <li><strong>Posición:</strong> Fowler si tolera, supina si
                                        hipotensa
                                    </li>
                                    <li><strong>Monitoreo:</strong> Vía aérea, saturación, TA
                                    </li>
                                    <li><strong>Transporte:</strong> Urgente con monitoreo
                                        continuo
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-green-800 mb-2">Progresión
                                    Temporal:</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><strong>T0-15 min:</strong> Picadura → urticaria
                                        localizada
                                    </li>
                                    <li><strong>T15-20 min:</strong> Urticaria generalizada,
                                        prurito
                                    </li>
                                    <li><strong>T20-25 min:</strong> Disnea, estridor,
                                        hipotensión
                                    </li>
                                    <li><strong>Intervención:</strong> Epinefrina IM</li>
                                    <li><strong>Post-epinefrina:</strong> Mejoría en 2-5 minutos
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-100 p-3 rounded-lg">
                                <h4 className="font-bold text-yellow-800 mb-2">Signos de
                                    Alarma:</h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Estridor = compromiso vía aérea</li>
                                    <li>• Hipotensión = shock distributivo</li>
                                    <li>• Edema facial = riesgo obstrucción</li>
                                    <li>• Tiempo crítico para epinefrina</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Caso 3: Shock Cardiogénico */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center mb-4">
                        <FaHeartbeat className="w-8 h-8 text-blue-600 mr-3"/>
                        <h3 className="text-xl font-bold text-blue-700">Caso 3: Shock
                            Cardiogénico</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-blue-800 mb-2">Escenario:</h4>
                                <p className="text-gray-700 mb-3">
                                    Hombre de 68 años con dolor torácico opresivo de 2 horas de
                                    evolución.
                                    Antecedente de 2 infartos previos. Presenta disnea severa,
                                    no puede permanecer acostado,
                                    sudoración profusa.
                                </p>
                                <h4 className="font-bold text-blue-800 mb-2">Evaluación
                                    Inicial:</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li><strong>Signos vitales:</strong> TA 92/65 mmHg, FC
                                            110/min, FR 32/min
                                        </li>
                                        <li><strong>Piel:</strong> Pálida, fría, sudorosa</li>
                                        <li><strong>Respiración:</strong> Ortopnea, uso músculos
                                            accesorios
                                        </li>
                                        <li><strong>Auscultación:</strong> Estertores bibasales
                                        </li>
                                    </ul>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li><strong>Ingurgitación yugular:</strong> Presente
                                        </li>
                                        <li><strong>SatO₂:</strong> 88% aire ambiente</li>
                                        <li><strong>Edema:</strong> Piernas ++</li>
                                        <li><strong>Estado mental:</strong> Ansioso, alerta</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg">
                                <h4 className="font-bold text-blue-800 mb-2">Plan de
                                    Manejo:</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li><strong>Posición:</strong> Fowler (semi-sentado), nunca
                                        Trendelenburg
                                    </li>
                                    <li><strong>Oxígeno:</strong> 15 L/min, considerar CPAP si
                                        disponible
                                    </li>
                                    <li><strong>Nitroglicerina:</strong> 0.4 mg SL (TA {'>'} 90
                                        mmHg)
                                    </li>
                                    <li><strong>Aspirina:</strong> 324 mg masticar si no
                                        contraindicada
                                    </li>
                                    <li><strong>ECG 12 derivaciones:</strong> Documentar STEMI
                                    </li>
                                    <li><strong>Transporte:</strong> Centro con cateterismo
                                        cardiaco
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-blue-800 mb-2">Fisiopatología:</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><strong>Bomba cardiaca:</strong> Función
                                        sistólica {'<'} 40%
                                    </li>
                                    <li><strong>Precarga:</strong> Elevada (congestión)</li>
                                    <li><strong>Postcarga:</strong> Aumentada</li>
                                    <li><strong>Contractilidad:</strong> Severamente reducida
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-100 p-3 rounded-lg">
                                <h4 className="font-bold text-yellow-800 mb-2">Contraindicaciones:</h4>
                                <ul className="text-sm space-y-1">
                                    <li>• NO Trendelenberg</li>
                                    <li>• NO sobrecarga de líquidos</li>
                                    <li>• NO nitroglicerina si TA {'<'} 90</li>
                                    <li>• Objetivo: reducir precarga</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Caso 4: Shock Obstructivo */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                        <FiActivity className="w-8 h-8 text-purple-600 mr-3"/>
                        <h3 className="text-xl font-bold text-purple-700">Caso 4: Shock
                            Obstructivo (Neumotórax a Tensión)</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-purple-800 mb-2">Escenario:</h4>
                                <p className="text-gray-700 mb-3">
                                    Joven de 22 años, delgado, presenta súbitamente dolor
                                    torácico intenso y dificultad
                                    respiratoria severa mientras jugaba baloncesto. Se encuentra
                                    agitado, con disnea marcada
                                    y cianosis perioral.
                                </p>
                                <h4 className="font-bold text-purple-800 mb-2">Evaluación
                                    Inicial:</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li><strong>Signos vitales:</strong> TA 75/40 mmHg, FC
                                            140/min, FR 40/min
                                        </li>
                                        <li><strong>Piel:</strong> Cianótica, sudorosa</li>
                                        <li><strong>Respiración:</strong> Superficial, uso
                                            músculos accesorios
                                        </li>
                                        <li><strong>Auscultación:</strong> Ausencia ruidos
                                            hemitórax derecho
                                        </li>
                                    </ul>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        <li><strong>Ingurgitación yugular:</strong> Marcada</li>
                                        <li><strong>SatO₂:</strong> 85% aire ambiente</li>
                                        <li><strong>Desviación traqueal:</strong> Hacia la
                                            izquierda
                                        </li>
                                        <li><strong>Estado mental:</strong> Agitado, ansioso
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg">
                                <h4 className="font-bold text-purple-800 mb-2">Plan de
                                    Manejo:</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li><strong>Oxígeno:</strong> 15 L/min mascarilla</li>
                                    <li><strong>Posición:</strong> Fowler o posición de
                                        comodidad
                                    </li>
                                    <li><strong>Descompresión:</strong> Aguja catéter 2° espacio
                                        intercostal línea medioclavicular derecha (si entrenado)
                                    </li>
                                    <li><strong>Transporte emergente:</strong> Notificar
                                        hospital sobre neumotórax a tensión
                                    </li>
                                    <li><strong>Monitoreo continuo:</strong> Signos vitales cada
                                        2-3 minutos
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-purple-800 mb-2">Tríada
                                    Clásica:</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><strong>1. Disnea severa súbita</strong></li>
                                    <li><strong>2. Ingurgitación yugular</strong></li>
                                    <li><strong>3. Hipotensión</strong></li>
                                    <li className="text-purple-600 font-bold">+ Desviación
                                        traqueal
                                    </li>
                                    <li className="text-purple-600 font-bold">+ Ausencia ruidos
                                        respiratorios
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-100 p-3 rounded-lg">
                                <h4 className="font-bold text-red-800 mb-2">¡EMERGENCIA!</h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Mortal sin tratamiento</li>
                                    <li>• Requiere descompresión inmediata</li>
                                    <li>• Transporte de alta prioridad</li>
                                    <li>• Monitoreo continuo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ejercicio de autoevaluación */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <MdCheckCircle className="w-6 h-6 mr-2 text-green-500"/>
                    Ejercicio de Autoevaluación
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-gray-800 mb-3">Escenario Rápido:</h4>
                        <p className="text-gray-700 mb-4">
                            Paciente de 45 años, TA 60/40, FC 130, piel caliente y seca,
                            temperatura 39°C, confusión, antecedente de infección urinaria.
                        </p>
                        <h4 className="font-bold text-gray-800 mb-2">Preguntas:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            <li>¿Qué tipo de shock es más probable?</li>
                            <li>¿Cuál sería tu primera intervención?</li>
                            <li>¿Qué posición colocarías al paciente?</li>
                            <li>¿Cuál es la prioridad de transporte?</li>
                        </ol>
                    </div>
                    <div>
                        <h4 className="font-bold text-green-800 mb-3">Respuestas:</h4>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Shock séptico</strong> (distributivo por infección)</li>
                            <li><strong>Oxígeno 15 L/min</strong> y evaluación ABC</li>
                            <li><strong>Supina</strong> (hipotensión severa)</li>
                            <li><strong>Emergente</strong> - requiere antibióticos IV urgente
                            </li>
                        </ol>
                        <div className="bg-green-100 p-3 rounded mt-4">
                            <p className="text-sm font-medium text-green-700">
                                💡 Clave: Piel caliente + fiebre + hipotensión = shock séptico
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}