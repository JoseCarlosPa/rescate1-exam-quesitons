import {SimulatorCase} from '../CaseSimulator.types';

export const paroCardiacoACLSCase: SimulatorCase = {
    id: 'paro-cardiaco-acls-001',
    title: 'Paro Cardiorrespiratorio - Manejo ACLS Avanzado',
    description: 'Paciente en paro cardiorrespiratorio que requiere manejo avanzado con ACLS, incluyendo medicamentos, vía aérea avanzada y manejo de ritmos cardíacos complejos.',
    scenario: 'Mujer de 68 años con antecedente de cardiopatía isquémica colapsa en el hospital durante visita ambulatoria. Personal de enfermería inicia RCP inmediatamente. Tú llegas con el carro de paro y desfibrilador.',
    patientInfo: {
        age: 68,
        gender: 'Femenino',
        chiefComplaint: 'Paro cardiorrespiratorio presenciado',
        history: 'Antecedentes: IAM previo hace 2 años, HTA, DM tipo 2. Medicamentos: AAS, Atorvastatina, Metformina, Enalapril.'
    },
    initialVitalSigns: {
        'Consciencia': 'Inconsciente (RCP en curso)',
        'Respiración': 'Ausente',
        'Pulso': 'No palpable',
        'Ritmo en monitor': 'Fibrilación Ventricular',
        'Color': 'Cianosis periférica',
        'Pupilas': 'Midriáticas'
    },
    glasgowScore: {
        expected: 8,
        timing: 'final_assessment',
        contextInfo: 'Tras 12 minutos de RCP con ACLS, 3 descargas y administración de medicamentos, la paciente recupera circulación espontánea (ROSC). Al evaluar: abre los ojos al estímulo doloroso (2 puntos), emite sonidos incomprensibles tipo gemidos (2 puntos), y localiza el dolor retirando la extremidad (4 puntos). Total: 2+2+4=8. Requiere manejo en UCI y monitoreo neurológico continuo.'
    },
    steps: [
        {
            id: 'step-assess-rhythm',
            stepNumber: 1,
            title: 'Evaluación Inicial del Ritmo',
            description: 'RCP de alta calidad en curso. Conectas el monitor/desfibrilador y observas Fibrilación Ventricular. ¿Cuál es tu acción inmediata?',
            options: [
                {
                    id: 'ar-1',
                    text: 'Continuar RCP mientras cargas el desfibrilador, administrar 1 descarga de 200J bifásica, reanudar RCP inmediatamente',
                    isCorrect: true,
                    consequence: 'Excelente. Minimizas interrupciones en RCP y sigues algoritmo ACLS para FV/TV sin pulso.'
                },
                {
                    id: 'ar-2',
                    text: 'Detener RCP, verificar pulso, luego desfibrilar',
                    isCorrect: false,
                    consequence: 'Incorrecto. No debes verificar pulso entre descargas, continúa RCP hasta cargar desfibrilador.'
                },
                {
                    id: 'ar-3',
                    text: 'Administrar Epinefrina IV antes de la primera descarga',
                    isCorrect: false,
                    consequence: 'Incorrecto. En FV/TV sin pulso, la desfibrilación tiene prioridad sobre medicamentos.'
                },
                {
                    id: 'ar-4',
                    text: 'Intubar al paciente antes de desfibrilar',
                    isCorrect: false,
                    consequence: 'Incorrecto. No retrases la desfibrilación para procedimientos de vía aérea.'
                }
            ],
            correctOptionId: 'ar-1',
            feedback: {
                correct: 'Perfecto. Has aplicado correctamente el algoritmo ACLS: RCP de calidad + desfibrilación precoz.',
                incorrect: 'En FV/TV sin pulso, la desfibrilación precoz es crítica. Minimiza interrupciones en RCP.',
                explanation: 'Cada minuto de retraso en desfibrilación reduce la supervivencia en 7-10%. RCP continuo mantiene perfusión.'
            },
            criticalStep: true
        },
        {
            id: 'step-post-shock-cpr',
            stepNumber: 2,
            title: 'RCP Post-Descarga',
            description: 'Administraste la descarga. El equipo te mira esperando instrucciones. ¿Qué haces?',
            options: [
                {
                    id: 'ps-1',
                    text: 'Reanudar RCP inmediatamente por 2 minutos antes de verificar ritmo',
                    isCorrect: true,
                    consequence: 'Correcto. RCP inmediato post-descarga es esencial, no verificar ritmo ni pulso aún.'
                },
                {
                    id: 'ps-2',
                    text: 'Verificar ritmo en monitor inmediatamente',
                    isCorrect: false,
                    consequence: 'Incorrecto. Debes reanudar RCP por 2 minutos completos antes de verificar ritmo.'
                },
                {
                    id: 'ps-3',
                    text: 'Verificar pulso carotídeo para confirmar si hay ROSC',
                    isCorrect: false,
                    consequence: 'Incorrecto. No verificar pulso inmediatamente post-descarga, reanudar RCP.'
                },
                {
                    id: 'ps-4',
                    text: 'Administrar segunda descarga inmediatamente',
                    isCorrect: false,
                    consequence: 'Incorrecto. Debes realizar 2 minutos de RCP entre cada verificación de ritmo.'
                }
            ],
            correctOptionId: 'ps-1',
            feedback: {
                correct: 'Excelente. Conoces el protocolo ACLS: 2 minutos de RCP entre verificaciones de ritmo.',
                incorrect: 'Post-descarga, continuar RCP inmediatamente por 2 minutos completos es crucial.',
                explanation: 'Incluso si la desfibrilación fue exitosa, el corazón necesita tiempo para generar pulso efectivo.'
            },
            criticalStep: true
        },
        {
            id: 'step-vascular-access',
            stepNumber: 3,
            title: 'Acceso Vascular y Medicamentos',
            description: 'Durante el RCP, necesitas establecer acceso vascular. Enfermería informa que los accesos IV periféricos son difíciles. ¿Qué recomiendas?',
            options: [
                {
                    id: 'va-1',
                    text: 'Acceso intraóseo (IO) inmediato si no hay IV funcional en 1-2 intentos',
                    isCorrect: true,
                    consequence: 'Correcto. IO es la alternativa recomendada cuando IV es difícil en paro cardíaco.'
                },
                {
                    id: 'va-2',
                    text: 'Intentar acceso IV periférico múltiples veces hasta lograrlo',
                    isCorrect: false,
                    consequence: 'Incorrecto. No retrasar medicamentos por múltiples intentos IV. Usar IO.'
                },
                {
                    id: 'va-3',
                    text: 'Catéter venoso central de urgencia',
                    isCorrect: false,
                    consequence: 'Incorrecto. CVC toma demasiado tiempo. IO es más rápido y seguro en RCP.'
                },
                {
                    id: 'va-4',
                    text: 'Medicamentos por tubo endotraqueal',
                    isCorrect: false,
                    consequence: 'Ya no recomendado. Absorción impredecible. Preferir IO si no hay IV.'
                }
            ],
            correctOptionId: 'va-1',
            feedback: {
                correct: 'Perfecto. El acceso IO es tan efectivo como IV central y mucho más rápido.',
                incorrect: 'En RCP, el tiempo es crítico. Acceso IO debe considerarse tempranamente si IV es difícil.',
                explanation: 'ACLS recomienda IO tras 1-2 intentos IV fallidos. Medicamentos IO tienen igual efectividad que IV.'
            }
        },
        {
            id: 'step-first-medication',
            stepNumber: 4,
            title: 'Primera Dosis de Medicamentos',
            description: 'Tienes acceso IO establecido. Han pasado 2 minutos de RCP post-primera descarga. Verificas ritmo: persiste FV. ¿Qué medicamento administras ahora?',
            options: [
                {
                    id: 'fm-1',
                    text: 'Epinefrina 1mg IV/IO, luego segunda descarga 200J',
                    isCorrect: true,
                    consequence: 'Correcto. Epinefrina es el vasopresor de primera línea tras la segunda descarga.'
                },
                {
                    id: 'fm-2',
                    text: 'Amiodarona 300mg IV/IO, luego segunda descarga',
                    isCorrect: false,
                    consequence: 'Prematuramente. Amiodarona se da tras la tercera descarga. Epinefrina primero.'
                },
                {
                    id: 'fm-3',
                    text: 'Atropina 1mg IV/IO',
                    isCorrect: false,
                    consequence: 'Incorrecto. Atropina no está indicada en FV/TV sin pulso.'
                },
                {
                    id: 'fm-4',
                    text: 'Bicarbonato de sodio 1mEq/kg IV',
                    isCorrect: false,
                    consequence: 'Incorrecto. Bicarbonato solo en situaciones especiales (hiperpotasemia, acidosis preexistente).'
                }
            ],
            correctOptionId: 'fm-1',
            feedback: {
                correct: 'Excelente. Conoces la secuencia ACLS: Epinefrina tras segunda descarga en FV/TV persistente.',
                incorrect: 'Epinefrina 1mg cada 3-5 minutos es el medicamento fundamental en algoritmo de paro.',
                explanation: 'Epinefrina aumenta presión de perfusión coronaria y cerebral, mejorando probabilidad de ROSC.'
            },
            criticalStep: true
        },
        {
            id: 'step-advanced-airway',
            stepNumber: 5,
            title: 'Vía Aérea Avanzada',
            description: 'Durante el RCP continuo, consideras la vía aérea. Actualmente ventilación con bolsa-mascarilla. ¿Cuál es tu estrategia?',
            options: [
                {
                    id: 'aa-1',
                    text: 'Intubación endotraqueal sin interrumpir compresiones, o considerar dispositivo supraglótico',
                    isCorrect: true,
                    consequence: 'Correcto. Vía aérea avanzada sin interrupciones significativas en RCP.'
                },
                {
                    id: 'aa-2',
                    text: 'Detener RCP completamente para intubar con visión óptima',
                    isCorrect: false,
                    consequence: 'Incorrecto. Nunca detener compresiones por más de 10 segundos para intubar.'
                },
                {
                    id: 'aa-3',
                    text: 'Continuar con bolsa-mascarilla, no arriesgar complicaciones',
                    isCorrect: false,
                    consequence: 'Subóptimo. Vía aérea avanzada mejora ventilación y permite RCP continuo sin pausas.'
                },
                {
                    id: 'aa-4',
                    text: 'Cricotiroidotomía inmediata',
                    isCorrect: false,
                    consequence: 'Incorrecto. No indicada a menos que haya obstrucción que impida otras técnicas.'
                }
            ],
            correctOptionId: 'aa-1',
            feedback: {
                correct: 'Perfecto. Vía aérea avanzada mejora ventilación y permite compresiones continuas sin pausas.',
                incorrect: 'Vía aérea avanzada en RCP debe colocarse sin interrupciones significativas en compresiones.',
                explanation: 'Tras colocar vía aérea avanzada, puedes dar compresiones continuas a 100-120/min sin pausas para ventilación.'
            }
        },
        {
            id: 'step-third-shock',
            stepNumber: 6,
            title: 'Tercera Descarga y Antiarrítmicos',
            description: 'Han pasado otros 2 minutos de RCP. Ritmo: FV persistente. Ya diste Epinefrina y segunda descarga. ¿Qué sigue?',
            options: [
                {
                    id: 'ts-1',
                    text: 'Tercera descarga 200J, luego Amiodarona 300mg IV en bolo',
                    isCorrect: true,
                    consequence: 'Correcto. Amiodarona se administra tras la tercera descarga en FV/TV refractaria.'
                },
                {
                    id: 'ts-2',
                    text: 'Tercera descarga 360J, aumentar energía progresivamente',
                    isCorrect: false,
                    consequence: 'Innecesario con desfibrilador bifásico. 200J es suficiente, agregar Amiodarona es clave.'
                },
                {
                    id: 'ts-3',
                    text: 'Lidocaína 1-1.5mg/kg en lugar de Amiodarona',
                    isCorrect: false,
                    consequence: 'Aceptable pero subóptimo. Amiodarona es superior como primera línea antiarrítmica en FV/TV.'
                },
                {
                    id: 'ts-4',
                    text: 'Magnesio 2g IV para estabilizar membrana',
                    isCorrect: false,
                    consequence: 'Incorrecto. Magnesio solo está indicado en Torsades de Pointes o hipomagnesemia conocida.'
                }
            ],
            correctOptionId: 'ts-1',
            feedback: {
                correct: 'Excelente. Has seguido correctamente el algoritmo ACLS para FV/TV refractaria.',
                incorrect: 'Amiodarona 300mg tras tercera descarga es el estándar ACLS para FV/TV persistente.',
                explanation: 'Amiodarona aumenta la probabilidad de desfibrilación exitosa y previene recurrencia de FV/TV.'
            },
            criticalStep: true
        },
        {
            id: 'step-reversible-causes',
            stepNumber: 7,
            title: 'Causas Reversibles - Las 5H y 5T',
            description: 'Durante el ciclo de RCP, el equipo debe considerar causas reversibles. Dada la historia de la paciente, ¿cuáles son las más probables?',
            options: [
                {
                    id: 'rc-1',
                    text: 'Hipoxia, Hipovolemia, H+ (acidosis), IAM (Coronarias-thrombosis)',
                    isCorrect: true,
                    consequence: 'Correcto. Paciente cardiópata con probable SCA agudo como causa del paro.'
                },
                {
                    id: 'rc-2',
                    text: 'Neumotórax a Tensión, Taponamiento cardíaco',
                    isCorrect: false,
                    consequence: 'Poco probable sin trauma. Aunque importantes, no son las causas más probables aquí.'
                },
                {
                    id: 'rc-3',
                    text: 'Toxinas (sobredosis medicamentosa)',
                    isCorrect: false,
                    consequence: 'Posible pero menos probable. No hay historia que sugiera intoxicación aguda.'
                },
                {
                    id: 'rc-4',
                    text: 'Hipotermia',
                    isCorrect: false,
                    consequence: 'Improbable. Paro ocurrió en ambiente hospitalario sin exposición al frío.'
                }
            ],
            correctOptionId: 'rc-1',
            feedback: {
                correct: 'Excelente análisis. Reconoces que probable IAM agudo es la causa en esta paciente.',
                incorrect: 'Considera la historia clínica: paciente con cardiopatía isquémica sugiere evento coronario agudo.',
                explanation: 'Pensar en las 6H-6T durante RCP permite identificar y tratar causas reversibles de paro.'
            }
        },
        {
            id: 'step-rhythm-change',
            stepNumber: 8,
            title: 'Cambio de Ritmo',
            description: 'Tras 2 minutos más de RCP, verificas el monitor: el ritmo cambió a AESP (Actividad Eléctrica Sin Pulso) - complejo QRS ancho a 40 lpm. ¿Qué haces?',
            options: [
                {
                    id: 'rch-1',
                    text: 'Continuar RCP, NO desfibrilar, continuar Epinefrina cada 3-5 min, buscar causas reversibles',
                    isCorrect: true,
                    consequence: 'Correcto. AESP es ritmo NO desfibrilable. Enfoque en RCP de calidad y causas reversibles.'
                },
                {
                    id: 'rch-2',
                    text: 'Administrar descarga porque el QRS es ancho',
                    isCorrect: false,
                    consequence: 'Incorrecto. AESP no se desfibila independientemente de la morfología del QRS.'
                },
                {
                    id: 'rch-3',
                    text: 'Administrar Atropina 1mg para aumentar frecuencia',
                    isCorrect: false,
                    consequence: 'Incorrecto. Atropina fue removida del algoritmo de paro en ACLS 2010.'
                },
                {
                    id: 'rch-4',
                    text: 'Marcapaso transcutáneo inmediato',
                    isCorrect: false,
                    consequence: 'Incorrecto. Marcapaso no ha demostrado beneficio en AESP durante paro.'
                }
            ],
            correctOptionId: 'rch-1',
            feedback: {
                correct: 'Perfecto. Reconoces AESP y aplicas el algoritmo correcto: RCP + Epinefrina + tratar causa.',
                incorrect: 'AESP no se desfibila. Requiere RCP continuo, vasopresores y tratamiento de la causa subyacente.',
                explanation: 'En AESP, el pronóstico depende de identificar y tratar rápidamente la causa reversible (6H-6T).'
            },
            criticalStep: true
        },
        {
            id: 'step-quality-cpr',
            stepNumber: 9,
            title: 'Calidad de RCP',
            description: 'Mientras continúa el RCP, verificas la calidad. ¿Qué parámetros son ideales para RCP de alta calidad?',
            options: [
                {
                    id: 'qc-1',
                    text: 'Frecuencia 100-120/min, profundidad 5-6cm, expansión completa, minimizar interrupciones <10seg',
                    isCorrect: true,
                    consequence: 'Perfecto. Conoces todos los componentes de RCP de alta calidad según ACLS.'
                },
                {
                    id: 'qc-2',
                    text: 'Frecuencia >140/min, profundidad máxima >7cm para mejor flujo',
                    isCorrect: false,
                    consequence: 'Incorrecto. Frecuencia >120/min y profundidad >6cm no mejoran resultado y pueden causar daño.'
                },
                {
                    id: 'qc-3',
                    text: 'Pausar cada minuto para verificar pulso y ritmo',
                    isCorrect: false,
                    consequence: 'Incorrecto. Interrupciones frecuentes disminuyen perfusión. Verificar cada 2 minutos.'
                },
                {
                    id: 'qc-4',
                    text: 'Mantener al mismo reanimador para consistencia',
                    isCorrect: false,
                    consequence: 'Incorrecto. Rotar reanimadores cada 2 minutos para prevenir fatiga y mantener calidad.'
                }
            ],
            correctOptionId: 'qc-1',
            feedback: {
                correct: 'Excelente. RCP de alta calidad es el factor más importante para la supervivencia.',
                incorrect: 'La calidad de RCP es crítica: frecuencia correcta, profundidad adecuada, expansión completa, mínimas pausas.',
                explanation: 'Incluso con medicamentos y desfibrilación, RCP de mala calidad reduce dramáticamente la supervivencia.'
            }
        },
        {
            id: 'step-rosc',
            stepNumber: 10,
            title: 'Retorno de Circulación Espontánea (ROSC)',
            description: 'Súbitamente, el monitor muestra ritmo sinusal a 85 lpm. Palpas pulso carotídeo fuerte. ¡ROSC! ¿Cuál es tu manejo inmediato?',
            options: [
                {
                    id: 'rosc-1',
                    text: 'Detener compresiones, optimizar ventilación/oxigenación (SatO2 92-98%), verificar PA, infusión de antiarrítmico, ECG 12 derivaciones',
                    isCorrect: true,
                    consequence: 'Perfecto. Manejo integral post-ROSC: soporte vital, monitoreo, prevención de re-paro.'
                },
                {
                    id: 'rosc-2',
                    text: 'Detener todo, observar si el ritmo se mantiene espontáneamente',
                    isCorrect: false,
                    consequence: 'Peligroso. Post-ROSC requiere soporte activo para mantener estabilidad y prevenir re-paro.'
                },
                {
                    id: 'rosc-3',
                    text: 'Administrar bolo de Lidocaína para prevenir nuevas arritmias',
                    isCorrect: false,
                    consequence: 'Incorrecto. Si diste Amiodarona durante paro, continuar con infusión. No agregar otro antiarrítmico.'
                },
                {
                    id: 'rosc-4',
                    text: 'Extubar al paciente para evaluar nivel de conciencia',
                    isCorrect: false,
                    consequence: 'Peligroso. Post-ROSC el paciente requiere soporte ventilatorio continuo inicialmente.'
                }
            ],
            correctOptionId: 'rosc-1',
            feedback: {
                correct: '¡Excelente! Comprendes el manejo crítico post-ROSC que determinará el resultado neurológico.',
                incorrect: 'Post-ROSC es una fase crítica que requiere optimización cuidadosa para prevenir re-paro y daño cerebral.',
                explanation: 'Los cuidados post-paro incluyen: oxigenación controlada, soporte hemodinámico, hipotermia terapéutica si indicada, y cateterismo si IAM.'
            },
            criticalStep: true
        },
        {
            id: 'step-post-rosc-care',
            stepNumber: 11,
            title: 'Cuidados Post-Reanimación',
            description: 'Paciente con ROSC estable. PA 110/65, SatO2 95%. ECG muestra elevación ST anterior. ¿Cuál es tu siguiente paso?',
            options: [
                {
                    id: 'prc-1',
                    text: 'Activar sala de hemodinamia para cateterismo cardíaco urgente, considerar hipotermia terapéutica, ingreso a UCI',
                    isCorrect: true,
                    consequence: 'Perfecto. IAM con ROSC requiere cateterismo emergente. Hipotermia mejora pronóstico neurológico.'
                },
                {
                    id: 'prc-2',
                    text: 'Administrar trombolítico (Alteplase) por STEMI',
                    isCorrect: false,
                    consequence: 'Incorrecto. Cateterismo es superior a trombólisis en paro cardíaco post-ROSC con STEMI.'
                },
                {
                    id: 'prc-3',
                    text: 'Trasladar a piso de cardiología para observación',
                    isCorrect: false,
                    consequence: 'Insuficiente. Paciente post-paro requiere UCI con monitoreo continuo y soporte avanzado.'
                },
                {
                    id: 'prc-4',
                    text: 'Esperar 24 horas para evaluar pronóstico neurológico antes de cateterismo',
                    isCorrect: false,
                    consequence: 'Incorrecto. Cateterismo no debe retrasarse. La revascularización precoz mejora supervivencia.'
                }
            ],
            correctOptionId: 'prc-1',
            feedback: {
                correct: '¡Excelente! Has completado todo el algoritmo ACLS y los cuidados post-reanimación correctamente.',
                incorrect: 'Post-ROSC con STEMI requiere cateterismo urgente, manejo térmico dirigido y cuidados intensivos.',
                explanation: 'La cadena de supervivencia no termina con ROSC. Los cuidados post-reanimación son cruciales para supervivencia y función neurológica.'
            },
            criticalStep: true
        }
    ],
    learningObjectives: [
        'Aplicar algoritmo ACLS para FV/TV sin pulso',
        'Reconocer indicaciones y timing de medicamentos en paro cardíaco',
        'Implementar estrategias de vía aérea avanzada sin interrumpir RCP',
        'Identificar causas reversibles de paro (6H-6T)',
        'Manejar transiciones de ritmo durante reanimación',
        'Comprender parámetros de RCP de alta calidad',
        'Ejecutar cuidados post-ROSC apropiados',
        'Reconocer indicaciones de cateterismo cardíaco emergente'
    ],
    difficulty: 'advanced',
    estimatedTime: '12-15 minutos'
};

