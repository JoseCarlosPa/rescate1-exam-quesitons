import {Question} from "../../../question";


export const faqData = [
    {
        question: "¿Por qué es importante garantizar la seguridad del personal en el ámbito prehospitalario?",
        answer: "La seguridad del personal es esencial para asegurar que los paramédicos puedan brindar atención de calidad sin poner en riesgo su propia salud o bienestar. La protección adecuada permite una respuesta más eficiente ante emergencias."
    },
    {
        question: "¿Qué equipo de protección personal (EPP) es necesario durante una intervención?",
        answer: "El equipo de protección personal incluye guantes, mascarillas, gafas protectoras, batas y, en algunos casos, protección respiratoria. Estos elementos ayudan a prevenir la exposición a patógenos y otros peligros en el entorno."
    },
    {
        question: "¿Qué hacer si el entorno de intervención parece peligroso para el personal?",
        answer: "Se debe realizar una evaluación de riesgos antes de intervenir. Si el entorno es peligroso (por ejemplo, por materiales tóxicos, violencia o tráfico), se debe esperar la intervención de las autoridades competentes antes de proceder."
    },
    {
        question: "¿Cómo prevenir la fatiga en el personal de emergencias?",
        answer: "La prevención de fatiga incluye la rotación adecuada de turnos, pausas frecuentes para descanso, y asegurar que el personal tenga acceso a apoyo emocional y psicológico después de incidentes estresantes."
    },
    {
        question: "¿Qué medidas tomar si se sospecha de un estrés postraumático en el personal?",
        answer: "Es fundamental ofrecer apoyo psicológico a través de programas específicos y permitir que el personal hable sobre sus experiencias. El estrés postraumático puede afectar el desempeño y bienestar, por lo que debe ser tratado adecuadamente."
    },
    {
        question: "¿Qué acciones tomar en caso de un accidente durante una intervención?",
        answer: "En caso de un accidente, lo primero es garantizar la seguridad del equipo y pacientes. Se debe seguir el protocolo de seguridad, reportar el incidente y proporcionar primeros auxilios al personal afectado. Además, se debe documentar todo lo ocurrido."
    },
    {
        question: "¿Qué protocolos existen para manejar situaciones de violencia hacia el personal de emergencias?",
        answer: "Cuando se enfrenta a situaciones de violencia, es importante que el personal mantenga la calma y se retire de la escena si es necesario. La cooperación con fuerzas de seguridad es crucial para garantizar un entorno seguro."
    },
    {
        question: "¿Cómo se asegura el bienestar físico y mental del personal en el lugar de trabajo?",
        answer: "El bienestar físico y mental se promueve mediante un ambiente laboral seguro, el uso adecuado del EPP, y la implementación de descansos regulares. Además, se debe contar con programas de apoyo psicológico para el manejo del estrés."
    },
    {
        question: "¿Es importante seguir los protocolos de seguridad durante la atención en accidentes de tráfico?",
        answer: "Sí, siempre es importante seguir los protocolos de seguridad en accidentes de tráfico. Esto incluye usar cinturones de seguridad en las ambulancias, mantener la distancia adecuada de los vehículos involucrados y usar luces de advertencia para prevenir accidentes secundarios."
    },
    {
        question: "¿Cuáles son las recomendaciones para evitar lesiones en el manejo de equipos y pacientes?",
        answer: "Es esencial utilizar técnicas de levantamiento adecuadas, tener cuidado con el equipo pesado y garantizar que el personal esté capacitado para el manejo seguro de pacientes y equipos médicos. También es importante hacer uso de equipo de protección cuando sea necesario."
    }
];
export const securityQuestions: Question[] = [
    {
        question: "¿Cuál es la principal prioridad para un paramédico al llegar a la escena de un incidente?",
        options: [
            { letter: "a", text: "Atender al paciente lo más rápido posible" },
            { letter: "b", text: "Garantizar la seguridad del personal" },
            { letter: "c", text: "Evaluar la condición del paciente" },
            { letter: "d", text: "Comenzar con el transporte al hospital" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En una escena peligrosa, ¿qué medida debe tomar el paramédico primero?",
        options: [
            { letter: "a", text: "Iniciar el tratamiento médico" },
            { letter: "b", text: "Realizar una evaluación secundaria del paciente" },
            { letter: "c", text: "Establecer una zona segura" },
            { letter: "d", text: "Contactar con el hospital para recibir instrucciones" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Si el entorno en una escena es peligroso (por ejemplo, fuego, materiales peligrosos), ¿qué es lo primero que debe hacer un paramédico?",
        options: [
            { letter: "a", text: "Evaluar al paciente lo antes posible" },
            { letter: "b", text: "Evaluar la seguridad del entorno" },
            { letter: "c", text: "Llamar a refuerzos" },
            { letter: "d", text: "Iniciar el tratamiento de urgencia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué equipo de protección personal (EPP) es obligatorio para la atención de un paciente que podría estar infectado por un agente biológico peligroso?",
        options: [
            { letter: "a", text: "Guantes, mascarilla y gafas de protección" },
            { letter: "b", text: "Guantes, gafas de protección y traje completo de aislamiento" },
            { letter: "c", text: "Solo guantes y mascarilla" },
            { letter: "d", text: "Ninguno, ya que el paramédico siempre puede tratar a cualquier paciente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué acción debe tomar un paramédico si, durante un incidente, la seguridad de la escena ya no puede ser garantizada?",
        options: [
            { letter: "a", text: "Permanecer en la escena de todos modos y continuar con el tratamiento" },
            { letter: "b", text: "Abandonar la escena y regresar al vehículo de emergencias" },
            { letter: "c", text: "Solicitar el respaldo de las autoridades y esperar instrucciones" },
            { letter: "d", text: "Evacuar inmediatamente a los pacientes y al personal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Si un paramédico recibe una lesión menor mientras maneja un paciente, ¿qué es lo más apropiado que debe hacer?",
        options: [
            { letter: "a", text: "Ignorar la lesión y seguir trabajando" },
            { letter: "b", text: "Informar inmediatamente a su supervisor y continuar trabajando" },
            { letter: "c", text: "Atender su lesión después de finalizar el traslado" },
            { letter: "d", text: "Detener el tratamiento de inmediato y atender su lesión" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En una escena con riesgo de violencia, ¿qué debe hacer un paramédico para garantizar su seguridad?",
        options: [
            { letter: "a", text: "Asegurarse de que todos los pacientes sean tratados antes de abandonar la escena" },
            { letter: "b", text: "Contar con un equipo de seguridad o policía antes de realizar cualquier intervención" },
            { letter: "c", text: "Evaluar al paciente rápidamente y salir de la escena" },
            { letter: "d", text: "Realizar un tratamiento rápido sin considerar el riesgo de violencia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En caso de que un paramédico se vea expuesto a una sustancia tóxica, ¿cuál es el paso inicial más importante?",
        options: [
            { letter: "a", text: "Tratar de neutralizar la sustancia" },
            { letter: "b", text: "Evacuar la zona y pedir ayuda" },
            { letter: "c", text: "Informar a su supervisor y continuar trabajando" },
            { letter: "d", text: "Esperar a que se disipen los vapores antes de actuar" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué medida de seguridad es esencial para evitar la exposición a enfermedades infecciosas durante la atención prehospitalaria?",
        options: [
            { letter: "a", text: "Desinfectar solo las manos después del contacto con cada paciente" },
            { letter: "b", text: "Usar guantes y cambiarse después de cada contacto con un paciente" },
            { letter: "c", text: "Limpiar todo el equipo médico antes de cada intervención" },
            { letter: "d", text: "No usar guantes, ya que es innecesario si el paciente no tiene síntomas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En una escena donde hay riesgo de caída de objetos, ¿qué debe hacer el paramédico para protegerse?",
        options: [
            { letter: "a", text: "Retirarse rápidamente de la escena sin completar su evaluación" },
            { letter: "b", text: "Colocarse un casco de seguridad adecuado" },
            { letter: "c", text: "Esperar a que los objetos caigan antes de continuar con la atención" },
            { letter: "d", text: "Colocar al paciente en una zona segura y continuar trabajando sin protección" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En el contexto de seguridad, ¿qué significa la 'zona caliente' en un incidente de emergencia?",
        options: [
            { letter: "a", text: "El área donde se brinda atención médica a los pacientes" },
            { letter: "b", text: "El área donde se encuentra el peligro inmediato" },
            { letter: "c", text: "El área donde el paramédico puede descansar" },
            { letter: "d", text: "El área que debe estar libre de personas para poder actuar" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué medida debe tomar un paramédico si hay riesgo de explosión en la escena?",
        options: [
            { letter: "a", text: "Tratar de eliminar el riesgo de explosión" },
            { letter: "b", text: "Alejarse inmediatamente y evacuar la zona" },
            { letter: "c", text: "Continuar trabajando sin interrupciones" },
            { letter: "d", text: "Esperar a que las autoridades resuelvan el incidente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cómo debe un paramédico manejar una escena con un derrame de sustancias químicas peligrosas?",
        options: [
            { letter: "a", text: "Limpiar el derrame lo más rápido posible" },
            { letter: "b", text: "Asegurar la zona y evitar el contacto con la sustancia" },
            { letter: "c", text: "Esperar a que se evapore antes de actuar" },
            { letter: "d", text: "Contactar con el hospital para recibir instrucciones" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Si un paramédico debe tratar a un paciente con heridas abiertas en un ambiente con riesgo biológico, ¿qué equipo es esencial?",
        options: [
            { letter: "a", text: "Guantes, máscara y gafas protectoras" },
            { letter: "b", text: "Solo guantes y una mascarilla" },
            { letter: "c", text: "Mascarilla y bata" },
            { letter: "d", text: "Traje de aislamiento completo" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Cómo debe un paramédico actuar si se encuentra con una escena con posibles armas de fuego?",
        options: [
            { letter: "a", text: "Abordar rápidamente al paciente y esperar refuerzos" },
            { letter: "b", text: "Realizar una evaluación de seguridad antes de acercarse al paciente" },
            { letter: "c", text: "Asegurarse de que el paciente reciba atención inmediatamente" },
            { letter: "d", text: "Evitar la escena y esperar a que la policía controle la situación" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un incidente donde hay riesgo de radiación, ¿qué medida debe tomar un paramédico primero?",
        options: [
            { letter: "a", text: "Evaluar la salud del paciente antes de todo" },
            { letter: "b", text: "Asegurarse de que el equipo de protección esté disponible" },
            { letter: "c", text: "Evacuar la zona inmediatamente" },
            { letter: "d", text: "Realizar el tratamiento sin interrupción" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Si un paramédico se encuentra con un paciente que tiene síntomas de una enfermedad infecciosa grave, ¿qué debe hacer?",
        options: [
            { letter: "a", text: "Tratamiento normal, ya que los síntomas no afectan el manejo" },
            { letter: "b", text: "Usar equipo de protección adecuado y limitar el contacto cercano" },
            { letter: "c", text: "Asegurarse de que el paciente sea transportado rápidamente" },
            { letter: "d", text: "Esperar a que el paciente reciba tratamiento especializado antes de actuar" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Si un paramédico tiene que trasladar a un paciente con una posible fractura de columna, ¿cuál es la medida más importante a seguir?",
        options: [
            { letter: "a", text: "Mover al paciente lo más rápido posible para evitar complicaciones" },
            { letter: "b", text: "Minimizar el movimiento del paciente y estabilizar su cuello y columna" },
            { letter: "c", text: "Colocar al paciente en posición lateral" },
            { letter: "d", text: "Utilizar técnicas de reanimación avanzadas inmediatamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Cuando se enfrenta a una situación de riesgo de violencia, ¿qué debe hacer un paramédico?",
        options: [
            { letter: "a", text: "Continuar trabajando sin considerar el riesgo" },
            { letter: "b", text: "Observar cuidadosamente el entorno antes de intervenir" },
            { letter: "c", text: "Acercarse al paciente sin esperar la intervención de seguridad" },
            { letter: "d", text: "Actuar inmediatamente para proteger al paciente sin importar el riesgo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el propósito de la señalización adecuada en una escena de emergencia?",
        options: [
            { letter: "a", text: "Asegurar la evacuación rápida de los pacientes" },
            { letter: "b", text: "Indicar áreas seguras y peligrosas para los equipos de emergencia" },
            { letter: "c", text: "Asegurarse de que todos los paramédicos tengan acceso al paciente" },
            { letter: "d", text: "Facilitar el transporte de los pacientes" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cómo debe un paramédico manejar una escena en condiciones meteorológicas extremas (lluvia, nieve)?",
        options: [
            { letter: "a", text: "Colocar el equipo en una zona segura y esperar a que mejoren las condiciones" },
            { letter: "b", text: "Asegurar el transporte del paciente con rapidez, sin importar el clima" },
            { letter: "c", text: "Evaluar cuidadosamente el entorno y proceder con precaución" },
            { letter: "d", text: "Ignorar el clima y continuar con el tratamiento" },
        ],
        correctAnswer: "c",
    },
];