import {MarkerType} from "@xyflow/react";
import {Protocol} from "./AlgorithmsAndProtocols.types.ts";

// 6. Protocolo TRIAGE START (Simple Triage And Rapid Treatment)
export const triageStartProtocol: Protocol = {
    id: "triage-start",
    name: "Triage START",
    description: "Sistema de triage Simple Triage And Rapid Treatment para incidentes con múltiples víctimas (adultos)",
    category: "triage",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Inicio del Triage START</strong>
                        <br/>• Escena con múltiples víctimas
                        <br/>• Seguridad establecida
                        <br/>• Recursos activados
                    </>
                ),
            },
            position: {x: 250, y: 0},
        },
        {
            id: 'deambulantes',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Identificar deambulantes</strong>
                        <br/>• "Si puede caminar, diríjase a..."
                        <br/>• Pacientes que caminan = VERDE
                    </>
                ),
            },
            position: {x: 250, y: 120},
        },
        {
            id: 'verde',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>VERDE - Lesiones menores</strong>
                        <br/>• Tratamiento diferido
                        <br/>• Pueden esperar
                    </>
                ),
            },
            position: {x: 500, y: 120},
            style: {backgroundColor: '#dcfce7', borderColor: '#22c55e'}
        },
        {
            id: 'respiracion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>¿Respira?</strong>
                        <br/>• Evaluar respiración
                    </>
                ),
            },
            position: {x: 250, y: 270},
        },
        {
            id: 'abrir_via',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Abrir vía aérea</strong>
                        <br/>• Realizar maniobra apertura
                    </>
                ),
            },
            position: {x: 50, y: 380},
        },
        {
            id: 'respira_tras_apertura',
            type: 'default',
            data: {label: '¿Respira tras apertura?'},
            position: {x: 50, y: 500},
        },
        {
            id: 'negro',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>NEGRO - Fallecido/Expectante</strong>
                        <br/>• Sin signos vitales
                        <br/>• Recursos insuficientes
                    </>
                ),
            },
            position: {x: -150, y: 500},
            style: {backgroundColor: '#1f2937', borderColor: '#000', color: '#fff'}
        },
        {
            id: 'fr_check',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Frecuencia respiratoria</strong>
                        <br/>• ¿FR {'>'} 30/min?
                    </>
                ),
            },
            position: {x: 250, y: 420},
        },
        {
            id: 'rojo_fr',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>ROJO - Inmediato</strong>
                        <br/>• FR {'>'} 30/min
                        <br/>• Atención urgente
                    </>
                ),
            },
            position: {x: 450, y: 420},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'perfusion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Perfusión (llenado capilar)</strong>
                        <br/>• ¿Relleno capilar {'>'} 2 seg?
                        <br/>• ¿Pulso radial ausente?
                    </>
                ),
            },
            position: {x: 250, y: 570},
        },
        {
            id: 'rojo_perfusion',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>ROJO - Inmediato</strong>
                        <br/>• Mala perfusión
                        <br/>• Shock probable
                    </>
                ),
            },
            position: {x: 450, y: 570},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'mental',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Estado mental</strong>
                        <br/>• ¿Obedece órdenes simples?
                    </>
                ),
            },
            position: {x: 250, y: 720},
        },
        {
            id: 'rojo_mental',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>ROJO - Inmediato</strong>
                        <br/>• Alteración mental
                        <br/>• Requiere atención urgente
                    </>
                ),
            },
            position: {x: 450, y: 720},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'amarillo',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>AMARILLO - Urgente</strong>
                        <br/>• Lesiones significativas
                        <br/>• Puede esperar tratamiento
                    </>
                ),
            },
            position: {x: 250, y: 870},
            style: {backgroundColor: '#fef9c3', borderColor: '#eab308'}
        },
    ],
    edges: [
        {id: 'start-e0-1', source: 'inicio', target: 'deambulantes', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e1-verde', source: 'deambulantes', target: 'verde', label: 'Sí camina', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e1-2', source: 'deambulantes', target: 'respiracion', label: 'No camina', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e2-3', source: 'respiracion', target: 'abrir_via', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e3-4', source: 'abrir_via', target: 'respira_tras_apertura', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e4-negro', source: 'respira_tras_apertura', target: 'negro', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e4-5', source: 'respira_tras_apertura', target: 'rojo_fr', label: 'Sí', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e2-5', source: 'respiracion', target: 'fr_check', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e5-rojo', source: 'fr_check', target: 'rojo_fr', label: 'FR > 30', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e5-6', source: 'fr_check', target: 'perfusion', label: 'FR < 30', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e6-rojo', source: 'perfusion', target: 'rojo_perfusion', label: 'Anormal', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e6-7', source: 'perfusion', target: 'mental', label: 'Normal', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e7-rojo', source: 'mental', target: 'rojo_mental', label: 'No obedece', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'start-e7-amarillo', source: 'mental', target: 'amarillo', label: 'Sí obedece', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// 7. Protocolo TRIAGE JumpSTART (para niños)
export const triageJumpStartProtocol: Protocol = {
    id: "triage-jumpstart",
    name: "Triage JumpSTART",
    description: "Sistema de triage JumpSTART para incidentes con múltiples víctimas pediátricas",
    category: "triage",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>JumpSTART - Triage Pediátrico</strong>
                        <br/>• Para menores de 8 años
                        <br/>• Incidente con múltiples víctimas
                    </>
                ),
            },
            position: {x: 250, y: 0},
        },
        {
            id: 'deambula',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>¿Puede caminar?</strong>
                    </>
                ),
            },
            position: {x: 250, y: 120},
        },
        {
            id: 'verde',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>VERDE - Menor</strong>
                        <br/>• Lesiones menores
                        <br/>• Tratamiento diferido
                    </>
                ),
            },
            position: {x: 500, y: 120},
            style: {backgroundColor: '#dcfce7', borderColor: '#22c55e'}
        },
        {
            id: 'respiracion',
            type: 'default',
            data: {label: '¿Respira espontáneamente?'},
            position: {x: 250, y: 240},
        },
        {
            id: 'apertura_via',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Abrir vía aérea</strong>
                        <br/>• Posicionar adecuadamente
                    </>
                ),
            },
            position: {x: 50, y: 360},
        },
        {
            id: 'respira_post',
            type: 'default',
            data: {label: '¿Respira tras apertura?'},
            position: {x: 50, y: 480},
        },
        {
            id: 'negro',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>NEGRO - Fallecido</strong>
                        <br/>• Apnea persistente
                        <br/>• No hay pulso
                    </>
                ),
            },
            position: {x: -150, y: 480},
            style: {backgroundColor: '#1f2937', borderColor: '#000', color: '#fff'}
        },
        {
            id: 'fr_eval',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Frecuencia respiratoria</strong>
                        <br/>• ¿FR {'<'} 15 o {'>'} 45?
                    </>
                ),
            },
            position: {x: 250, y: 400},
        },
        {
            id: 'rojo_fr',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>ROJO - Inmediato</strong>
                        <br/>• FR anormal pediátrica
                        <br/>• Atención urgente
                    </>
                ),
            },
            position: {x: 500, y: 400},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'pulso_palpable',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>¿Pulso palpable?</strong>
                    </>
                ),
            },
            position: {x: 250, y: 550},
        },
        {
            id: 'rojo_pulso',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>ROJO - Inmediato</strong>
                        <br/>• Sin pulso palpable
                        <br/>• Shock severo
                    </>
                ),
            },
            position: {x: 500, y: 550},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'mental_avpu',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Estado mental AVPU</strong>
                        <br/>• ¿Responde solo al dolor o no responde?
                    </>
                ),
            },
            position: {x: 250, y: 700},
        },
        {
            id: 'rojo_mental',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>ROJO - Inmediato</strong>
                        <br/>• Alteración mental severa
                        <br/>• P o I en AVPU
                    </>
                ),
            },
            position: {x: 500, y: 700},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'amarillo',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>AMARILLO - Urgente</strong>
                        <br/>• Lesiones moderadas
                        <br/>• Puede esperar
                    </>
                ),
            },
            position: {x: 250, y: 850},
            style: {backgroundColor: '#fef9c3', borderColor: '#eab308'}
        },
    ],
    edges: [
        {id: 'jump-e0-1', source: 'inicio', target: 'deambula', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e1-verde', source: 'deambula', target: 'verde', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e1-2', source: 'deambula', target: 'respiracion', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e2-3', source: 'respiracion', target: 'apertura_via', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e3-4', source: 'apertura_via', target: 'respira_post', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e4-negro', source: 'respira_post', target: 'negro', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e4-rojo', source: 'respira_post', target: 'rojo_fr', label: 'Sí', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e2-5', source: 'respiracion', target: 'fr_eval', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e5-rojo', source: 'fr_eval', target: 'rojo_fr', label: 'Anormal', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e5-6', source: 'fr_eval', target: 'pulso_palpable', label: 'Normal', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e6-rojo', source: 'pulso_palpable', target: 'rojo_pulso', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e6-7', source: 'pulso_palpable', target: 'mental_avpu', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e7-rojo', source: 'mental_avpu', target: 'rojo_mental', label: 'P o I', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e7-amarillo', source: 'mental_avpu', target: 'amarillo', label: 'A o V', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// 8. Protocolo de Vía Aérea Difícil
export const viaAereaProtocol: Protocol = {
    id: "via-aerea-dificil",
    name: "Manejo de Vía Aérea Difícil",
    description: "Algoritmo para el manejo de vía aérea difícil en el ámbito prehospitalario",
    category: "advanced",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Paciente requiere vía aérea</strong>
                        <br/>• Evaluar anatomía
                        <br/>• Anticipar dificultades
                        <br/>• Preparar equipo
                    </>
                ),
            },
            position: {x: 250, y: 0},
        },
        {
            id: 'oxigenacion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Pre-oxigenación</strong>
                        <br/>• O2 al 100%
                        <br/>• Mascarilla con bolsa reservorio
                        <br/>• 3-5 minutos si es posible
                    </>
                ),
            },
            position: {x: 250, y: 130},
        },
        {
            id: 'basicas',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Maniobras básicas</strong>
                        <br/>• Elevación mandíbula
                        <br/>• Tracción mentón
                        <br/>• Cánula orofaríngea
                        <br/>• Aspiración si es necesario
                    </>
                ),
            },
            position: {x: 250, y: 260},
        },
        {
            id: 'efectiva',
            type: 'default',
            data: {label: '¿Ventilación efectiva?'},
            position: {x: 250, y: 390},
        },
        {
            id: 'mantener',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Mantener ventilación</strong>
                        <br/>• BVM efectiva
                        <br/>• Monitorizar continuamente
                        <br/>• Preparar para transporte
                    </>
                ),
            },
            position: {x: 500, y: 390},
            style: {backgroundColor: '#dcfce7', borderColor: '#22c55e'}
        },
        {
            id: 'dispositivos_avanzados',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Dispositivos supraglóticos</strong>
                        <br/>• Mascarilla laríngea
                        <br/>• Tubo laríngeo
                        <br/>• I-Gel
                    </>
                ),
            },
            position: {x: 250, y: 520},
        },
        {
            id: 'supraglotica_ok',
            type: 'default',
            data: {label: '¿Ventilación exitosa?'},
            position: {x: 250, y: 650},
        },
        {
            id: 'exito',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Vía aérea asegurada</strong>
                        <br/>• Confirmar posición
                        <br/>• Fijar dispositivo
                        <br/>• Capnografía si disponible
                    </>
                ),
            },
            position: {x: 500, y: 650},
            style: {backgroundColor: '#dcfce7', borderColor: '#22c55e'}
        },
        {
            id: 'cricotirotomia',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>VÍA AÉREA QUIRÚRGICA</strong>
                        <br/>• Cricotirotomía
                        <br/>• Solo personal entrenado
                        <br/>• Situación "no ventila/no intuba"
                    </>
                ),
            },
            position: {x: 250, y: 780},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'reevaluacion',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Reevaluación continua</strong>
                        <br/>• SpO2, ETCO2
                        <br/>• Auscultación
                        <br/>• Buscar ayuda avanzada
                    </>
                ),
            },
            position: {x: 250, y: 910},
        }
    ],
    edges: [
        {id: 'via-e0-1', source: 'inicio', target: 'oxigenacion', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'via-e1-2', source: 'oxigenacion', target: 'basicas', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'via-e2-3', source: 'basicas', target: 'efectiva', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'via-e3-ok', source: 'efectiva', target: 'mantener', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'via-e3-4', source: 'efectiva', target: 'dispositivos_avanzados', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'via-e4-5', source: 'dispositivos_avanzados', target: 'supraglotica_ok', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'via-e5-ok', source: 'supraglotica_ok', target: 'exito', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'via-e5-6', source: 'supraglotica_ok', target: 'cricotirotomia', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'via-e6-7', source: 'cricotirotomia', target: 'reevaluacion', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// 9. Protocolo de Shock
export const shockProtocol: Protocol = {
    id: "shock",
    name: "Manejo del Shock",
    description: "Identificación y tratamiento del shock en atención prehospitalaria",
    category: "medical",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Sospecha de shock</strong>
                        <br/>• Hipotensión
                        <br/>• Taquicardia
                        <br/>• Alteración mental
                        <br/>• Piel fría/húmeda
                    </>
                ),
            },
            position: {x: 250, y: 0},
        },
        {
            id: 'abcde',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Evaluación XABCDE</strong>
                        <br/>• Control hemorragia externa
                        <br/>• Vía aérea permeable
                        <br/>• O2 alto flujo
                        <br/>• Acceso vascular
                    </>
                ),
            },
            position: {x: 250, y: 150},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'tipo_shock',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Identificar tipo de shock</strong>
                        <br/>• Historia y contexto
                        <br/>• Signos y síntomas
                    </>
                ),
            },
            position: {x: 250, y: 300},
        },
        {
            id: 'hipovolemico',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Shock hipovolémico</strong>
                        <br/>• Control hemorragia
                        <br/>• Líquidos IV en bolo
                        <br/>• Posición Trendelenburg modificada
                        <br/>• Prevenir hipotermia
                    </>
                ),
            },
            position: {x: 50, y: 450},
            style: {backgroundColor: '#fef3c7', borderColor: '#f59e0b'}
        },
        {
            id: 'cardiogenico',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Shock cardiogénico</strong>
                        <br/>• Posición semifowler
                        <br/>• NO líquidos agresivos
                        <br/>• Monitoreo cardíaco
                        <br/>• Considerar inotrópicos (SVA)
                    </>
                ),
            },
            position: {x: 250, y: 450},
            style: {backgroundColor: '#fef3c7', borderColor: '#f59e0b'}
        },
        {
            id: 'distributivo',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Shock distributivo</strong>
                        <br/>• Anafilaxia: Epinefrina IM
                        <br/>• Séptico: Líquidos + antibióticos
                        <br/>• Neurogénico: Líquidos cautelosos
                    </>
                ),
            },
            position: {x: 450, y: 450},
            style: {backgroundColor: '#fef3c7', borderColor: '#f59e0b'}
        },
        {
            id: 'monitorizacion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Monitorización continua</strong>
                        <br/>• Signos vitales cada 5 min
                        <br/>• Nivel conciencia
                        <br/>• Perfusión periférica
                        <br/>• Diuresis si es posible
                    </>
                ),
            },
            position: {x: 250, y: 600},
        },
        {
            id: 'transporte',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Transporte prioritario</strong>
                        <br/>• Centro apropiado
                        <br/>• Notificación previa
                        <br/>• Continuar tratamiento
                        <br/>• Reevaluar constantemente
                    </>
                ),
            },
            position: {x: 250, y: 750},
            style: {backgroundColor: '#dbeafe', borderColor: '#3b82f6'}
        }
    ],
    edges: [
        {id: 'shock-e0-1', source: 'inicio', target: 'abcde', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'shock-e1-2', source: 'abcde', target: 'tipo_shock', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'shock-e2-3', source: 'tipo_shock', target: 'hipovolemico', label: 'Hipovolémico', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'shock-e2-4', source: 'tipo_shock', target: 'cardiogenico', label: 'Cardiogénico', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'shock-e2-5', source: 'tipo_shock', target: 'distributivo', label: 'Distributivo', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'shock-e3-6', source: 'hipovolemico', target: 'monitorizacion', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'shock-e4-6', source: 'cardiogenico', target: 'monitorizacion', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'shock-e5-6', source: 'distributivo', target: 'monitorizacion', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'shock-e6-7', source: 'monitorizacion', target: 'transporte', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// 10. Protocolo Síndrome Coronario Agudo
export const sindromeCoronarioProtocol: Protocol = {
    id: "sindrome-coronario",
    name: "Síndrome Coronario Agudo",
    description: "Evaluación y manejo del síndrome coronario agudo en atención prehospitalaria",
    category: "medical",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Dolor torácico</strong>
                        <br/>• Opresivo, irradiado
                        <br/>• Más de 15 minutos
                        <br/>• Diaforesis, náusea
                    </>
                ),
            },
            position: {x: 250, y: 0},
        },
        {
            id: 'evaluacion_inicial',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Evaluación rápida</strong>
                        <br/>• ABCDE
                        <br/>• Signos vitales completos
                        <br/>• Historia SAMPLE/OPQRST
                        <br/>• Buscar contraindicaciones
                    </>
                ),
            },
            position: {x: 250, y: 130},
        },
        {
            id: 'medidas_inmediatas',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Medidas inmediatas</strong>
                        <br/>• Oxígeno si SpO2 {'<'} 94%
                        <br/>• Reposo absoluto
                        <br/>• Monitorización cardíaca
                        <br/>• Acceso IV
                    </>
                ),
            },
            position: {x: 250, y: 260},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'farmacologia',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Tratamiento farmacológico</strong>
                        <br/>• AAS 160-325 mg (masticar)
                        <br/>• Nitroglicerina SL 0.4mg
                        <br/>• Morfina si dolor persiste
                        <br/>• Clopidogrel 300mg (según protocolo)
                    </>
                ),
            },
            position: {x: 250, y: 390},
        },
        {
            id: 'ecg',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>ECG 12 derivaciones</strong>
                        <br/>• Realizar en menos de 10 min
                        <br/>• Interpretar o transmitir
                        <br/>• Repetir si hay cambios
                    </>
                ),
            },
            position: {x: 250, y: 520},
            style: {backgroundColor: '#dbeafe', borderColor: '#3b82f6'}
        },
        {
            id: 'decision',
            type: 'default',
            data: {label: '¿Elevación del ST?'},
            position: {x: 250, y: 650},
        },
        {
            id: 'iamest',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>IAM con elevación del ST</strong>
                        <br/>• Activar código infarto
                        <br/>• Notificar hospital receptor
                        <br/>• Centro con hemodinamia
                        <br/>• Tiempo puerta-balón crítico
                    </>
                ),
            },
            position: {x: 50, y: 780},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'scasest',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>SCA sin elevación del ST</strong>
                        <br/>• Angina inestable o IMSEST
                        <br/>• Transporte a urgencias
                        <br/>• Seguimiento estrecho
                        <br/>• Continuar tratamiento
                    </>
                ),
            },
            position: {x: 450, y: 780},
            style: {backgroundColor: '#fef9c3', borderColor: '#eab308'}
        },
        {
            id: 'transporte',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Transporte rápido</strong>
                        <br/>• Monitoreo continuo
                        <br/>• Preparar para RCP
                        <br/>• Desfibrilador listo
                        <br/>• Reevaluación constante
                    </>
                ),
            },
            position: {x: 250, y: 930},
        }
    ],
    edges: [
        {id: 'sca-e0-1', source: 'inicio', target: 'evaluacion_inicial', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'sca-e1-2', source: 'evaluacion_inicial', target: 'medidas_inmediatas', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'sca-e2-3', source: 'medidas_inmediatas', target: 'farmacologia', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'sca-e3-4', source: 'farmacologia', target: 'ecg', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'sca-e4-5', source: 'ecg', target: 'decision', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'sca-e5-6', source: 'decision', target: 'iamest', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'sca-e5-7', source: 'decision', target: 'scasest', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'sca-e6-8', source: 'iamest', target: 'transporte', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'sca-e7-8', source: 'scasest', target: 'transporte', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// 11. Protocolo ACV/Stroke
export const acvProtocol: Protocol = {
    id: "acv-stroke",
    name: "ACV - Accidente Cerebrovascular",
    description: "Identificación y manejo del accidente cerebrovascular agudo",
    category: "medical",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Sospecha de ACV</strong>
                        <br/>• Síntomas neurológicos agudos
                        <br/>• Inicio súbito
                        <br/>• Déficit focal
                    </>
                ),
            },
            position: {x: 250, y: 0},
        },
        {
            id: 'abcde',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Evaluación ABCDE</strong>
                        <br/>• Proteger vía aérea
                        <br/>• Oxígeno si SpO2 {'<'} 94%
                        <br/>• Signos vitales
                        <br/>• Glucemia capilar
                    </>
                ),
            },
            position: {x: 250, y: 130},
        },
        {
            id: 'hora_inicio',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>¡TIEMPO CRÍTICO!</strong>
                        <br/>• Determinar hora de inicio
                        <br/>• Última vez visto normal
                        <br/>• Documentar precisamente
                    </>
                ),
            },
            position: {x: 250, y: 260},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'escala_cincinnati',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Escala de Cincinnati</strong>
                        <br/>• Asimetría facial
                        <br/>• Debilidad en brazos
                        <br/>• Alteración del habla
                        <br/>• 1 hallazgo = 72% prob. ACV
                    </>
                ),
            },
            position: {x: 250, y: 390},
            style: {backgroundColor: '#dbeafe', borderColor: '#3b82f6'}
        },
        {
            id: 'exclusiones',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Descartar imitadores</strong>
                        <br/>• Hipoglucemia (tratar)
                        <br/>• Convulsiones
                        <br/>• Migraña complicada
                        <br/>• Síncope
                    </>
                ),
            },
            position: {x: 250, y: 520},
        },
        {
            id: 'manejo',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Manejo específico</strong>
                        <br/>• Posición semifowler 30°
                        <br/>• Cabeza en línea media
                        <br/>• NO bajar PA bruscamente
                        <br/>• Nada por vía oral
                        <br/>• Acceso IV con SSN lento
                    </>
                ),
            },
            position: {x: 250, y: 650},
        },
        {
            id: 'codigo_cerebro',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Activar CÓDIGO CEREBRO</strong>
                        <br/>• Notificar hospital receptor
                        <br/>• Centro con tomografía 24h
                        <br/>• Neurólogo disponible
                        <br/>• Capacidad de trombolisis
                    </>
                ),
            },
            position: {x: 250, y: 780},
            style: {backgroundColor: '#fef9c3', borderColor: '#eab308'}
        },
        {
            id: 'transporte',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Transporte prioritario</strong>
                        <br/>• Ventana terapéutica: 4.5 horas
                        <br/>• Monitoreo continuo
                        <br/>• Reevaluar neurológico
                        <br/>• Tiempo puerta-aguja crítico
                    </>
                ),
            },
            position: {x: 250, y: 930},
        }
    ],
    edges: [
        {id: 'acv-e0-1', source: 'inicio', target: 'abcde', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'acv-e1-2', source: 'abcde', target: 'hora_inicio', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'acv-e2-3', source: 'hora_inicio', target: 'escala_cincinnati', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'acv-e3-4', source: 'escala_cincinnati', target: 'exclusiones', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'acv-e4-5', source: 'exclusiones', target: 'manejo', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'acv-e5-6', source: 'manejo', target: 'codigo_cerebro', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'acv-e6-7', source: 'codigo_cerebro', target: 'transporte', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

