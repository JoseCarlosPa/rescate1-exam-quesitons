export default function Cases() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                clínicos geriátricos para análisis</h2>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-red-600">Caso 1: Infarto atípico
                    en adulto mayor</h3>
                <p className="italic text-gray-600 mb-4">
                    Mujer de 78 años con diabetes e hipertensión. La familia la encontró
                    confundida y con náuseas.
                    Niega dolor torácico. Refiere "sentirse mal" desde hace 2 horas. Tiene
                    antecedentes de demencia leve.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Apariencia:</strong> Diaforética, pálida, orientada x2</li>
                        <li><strong>Signos vitales:</strong> FC 110/min irregular, PA 90/60
                            mmHg, FR 24/min, SpO₂ 89%
                        </li>
                        <li><strong>Historia:</strong> Tomó "todas sus pastillas" esta mañana
                        </li>
                        <li><strong>Examen:</strong> Ruidos cardíacos irregulares, crepitantes
                            basales bilaterales
                        </li>
                        <li><strong>ECG:</strong> Fibrilación auricular, elevación del ST en
                            derivaciones inferiores
                        </li>
                    </ul>
                </div>

                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                    <h4 className="font-medium mb-2 text-yellow-700">Consideraciones
                        geriátricas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700">
                        <li>Presentación atípica sin dolor torácico clásico</li>
                        <li>Confusión como síntoma principal</li>
                        <li>Neuropatía diabética puede enmascarar el dolor</li>
                        <li>Complicaciones: IC aguda, arritmias</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo correcto:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Oxígeno para mantener SpO₂ &gt;94%</li>
                        <li>Acceso IV con precaución (venas frágiles)</li>
                        <li>AAS 162-325 mg (verificar contraindicaciones)</li>
                        <li>Monitorización cardíaca continua</li>
                        <li>Nitroglicerina SL (precaución por hipotensión)</li>
                        <li>Activación de código infarto - traslado urgente</li>
                        <li>Comunicación con hospital: paciente geriátrico con STEMI</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Insuficiencia
                    cardíaca descompensada</h3>
                <p className="italic text-gray-600 mb-4">
                    Hombre de 82 años con antecedentes de IC, EPOC y fibrilación auricular.
                    Presenta disnea progresiva
                    en los últimos 3 días, ortopnea y edema en miembros inferiores que ha
                    empeorado.
                    No puede acostarse desde anoche.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Apariencia:</strong> Angustiado, sentado en trípode,
                            cianosis perioral
                        </li>
                        <li><strong>Signos vitales:</strong> FC 130/min, PA 160/100 mmHg, FR
                            32/min, SpO₂ 84%
                        </li>
                        <li><strong>Examen:</strong> Crepitantes bilaterales, edema 3+ en
                            piernas, YVD elevada
                        </li>
                        <li><strong>Historia:</strong> "Se le olvidó tomar las pastillas" los
                            últimos 2 días
                        </li>
                        <li><strong>Medicamentos:</strong> Furosemida, metoprolol, warfarina
                        </li>
                    </ul>
                </div>

                <div className="bg-blue-100 p-3 rounded-lg mb-4">
                    <h4 className="font-medium mb-2 text-blue-700">Factores precipitantes
                        comunes en geriatría:</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-700">
                        <li>Falta de adherencia a medicamentos</li>
                        <li>Exceso de sal en la dieta</li>
                        <li>Infecciones (neumonía, ITU)</li>
                        <li>Arritmias nuevas o no controladas</li>
                        <li>Isquemia miocárdica</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo emergente:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Posición sentada con piernas colgando</li>
                        <li>Oxígeno de alto flujo, considerar CPAP si disponible</li>
                        <li>Acceso IV en antebrazo</li>
                        <li>Nitroglicerina SL (si PA &gt;100 mmHg sistólica)</li>
                        <li>Furosemida 40-80 mg IV (dosis geriátrica ajustada)</li>
                        <li>Monitorización estricta de signos vitales</li>
                        <li>Traslado a hospital con capacidad de cardiología</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Delirium vs.
                    Demencia</h3>
                <p className="italic text-gray-600 mb-4">
                    Mujer de 85 años llevada por su hija porque "está muy confundida desde
                    ayer".
                    Normalmente es independiente para actividades básicas. Ayer estaba normal,
                    pero hoy no reconoce a su familia y está agitada.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Información adicional:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Historia:</strong> Hace 3 días comenzó antibiótico para ITU
                        </li>
                        <li><strong>Medicamentos:</strong> Tramadol para dolor de rodilla
                            (nuevo)
                        </li>
                        <li><strong>Signos vitales:</strong> FC 110/min, PA 100/60 mmHg, Temp
                            38.5°C
                        </li>
                        <li><strong>Examen:</strong> Alerta pero desorientada, alucinaciones
                            visuales
                        </li>
                        <li><strong>Orina:</strong> Oscura, con olor fuerte</li>
                    </ul>
                </div>

                <div className="bg-green-100 p-3 rounded-lg mb-4">
                    <h4 className="font-medium mb-2 text-green-700">Diferenciación clave:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="font-medium">Delirium (este caso):</h5>
                            <ul className="list-disc list-inside space-y-1 text-green-700">
                                <li>Inicio agudo (24-48 horas)</li>
                                <li>Fluctuación durante el día</li>
                                <li>Alteración de conciencia</li>
                                <li>Causa médica identificable</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-medium">Demencia:</h5>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Inicio gradual (meses/años)</li>
                                <li>Progresión constante</li>
                                <li>Conciencia normal inicial</li>
                                <li>Deterioro cognitivo primario</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo del delirium:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Identificar y tratar causas subyacentes</li>
                        <li>Discontinuar medicamentos potencialmente causales</li>
                        <li>Hidratación IV cuidadosa</li>
                        <li>Manejo de la fiebre</li>
                        <li>Ambiente tranquilo y bien iluminado</li>
                        <li>Evitar restricciones físicas</li>
                        <li>Traslado para evaluación completa y tratamiento de ITU</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-purple-600">Caso 4: Caída con
                    posible fractura de cadera</h3>
                <p className="italic text-gray-600 mb-4">
                    Hombre de 79 años encontrado en el suelo de su baño. Refiere que se resbaló
                    y cayó.
                    No puede levantarse y tiene dolor intenso en cadera derecha. Vive solo,
                    no sabe cuánto tiempo estuvo en el suelo.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Posición:</strong> Pierna derecha acortada y rotada
                            externamente
                        </li>
                        <li><strong>Dolor:</strong> 9/10 en cadera derecha, no puede mover la
                            pierna
                        </li>
                        <li><strong>Signos vitales:</strong> FC 100/min, PA 140/80 mmHg, Temp
                            35.8°C
                        </li>
                        <li><strong>Piel:</strong> Fría, seca, presión sobre sacro por tiempo
                            prolongado
                        </li>
                        <li><strong>Estado mental:</strong> Alerta, orientado, preocupado</li>
                    </ul>
                </div>

                <div className="bg-purple-100 p-3 rounded-lg mb-4">
                    <h4 className="font-medium mb-2 text-purple-700">Complicaciones de caídas en
                        geriatría:</h4>
                    <ul className="list-disc list-inside space-y-1 text-purple-700">
                        <li>Fracturas por osteoporosis (cadera, muñeca, vertebrales)</li>
                        <li>Traumatismo craneoencefálico (uso de anticoagulantes)</li>
                        <li>Síndrome de aplastamiento por tiempo prolongado en el suelo</li>
                        <li>Hipotermia por exposición</li>
                        <li>Deshidratación</li>
                        <li>Rabdomiólisis</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo integral:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Evaluación ABCDE completa</li>
                        <li>Inmovilización de cadera con férula de tracción</li>
                        <li>Control del dolor: morfina 1-2 mg IV inicialmente</li>
                        <li>Evaluación neurológica (anticoagulación, TCE)</li>
                        <li>Mantas térmicas para hipotermia</li>
                        <li>Acceso IV para hidratación</li>
                        <li>Acolchado para prevenir úlceras por presión</li>
                        <li>Movilización cuidadosa en tabla rígida</li>
                        <li>Traslado a centro con ortopedia geriátrica</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 5: Polifarmacia
                    y efectos adversos</h3>
                <p className="italic text-gray-600 mb-4">
                    Mujer de 81 años con múltiples comorbilidades llevada por somnolencia
                    progresiva.
                    Familia refiere que en los últimos días "duerme mucho" y cuando despierta
                    está confundida.
                    Ayer visitó a 3 médicos diferentes para distintos problemas.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Medicamentos actuales (según
                        familiares):</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Metformina 1000 mg c/12h</li>
                            <li>Enalapril 10 mg c/12h</li>
                            <li>Furosemida 40 mg diarios</li>
                            <li>Warfarina 5 mg diarios</li>
                            <li>Lorazepam 1 mg c/8h (nuevo ayer)</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Tramadol 50 mg c/6h (nuevo ayer)</li>
                            <li>Omeprazol 20 mg diarios</li>
                            <li>Simvastatina 40 mg nocturno</li>
                            <li>Diphenhydramina 25 mg nocturno (nuevo)</li>
                            <li>"Algo para dormir" (no especifica)</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-orange-100 p-3 rounded-lg mb-4">
                    <h4 className="font-medium mb-2 text-orange-700">Medicamentos problemáticos
                        en geriatría:</h4>
                    <ul className="list-disc list-inside space-y-1 text-orange-700">
                        <li><strong>Lorazepam:</strong> Benzodiacepina de alto riesgo</li>
                        <li><strong>Tramadol:</strong> Efectos anticolinérgicos y sedantes</li>
                        <li><strong>Diphenhydramina:</strong> Antihistamínico anticolinérgico
                        </li>
                        <li><strong>Interacciones:</strong> Efecto sedante sinérgico</li>
                        <li><strong>Resultado:</strong> Sedación excesiva, confusión, riesgo de
                            caídas
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo de intoxicación por
                        polifarmacia:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Evaluación del estado de conciencia (Escala de Glasgow)</li>
                        <li>Verificar signos vitales estables</li>
                        <li>Recopilar TODOS los medicamentos (incluyendo OTC)</li>
                        <li>Contactar con control de toxicología si está disponible</li>
                        <li>No inducir vómito en paciente con alteración de conciencia</li>
                        <li>Monitorización respiratoria continua</li>
                        <li>Preparar naloxona en caso de depresión respiratoria</li>
                        <li>Traslado para evaluación médica y reconciliación de medicamentos
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}