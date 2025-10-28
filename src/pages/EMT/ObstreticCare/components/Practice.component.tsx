import {HiOutlineClipboardList} from "react-icons/hi";
import {FaExclamationTriangle, FaFirstAid, FaLungsVirus} from "react-icons/fa";
import {FiAlertTriangle, FiEye, FiHeart} from "react-icons/fi";
import {BsLightbulb} from "react-icons/bs";

export default function Practice(){
    return(
        <div className="space-y-8">
            <div
                className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-indigo-700 mb-2">Casos Clínicos para
                    Análisis</h2>
                <p className="text-gray-700">
                    Practica tu toma de decisiones con estos casos clínicos reales. Cada caso
                    incluye evaluación paso a paso y justificación de las acciones.
                </p>
            </div>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">1</span>
                        <h3 className="text-xl font-bold text-orange-600">Caso: Parto
                            Precipitado</h3>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-bold text-gray-800 mb-2">Escenario:</h4>
                        <p className="text-gray-700 italic">
                            Mujer de 28 años, G3P2, embarazo de 38 semanas. Llama al 911
                            refiriendo contracciones intensas cada 2 minutos desde hace 1 hora.
                            Al llegar, observas coronamiento de la cabeza del bebé. La paciente
                            refiere: "¡Ya viene, ya viene!"
                            Sus partos anteriores fueron rápidos (2 y 3 horas respectivamente).
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                <HiOutlineClipboardList className="w-5 h-5 mr-2"/>
                                Evaluación Inicial:
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• <strong>A:</strong> Vía aérea permeable, grita con
                                    contracciones
                                </li>
                                <li>• <strong>B:</strong> FR 22/min, respiración adecuada</li>
                                <li>• <strong>C:</strong> FC 95/min, TA 125/80 mmHg, piel rosada
                                </li>
                                <li>• <strong>D:</strong> Alerta, ansiosa pero cooperativa</li>
                                <li>• <strong>E:</strong> Contracciones c/2 min, coronamiento
                                    visible
                                </li>
                                <li>• <strong>Historia:</strong> G3P2, partos rápidos previos
                                </li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-bold text-green-700 mb-2 flex items-center">
                                <FaFirstAid className="w-5 h-5 mr-2"/>
                                Manejo Correcto:
                            </h4>
                            <ol className="space-y-1 text-sm text-gray-700">
                                <li>1. <strong>Preparar kit obstétrico</strong> inmediatamente
                                </li>
                                <li>2. <strong>Posicionar</strong> a la paciente semi-sentada
                                </li>
                                <li>3. <strong>EPP completo</strong> y preparar área estéril
                                </li>
                                <li>4. <strong>NO tirar</strong> de la cabeza, solo apoyar</li>
                                <li>5. <strong>Verificar cordón</strong> alrededor del cuello
                                </li>
                                <li>6. <strong>Asistir nacimiento</strong> de hombros y cuerpo
                                </li>
                                <li>7. <strong>Secar y estimular</strong> al bebé inmediatamente
                                </li>
                                <li>8. <strong>Clampear cordón</strong> después de 1-3 minutos
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h4 className="font-bold text-yellow-700 mb-2">Puntos Clave de
                            Aprendizaje:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Multiparidad:</strong> Los partos subsecuentes tienden
                                a ser más rápidos
                            </li>
                            <li>• <strong>Coronamiento:</strong> Signo inequívoco de parto
                                inminente
                            </li>
                            <li>• <strong>Preparación rápida:</strong> Tener kit obstétrico
                                siempre listo
                            </li>
                            <li>• <strong>Tranquilidad:</strong> Mantener calma transmite
                                confianza a la paciente
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">2</span>
                        <h3 className="text-xl font-bold text-red-600">Caso: Hemorragia
                            Postparto</h3>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-bold text-gray-800 mb-2">Escenario:</h4>
                        <p className="text-gray-700 italic">
                            Mujer de 32 años que tuvo un parto vaginal exitoso hace 20 minutos.
                            La placenta fue expulsada aparentemente completa,
                            pero ahora presenta sangrado vaginal abundante, empapando múltiples
                            toallas sanitarias.
                            La paciente se queja de mareo y náuseas. El útero se palpa blando y
                            no se contrae adecuadamente.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                <FiEye className="w-5 h-5 mr-2"/>
                                Evaluación Inicial:
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• <strong>A:</strong> Vía aérea permeable</li>
                                <li>• <strong>B:</strong> FR 24/min, respiración adecuada</li>
                                <li>• <strong>C:</strong> FC 115/min, TA 100/60 mmHg, palidez
                                </li>
                                <li>• <strong>D:</strong> Alerta pero débil, ligera confusión
                                </li>
                                <li>• <strong>E:</strong> Sangrado vaginal abundante, útero
                                    blando
                                </li>
                                <li>• <strong>Estimación:</strong> Pérdida sanguínea &gt; 500 ml
                                </li>
                            </ul>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                Manejo Urgente:
                            </h4>
                            <ol className="space-y-1 text-sm text-gray-700">
                                <li>1. <strong>Masaje uterino vigoroso</strong> para promover
                                    contracción
                                </li>
                                <li>2. <strong>Acceso IV doble</strong> con catéter grande
                                    (14G-16G)
                                </li>
                                <li>3. <strong>Solución salina isotónica</strong> para
                                    reposición
                                </li>
                                <li>4. <strong>Oxígeno suplementario</strong> alto flujo</li>
                                <li>5. <strong>Posición Trendelenburg</strong> si hipotensión
                                </li>
                                <li>6. <strong>Compresas perineales</strong> para tamponar</li>
                                <li>7. <strong>Transporte inmediato</strong> con notificación
                                </li>
                                <li>8. <strong>Monitorización</strong> continua de signos
                                    vitales
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-700 mb-2">Puntos Críticos:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Reconocimiento temprano:</strong> HPP es causa
                                principal de muerte materna
                            </li>
                            <li>• <strong>Atonía uterina:</strong> Causa más común de hemorragia
                                postparto
                            </li>
                            <li>• <strong>Masaje uterino:</strong> Primera línea de tratamiento
                            </li>
                            <li>• <strong>Reposición de volumen:</strong> Prevenir shock
                                hemorrágico
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">3</span>
                        <h3 className="text-xl font-bold text-purple-600">Caso: Reanimación
                            Neonatal</h3>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-bold text-gray-800 mb-2">Escenario:</h4>
                        <p className="text-gray-700 italic">
                            Recién nacido de término nacido tras parto vaginal sin
                            complicaciones. El bebé nace flácido,
                            sin esfuerzo respiratorio, y con cianosis central. Tras secar y
                            estimular vigorosamente por 30 segundos,
                            no hay mejoría. FC: 80 latidos por minuto medida por auscultación.
                            La madre pregunta angustiada: "¿Está bien mi bebé?"
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                <FiHeart className="w-5 h-5 mr-2"/>
                                Evaluación APGAR (1 minuto):
                            </h4>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span>Apariencia:</span>
                                    <span className="font-bold text-red-600">Cianosis central (0 pts)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Pulso:</span>
                                    <span
                                        className="font-bold text-yellow-600">80 lpm (1 pt)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Gesticulación:</span>
                                    <span className="font-bold text-red-600">Sin respuesta (0 pts)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Actividad:</span>
                                    <span
                                        className="font-bold text-red-600">Flácido (0 pts)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Respiración:</span>
                                    <span
                                        className="font-bold text-red-600">Ausente (0 pts)</span>
                                </div>
                                <div className="border-t pt-2 mt-2">
                                    <div className="flex justify-between font-bold">
                                        <span>Total APGAR:</span>
                                        <span
                                            className="text-red-600">1/10 (Depresión severa)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                <FaLungsVirus className="w-5 h-5 mr-2"/>
                                Protocolo de Reanimación:
                            </h4>
                            <ol className="space-y-1 text-sm text-gray-700">
                                <li>1. <strong>Continuar secado</strong> y estimulación táctil
                                </li>
                                <li>2. <strong>Posicionar cabeza</strong> en extensión leve</li>
                                <li>3. <strong>Succionar</strong> boca y nariz si secreciones
                                </li>
                                <li>4. <strong>Iniciar VPP</strong> a 40-60 ventilaciones/min
                                </li>
                                <li>5. <strong>Bolsa y mascarilla</strong> con aire ambiente
                                </li>
                                <li>6. <strong>Reevaluar FC</strong> cada 30 segundos</li>
                                <li>7. <strong>Si FC &lt; 60:</strong> iniciar compresiones</li>
                                <li>8. <strong>Relación 3:1</strong> (3 compresiones : 1
                                    ventilación)
                                </li>
                                <li>9. <strong>Transporte inmediato</strong> con soporte
                                    continuo
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-700 mb-2">Comunicación con la
                            Familia:</h4>
                        <p className="text-sm text-gray-700">
                            "Su bebé necesita ayuda para respirar. Estamos proporcionando
                            oxígeno y estimulando la respiración.
                            Es importante que sepan que estamos haciendo todo lo necesario y
                            vamos a trasladar al bebé al hospital
                            inmediatamente para cuidados especializados."
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">4</span>
                        <h3 className="text-xl font-bold text-yellow-600">Caso: Eclampsia</h3>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-bold text-gray-800 mb-2">Escenario:</h4>
                        <p className="text-gray-700 italic">
                            Mujer de 24 años, G1P0, 36 semanas de gestación, presenta
                            convulsiones tónico-clónicas generalizadas
                            que duran 2 minutos. Su esposo refiere que en los últimos días ha
                            tenido dolor de cabeza severo,
                            visión borrosa y edema en cara y manos. No tiene antecedentes de
                            epilepsia. La convulsión acaba de cesar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-bold text-yellow-700 mb-2 flex items-center">
                                <FiAlertTriangle className="w-5 h-5 mr-2"/>
                                Evaluación Post-Ictal:
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• <strong>A:</strong> Vía aérea permeable, roncus</li>
                                <li>• <strong>B:</strong> FR 28/min, respiración laboriosa</li>
                                <li>• <strong>C:</strong> FC 110/min, TA 180/110 mmHg</li>
                                <li>• <strong>D:</strong> Confusa, responde a estímulos</li>
                                <li>• <strong>E:</strong> Edema facial y en extremidades</li>
                                <li>• <strong>Historia:</strong> Cefalea, alteraciones visuales
                                </li>
                            </ul>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                Manejo Inmediato:
                            </h4>
                            <ol className="space-y-1 text-sm text-gray-700">
                                <li>1. <strong>Proteger vía aérea</strong> - posición de
                                    seguridad
                                </li>
                                <li>2. <strong>Oxígeno alto flujo</strong> - 15 L/min por
                                    mascarilla
                                </li>
                                <li>3. <strong>Acceso IV</strong> - catéter gran calibre</li>
                                <li>4. <strong>Ambiente tranquilo</strong> - reducir estímulos
                                </li>
                                <li>5. <strong>Posición lateral izquierda</strong> - mejorar
                                    perfusión
                                </li>
                                <li>6. <strong>Monitorización continua</strong> - PA y SatO₂
                                </li>
                                <li>7. <strong>Preparar anticonvulsivos</strong> (si protocolo)
                                </li>
                                <li>8. <strong>Transporte CODE 3</strong> - notificar hospital
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h4 className="font-bold text-yellow-700 mb-2">Consideraciones
                            Especiales:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Eclampsia:</strong> Emergencia obstétrica que amenaza
                                la vida
                            </li>
                            <li>• <strong>Riesgo de convulsiones recurrentes:</strong> Mantener
                                ambiente tranquilo
                            </li>
                            <li>• <strong>Hipertensión severa:</strong> Riesgo de ACV,
                                monitorizar continuamente
                            </li>
                            <li>• <strong>Bienestar fetal:</strong> Optimizar oxigenación
                                materna
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">5</span>
                        <h3 className="text-xl font-bold text-indigo-600">Caso: Prolapso de
                            Cordón</h3>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-bold text-gray-800 mb-2">Escenario:</h4>
                        <p className="text-gray-700 italic">
                            Mujer de 29 años, G2P1, 38 semanas, en trabajo de parto activo.
                            Acaba de "romperse la fuente"
                            con salida abundante de líquido amniótico claro. Inmediatamente
                            después, la paciente grita de dolor
                            y refiere sensación de "algo que se sale". Al examinar, observas
                            cordón umbilical pulsátil
                            protruyendo por la vagina. La paciente está muy angustiada.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                <FiAlertTriangle className="w-5 h-5 mr-2"/>
                                Evaluación Crítica:
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• <strong>A:</strong> Vía aérea permeable, hiperventilando
                                </li>
                                <li>• <strong>B:</strong> FR 32/min, respiración superficial
                                </li>
                                <li>• <strong>C:</strong> FC 120/min, TA 140/90 mmHg</li>
                                <li>• <strong>D:</strong> Alerta, muy ansiosa</li>
                                <li>• <strong>E:</strong> Cordón pulsátil visible en vagina</li>
                                <li>• <strong>Urgencia:</strong> Comprometimiento fetal
                                    inminente
                                </li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-bold text-orange-700 mb-2 flex items-center">
                                <FaFirstAid className="w-5 h-5 mr-2"/>
                                Manejo de Emergencia:
                            </h4>
                            <ol className="space-y-1 text-sm text-gray-700">
                                <li>1. <strong>Posición genupectoral</strong> - cabeza abajo,
                                    rodillas al pecho
                                </li>
                                <li>2. <strong>Elevar presentación fetal</strong> - mano
                                    enguantada estéril
                                </li>
                                <li>3. <strong>NO manipular cordón</strong> - mantener húmedo y
                                    tibio
                                </li>
                                <li>4. <strong>Oxígeno alto flujo</strong> - 15 L/min a la madre
                                </li>
                                <li>5. <strong>Transporte CODE 3</strong> - notificar cesárea
                                    emergente
                                </li>
                                <li>6. <strong>Mantener posición</strong> durante todo el
                                    transporte
                                </li>
                                <li>7. <strong>Apoyo emocional</strong> - explicar procedimiento
                                </li>
                                <li>8. <strong>Monitorización continua</strong> - signos vitales
                                    maternos
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-700 mb-2">Puntos Críticos de
                            Supervivencia:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Tiempo es vida:</strong> Cada minuto cuenta para
                                supervivencia fetal
                            </li>
                            <li>• <strong>Mantener elevación:</strong> Reducir compresión del
                                cordón
                            </li>
                            <li>• <strong>Posición clave:</strong> Genupectoral o Trendelenburg
                                extremo
                            </li>
                            <li>• <strong>Comunicación:</strong> Notificar hospital para
                                preparar cesárea STAT
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Ejercicio de toma de decisiones */}
            <div
                className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2"/>
                    Ejercicio de Toma de Decisiones
                </h3>
                <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Pregunta de Reflexión:</h4>
                    <p className="text-gray-700 italic mb-3">
                        "¿Cuáles son los tres factores más importantes para decidir si intentar
                        transportar a una paciente
                        obstétrica al hospital o asistir el parto en el lugar?"
                    </p>
                    <div className="bg-gray-50 p-3 rounded">
                        <p className="text-sm text-gray-600">
                            <strong>Reflexiona sobre:</strong> Tiempo estimado de parto,
                            condición materna,
                            distancia al hospital, recursos disponibles, complicaciones
                            presentes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}