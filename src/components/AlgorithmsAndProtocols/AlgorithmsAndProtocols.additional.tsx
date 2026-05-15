import {MarkerType} from "@xyflow/react";
import {Protocol} from "./AlgorithmsAndProtocols.types.ts";

// 6. Protocolo TRIAGE START (Simple Triage And Rapid Treatment)
export const triageStartProtocol: Protocol = {
    id: "triage-start",
    name: "Triage START",
    description: "Sistema de triage Simple Triage And Rapid Treatment para incidentes con múltiples víctimas (adultos)",
    category: "triage",
    source: "START Method – Hoag Hospital / Newport Beach Fire Dept. (1983)",
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
    description: "Sistema de triage JumpSTART para incidentes con múltiples víctimas pediátricas (pacientes que aparentan ser niños)",
    category: "triage",
    source: "JumpSTART Pediatric MCI Triage – Lou Romig, MD (1995)",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>JumpSTART - Triage Pediátrico</strong>
                        <br/>• Paciente que aparenta ser menor
                        <br/>• Incidente con múltiples víctimas
                    </>
                ),
            },
            position: {x: 300, y: 0},
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
            position: {x: 300, y: 130},
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
            position: {x: 600, y: 130},
            style: {backgroundColor: '#dcfce7', borderColor: '#22c55e'}
        },
        {
            id: 'respiracion',
            type: 'default',
            data: {label: '¿Respira espontáneamente?'},
            position: {x: 300, y: 280},
        },
        {
            id: 'apertura_via',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Abrir vía aérea</strong>
                        <br/>• Posicionar cabeza/cuello
                        <br/>• Tracción mandibular
                    </>
                ),
            },
            position: {x: 50, y: 420},
        },
        {
            id: 'respira_post_apertura',
            type: 'default',
            data: {label: '¿Respira tras apertura?'},
            position: {x: 50, y: 560},
        },
        {
            id: 'pulso_apnea',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>¿Pulso palpable?</strong>
                        <br/>• Pulso radial o braquial
                    </>
                ),
            },
            position: {x: 50, y: 700},
        },
        {
            id: 'ventilaciones_rescate',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>5 ventilaciones de rescate</strong>
                        <br/>• Volumen suficiente para elevar tórax
                        <br/>• Boca-mascarilla o BVM
                    </>
                ),
            },
            position: {x: 50, y: 840},
            style: {backgroundColor: '#fef9c3', borderColor: '#eab308'}
        },
        {
            id: 'negro',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>NEGRO - Fallecido/Expectante</strong>
                        <br/>• Apnea persistente sin pulso
                        <br/>• No responde a rescate
                    </>
                ),
            },
            position: {x: -200, y: 770},
            style: {backgroundColor: '#1f2937', borderColor: '#000', color: '#fff'}
        },
        {
            id: 'fr_eval',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Frecuencia respiratoria pediátrica</strong>
                        <br/>• ¿FR {'<'} 15 o {'>'} 45/min?
                    </>
                ),
            },
            position: {x: 300, y: 420},
        },
        {
            id: 'rojo_fr',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>ROJO - Inmediato</strong>
                        <br/>• FR anormal / apnea resuelta
                        <br/>• Atención urgente
                    </>
                ),
            },
            position: {x: 600, y: 600},
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
            position: {x: 300, y: 570},
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
            position: {x: 600, y: 740},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'mental_avpu',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Estado mental AVPU</strong>
                        <br/>• ¿Responde solo al dolor (P)
                        <br/>&nbsp;&nbsp;o no responde (U)?
                    </>
                ),
            },
            position: {x: 300, y: 720},
        },
        {
            id: 'rojo_mental',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>ROJO - Inmediato</strong>
                        <br/>• Alteración mental severa
                        <br/>• P o U en AVPU
                    </>
                ),
            },
            position: {x: 600, y: 880},
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
                        <br/>• A o V en AVPU - puede esperar
                    </>
                ),
            },
            position: {x: 300, y: 880},
            style: {backgroundColor: '#fef9c3', borderColor: '#eab308'}
        },
    ],
    edges: [
        {id: 'jump-e0-1', source: 'inicio', target: 'deambula', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e1-verde', source: 'deambula', target: 'verde', label: 'Sí camina', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e1-2', source: 'deambula', target: 'respiracion', label: 'No camina', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e2-fr', source: 'respiracion', target: 'fr_eval', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-e2-apertura', source: 'respiracion', target: 'apertura_via', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-apertura-post', source: 'apertura_via', target: 'respira_post_apertura', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-post-rojo', source: 'respira_post_apertura', target: 'rojo_fr', label: 'Sí respira', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-post-pulso', source: 'respira_post_apertura', target: 'pulso_apnea', label: 'No respira', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-pulso-negro', source: 'pulso_apnea', target: 'negro', label: 'Sin pulso', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-pulso-rescate', source: 'pulso_apnea', target: 'ventilaciones_rescate', label: 'Con pulso', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-rescate-rojo', source: 'ventilaciones_rescate', target: 'rojo_fr', label: 'Respira', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-rescate-negro', source: 'ventilaciones_rescate', target: 'negro', label: 'No respira', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-fr-rojo', source: 'fr_eval', target: 'rojo_fr', label: 'FR anormal', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-fr-pulso', source: 'fr_eval', target: 'pulso_palpable', label: 'FR normal', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-palpable-rojo', source: 'pulso_palpable', target: 'rojo_pulso', label: 'Sin pulso', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-palpable-avpu', source: 'pulso_palpable', target: 'mental_avpu', label: 'Con pulso', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-avpu-rojo', source: 'mental_avpu', target: 'rojo_mental', label: 'P o U', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'jump-avpu-amarillo', source: 'mental_avpu', target: 'amarillo', label: 'A o V', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// 8. Protocolo de Vía Aérea Difícil
export const viaAereaProtocol: Protocol = {
    id: "via-aerea-dificil",
    name: "Manejo de Vía Aérea Difícil",
    description: "Algoritmo para el manejo de vía aérea difícil en el ámbito prehospitalario",
    category: "advanced",
    source: "DAS Guidelines 2015 / NAEMSP 2023 / PHTLS 10ª ed.",
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
    source: "PHTLS 10ª edición (2021) / ATLS 10ª edición",
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
                        <br/>• Control hemorragia (torniquete/apósito)
                        <br/>• Decúbito supino (NO Trendelenburg*)
                        <br/>• Líquidos IV: cristaloides tibios
                        <br/>• En trauma penetrante: hipotensión
                        <br/>&nbsp;&nbsp;permisiva (TAS 80-90 mmHg)
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
    source: "AHA/ACC 2021 / ESC Guidelines 2023",
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
                        <br/>&nbsp;&nbsp;⚠️ Contraindicada: PA {'<'} 90,
                        <br/>&nbsp;&nbsp;IVD, uso de PDE-5 (sildenafil)
                        <br/>• Opioides titulados SOLO si dolor
                        <br/>&nbsp;&nbsp;refractario (⚠️ evitar morfina
                        <br/>&nbsp;&nbsp;de rutina en SCA: AHA/ESC 2023)
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
    source: "AHA/ASA Stroke Guidelines 2019 / ESC 2023",
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
                        <strong>Escala de Cincinnati / BE-FAST</strong>
                        <br/>• B: Balance (pérdida de equilibrio)
                        <br/>• E: Eyes (visión doble o borrosa)
                        <br/>• F: Face (asimetría facial)
                        <br/>• A: Arms (debilidad en brazos)
                        <br/>• S: Speech (alteración del habla)
                        <br/>• T: Time (hora de inicio precisa)
                        <br/>≥1 hallazgo = alta sospecha de ACV
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
                        <br/>• tPA i.v.: ventana 3-4.5 horas
                        <br/>• Trombectomía mecánica: hasta 16-24h
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

// ─────────────────────────────────────────────────────────────────────────────
// 12. Protocolo OVACE (Obstrucción de Vía Aérea por Cuerpo Extraño)
// ─────────────────────────────────────────────────────────────────────────────
export const ovaceProtocol: Protocol = {
    id: "ovace",
    name: "OVACE - Obstrucción de Vía Aérea",
    description: "Manejo de obstrucción de vía aérea por cuerpo extraño en adulto, niño y lactante",
    category: "basic",
    source: "AHA BLS Guidelines 2020 / ERC Guidelines 2021",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Sospecha de OVACE</strong>
                        <br/>• Signo universal (manos al cuello)
                        <br/>• No puede hablar / toser / respirar
                        <br/>• Cianosis, agitación o silencio súbito
                    </>
                ),
            },
            position: {x: 300, y: 0},
        },
        {
            id: 'severidad',
            type: 'default',
            data: {label: '¿Tos efectiva?\n(puede toser fuerte, hablar o respirar)'},
            position: {x: 300, y: 140},
        },
        {
            id: 'leve',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Obstrucción LEVE</strong>
                        <br/>• Animar a toser activamente
                        <br/>• NO interferir
                        <br/>• Monitorizar estrechamente
                        <br/>• Si empeora → tratar como grave
                    </>
                ),
            },
            position: {x: 620, y: 140},
            style: {backgroundColor: '#dcfce7', borderColor: '#22c55e'}
        },
        {
            id: 'grave_consciente',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Obstrucción GRAVE — Consciente</strong>
                        <br/>• Activar SEM inmediatamente
                        <br/>• Inclinar paciente hacia adelante
                    </>
                ),
            },
            position: {x: 300, y: 300},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'golpes_espalda',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>5 golpes interescapulares</strong>
                        <br/>• Talón de la mano
                        <br/>• Entre las escápulas
                        <br/>• Paciente inclinado hacia adelante
                    </>
                ),
            },
            position: {x: 300, y: 460},
        },
        {
            id: 'compresiones',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>5 compresiones abdominales</strong>
                        <br/>• Maniobra de Heimlich
                        <br/>• Justo encima del ombligo
                        <br/>• Hacia arriba y adentro con fuerza
                        <br/>• ⚠️ Embarazada / obeso: compresiones torácicas
                        <br/>• ⚠️ Lactante ({'<'}1 año): 5 palmadas espalda
                        <br/>&nbsp;&nbsp;+ 5 compresiones torácicas (NO Heimlich)
                    </>
                ),
            },
            position: {x: 300, y: 610},
        },
        {
            id: 'decision_expulsion',
            type: 'default',
            data: {label: '¿Objeto expulsado?\n¿Puede hablar / respirar?'},
            position: {x: 300, y: 800},
        },
        {
            id: 'exito',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Objeto expulsado ✓</strong>
                        <br/>• Evaluar posibles lesiones
                        <br/>• Monitorizar
                        <br/>• Considerar traslado a urgencias
                    </>
                ),
            },
            position: {x: 620, y: 800},
            style: {backgroundColor: '#dcfce7', borderColor: '#22c55e'}
        },
        {
            id: 'decision_consciencia',
            type: 'default',
            data: {label: '¿Sigue consciente?'},
            position: {x: 300, y: 960},
        },
        {
            id: 'pcr_rcp',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Paciente INCONSCIENTE → RCP</strong>
                        <br/>• Colocar en decúbito supino
                        <br/>• 30 compresiones : 2 ventilaciones
                        <br/>• <strong>ANTES de ventilar:</strong> inspección
                        <br/>&nbsp;&nbsp;oral → retirar objeto si VISIBLE
                        <br/>• ❌ NO hacer barrido digital a ciegas
                        <br/>• DEA en cuanto esté disponible
                    </>
                ),
            },
            position: {x: 300, y: 1110},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'rcp_resultado',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Continuar RCP hasta:</strong>
                        <br/>• Objeto expulsado y respira
                        <br/>• SVA disponible
                        <br/>• Signos de vida
                    </>
                ),
            },
            position: {x: 300, y: 1290},
        }
    ],
    edges: [
        {id: 'ovace-e0-1', source: 'inicio', target: 'severidad', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ovace-e1-leve', source: 'severidad', target: 'leve', label: 'Sí, tos efectiva', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ovace-e1-grave', source: 'severidad', target: 'grave_consciente', label: 'No, tos inefectiva', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ovace-e2-3', source: 'grave_consciente', target: 'golpes_espalda', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ovace-e3-4', source: 'golpes_espalda', target: 'compresiones', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ovace-e4-5', source: 'compresiones', target: 'decision_expulsion', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ovace-e5-exito', source: 'decision_expulsion', target: 'exito', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ovace-e5-6', source: 'decision_expulsion', target: 'decision_consciencia', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {
            id: 'ovace-e6-loop',
            source: 'decision_consciencia',
            target: 'golpes_espalda',
            label: 'Sí, consciente',
            type: 'smoothstep',
            animated: true,
            style: {strokeDasharray: '5,5'},
            markerEnd: {type: MarkerType.ArrowClosed}
        },
        {id: 'ovace-e6-rcp', source: 'decision_consciencia', target: 'pcr_rcp', label: 'No, inconsciente', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ovace-e7-8', source: 'pcr_rcp', target: 'rcp_resultado', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// ─────────────────────────────────────────────────────────────────────────────
// 13. Protocolo de Anafilaxia
// ─────────────────────────────────────────────────────────────────────────────
export const anafilaxiaProtocol: Protocol = {
    id: "anafilaxia",
    name: "Anafilaxia",
    description: "Reconocimiento y manejo de la reacción anafiláctica grave en atención prehospitalaria",
    category: "medical",
    source: "AAAAI/ACAAI Practice Parameter 2020 / ERC Anaphylaxis 2021",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Sospecha de Anafilaxia</strong>
                        <br/>• Inicio agudo (minutos–2h post-exposición)
                        <br/>• Exposición probable a alérgeno
                        <br/>• (alimento, medicamento, picadura, látex)
                    </>
                ),
            },
            position: {x: 300, y: 0},
        },
        {
            id: 'criterios',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Criterios diagnósticos (≥1 sistema)</strong>
                        <br/>• Piel/mucosas: urticaria, angioedema, eritema
                        <br/>• Respiratorio: broncoespasmo, estridor, disnea
                        <br/>• Cardiovascular: hipotensión, síncope, taquicardia
                        <br/>• GI: náusea, vómito, dolor abdominal intenso
                    </>
                ),
            },
            position: {x: 300, y: 140},
        },
        {
            id: 'epinefrina_1',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>⚡ EPINEFRINA — Tratamiento PRIMARIO</strong>
                        <br/>• 1:1000 (1mg/mL) IM anterolateral del muslo
                        <br/>• Adulto: 0.3–0.5 mg IM
                        <br/>• Niño: 0.01 mg/kg IM (máx. 0.5 mg)
                        <br/>• Repetir cada 5–15 min si no mejora
                        <br/>• ❌ NO retrasar por dudas diagnósticas
                    </>
                ),
            },
            position: {x: 300, y: 300},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'posicion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Posición y medidas generales</strong>
                        <br/>• Supino + piernas elevadas (si hipotensión)
                        <br/>• Semifowler (si disnea predominante)
                        <br/>• Lateral seguridad (vómito / inconsciente)
                        <br/>• ❌ NO incorporar abruptamente
                        <br/>• Retirar alérgeno si es posible
                        <br/>• O₂ alto flujo 10–15 L/min (NRM)
                    </>
                ),
            },
            position: {x: 300, y: 490},
        },
        {
            id: 'acceso_iv',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Acceso vascular y volumen</strong>
                        <br/>• 2 vías IV calibre grueso
                        <br/>• SF / Ringer lactato 500–1 000 mL en bolo
                        <br/>• Repetir según respuesta hemodinámica
                        <br/>• Monitorización cardíaca + pulsioximetría
                    </>
                ),
            },
            position: {x: 300, y: 650},
            style: {backgroundColor: '#dbeafe', borderColor: '#3b82f6'}
        },
        {
            id: 'segunda_linea',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Tratamiento adjunto (segunda línea)</strong>
                        <br/>• H1: difenhidramina 25–50 mg IM/IV
                        <br/>• Corticoide: metilprednisolona 1–2 mg/kg IV
                        <br/>&nbsp;&nbsp;(previene bifásica, efecto NO inmediato)
                        <br/>• Broncoespasmo: salbutamol 2.5 mg neb.
                        <br/>• Betabloqueantes: glucagón 1–5 mg IV
                    </>
                ),
            },
            position: {x: 300, y: 820},
        },
        {
            id: 'respuesta',
            type: 'default',
            data: {label: '¿Responde al tratamiento?\n(SpO₂ sube, PA mejora, síntomas ceden)'},
            position: {x: 300, y: 1010},
        },
        {
            id: 'sin_respuesta',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Sin respuesta adecuada</strong>
                        <br/>• Repetir epinefrina IM
                        <br/>• Si sin respuesta a IM: Epi IV
                        <br/>&nbsp;&nbsp;(SVA: 0.1 mg 1:10 000 lento)
                        <br/>• Vasopresores si shock refractario
                        <br/>• Proteger vía aérea (riesgo angioedema)
                    </>
                ),
            },
            position: {x: 0, y: 1170},
            style: {backgroundColor: '#fef3c7', borderColor: '#f59e0b'}
        },
        {
            id: 'transporte',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Transporte prioritario — SIEMPRE</strong>
                        <br/>• Aunque el paciente mejore completamente
                        <br/>• Riesgo de reacción bifásica (4–12 h)
                        <br/>• Observación hospitalaria mínima 4–6 h
                        <br/>• Prescripción autoinyector de Epi al alta
                    </>
                ),
            },
            position: {x: 300, y: 1170},
            style: {backgroundColor: '#f0fdf4', borderColor: '#22c55e'}
        },
    ],
    edges: [
        {id: 'ana-e0-1', source: 'inicio', target: 'criterios', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ana-e1-2', source: 'criterios', target: 'epinefrina_1', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ana-e2-3', source: 'epinefrina_1', target: 'posicion', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ana-e3-4', source: 'posicion', target: 'acceso_iv', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ana-e4-5', source: 'acceso_iv', target: 'segunda_linea', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ana-e5-6', source: 'segunda_linea', target: 'respuesta', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ana-e6-ok', source: 'respuesta', target: 'transporte', label: 'Sí mejora', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'ana-e6-no', source: 'respuesta', target: 'sin_respuesta', label: 'No mejora', markerEnd: {type: MarkerType.ArrowClosed}},
        {
            id: 'ana-loop',
            source: 'sin_respuesta',
            target: 'respuesta',
            type: 'smoothstep',
            label: 'Re-evaluar',
            animated: true,
            style: {strokeDasharray: '5,5'},
            markerEnd: {type: MarkerType.ArrowClosed}
        },
        {id: 'ana-sinresp-transport', source: 'sin_respuesta', target: 'transporte', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// ─────────────────────────────────────────────────────────────────────────────
// 14. Protocolo Crisis Convulsiva
// ─────────────────────────────────────────────────────────────────────────────
export const crisisConvulsivaProtocol: Protocol = {
    id: "crisis-convulsiva",
    name: "Crisis Convulsiva",
    description: "Manejo prehospitalario de la crisis convulsiva aguda y el estatus epiléptico",
    category: "medical",
    source: "AAN Guideline 2016 / ERC 2021 / Neurocritical Care Society 2023",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Crisis convulsiva activa</strong>
                        <br/>• Movimientos tónico-clónicos
                        <br/>• Pérdida de consciencia
                        <br/>• Mirada fija / automatismos
                    </>
                ),
            },
            position: {x: 300, y: 0},
        },
        {
            id: 'seguridad',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Proteger al paciente</strong>
                        <br/>• Apartar objetos peligrosos
                        <br/>• ❌ NO inmovilizar / NO sujetar
                        <br/>• ❌ NO introducir nada en la boca
                        <br/>• Proteger la cabeza
                        <br/>• Activar SEM
                    </>
                ),
            },
            position: {x: 300, y: 140},
        },
        {
            id: 'cronometrar',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Cronometrar la crisis</strong>
                        <br/>• Anotar hora exacta de inicio
                        <br/>• Observar tipo (focal vs. generalizada)
                        <br/>• ¿{'>'} 5 min o 2ª crisis sin recuperación?
                    </>
                ),
            },
            position: {x: 300, y: 300},
        },
        {
            id: 'duracion_decision',
            type: 'default',
            data: {label: '¿Duración > 5 min o\nestatus epiléptico?'},
            position: {x: 300, y: 450},
        },
        {
            id: 'benzos',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Benzodiacepinas (primera línea)</strong>
                        <br/>• Midazolam 10 mg IM/bucal (adulto)
                        <br/>&nbsp;&nbsp;Pediátrico: 0.2 mg/kg (máx 10 mg)
                        <br/>• Diazepam 10 mg rectal / IV
                        <br/>• Lorazepam 4 mg IV (si acceso disponible)
                        <br/>• Repetir 1 vez si persiste a los 5 min
                    </>
                ),
            },
            position: {x: 50, y: 610},
            style: {backgroundColor: '#fef3c7', borderColor: '#f59e0b'}
        },
        {
            id: 'monitoreo',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Monitoreo durante la crisis</strong>
                        <br/>• Vía aérea: posición lateral si posible
                        <br/>• O₂ NRM 15 L/min
                        <br/>• Glucemia capilar
                        <br/>• Acceso IV si aplica
                        <br/>• Parámetros vitales continuos
                    </>
                ),
            },
            position: {x: 550, y: 610},
        },
        {
            id: 'post_ictal',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Evaluación post-ictal</strong>
                        <br/>• Posición lateral de seguridad
                        <br/>• AVDI / Glasgow
                        <br/>• Examen neurológico focal
                        <br/>• Buscar causa: glucemia, trauma,
                        <br/>&nbsp;&nbsp;fiebre, tóxicos, embarazo
                    </>
                ),
            },
            position: {x: 300, y: 790},
        },
        {
            id: 'glucemia_decision',
            type: 'default',
            data: {label: '¿Glucemia < 70 mg/dL?'},
            position: {x: 300, y: 950},
        },
        {
            id: 'tratar_hipoglucemia',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Tratar hipoglucemia</strong>
                        <br/>• Consciente: 15 g glucosa oral
                        <br/>• Inconsciente: dextrosa 50% 25–50 mL IV
                        <br/>&nbsp;&nbsp;o glucagón 1 mg IM
                    </>
                ),
            },
            position: {x: 50, y: 1100},
            style: {backgroundColor: '#dbeafe', borderColor: '#3b82f6'}
        },
        {
            id: 'decision_traslado',
            type: 'default',
            data: {label: '¿Requiere traslado?\n(primera crisis, prolongada, estatus,\nno retorna al basal, embarazo, trauma)'},
            position: {x: 300, y: 1100},
        },
        {
            id: 'observacion',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Alta con instrucciones</strong>
                        <br/>• Crisis conocida + retorna a basal
                        <br/>• Tratamiento AE establecido
                        <br/>• Seguimiento con neurólogo obligatorio
                    </>
                ),
            },
            position: {x: 50, y: 1270},
            style: {backgroundColor: '#f0fdf4', borderColor: '#86efac'}
        },
        {
            id: 'transporte',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Traslado prioritario</strong>
                        <br/>• Primera crisis, crisis prolongada,
                        <br/>&nbsp;&nbsp;estatus, no retorna al basal,
                        <br/>&nbsp;&nbsp;embarazo, trauma, fiebre alta
                        <br/>• Proteger vía aérea
                        <br/>• Segunda línea AE en SVA (levetiracetam)
                    </>
                ),
            },
            position: {x: 550, y: 1270},
            style: {backgroundColor: '#fee2e2', borderColor: '#f87171'}
        },
    ],
    edges: [
        {id: 'conv-e0-1', source: 'inicio', target: 'seguridad', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-e1-2', source: 'seguridad', target: 'cronometrar', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-e2-3', source: 'cronometrar', target: 'duracion_decision', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-e3-benzo', source: 'duracion_decision', target: 'benzos', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-e3-mon', source: 'duracion_decision', target: 'monitoreo', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-benzo-mon', source: 'benzos', target: 'monitoreo', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-mon-post', source: 'monitoreo', target: 'post_ictal', label: 'Tras ceder la crisis', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-post-gluc', source: 'post_ictal', target: 'glucemia_decision', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-gluc-trat', source: 'glucemia_decision', target: 'tratar_hipoglucemia', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-gluc-traslado', source: 'glucemia_decision', target: 'decision_traslado', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-trat-traslado', source: 'tratar_hipoglucemia', target: 'decision_traslado', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-traslado-obs', source: 'decision_traslado', target: 'observacion', label: 'No urgente', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'conv-traslado-trans', source: 'decision_traslado', target: 'transporte', label: 'Sí urgente', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// ─────────────────────────────────────────────────────────────────────────────
// 15. Protocolo Hipoglucemia
// ─────────────────────────────────────────────────────────────────────────────
export const hipoglucemiaProtocol: Protocol = {
    id: "hipoglucemia",
    name: "Hipoglucemia",
    description: "Evaluación y manejo de la hipoglucemia en atención prehospitalaria — BLS y SVA",
    category: "medical",
    source: "ADA Standards of Care 2024 / NAEMSP 2023",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Sospecha de hipoglucemia</strong>
                        <br/>• Diaforesis, temblor, palpitaciones
                        <br/>• Confusión, agresividad, coma
                        <br/>• Paciente diabético conocido
                        <br/>• Historia de no comer / insulina extra
                    </>
                ),
            },
            position: {x: 300, y: 0},
        },
        {
            id: 'medicion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Medición glucemia capilar</strong>
                        <br/>• Glucómetro o tira reactiva
                        <br/>• Documentar valor y síntomas
                        <br/>• Sin glucómetro: tratar sospecha grave
                    </>
                ),
            },
            position: {x: 300, y: 140},
        },
        {
            id: 'confirmacion',
            type: 'default',
            data: {label: '¿Glucemia < 70 mg/dL\no sintomático sin valor disponible?'},
            position: {x: 300, y: 290},
        },
        {
            id: 'descartar',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Sin hipoglucemia confirmada</strong>
                        <br/>• Evaluar otras causas del AMS
                        <br/>• (ACV, TCE, intoxicación, sepsis)
                        <br/>• Continuar evaluación ABCDE
                    </>
                ),
            },
            position: {x: 620, y: 290},
            style: {backgroundColor: '#f1f5f9', borderColor: '#94a3b8'}
        },
        {
            id: 'nivel_conciencia',
            type: 'default',
            data: {label: '¿Consciente y deglución segura?'},
            position: {x: 300, y: 440},
        },
        {
            id: 'oral',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Hipoglucemia leve/moderada — Oral</strong>
                        <br/>• 15–20 g de glucosa de acción rápida:
                        <br/>• Jugo de naranja 150 mL
                        <br/>• 3–4 tabletas de glucosa
                        <br/>• Agua con 3 cdas. de azúcar
                        <br/>• Esperar 15 min y remedir
                    </>
                ),
            },
            position: {x: 550, y: 590},
            style: {backgroundColor: '#f0fdf4', borderColor: '#86efac'}
        },
        {
            id: 'parenteral',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Hipoglucemia grave — Parenteral</strong>
                        <br/>• IV: Dextrosa 10–50% (0.5–1 g/kg)
                        <br/>&nbsp;&nbsp;Adulto: D50% 25–50 mL IV lento
                        <br/>&nbsp;&nbsp;Pediátrico: D10% 2–5 mL/kg IV
                        <br/>• Sin acceso IV: Glucagón 1 mg IM/SC
                        <br/>• Posición lateral si inconsciente
                    </>
                ),
            },
            position: {x: 50, y: 590},
            style: {backgroundColor: '#fef3c7', borderColor: '#f59e0b'}
        },
        {
            id: 'reevaluar_oral',
            type: 'default',
            data: {label: '¿Glucemia > 70 mg/dL\ny asintomático a los 15 min?'},
            position: {x: 550, y: 780},
        },
        {
            id: 'reevaluar_iv',
            type: 'default',
            data: {label: '¿Glucemia > 70 mg/dL\ny responde?'},
            position: {x: 50, y: 780},
        },
        {
            id: 'colacion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Colación sólida + buscar causa</strong>
                        <br/>• Carbohidrato complejo + proteína
                        <br/>• (pan, galletas, leche)
                        <br/>• Ajuste de medicación con médico
                    </>
                ),
            },
            position: {x: 300, y: 960},
        },
        {
            id: 'decision_traslado',
            type: 'default',
            data: {label: '¿Requiere traslado?\n(1ª hipoglucemia grave, no responde,\nhistoria desconocida, riesgo recurrencia)'},
            position: {x: 300, y: 1110},
        },
        {
            id: 'traslado',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Traslado con monitoreo</strong>
                        <br/>• Glucemia cada 5–10 min
                        <br/>• Vía IV permeable
                        <br/>• Riesgo de recurrencia
                    </>
                ),
            },
            position: {x: 550, y: 1280},
            style: {backgroundColor: '#fee2e2', borderColor: '#f87171'}
        },
        {
            id: 'alta',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Alta con instrucciones</strong>
                        <br/>• Notificar médico de cabecera
                        <br/>• Ajustar medicación
                        <br/>• Dieta y automonitoreo glucémico
                    </>
                ),
            },
            position: {x: 50, y: 1280},
            style: {backgroundColor: '#f0fdf4', borderColor: '#86efac'}
        },
    ],
    edges: [
        {id: 'hipo-e0-1', source: 'inicio', target: 'medicion', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-e1-2', source: 'medicion', target: 'confirmacion', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-e2-desc', source: 'confirmacion', target: 'descartar', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-e2-3', source: 'confirmacion', target: 'nivel_conciencia', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-e3-oral', source: 'nivel_conciencia', target: 'oral', label: 'Consciente', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-e3-par', source: 'nivel_conciencia', target: 'parenteral', label: 'Inconsciente / no deglute', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-oral-reeval', source: 'oral', target: 'reevaluar_oral', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-par-reeval', source: 'parenteral', target: 'reevaluar_iv', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-reeval-oral-ok', source: 'reevaluar_oral', target: 'colacion', label: 'Sí', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {
            id: 'hipo-reeval-oral-no',
            source: 'reevaluar_oral',
            target: 'parenteral',
            label: 'No, persiste',
            type: 'smoothstep',
            animated: true,
            style: {strokeDasharray: '5,5'},
            markerEnd: {type: MarkerType.ArrowClosed}
        },
        {id: 'hipo-reeval-iv-ok', source: 'reevaluar_iv', target: 'colacion', label: 'Sí', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-reeval-iv-no', source: 'reevaluar_iv', target: 'decision_traslado', label: 'No / inseguro', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-colacion-traslado', source: 'colacion', target: 'decision_traslado', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-traslado-si', source: 'decision_traslado', target: 'traslado', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'hipo-traslado-no', source: 'decision_traslado', target: 'alta', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// ─────────────────────────────────────────────────────────────────────────────
// 16. Protocolo TCE (Traumatismo Craneoencefálico)
// ─────────────────────────────────────────────────────────────────────────────
export const tceProtocol: Protocol = {
    id: "tce",
    name: "TCE - Traumatismo Craneoencefálico",
    description: "Evaluación y manejo del traumatismo craneoencefálico en atención prehospitalaria",
    category: "trauma",
    source: "Brain Trauma Foundation 2024 / PHTLS 10ª ed. / NAEMSP 2023",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Escena y mecanismo</strong>
                        <br/>• MOI de alta energía
                        <br/>• Trauma directo o aceleración-desaceleración
                        <br/>• Alteración del nivel de consciencia
                        <br/>• Activar recursos apropiados
                    </>
                ),
            },
            position: {x: 300, y: 0},
        },
        {
            id: 'xabcde',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Evaluación primaria XABCDE</strong>
                        <br/>• X: Control hemorragia exanguinante
                        <br/>• A: Vía aérea + estabilización cervical (SMR)
                        <br/>• B: Respiración / oxigenación (SpO₂ ≥ 95%)
                        <br/>• C: Circulación (TAS ≥ 90 mmHg)
                        <br/>• D: Estado neurológico (GCS + pupilas)
                        <br/>• E: Exposición
                    </>
                ),
            },
            position: {x: 300, y: 150},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'glasgow',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Escala de Glasgow (GCS)</strong>
                        <br/>• Ocular: 1–4 pts
                        <br/>• Verbal: 1–5 pts
                        <br/>• Motor: 1–6 pts&nbsp;&nbsp;Total: 3–15
                        <br/>• Pupilas: tamaño, simetría, reactividad
                        <br/>• ⚠️ Deterioro ≥ 2 pts = urgente
                    </>
                ),
            },
            position: {x: 300, y: 310},
        },
        {
            id: 'clasificacion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Clasificación por GCS</strong>
                        <br/>• Leve: 13–15
                        <br/>• Moderado: 9–12
                        <br/>• Grave: ≤ 8 → vía aérea avanzada
                    </>
                ),
            },
            position: {x: 300, y: 460},
        },
        {
            id: 'enemigos',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>⚠️ Enemigos del cerebro lesionado</strong>
                        <br/>• HIPOTENSIÓN: TAS {'<'} 90 mmHg
                        <br/>&nbsp;&nbsp;→ Meta TAS ≥ 110 si GCS ≤ 8
                        <br/>• HIPOXIA: SpO₂ {'<'} 90%
                        <br/>&nbsp;&nbsp;→ Meta SpO₂ ≥ 95%
                        <br/>• HIPERCAPNIA: ETCO₂ {'>'} 45 mmHg
                        <br/>• HIPERTERMIA {'>'} 37.5 °C
                    </>
                ),
            },
            position: {x: 300, y: 610},
            style: {backgroundColor: '#fef3c7', borderColor: '#f59e0b'}
        },
        {
            id: 'via_aerea',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Manejo de vía aérea</strong>
                        <br/>• GCS ≤ 8 o deterioro progresivo:
                        <br/>&nbsp;&nbsp;→ Vía aérea avanzada (SRI en SVA)
                        <br/>• GCS {'>'} 8: O₂ NRM 15 L/min
                        <br/>• Ventilación: 10–12/min (adulto)
                        <br/>&nbsp;&nbsp;Meta ETCO₂: 35–40 mmHg
                        <br/>• ❌ Evitar hiperventilación profiláctica
                    </>
                ),
            },
            position: {x: 300, y: 780},
        },
        {
            id: 'herniacion_decision',
            type: 'default',
            data: {label: '¿Signos de herniación?\n(Postura de descerebraci​ón, pupila dilatada\nfija unilateral, Triada de Cushing)'},
            position: {x: 300, y: 960},
        },
        {
            id: 'osmoterapia',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>SVA — Medidas de rescate</strong>
                        <br/>• Hiperventilación de rescate FR 20/min
                        <br/>&nbsp;&nbsp;(transitorio, hasta SVA definitivo)
                        <br/>• Sol. salina hipertónica 3%: 250 mL IV
                        <br/>&nbsp;&nbsp;o Manitol 0.5–1 g/kg (sin hipotensión)
                        <br/>• Cabeza en línea media, elevar 30°
                        <br/>• Controlar fiebre y agitación
                    </>
                ),
            },
            position: {x: 50, y: 1130},
            style: {backgroundColor: '#fef3c7', borderColor: '#f59e0b'}
        },
        {
            id: 'transporte',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Transporte INMEDIATO</strong>
                        <br/>• Centro con neurocirugía disponible
                        <br/>• Notificación pre-arribo
                        <br/>• Reevaluar GCS y pupilas c/ 5 min
                        <br/>• Línea IV permeable
                        <br/>• Documentar todo (GCS seriado)
                    </>
                ),
            },
            position: {x: 300, y: 1130},
            style: {backgroundColor: '#f0fdf4', borderColor: '#22c55e'}
        },
    ],
    edges: [
        {id: 'tce-e0-1', source: 'inicio', target: 'xabcde', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'tce-e1-2', source: 'xabcde', target: 'glasgow', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'tce-e2-3', source: 'glasgow', target: 'clasificacion', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'tce-e3-4', source: 'clasificacion', target: 'enemigos', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'tce-e4-5', source: 'enemigos', target: 'via_aerea', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'tce-e5-6', source: 'via_aerea', target: 'herniacion_decision', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'tce-e6-osmo', source: 'herniacion_decision', target: 'osmoterapia', label: 'Sí, hay signos', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'tce-e6-trans', source: 'herniacion_decision', target: 'transporte', label: 'No signos', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'tce-osmo-trans', source: 'osmoterapia', target: 'transporte', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

// ─────────────────────────────────────────────────────────────────────────────
// 17. Protocolo Parto de Emergencia
// ─────────────────────────────────────────────────────────────────────────────
export const partoEmergenciaProtocol: Protocol = {
    id: "parto-emergencia",
    name: "Parto de Emergencia",
    description: "Manejo del parto prehospitalario inminente y cuidado inmediato del neonato",
    category: "obstetric",
    source: "AMLS 3ª ed. / ACOG Practice Bulletin 2023 / NRP 8ª ed. (AAP)",
    nodes: [
        {
            id: 'inicio',
            type: 'input',
            data: {
                label: (
                    <>
                        <strong>Evaluación inicial de la gestante</strong>
                        <br/>• Semanas de gestación
                        <br/>• Frecuencia / duración contracciones
                        <br/>• ¿Ruptura de membranas?
                        <br/>• ¿Urgencia de pujar / presión rectal?
                        <br/>• Antecedentes obstétricos (multípara)
                    </>
                ),
            },
            position: {x: 300, y: 0},
        },
        {
            id: 'inminente',
            type: 'default',
            data: {label: '¿Parto inminente?\n(coronamiento visible, urgencia de pujar,\nmultípara con contracciones < 2 min)'},
            position: {x: 300, y: 160},
        },
        {
            id: 'traslado_hospital',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Parto NO inminente → Traslado</strong>
                        <br/>• Posición lateral izquierda
                        <br/>• Vía IV periférica
                        <br/>• Monitoreo materno y fetal
                        <br/>• Notificar maternidad
                    </>
                ),
            },
            position: {x: 650, y: 160},
            style: {backgroundColor: '#dbeafe', borderColor: '#3b82f6'}
        },
        {
            id: 'preparacion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Preparar parto extrahospitalario</strong>
                        <br/>• EPP completo (guantes + bata + lentes)
                        <br/>• Kit de parto estéril
                        <br/>• Ambiente cálido, luz adecuada
                        <br/>• Posición: semisentada o decúbito supino
                        <br/>• Notificar al hospital receptor
                    </>
                ),
            },
            position: {x: 300, y: 340},
        },
        {
            id: 'expulsivo',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Manejo del expulsivo</strong>
                        <br/>• Guiar descenso de la cabeza suavemente
                        <br/>• Presión perineal suave en coronamiento
                        <br/>• ❌ NO jalar la cabeza
                        <br/>• Verificar circular de cordón:
                        <br/>&nbsp;&nbsp;• Laxa: pasar sobre la cabeza
                        <br/>&nbsp;&nbsp;• Apretada: pinzar, cortar y continuar
                    </>
                ),
            },
            position: {x: 300, y: 510},
        },
        {
            id: 'nacimiento',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Nacimiento del bebé</strong>
                        <br/>• Limpiar boca/nariz (solo si fluido visible)
                        <br/>• Rotar cabeza hacia el hombro anterior
                        <br/>• Liberar hombro anterior → posterior → cuerpo
                        <br/>• Registrar HORA exacta de nacimiento
                    </>
                ),
            },
            position: {x: 300, y: 690},
        },
        {
            id: 'cuidado_neonato',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Cuidado inmediato del neonato</strong>
                        <br/>• Secar y estimular (frotar espalda / planta)
                        <br/>• Posicionar: leve decúbito supino
                        <br/>• Aspirar SOLO si hay obstrucción visible
                        <br/>• Pinzar y cortar cordón:
                        <br/>&nbsp;&nbsp;Esperar 1–3 min si bebé vigoroso
                        <br/>• Mantener calor — contacto piel a piel
                    </>
                ),
            },
            position: {x: 300, y: 870},
        },
        {
            id: 'apgar',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>APGAR al 1 y 5 minutos</strong>
                        <br/>• A: Apariencia (color)
                        <br/>• P: Pulso (FC)
                        <br/>• G: Gesticulación (reflejos)
                        <br/>• A: Actividad (tono)
                        <br/>• R: Respiración
                        <br/>• 7–10: Normal | 4–6: Apoyo | 0–3: Resucitación
                    </>
                ),
            },
            position: {x: 300, y: 1060},
            style: {backgroundColor: '#dbeafe', borderColor: '#3b82f6'}
        },
        {
            id: 'apgar_decision',
            type: 'default',
            data: {label: '¿APGAR ≥ 7?\n¿Llanto / respiración espontánea?\n¿FC ≥ 100 lpm?'},
            position: {x: 300, y: 1240},
        },
        {
            id: 'reanimacion',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Reanimación neonatal (NRP)</strong>
                        <br/>• Estimulación, posición, despeje VA
                        <br/>• VPP (bolsa-mascarilla): 40–60/min
                        <br/>&nbsp;&nbsp;si FC {'<'} 100 lpm o en apnea
                        <br/>• Compresiones torácicas si FC {'<'} 60 lpm
                        <br/>&nbsp;&nbsp;(relación 3:1 compresiones:ventilaciones)
                        <br/>• Adrenalina IV/IO si FC {'<'} 60 (SVA)
                    </>
                ),
            },
            position: {x: 0, y: 1410},
            style: {backgroundColor: '#fee2e2', borderColor: '#ef4444'}
        },
        {
            id: 'alumbramiento',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Alumbramiento (expulsión placenta)</strong>
                        <br/>• Esperar gestión activa o hasta 30 min
                        <br/>• ❌ NO jalar del cordón umbilical
                        <br/>• Guardar placenta para inspección
                        <br/>• Vigilar sangrado {'>'} 500 mL (HPP)
                        <br/>• Masaje uterino si útero flácido
                    </>
                ),
            },
            position: {x: 600, y: 1410},
        },
        {
            id: 'complicaciones',
            type: 'default',
            data: {
                label: (
                    <>
                        <strong>Vigilar complicaciones</strong>
                        <br/>• HPP: masaje uterino + oxitocina 10 UI IM
                        <br/>• Distocia de hombros: McRoberts +
                        <br/>&nbsp;&nbsp;presión suprapúbica
                        <br/>• Prolapso de cordón: posición rodilla-pecho,
                        <br/>&nbsp;&nbsp;elevar presentación manualmente
                        <br/>• Presentación podálica: traslado urgente
                    </>
                ),
            },
            position: {x: 300, y: 1600},
            style: {backgroundColor: '#fef3c7', borderColor: '#f59e0b'}
        },
        {
            id: 'transporte',
            type: 'output',
            data: {
                label: (
                    <>
                        <strong>Traslado madre y neonato</strong>
                        <br/>• Madre: IV permeable, O₂ si precisa
                        <br/>• Neonato: abrigado, piel a piel
                        <br/>• Monitoreo continuo de ambos
                        <br/>• Documentar (hora, APGAR, medicaciones)
                        <br/>• Notificar maternidad con anticipación
                    </>
                ),
            },
            position: {x: 300, y: 1790},
            style: {backgroundColor: '#f0fdf4', borderColor: '#22c55e'}
        },
    ],
    edges: [
        {id: 'parto-e0-1', source: 'inicio', target: 'inminente', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-e1-hosp', source: 'inminente', target: 'traslado_hospital', label: 'No', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-e1-prep', source: 'inminente', target: 'preparacion', label: 'Sí', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-e2-3', source: 'preparacion', target: 'expulsivo', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-e3-4', source: 'expulsivo', target: 'nacimiento', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-e4-5', source: 'nacimiento', target: 'cuidado_neonato', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-e5-6', source: 'cuidado_neonato', target: 'apgar', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-e6-7', source: 'apgar', target: 'apgar_decision', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-e7-rean', source: 'apgar_decision', target: 'reanimacion', label: 'APGAR < 7 / FC < 100', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-e7-alum', source: 'apgar_decision', target: 'alumbramiento', label: 'Vigoroso ≥ 7', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-rean-alum', source: 'reanimacion', target: 'alumbramiento', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-alum-comp', source: 'alumbramiento', target: 'complicaciones', type: 'smoothstep', markerEnd: {type: MarkerType.ArrowClosed}},
        {id: 'parto-comp-trans', source: 'complicaciones', target: 'transporte', markerEnd: {type: MarkerType.ArrowClosed}},
    ]
};

