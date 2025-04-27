import {Question} from "../../../question";

export const generalExamQuestions: Question[] = [
    {
        question: "Un paciente adulto consciente y orientado que rechaza el tratamiento después de que le hayas explicado los riesgos y beneficios está ejerciendo su derecho a:",
        options: [
            { letter: "a", text: "Consentimiento implícito" },
            { letter: "b", text: "Negligencia" },
            { letter: "c", text: "Autonomía" },
            { letter: "d", text: "Abandono" },
        ],
        correctAnswer: "c", // [cite: 1, 224]
    },
    {
        question: "¿Qué tipo de consentimiento se asume en un paciente inconsciente que necesita atención de emergencia inmediata?",
        options: [
            { letter: "a", text: "Consentimiento informado" }, // [cite: 2]
            { letter: "b", text: "Consentimiento expreso" }, // [cite: 2]
            { letter: "c", text: "Consentimiento implícito" }, // [cite: 2]
            { letter: "d", text: "Consentimiento de menores" }, // [cite: 2]
        ],
        correctAnswer: "c", // [cite: 224]
    },
    {
        question: "Para probar negligencia, el paciente (demandante) debe demostrar TODO EXCEPTO:",
        options: [
            { letter: "a", text: "Deber de actuar" },
            { letter: "b", text: "Incumplimiento del deber" },
            { letter: "c", text: "Intención maliciosa" },
            { letter: "d", text: "Daño resultante directo (causalidad próxima" },
        ],
        correctAnswer: "c", // [cite: 2, 224]
    },
    {
        question: "Si inicias la atención a un paciente y luego te retiras sin asegurar la continuación de la atención por alguien de igual o mayor nivel, podrías ser acusado de:",
        options: [
            { letter: "a", text: "Agresión" },
            { letter: "b", text: "Difamación" },
            { letter: "c", text: "Abandono" },
            { letter: "d", text: "Secuestro" },
        ],
        correctAnswer: "c", // [cite: 2, 224]
    },
    {
        question: "La protección de la información médica de un paciente se conoce como:",
        options: [
            { letter: "a", text: "Consentimiento" },
            { letter: "b", text: "Confidencialidad" },
            { letter: "c", text: "Directiva anticipada" },
            { letter: "d", text: "Deber de actuar" },
        ],
        correctAnswer: "b", // [cite: 2, 224]
    },
    {
        question: "¿En cuál de las siguientes situaciones es MÁS probable que estés obligado a reportar a las autoridades?",
        options: [
            { letter: "a", text: "Un paciente con dolor de pecho." }, // [cite: 3]
            { letter: "b", text: "Sospecha de abuso infantil." }, // [cite: 4]
            { letter: "c", text: "Un paciente que se niega al transporte." }, // [cite: 4]
            { letter: "d", text: "Un paciente con una fractura cerrada." }, // [cite: 4]
        ],
        correctAnswer: "b", // [cite: 224]
    },
    {
        question: "Un documento legal que especifica los deseos de un paciente respecto a tratamientos médicos si se vuelve incapaz de tomar decisiones se llama:",
        options: [
            { letter: "a", text: "Reporte de atención prehospitalaria" },
            { letter: "b", text: "Orden de No Reanimar (ONR)" },
            { letter: "c", text: "Directiva anticipada (o Voluntad Anticipada)" },
            { letter: "d", text: "Póliza de seguro" },
        ],
        correctAnswer: "c", // [cite: 5, 224]
    },
    {
        question: "¿Cuál de los siguientes principios éticos implica \"hacer el bien\" y actuar siempre en el mejor interés del paciente?",
        options: [
            { letter: "a", text: "Autonomía" }, // [cite: 6]
            { letter: "b", text: "No maleficencia" }, // [cite: 6]
            { letter: "c", text: "Justicia" }, // [cite: 6]
            { letter: "d", text: "Beneficencia" }, // [cite: 6]
        ],
        correctAnswer: "d", // [cite: 224]
    },
    {
        question: "¿Cuál es el primer paso y el más importante al tratar con un paciente adulto competente que rechaza la atención?",
        options: [
            { letter: "a", text: "Llamar a la policía inmediatamente." }, // [cite: 7]
            { letter: "b", text: "Intentar persuadir al paciente explicando los riesgos de no recibir tratamiento." }, // [cite: 7]
            { letter: "c", text: "Restringir físicamente al paciente." }, // [cite: 8]
            { letter: "d", text: "Documentar el rechazo y pedirle que firme un formulario de liberación." }, // [cite: 8]
        ],
        correctAnswer: "b", // [cite: 224]
    },
    {
        question: "El estándar de cuidado para un TAMP-B se define generalmente como:",
        options: [
            { letter: "a", text: "Lo que haría un médico en la misma situación." }, // [cite: 9]
            { letter: "b", text: "El nivel más alto de atención posible en cualquier circunstancia." }, // [cite: 10]
            { letter: "c", text: "El cuidado que se esperaría de otro TAMP-B con entrenamiento y experiencia similares en circunstancias parecidas." }, // [cite: 11]
            { letter: "d", text: "Las órdenes específicas dadas por la dirección médica en línea para cada llamada" }, // [cite: 12]
        ],
        correctAnswer: "c", // [cite: 224]
    },
    {
        question: "¿Qué elemento NO es necesario para obtener un consentimiento informado válido?",
        options: [
            { letter: "a", text: "Que el paciente sea competente para tomar decisiones." }, // [cite: 13]
            { letter: "b", text: "Que el paciente comprenda la naturaleza del tratamiento propuesto." }, // [cite: 13]
            { letter: "c", text: "Que el paciente firme obligatoriamente un documento legal." }, // [cite: 14]
            { letter: "d", text: "Que se expliquen los riesgos, beneficios y alternativas." }, // [cite: 14]
        ],
        correctAnswer: "c", // [cite: 225]
    },
    {
        question: "Tratar a un paciente en contra de su voluntad, cuando es competente para decidir, puede constituir:",
        options: [
            { letter: "a", text: "Abandono" },
            { letter: "b", text: "Agresión (Asalto o Lesiones)" },
            { letter: "c", text: "Negligencia" },
            { letter: "d", text: "Fraude" },
        ],
        correctAnswer: "b", // [cite: 15, 225]
    },
    {
        question: "Una Orden de No Reanimar (ONR) es un tipo específico de:",
        options: [
            { letter: "a", text: "Consentimiento implícito" },
            { letter: "b", text: "Reporte obligatorio" },
            { letter: "c", text: "Directiva anticipada" },
            { letter: "d", text: "Póliza de responsabilidad civil" },
        ],
        correctAnswer: "c", // [cite: 15, 225]
    },
    {
        question: "El principio ético de \"no hacer daño\" se conoce como:",
        options: [
            { letter: "a", text: "Beneficencia" },
            { letter: "b", text: "Justicia" },
            { letter: "c", text: "No maleficencia" },
            { letter: "d", text: "Autonomía" },
        ],
        correctAnswer: "c", // [cite: 15, 225]
    },
    {
        question: "¿Cuándo puedes compartir legalmente información médica confidencial de un paciente sin su consentimiento explícito?",
        options: [
            { letter: "a", text: "Con los medios de comunicación si el caso es de interés público." }, // [cite: 16]
            { letter: "b", text: "Con tu familia después de un turno difícil." }, // [cite: 17]
            { letter: "c", text: "Durante la transferencia de cuidado a otro profesional de la salud involucrado en la atención del paciente." }, // [cite: 17]
            { letter: "d", text: "En redes sociales, siempre que no uses el nombre real del paciente" }, // [cite: 18]
        ],
        correctAnswer: "c", // [cite: 225]
    },
    {
        question: "Actuar fuera de tu ámbito de práctica definido por tu certificación y protocolos locales es un ejemplo de:",
        options: [
            { letter: "a", text: "Cumplimiento del deber." }, // [cite: 18]
            { letter: "b", text: "Exceder la autoridad." }, // [cite: 19]
            { letter: "c", text: "Consentimiento informado." }, // [cite: 19]
            { letter: "d", text: "Mejora continua de la calidad." }, // [cite: 19]
        ],
        correctAnswer: "b", // [cite: 226]
    },
    {
        question: "¿Quién puede dar consentimiento para el tratamiento de un menor de edad si los padres no están presentes?",
        options: [
            { letter: "a", text: "Nadie, se debe esperar a los padres." }, // [cite: 21]
            { letter: "b", text: "Cualquier adulto presente en la escena." }, // [cite: 21]
            { letter: "c", text: "Un tutor legal designado o, en emergencias que amenazan la vida, se puede aplicar el consentimiento implícito." }, // [cite: 22]
            { letter: "d", text: "El propio menor, si parece entender la situación." }, // [cite: 23]
        ],
        correctAnswer: "c", // [cite: 226]
    },
    {
        question: "El concepto de tratar a todos los pacientes por igual, sin importar raza, religión o capacidad de pago, se relaciona con el principio ético de:",
        options: [
            { letter: "a", text: "Beneficencia" },
            { letter: "b", text: "Autonomía" },
            { letter: "c", text: "No maleficencia" },
            { letter: "d", text: "Justicia" },
        ],
        correctAnswer: "d", // [cite: 23, 227]
    },
    {
        question: "¿Cuál es el propósito principal de la comunicación por radio en SEM?",
        options: [
            { letter: "a", text: "Conversar con otros equipos durante tiempos de inactividad." }, // [cite: 24]
            { letter: "b", text: "Coordinar la respuesta, transmitir información del paciente al hospital y recibir órdenes médicas." }, // [cite: 24]
            { letter: "c", text: "Reportar infracciones de tráfico observadas durante el traslado." }, // [cite: 25]
            { letter: "d", text: "Solicitar indicaciones de ruta al hospital." }, // [cite: 25]
        ],
        correctAnswer: "b", // [cite: 227]
    },
    {
        question: "Al comunicarse por radio, debes:",
        options: [
            { letter: "a", text: "Hablar muy rápido para ahorrar tiempo." }, // [cite: 26]
            { letter: "b", text: "Usar códigos que solo tu compañero entienda." }, // [cite: 26]
            { letter: "c", text: "Hablar claro, conciso y usar lenguaje profesional estándar." }, // [cite: 27]
            { letter: "d", text: "Gritar para asegurarte de que te escuchen bien." }, // [cite: 27]
        ],
        correctAnswer: "c", // [cite: 228]
    },
    {
        question: "¿Qué información es ESENCIAL incluir en un reporte verbal al transferir el cuidado de un paciente al personal del hospital?",
        options: [
            { letter: "a", text: "Tu opinión personal sobre el estilo de vida del paciente." }, // [cite: 29]
            { letter: "b", text: "La queja principal, hallazgos relevantes, tratamiento administrado y respuesta del paciente." }, // [cite: 30]
            { letter: "c", text: "El costo estimado del transporte en ambulancia." }, // [cite: 30]
            { letter: "d", text: "Detalles sobre el seguro médico del paciente" }, // [cite: 31]
        ],
        correctAnswer: "b", // [cite: 228]
    },
    {
        question: "El Reporte de Atención Prehospitalaria (RAP / PCR / FRAP) es importante porque:",
        options: [
            { letter: "a", text: "Sirve como registro legal, facilita la continuidad de la atención y se usa para mejora de calidad e investigación." }, // [cite: 31]
            { letter: "b", text: "Es principalmente una formalidad requerida por la administración." }, // [cite: 32]
            { letter: "c", text: "Solo lo lee el personal de facturación." }, // [cite: 32]
            { letter: "d", text: "Se descarta una vez que el paciente llega al hospital." }, // [cite: 33]
        ],
        correctAnswer: "a", // [cite: 229]
    },
    {
        question: "Si cometes un error al escribir en un reporte en papel, ¿cuál es la forma correcta de corregirlo?",
        options: [
            { letter: "a", text: "Borrarlo completamente o usar líquido corrector." }, // [cite: 35]
            { letter: "b", text: "Trazar una sola línea a través del error, escribir la corrección al lado o arriba, y poner tus iniciales." }, // [cite: 35]
            { letter: "c", text: "Arrancar la hoja y empezar de nuevo." }, // [cite: 36]
            { letter: "d", text: "Ignorar el error si no parece muy importante." }, // [cite: 36]
        ],
        correctAnswer: "b", // [cite: 230]
    },
    {
        question: "¿Qué significa la \"transferencia de cuidado\"?",
        options: [
            { letter: "a", text: "Mover físicamente al paciente de la camilla a la cama del hospital." }, // [cite: 37]
            { letter: "b", text: "Entregar formalmente la responsabilidad del paciente a un profesional de la salud de igual o mayor nivel, usualmente acompañado de un reporte verbal." }, // [cite: 38]
            { letter: "c", text: "Darle al paciente el número de teléfono del hospital." }, // [cite: 39]
            { letter: "d", text: "Completar el papeleo de facturación." }, // [cite: 39]
        ],
        correctAnswer: "b", // [cite: 231]
    },
    {
        question: "La comunicación no verbal incluye todo EXCEPTO:",
        options: [
            { letter: "a", text: "El tono de voz." },
            { letter: "b", text: "La postura corporal." },
            { letter: "c", text: "El contacto visual." },
            { letter: "d", text: "El lenguaje de señas." }, // [cite: 41]
        ],
        correctAnswer: "d", // [cite: 232]
    },
    {
        question: "Al hablar con un paciente anciano con posible déficit auditivo, ¿qué deberías hacer?",
        options: [
            { letter: "a", text: "Gritarle directamente al oído." }, // [cite: 42]
            { letter: "b", text: "Hablar claramente, a un volumen normal o ligeramente elevado, y mirarle a la cara." }, // [cite: 42]
            { letter: "c", text: "Asumir que no puede entender y hablar solo con los familiares." }, // [cite: 43]
            { letter: "d", text: "Escribir todas las preguntas." }, // [cite: 43]
        ],
        correctAnswer: "b", // [cite: 233]
    },
    {
        question: "¿Cuál de los siguientes es un ejemplo de una pregunta \"abierta\"?",
        options: [
            { letter: "a", text: "¿Le duele el pecho?" }, // [cite: 44]
            { letter: "b", text: "¿Se tomó su medicamento hoy?" }, // [cite: 45]
            { letter: "c", text: "¿Puede describir cómo se siente?" }, // [cite: 45]
            { letter: "d", text: "¿Se cayó?" }, // [cite: 45]
        ],
        correctAnswer: "c", // [cite: 234]
    },
    {
        question: "La documentación precisa y completa es crucial para:",
        options: [
            { letter: "a", text: "Asegurar que la ambulancia se vea ocupada." }, // [cite: 46]
            { letter: "b", text: "Justificar las acciones tomadas y protegerse de posibles litigios." }, // [cite: 47]
            { letter: "c", text: "Cumplir con los requisitos mínimos de papeleo." }, // [cite: 47]
            { letter: "d", text: "Practicar tu caligrafía." }, // [cite: 48]
        ],
        correctAnswer: "b", // [cite: 235]
    },
    {
        question: "¿Qué información forma parte de los \"datos objetivos\" en un reporte?",
        options: [
            { letter: "a", text: "La opinión del paciente sobre su dolor." }, // [cite: 49]
            { letter: "b", text: "Lo que un testigo dice que ocurrió." }, // [cite: 49]
            { letter: "c", text: "Los signos vitales medidos (pulso, respiración, presión arterial)." }, // [cite: 50]
            { letter: "d", text: "La sensación de \"algo malo\" que tiene el TAMP" }, // [cite: 50]
        ],
        correctAnswer: "c", // [cite: 236]
    },
    {
        question: "¿Qué información forma parte de los \"datos subjetivos\" en un reporte?",
        options: [
            { letter: "a", text: "La frecuencia respiratoria del paciente." }, // [cite: 51]
            { letter: "b", text: "La descripción del dolor que hace el paciente (\"siento como si un elefante estuviera en mi pecho\")." }, // [cite: 51]
            { letter: "c", text: "El resultado del oxímetro de pulso." }, // [cite: 52]
            { letter: "d", text: "La presencia de diaforesis observada por el TAMP." }, // [cite: 52]
        ],
        correctAnswer: "b", // [cite: 237]
    },
    {
        question: "En un reporte de radio al hospital, ¿qué elemento se suele dar PRIMERO después de identificarse?",
        options: [
            { letter: "a", text: "Los signos vitales completos." }, // [cite: 54]
            { letter: "b", text: "La edad y sexo del paciente, y su queja principal." }, // [cite: 54]
            { letter: "c", text: "Las intervenciones realizadas." }, // [cite: 54]
            { letter: "d", text: "El tiempo estimado de llegada (ETA)" }, // [cite: 55]
        ],
        correctAnswer: "b", // [cite: 238]
    },
    {
        question: "¿Cuál es una barrera común para la comunicación efectiva en una emergencia?",
        options: [
            { letter: "a", text: "El ruido ambiental y el estrés emocional." }, // [cite: 56]
            { letter: "b", text: "Tener demasiado tiempo para hablar." }, // [cite: 56]
            { letter: "c", text: "Usar lenguaje claro y sencillo." }, // [cite: 56]
            { letter: "d", text: "Escuchar activamente al paciente" }, // [cite: 57]
        ],
        correctAnswer: "a", // [cite: 238]
    },
    {
        question: "La sigla \"SOAP\" (o su equivalente en español) es un método para organizar la documentación. ¿Qué representa la \"A\"?",
        options: [
            { letter: "a", text: "Alergias (Allergies)" },
            { letter: "b", text: "Evaluación (Assessment) / Análisis" },
            { letter: "c", text: "Administración (Administration)" },
            { letter: "d", text: "Abandono (Abandonment)" },
        ],
        correctAnswer: "b", // [cite: 58, 239]
    },
    {
        question: "Al documentar el rechazo de atención de un paciente, es vital incluir:",
        options: [
            { letter: "a", text: "Tu opinión de que el paciente está tomando una mala decisión." }, // [cite: 58]
            { letter: "b", text: "Que el paciente fue informado de los riesgos y beneficios, y de las alternativas, y que parecía competente para decidir." }, // [cite: 59]
            { letter: "c", text: "Solo la firma del paciente." }, // [cite: 60]
            { letter: "d", text: "Los nombres de todos los testigos posibles" }, // [cite: 60]
        ],
        correctAnswer: "b", // [cite: 240]
    },
    {
        question: "La comunicación terapéutica implica:",
        options: [
            { letter: "a", text: "Usar jerga médica compleja para impresionar al paciente." }, // [cite: 60]
            { letter: "b", text: "Hablar de tus propios problemas para establecer una conexión." }, // [cite: 61]
            { letter: "c", text: "Escuchar activamente, mostrar empatía y usar preguntas abiertas y cerradas apropiadamente para obtener información y tranquilizar al paciente." }, // [cite: 62]
            { letter: "d", text: "Dar órdenes directas sin explicación." }, // [cite: 63]
        ],
        correctAnswer: "c", // [cite: 241]
    },
    {
        question: "¿Cuál es el nivel de certificación prehospitalaria que se enfoca en Soporte Vital Básico (SVB/BLS), incluyendo el uso de DEA y manejo básico de vía aérea?",
        options: [
            { letter: "a", text: "Médico de Urgencias" },
            { letter: "b", text: "Paramédico (TAMP-A)" },
            { letter: "c", text: "Técnico en Atención Médica Prehospitalaria - Básico (TAMP-B / EMT-B)" },
            { letter: "d", text: "Despachador de Emergencias Médicas" },
        ],
        correctAnswer: "c", // [cite: 63, 242]
    },
    {
        question: "¿Cuál es el primer componente del Sistema de Servicios de Emergencias Médicas (SEM) con el que el público interactúa?",
        options: [
            { letter: "a", text: "El transporte en ambulancia." }, // [cite: 65]
            { letter: "b", text: "El acceso público (ej. llamar al 9-1-1)." }, // [cite: 65]
            { letter: "c", text: "La sala de urgencias del hospital." }, // [cite: 65]
            { letter: "d", text: "La rehabilitación." }, // [cite: 66]
        ],
        correctAnswer: "b", // [cite: 242]
    },
    {
        question: "La Dirección Médica que utiliza protocolos, políticas y procedimientos preestablecidos se conoce como:",
        options: [
            { letter: "a", text: "Dirección Médica en línea (online)." }, // [cite: 66]
            { letter: "b", text: "Dirección Médica fuera de línea (offline) o indirecta." }, // [cite: 67]
            { letter: "c", text: "Dirección Médica interactiva." }, // [cite: 67]
            { letter: "d", text: "Dirección Médica retrospectiva" }, // [cite: 68]
        ],
        correctAnswer: "b", // [cite: 243]
    },
    {
        question: "El proceso continuo de revisión interna y externa de todos los aspectos de un sistema SEM para identificar áreas de mejora se llama:",
        options: [
            { letter: "a", text: "Certificación inicial." }, // [cite: 68]
            { letter: "b", text: "Educación continua." }, // [cite: 69]
            { letter: "c", text: "Mejora Continua de la Calidad (MCC / CQI)." }, // [cite: 69]
            { letter: "d", text: "Despacho médico de emergencia." }, // [cite: 69]
        ],
        correctAnswer: "c", // [cite: 243]
    },
    {
        question: "¿Cuál NO es una responsabilidad principal de un TAMP-B?",
        options: [
            { letter: "a", text: "Seguridad personal y del equipo." }, // [cite: 70]
            { letter: "b", text: "Evaluación y atención del paciente." }, // [cite: 71]
            { letter: "c", text: "Diagnóstico médico definitivo." }, // [cite: 71]
            { letter: "d", text: "Transporte seguro del paciente." }, // [cite: 71]
        ],
        correctAnswer: "c", // [cite: 244]
    },
    {
        question: "La entidad que autoriza a los TAMPs a proveer cuidado médico en el ámbito prehospitalario es generalmente:",
        options: [
            { letter: "a", text: "El hospital más cercano." }, // [cite: 72]
            { letter: "b", text: "La compañía de ambulancias." }, // [cite: 73]
            { letter: "c", text: "Una agencia gubernamental estatal o local (ej. Secretaría de Salud)." }, // [cite: 73]
            { letter: "d", text: "Una asociación profesional nacional." }, // [cite: 74]
        ],
        correctAnswer: "c", // [cite: 244]
    },
    {
        question: "¿Qué significa la Dirección Médica \"en línea\" (online)?",
        options: [
            { letter: "a", text: "Seguir los protocolos escritos." }, // [cite: 74]
            { letter: "b", text: "Contactar directamente (por radio o teléfono) con un médico para solicitar órdenes o consultar sobre el cuidado del paciente." }, // [cite: 75]
            { letter: "c", text: "Revisar casos después de que ocurrieron." }, // [cite: 76]
            { letter: "d", text: "Usar una aplicación móvil para documentar." }, // [cite: 76]
        ],
        correctAnswer: "b", // [cite: 245]
    },
    {
        question: "La prevención de lesiones y la educación pública son componentes importantes de:",
        options: [
            { letter: "a", text: "La facturación del SEM." }, // [cite: 77]
            { letter: "b", text: "El rol del SEM en la salud pública." }, // [cite: 78]
            { letter: "c", text: "El mantenimiento de vehículos." }, // [cite: 78]
            { letter: "d", text: "La comunicación por radio." }, // [cite: 78]
        ],
        correctAnswer: "b", // [cite: 246]
    },
    {
        question: "¿Quién es el responsable último de la atención al paciente dentro del sistema SEM?",
        options: [
            { letter: "a", text: "El TAMP que llega primero a la escena." }, // [cite: 80]
            { letter: "b", text: "El Director Médico del sistema." }, // [cite: 80]
            { letter: "c", text: "El personal de enfermería del hospital receptor." }, // [cite: 81]
            { letter: "d", text: "El despachador que recibió la llamada." }, // [cite: 81]
        ],
        correctAnswer: "b", // [cite: 246]
    },
    {
        question: "¿Cuál es el propósito principal de la educación continua para los TAMPs?",
        options: [
            { letter: "a", text: "Cumplir un requisito burocrático." }, // [cite: 82]
            { letter: "b", text: "Mantener, actualizar y mejorar los conocimientos y habilidades clínicas." }, // [cite: 83]
            { letter: "c", text: "Obtener descuentos en seguros." }, // [cite: 83]
            { letter: "d", text: "Socializar con otros colegas." }, // [cite: 83]
        ],
        correctAnswer: "b", // [cite: 247]
    },
    {
        question: "Un Sistema de Respuesta Médica Escalonada (Tiered Response) implica que:",
        options: [
            { letter: "a", text: "Todas las ambulancias tienen el mismo nivel de personal." }, // [cite: 84]
            { letter: "b", text: "Se despacha el vehículo o recurso más apropiado según la naturaleza de la llamada (ej. SVB para casos menos graves, SVA para casos críticos)." }, // [cite: 85]
            { letter: "c", text: "Solo los supervisores responden a las llamadas." }, // [cite: 86]
            { letter: "d", text: "Los pacientes eligen el hospital al que quieren ir." }, // [cite: 86]
        ],
        correctAnswer: "b", // [cite: 248]
    },
    {
        question: "El Despacho Médico de Emergencia (DME) implica:",
        options: [
            { letter: "a", text: "Que los despachadores solo toman la dirección y envían una unidad." }, // [cite: 87]
            { letter: "b", text: "Que despachadores entrenados usan protocolos para obtener información clave, priorizar la respuesta y dar instrucciones pre-arribo a quien llama." }, // [cite: 88]
            { letter: "c", text: "Que los médicos responden directamente a las llamadas al 911." }, // [cite: 89]
            { letter: "d", text: "Un sistema obsoleto reemplazado por GPS." }, // [cite: 89]
        ],
        correctAnswer: "b", // [cite: 249]
    },
    {
        question: "La interconexión entre los diferentes componentes del sistema SEM (despacho, respuesta, hospital, etc.) es crucial para:",
        options: [
            { letter: "a", text: "Incrementar los costos operativos." }, // [cite: 90]
            { letter: "b", text: "Asegurar una atención al paciente fluida y coordinada (continuidad de la atención)." }, // [cite: 91]
            { letter: "c", text: "Limitar la responsabilidad legal." }, // [cite: 91]
            { letter: "d", text: "Reducir el número de llamadas." }, // [cite: 92]
        ],
        correctAnswer: "b", // [cite: 250]
    },
    {
        question: "¿Qué nivel de proveedor prehospitalario tiene el ámbito de práctica más amplio, incluyendo farmacología avanzada, manejo avanzado de vía aérea e interpretación de ECG?",
        options: [
            { letter: "a", text: "Primer Respondiente Certificado (EMR)" }, // [cite: 93]
            { letter: "b", text: "TAMP-B (EMT-B)" }, // [cite: 93]
            { letter: "c", text: "TAMP Avanzado / Paramédico (TAMP-A / Paramedic)" }, // [cite: 93]
            { letter: "d", text: "Enfermero/a de Vuelo" }, // [cite: 93]
        ],
        correctAnswer: "c", // [cite: 251]
    },
    {
        question: "¿Cuál es un objetivo clave del componente de \"instalaciones receptoras especializadas\" dentro de un sistema SEM?",
        options: [
            { letter: "a", text: "Asegurar que todas las ambulancias tengan el mismo equipamiento." }, // [cite: 94]
            { letter: "b", text: "Dirigir a ciertos pacientes (ej. trauma grave, ACV, IAM) a hospitales con capacidades específicas para tratar esas condiciones." }, // [cite: 95]
            { letter: "c", text: "Reducir los tiempos de transporte para todas las llamadas." }, // [cite: 96]
            { letter: "d", text: "Proveer atención primaria de salud en la comunidad." }, // [cite: 96]
        ],
        correctAnswer: "b", // [cite: 251]
    },
    {
        question: "La investigación en el ámbito prehospitalario ayuda a:",
        options: [
            { letter: "a", text: "Incrementar el papeleo administrativo." }, // [cite: 97]
            { letter: "b", text: "Validar la efectividad de los tratamientos y mejorar las guías clínicas (basar la práctica en evidencia)." }, // [cite: 98]
            { letter: "c", text: "Justificar salarios más altos para los TAMPs." }, // [cite: 99]
            { letter: "d", text: "Reducir la necesidad de entrenamiento." }, // [cite: 99]
        ],
        correctAnswer: "b", // [cite: 252]
    },
    {
        question: "¿Cuál de las siguientes es una función esencial de la agencia líder de SEM a nivel estatal o regional?",
        options: [
            { letter: "a", text: "Contratar directamente a todos los TAMPs del estado." }, // [cite: 101]
            { letter: "b", text: "Establecer estándares de licenciamiento, certificación y desempeño; coordinar esfuerzos y supervisar el sistema." }, // [cite: 101, 102]
            { letter: "c", text: "Operar todas las ambulancias dentro de su jurisdicción." }, // [cite: 102]
            { letter: "d", text: "Responder directamente a todas las llamadas de emergencia." }, // [cite: 103]
        ],
        correctAnswer: "b", // [cite: 253]
    },
    {
        question: "El componente más importante de la seguridad personal en el SEM es:",
        options: [
            { letter: "a", text: "Llevar siempre un chaleco antibalas." }, // [cite: 103]
            { letter: "b", text: "La evaluación continua de la seguridad de la escena." }, // [cite: 104]
            { letter: "c", text: "Conducir la ambulancia rápidamente." }, // [cite: 104]
            { letter: "d", text: "Tener el equipo más avanzado." }, // [cite: 105]
        ],
        correctAnswer: "b", // [cite: 254]
    },
    {
        question: "Las Precauciones Estándar (anteriormente Precauciones Universales) asumen que:",
        options: [
            { letter: "a", text: "Solo los pacientes con enfermedades conocidas son infecciosos." }, // [cite: 105]
            { letter: "b", text: "La sangre de todos los pacientes y ciertos fluidos corporales deben considerarse potencialmente infecciosos." }, // [cite: 106]
            { letter: "c", text: "El lavado de manos no es necesario si se usan guantes." }, // [cite: 107]
            { letter: "d", text: "El riesgo de infección es muy bajo en el ámbito prehospitalario." }, // [cite: 108]
        ],
        correctAnswer: "b", // [cite: 255]
    },
    {
        question: "¿Cuál es la pieza MÁS fundamental y frecuentemente usada del Equipo de Protección Personal (EPP) para el TAMP-B?",
        options: [
            { letter: "a", text: "Traje para materiales peligrosos (HazMat)." }, // [cite: 110]
            { letter: "b", text: "Mascarilla N95." }, // [cite: 110]
            { letter: "c", text: "Gafas de protección." }, // [cite: 110]
            { letter: "d", text: "Guantes desechables." }, // [cite: 110]
        ],
        correctAnswer: "d", // [cite: 255]
    },
    {
        question: "¿Cuándo es MÁS importante usar protección ocular y mascarilla (quirúrgica o N95)?",
        options: [
            { letter: "a", text: "Al tomar signos vitales a un paciente estable." }, // [cite: 112]
            { letter: "b", text: "Al documentar en la computadora de la ambulancia." }, // [cite: 112]
            { letter: "c", text: "Durante procedimientos con riesgo de salpicaduras, aerosoles o tos/estornudos (ej. manejo de vía aérea, parto, paciente con tos fuerte)." }, // [cite: 113]
            { letter: "d", text: "Al levantar a un paciente de la cama." }, // [cite: 114]
        ],
        correctAnswer: "c", // [cite: 256]
    },
    {
        question: "Si llegas a una escena con cables eléctricos caídos, ¿qué debes hacer PRIMERO?",
        options: [
            { letter: "a", text: "Intentar mover los cables con una herramienta no conductora." }, // [cite: 115]
            { letter: "b", text: "Establecer una zona segura lejos de los cables y esperar a la compañía eléctrica." }, // [cite: 116]
            { letter: "c", text: "Acercarte rápidamente al paciente si parece crítico." }, // [cite: 117]
            { letter: "d", text: "Mojar los cables para reducir el riesgo de chispas." }, // [cite: 117]
        ],
        correctAnswer: "b", // [cite: 257]
    },
    {
        question: "El estrés que se manifiesta inmediatamente después de un incidente crítico se conoce como:",
        options: [
            { letter: "a", text: "Estrés acumulativo." }, // [cite: 118]
            { letter: "b", text: "Reacción de estrés agudo." }, // [cite: 119]
            { letter: "c", text: "Trastorno de estrés postraumático (TEPT)." }, // [cite: 119]
            { letter: "d", text: "Agotamiento (Burnout)." }, // [cite: 119]
        ],
        correctAnswer: "b", // [cite: 257]
    },
    {
        question: "¿Cuál de las siguientes es una técnica saludable para manejar el estrés acumulativo?",
        options: [
            { letter: "a", text: "Ignorar los sentimientos y seguir trabajando." }, // [cite: 120]
            { letter: "b", text: "Aumentar el consumo de cafeína y azúcar." }, // [cite: 121]
            { letter: "c", text: "Hacer ejercicio regularmente, mantener una dieta balanceada y buscar apoyo social." }, // [cite: 121]
            { letter: "d", text: "Ventilar la frustración discutiendo acaloradamente con los compañeros." }, // [cite: 122]
        ],
        correctAnswer: "c", // [cite: 258]
    },
    {
        question: "Para prevenir lesiones de espalda al levantar pacientes, es fundamental:",
        options: [
            { letter: "a", text: "Levantar usando los músculos de la espalda, manteniéndola recta." }, // [cite: 122]
            { letter: "b", text: "Doblar la cintura al levantar." }, // [cite: 123]
            { letter: "c", text: "Mantener la espalda recta, doblar las rodillas y levantar usando los músculos de las piernas, manteniendo el peso cerca del cuerpo." }, // [cite: 123]
            { letter: "d", text: "Levantar siempre al paciente solo para demostrar fuerza." }, // [cite: 124]
        ],
        correctAnswer: "c", // [cite: 259]
    },
    {
        question: "La vacunación contra la Hepatitis B es altamente recomendada para los trabajadores de la salud porque:",
        options: [
            { letter: "a", text: "Es transmitida principalmente por vía aérea." }, // [cite: 124]
            { letter: "b", text: "Es una enfermedad común en niños." }, // [cite: 125]
            { letter: "c", text: "El virus puede sobrevivir en superficies secas y se transmite por sangre y fluidos corporales." }, // [cite: 125]
            { letter: "d", text: "La vacuna ofrece protección contra todas las formas de hepatitis." }, // [cite: 126]
        ],
        correctAnswer: "c", // [cite: 260]
    },
    {
        question: "¿Qué debes hacer si sufres una exposición significativa (ej. pinchazo con aguja usada, salpicadura de sangre en mucosas) a la sangre o fluidos de un paciente?",
        options: [
            { letter: "a", text: "Ignorarlo, el riesgo es mínimo." }, // [cite: 128]
            { letter: "b", text: "Lavar inmediatamente la zona (piel con agua y jabón, ojos/mucosas con agua abundante) y reportar la exposición a tu supervisor siguiendo el protocolo local." }, // [cite: 128]
            { letter: "c", text: "Esperar a ver si desarrollas síntomas antes de reportarlo." }, // [cite: 129]
            { letter: "d", text: "Tomar antibióticos como medida preventiva." }, // [cite: 129]
        ],
        correctAnswer: "b", // [cite: 261]
    },
    {
        question: "La seguridad en escenas de posible violencia (ej. disputas domésticas, bares) implica:",
        options: [
            { letter: "a", text: "Entrar rápidamente para controlar la situación." }, // [cite: 130]
            { letter: "b", text: "Esperar a que la policía asegure la escena antes de entrar." }, // [cite: 131]
            { letter: "c", text: "Intentar mediar en la disputa." }, // [cite: 131]
            { letter: "d", text: "Dejar las luces y sirenas encendidas cerca de la escena para alertar a los involucrados." }, // [cite: 132]
        ],
        correctAnswer: "b", // [cite: 262]
    },
    {
        question: "El agotamiento profesional (burnout) en el personal de SEM se caracteriza por:",
        options: [
            { letter: "a", text: "Entusiasmo y energía renovados." }, // [cite: 133]
            { letter: "b", text: "Cinismo, agotamiento emocional y sensación de baja realización personal." }, // [cite: 134]
            { letter: "c", text: "Interés incrementado en tomar turnos extra." }, // [cite: 134]
            { letter: "d", text: "Mejora en las relaciones interpersonales en el trabajo." }, // [cite: 135]
        ],
        correctAnswer: "b", // [cite: 263]
    },
    {
        question: "¿Qué es el Debriefing de Incidentes Críticos (CISD) o Manejo del Estrés en Incidentes Críticos (CISM)?",
        options: [
            { letter: "a", text: "Una investigación disciplinaria después de un error." }, // [cite: 136]
            { letter: "b", text: "Un proceso diseñado para ayudar al personal a lidiar con las reacciones emocionales y psicológicas después de un evento traumático." }, // [cite: 136]
            { letter: "c", text: "Una evaluación obligatoria de habilidades clínicas." }, // [cite: 137]
            { letter: "d", text: "Una reunión administrativa para discutir costos." }, // [cite: 137]
        ],
        correctAnswer: "b", // [cite: 264]
    },
    {
        question: "Al acercarte a una escena de accidente vehicular, ¿cuál es una consideración de seguridad primordial?",
        options: [
            { letter: "a", text: "Estacionar la ambulancia justo detrás del vehículo accidentado." }, // [cite: 139]
            { letter: "b", text: "El tráfico circundante y la estabilidad de los vehículos involucrados." }, // [cite: 139]
            { letter: "c", text: "Entrevistar a los testigos antes de evaluar a los pacientes." }, // [cite: 140]
            { letter: "d", text: "Apagar todas las luces de emergencia para no distraer a otros conductores." }, // [cite: 141]
        ],
        correctAnswer: "b", // [cite: 265]
    },
    {
        question: "La ventilación adecuada del compartimento del paciente en la ambulancia es importante para:",
        options: [
            { letter: "a", text: "Mantener una temperatura agradable." }, // [cite: 142]
            { letter: "b", text: "Reducir la exposición a patógenos transmitidos por aire y olores." }, // [cite: 143]
            { letter: "c", text: "Disminuir el ruido del motor." }, // [cite: 143]
            { letter: "d", text: "Mejorar la señal de radio." }, // [cite: 144]
        ],
        correctAnswer: "b", // [cite: 266]
    },
    {
        question: "¿Cuál es la mejor manera de interactuar con un paciente que muestra signos de hostilidad o agresión?",
        options: [
            { letter: "a", text: "Acercarse mucho para mostrar dominio." }, // [cite: 145]
            { letter: "b", text: "Mantener una distancia segura, usar un tono de voz calmado y no desafiante, y estar atento a señales de escalada." }, // [cite: 145]
            { letter: "c", text: "Ignorar la hostilidad y proceder con la evaluación física." }, // [cite: 146]
            { letter: "d", text: "Amenazar al paciente con llamar a la policía si no coopera." }, // [cite: 147]
        ],
        correctAnswer: "b", // [cite: 267]
    },
    {
        question: "El lavado de manos frecuente y adecuado es crucial porque:",
        options: [
            { letter: "a", text: "Reemplaza la necesidad de usar guantes." }, // [cite: 148]
            { letter: "b", text: "Es la forma más efectiva de prevenir la propagación de infecciones." }, // [cite: 149]
            { letter: "c", text: "Solo es necesario después de atender pacientes visiblemente enfermos." }, // [cite: 150]
            { letter: "d", text: "Ayuda a mantener las manos calientes en invierno." }, // [cite: 150]
        ],
        correctAnswer: "b", // [cite: 268]
    },
    {
        question: "La fatiga debida a turnos largos o falta de sueño puede afectar al TAMP al:",
        options: [
            { letter: "a", text: "Mejorar su tiempo de reacción." }, // [cite: 151]
            { letter: "b", text: "Aumentar su estado de alerta." }, // [cite: 152]
            { letter: "c", text: "Incrementar el riesgo de cometer errores médicos y de conducción." }, // [cite: 152]
            { letter: "d", text: "Facilitar la comunicación con los pacientes." }, // [cite: 153]
        ],
        correctAnswer: "c", // [cite: 269]
    },
    {
        question: "El prefijo \"taqui-\" significa:",
        options: [
            { letter: "a", text: "Lento" },
            { letter: "b", text: "Rápido" },
            { letter: "c", text: "Debajo" },
            { letter: "d", text: "Encima" },
        ],
        correctAnswer: "b", // [cite: 153, 270]
    },
    {
        question: "El sufijo \"-algia\" se refiere a:",
        options: [
            { letter: "a", text: "Inflamación" },
            { letter: "b", text: "Dolor" },
            { letter: "c", text: "Parálisis" },
            { letter: "d", text: "Respiración" },
        ],
        correctAnswer: "b", // [cite: 153, 270]
    },
    {
        question: "¿Qué término direccional significa \"más cerca del tronco\" o del punto de origen de una extremidad?",
        options: [
            { letter: "a", text: "Distal" },
            { letter: "b", text: "Lateral" },
            { letter: "c", text: "Proximal" },
            { letter: "d", text: "Medial" },
        ],
        correctAnswer: "c", // [cite: 154, 270]
    },
    {
        question: "La posición de un paciente acostado boca arriba se denomina:",
        options: [
            { letter: "a", text: "Prona" },
            { letter: "b", text: "Supina" },
            { letter: "c", text: "Fowler" },
            { letter: "d", text: "Trendelenburg" },
        ],
        correctAnswer: "b", // [cite: 154, 270]
    },
    {
        question: "El prefijo \"dis-\" como en \"disnea\" significa:",
        options: [
            { letter: "a", text: "Ausencia de" },
            { letter: "b", text: "Dentro de" },
            { letter: "c", text: "Difícil o doloroso" },
            { letter: "d", text: "Alrededor de" },
        ],
        correctAnswer: "c", // [cite: 154, 270]
    },
    {
        question: "La raíz \"cardio\" se refiere a:",
        options: [
            { letter: "a", text: "Pulmón" },
            { letter: "b", text: "Hígado" },
            { letter: "c", text: "Corazón" },
            { letter: "d", text: "Riñón" },
        ],
        correctAnswer: "c", // [cite: 154, 270]
    },
    {
        question: "¿Qué significa el sufijo \"-itis\"?",
        options: [
            { letter: "a", text: "Extirpación quirúrgica" },
            { letter: "b", text: "Incisión" },
            { letter: "c", text: "Inflamación" },
            { letter: "d", text: "Estudio de" },
        ],
        correctAnswer: "c", // [cite: 155, 270]
    },
    {
        question: "El término direccional \"posterior\" es sinónimo de:",
        options: [
            { letter: "a", text: "Ventral" },
            { letter: "b", text: "Dorsal" },
            { letter: "c", text: "Superior" },
            { letter: "d", text: "Inferior" },
        ],
        correctAnswer: "b", // [cite: 155, 270]
    },
    {
        question: "Un paciente sentado con la parte superior del cuerpo elevada a 45-60 grados está en posición:",
        options: [
            { letter: "a", text: "Supina" },
            { letter: "b", text: "De recuperación" },
            { letter: "c", text: "Fowler o semi-Fowler" },
            { letter: "d", text: "Prona" },
        ],
        correctAnswer: "c", // [cite: 155, 270]
    },
    {
        question: "La abreviatura \"ACV\" comúnmente se refiere a:",
        options: [
            { letter: "a", text: "Acceso Vascular Central" },
            { letter: "b", text: "Aseguramiento de la Vía Aérea Central" },
            { letter: "c", text: "Accidente Cerebrovascular" },
            { letter: "d", text: "Auscultación Cardíaca y Ventilación" },
        ],
        correctAnswer: "c", // [cite: 155, 270]
    },
    {
        question: "El prefijo \"hipo-\" significa:",
        options: [
            { letter: "a", text: "Excesivo o por encima de lo normal" },
            { letter: "b", text: "Normal" },
            { letter: "c", text: "Deficiente o por debajo de lo normal" },
            { letter: "d", text: "Dentro de" },
        ],
        correctAnswer: "c", // [cite: 155, 270]
    },
    {
        question: "La raíz \"neuro\" se refiere a:",
        options: [
            { letter: "a", text: "Hueso" },
            { letter: "b", text: "Músculo" },
            { letter: "c", text: "Nervio" },
            { letter: "d", text: "Sangre" },
        ],
        correctAnswer: "c", // [cite: 156, 270]
    },
    {
        question: "¿Qué significa el sufijo \"-plejia\"?",
        options: [
            { letter: "a", text: "Respiración" },
            { letter: "b", text: "Comer o tragar" },
            { letter: "c", text: "Parálisis" },
            { letter: "d", text: "Flujo o descarga" },
        ],
        correctAnswer: "c", // [cite: 157, 270]
    },
    {
        question: "El término direccional \"lateral\" significa:",
        options: [
            { letter: "a", text: "Hacia la línea media del cuerpo" },
            { letter: "b", text: "Lejos de la línea media del cuerpo" },
            { letter: "c", text: "Hacia la cabeza" },
            { letter: "d", text: "Hacia los pies" },
        ],
        correctAnswer: "b", // [cite: 157, 270]
    },
    {
        question: "La abreviatura \"IAM\" generalmente indica:",
        options: [
            { letter: "a", text: "Infección Aguda Múltiple" },
            { letter: "b", text: "Insuficiencia Aórtica Mitral" },
            { letter: "c", text: "Infarto Agudo de Miocardio" },
            { letter: "d", text: "Inmovilización Articular Mandibular" },
        ],
        correctAnswer: "c", // [cite: 157, 270]
    },
    {
        question: "La posición de recuperación (o lateral de seguridad) se utiliza principalmente para:",
        options: [
            { letter: "a", text: "Pacientes con sospecha de lesión espinal." }, // [cite: 157]
            { letter: "b", text: "Pacientes inconscientes que respiran espontáneamente y no tienen sospecha de trauma espinal, para ayudar a mantener la vía aérea permeable." }, // [cite: 158]
            { letter: "c", text: "Pacientes con dificultad respiratoria que necesitan sentarse." }, // [cite: 159]
            { letter: "d", text: "Pacientes en shock para elevar las piernas." }, // [cite: 159]
        ],
        correctAnswer: "b", // [cite: 270]
    },
    {
        question: "El sufijo \"-pnea\" se relaciona con:",
        options: [
            { letter: "a", text: "Sangre" },
            { letter: "b", text: "Orina" },
            { letter: "c", text: "Respiración" },
            { letter: "d", text: "Habla" },
        ],
        correctAnswer: "c", // [cite: 160, 271]
    },
    {
        question: "El término \"cefálico\" se refiere a:",
        options: [
            { letter: "a", text: "Relativo a los pies." }, // [cite: 160]
            { letter: "b", text: "Relativo al abdomen." }, // [cite: 161]
            { letter: "c", text: "Relativo a la cabeza." }, // [cite: 161]
            { letter: "d", text: "Relativo a la espalda." }, // [cite: 161]
        ],
        correctAnswer: "c", // [cite: 271]
    },
    {
        question: "¿Cuál es la estructura que actúa como \"tapa\" para evitar que los alimentos y líquidos entren en la tráquea durante la deglución?",
        options: [
            { letter: "a", text: "Faringe" },
            { letter: "b", text: "Laringe" },
            { letter: "c", text: "Epiglotis" },
            { letter: "d", text: "Esófago" },
        ],
        correctAnswer: "c", // [cite: 163, 271]
    },
    {
        question: "El intercambio de oxígeno y dióxido de carbono entre los alvéolos y los capilares pulmonares se llama:",
        options: [
            { letter: "a", text: "Ventilación" },
            { letter: "b", text: "Perfusión" },
            { letter: "c", text: "Respiración externa (o intercambio gaseoso pulmonar)" },
            { letter: "d", text: "Respiración celular" },
        ],
        correctAnswer: "c", // [cite: 163, 271]
    },
    {
        question: "¿Cuál es el principal músculo de la respiración?",
        options: [
            { letter: "a", text: "Músculos intercostales" },
            { letter: "b", text: "Músculos abdominales" },
            { letter: "c", text: "Diafragma" },
            { letter: "d", text: "Esternocleidomastoideo" },
        ],
        correctAnswer: "c", // [cite: 164, 271]
    },
    {
        question: "¿Qué cámaras del corazón reciben sangre (desoxigenada del cuerpo y oxigenada de los pulmones)?",
        options: [
            { letter: "a", text: "Ventrículos" },
            { letter: "b", text: "Aurículas (Atrios)" },
            { letter: "c", text: "Válvulas" },
            { letter: "d", text: "Arterias coronaria" },
        ],
        correctAnswer: "b", // [cite: 165, 271]
    },
    {
        question: "Los vasos sanguíneos que transportan sangre oxigenada desde el corazón al resto del cuerpo son principalmente:",
        options: [
            { letter: "a", text: "Venas" },
            { letter: "b", text: "Arterias" },
            { letter: "c", text: "Vénulas" },
            { letter: "d", text: "Capilares" },
        ],
        correctAnswer: "b", // [cite: 165, 271]
    },
    {
        question: "¿Cuál componente de la sangre es responsable primariamente del transporte de oxígeno?",
        options: [
            { letter: "a", text: "Glóbulos blancos (Leucocitos)" }, // [cite: 166]
            { letter: "b", text: "Plaquetas (Trombocitos)" }, // [cite: 166]
            { letter: "c", text: "Plasma" }, // [cite: 166]
            { letter: "d", text: "Glóbulos rojos (Eritrocitos)" }, // [cite: 166]
        ],
        correctAnswer: "d", // [cite: 271]
    },
    {
        question: "El sistema nervioso central está compuesto por:",
        options: [
            { letter: "a", text: "Nervios espinales y nervios craneales." }, // [cite: 166]
            { letter: "b", text: "El cerebro y la médula espinal." }, // [cite: 167]
            { letter: "c", text: "Ganglios nerviosos y receptores sensoriales." }, // [cite: 167]
            { letter: "d", text: "El sistema nervioso simpático y parasimpático." }, // [cite: 167]
        ],
        correctAnswer: "b", // [cite: 271]
    },
    {
        question: "¿Cuál es una función principal del sistema musculoesquelético?",
        options: [
            { letter: "a", text: "Transportar oxígeno." },
            { letter: "b", text: "Producir hormonas." },
            { letter: "c", text: "Proporcionar soporte estructural, protección de órganos y permitir el movimiento." }, // [cite: 169]
            { letter: "d", text: "Filtrar la sangre." }, // [cite: 169]
        ],
        correctAnswer: "c", // [cite: 272]
    },
    {
        question: "La capa más externa de la piel se llama:",
        options: [
            { letter: "a", text: "Dermis" },
            { letter: "b", text: "Capa subcutánea" },
            { letter: "c", text: "Epidermis" },
            { letter: "d", text: "Fascia" },
        ],
        correctAnswer: "c", // [cite: 170, 272]
    },
    {
        question: "¿Qué glándula endocrina produce insulina, una hormona crucial para regular los niveles de azúcar en sangre?",
        options: [
            { letter: "a", text: "Tiroides" },
            { letter: "b", text: "Suprarrenal" },
            { letter: "c", text: "Pituitaria" },
            { letter: "d", text: "Páncreas" },
        ],
        correctAnswer: "d", // [cite: 171, 272]
    },
    {
        question: "La tráquea se bifurca (divide) en:",
        options: [
            { letter: "a", text: "Los alvéolos derecho e izquierdo." }, // [cite: 171]
            { letter: "b", text: "Los bronquios principales derecho e izquierdo." }, // [cite: 172]
            { letter: "c", text: "El esófago y la laringe." }, // [cite: 172]
            { letter: "d", text: "Las arterias pulmonares derecha e izquierda." }, // [cite: 172]
        ],
        correctAnswer: "b", // [cite: 272]
    },
    {
        question: "El pulso que se palpa en la muñeca, en el lado del pulgar, corresponde a la arteria:",
        options: [
            { letter: "a", text: "Carótida" },
            { letter: "b", text: "Femoral" },
            { letter: "c", text: "Braquial" },
            { letter: "d", text: "Radial" },
        ],
        correctAnswer: "d", // [cite: 173, 273]
    },
    {
        question: "La presión arterial sistólica representa:",
        options: [
            { letter: "a", text: "La presión en las arterias cuando el corazón se relaja entre latidos." }, // [cite: 173]
            { letter: "b", text: "La presión en las venas cuando el corazón se contrae." }, // [cite: 174]
            { letter: "c", text: "La presión en las arterias cuando el corazón se contrae (sístole ventricular)." }, // [cite: 175]
            { letter: "d", text: "La presión promedio en los capilares." }, // [cite: 175]
        ],
        correctAnswer: "c", // [cite: 273]
    },
    {
        question: "¿Qué sistema corporal es responsable de combatir infecciones?",
        options: [
            { letter: "a", text: "Sistema nervioso" },
            { letter: "b", text: "Sistema endocrino" },
            { letter: "c", text: "Sistema inmunológico (a menudo asociado con el linfático y los glóbulos blancos)" }, // [cite: 176]
            { letter: "d", text: "Sistema digestivo" }, // [cite: 176]
        ],
        correctAnswer: "c", // [cite: 274]
    },
    {
        question: "Los huesos largos del cuerpo, como el fémur, contribuyen a la producción de:",
        options: [
            { letter: "a", text: "Hormonas" },
            { letter: "b", text: "Células sanguíneas (hematopoyesis)" },
            { letter: "c", text: "Bilis" },
            { letter: "d", text: "Insulina" },
        ],
        correctAnswer: "b", // [cite: 176, 274]
    },
    {
        question: "¿Cuál es la función principal de las plaquetas (trombocitos)?",
        options: [
            { letter: "a", text: "Transportar dióxido de carbono." }, // [cite: 177]
            { letter: "b", text: "Combatir infecciones bacterianas." }, // [cite: 177]
            { letter: "c", text: "Iniciar el proceso de coagulación de la sangre." }, // [cite: 177]
            { letter: "d", text: "Producir anticuerpos." }, // [cite: 178]
        ],
        correctAnswer: "c", // [cite: 274]
    },
    {
        question: "El nivel de conciencia de un paciente se evalúa frecuentemente usando la escala AVDI/AVPU. ¿Qué representa la 'V'?",
        options: [
            { letter: "a", text: "Vía aérea permeable (Airway)" },
            { letter: "b", text: "Responde a estímulos Verbales" },
            { letter: "c", text: "Signos Vitales estables" },
            { letter: "d", text: "Lesión Vascular" },
        ],
        correctAnswer: "b", // [cite: 178, 275]
    },
    {
        question: "¿Dónde se encuentran principalmente los alvéolos?",
        options: [
            { letter: "a", text: "En la tráquea" }, // [cite: 180]
            { letter: "b", text: "En los bronquios principales" }, // [cite: 180]
            { letter: "c", text: "En la faringe" }, // [cite: 180]
            { letter: "d", text: "Al final de los bronquiolos, en los pulmones" }, // [cite: 180]
        ],
        correctAnswer: "d", // [cite: 275]
    },
    {
        question: "¿Qué sistema es el principal responsable de eliminar los productos de desecho nitrogenados de la sangre y regular el equilibrio de líquidos y electrolitos?",
        options: [
            { letter: "a", text: "Sistema respiratorio" },
            { letter: "b", text: "Sistema digestivo" },
            { letter: "c", text: "Sistema urinario (renal)" },
            { letter: "d", text: "Sistema tegumentario (piel)" },
        ],
        correctAnswer: "c", // [cite: 181, 275]
    },
    {
        question: "Los tendones conectan:",
        options: [
            { letter: "a", text: "Hueso con hueso." }, // [cite: 181]
            { letter: "b", text: "Músculo con hueso." }, // [cite: 182]
            { letter: "c", text: "Músculo con músculo." }, // [cite: 182]
            { letter: "d", text: "Nervio con músculo." }, // [cite: 182]
        ],
        correctAnswer: "b", // [cite: 275]
    },
    {
        question: "¿Por qué los lactantes (< 1 año) son particularmente vulnerables a la obstrucción de la vía aérea?",
        options: [
            { letter: "a", text: "Tienen dientes muy afilados." }, // [cite: 184]
            { letter: "b", text: "Sus estructuras de la vía aérea son más pequeñas y proporcionalmente diferentes (lengua más grande, tráquea más estrecha y flexible)." }, // [cite: 184]
            { letter: "c", text: "Lloran constantemente." }, // [cite: 185]
            { letter: "d", text: "No saben cómo toser eficazmente." }, // [cite: 185]
        ],
        correctAnswer: "b", // [cite: 276]
    },
    {
        question: "Un signo vital normal en un recién nacido es una frecuencia respiratoria de:",
        options: [
            { letter: "a", text: "12-20 respiraciones por minuto." }, // [cite: 185]
            { letter: "b", text: "8-10 respiraciones por minuto." }, // [cite: 186]
            { letter: "c", text: "30-60 respiraciones por minuto." }, // [cite: 186]
            { letter: "d", text: "20-30 respiraciones por minuto." }, // [cite: 186]
        ],
        correctAnswer: "c", // [cite: 277]
    },
    {
        question: "El \"miedo a los extraños\" es MÁS característico de qué grupo de edad pediátrico?",
        options: [
            { letter: "a", text: "Recién nacidos" },
            { letter: "b", text: "Lactantes mayores y niños pequeños (Toddlers)" }, // [cite: 188]
            { letter: "c", text: "Escolares" }, // [cite: 188]
            { letter: "d", text: "Adolescentes" }, // [cite: 188]
        ],
        correctAnswer: "b", // [cite: 277]
    },
    {
        question: "Al evaluar a un niño en edad preescolar (3-6 años), es importante recordar que:",
        options: [
            { letter: "a", text: "Entienden conceptos médicos complejos." }, // [cite: 188]
            { letter: "b", text: "Pueden tener miedo a las lesiones corporales y pueden interpretar literalmente lo que dices." }, // [cite: 189]
            { letter: "c", text: "Son completamente independientes y no necesitan consuelo." }, // [cite: 190]
            { letter: "d", text: "Prefieren ser examinados sin la presencia de sus padres." }, // [cite: 190]
        ],
        correctAnswer: "b", // [cite: 277]
    },
    {
        question: "¿Qué cambio fisiológico común en los adultos mayores puede afectar la eficacia de los medicamentos?",
        options: [
            { letter: "a", text: "Aumento de la función hepática y renal." }, // [cite: 192]
            { letter: "b", text: "Metabolismo más rápido de los fármacos." }, // [cite: 192]
            { letter: "c", text: "Disminución de la función hepática y renal, afectando el metabolismo y la excreción de fármacos." }, // [cite: 193]
            { letter: "d", text: "Menor número de condiciones médicas crónicas." }, // [cite: 194]
        ],
        correctAnswer: "c", // [cite: 278]
    },
    {
        question: "La \"fontanela\" o \"mollera\" en la cabeza de un lactante:",
        options: [
            { letter: "a", text: "Es un signo de lesión cerebral grave." }, // [cite: 194]
            { letter: "b", text: "Es un espacio blando donde los huesos del cráneo aún no se han fusionado, y normalmente se cierra en los primeros 1-2 años de vida." }, // [cite: 195]
            { letter: "c", text: "Debe masajearse para estimular el crecimiento cerebral." }, // [cite: 196]
            { letter: "d", text: "Indica deshidratación si está abultada." }, // [cite: 196]
        ],
        correctAnswer: "b", // [cite: 279]
    },
    {
        question: "¿Cuál de los siguientes es un desafío común al evaluar a pacientes adolescentes?",
        options: [
            { letter: "a", text: "Falta total de comprensión de su cuerpo." }, // [cite: 198]
            { letter: "b", text: "Necesidad de comunicación extremadamente simple." }, // [cite: 198]
            { letter: "c", text: "Preocupaciones sobre la privacidad y la imagen corporal; a veces reticencia a compartir información." }, // [cite: 199]
            { letter: "d", text: "Incapacidad para sentir dolor." }, // [cite: 199]
        ],
        correctAnswer: "c", // [cite: 280]
    },
    {
        question: "La polifarmacia (uso de múltiples medicamentos) es más común en qué grupo de edad y aumenta el riesgo de interacciones medicamentosas?",
        options: [
            { letter: "a", text: "Lactantes" },
            { letter: "b", text: "Niños pequeños" },
            { letter: "c", text: "Adolescentes" },
            { letter: "d", text: "Adultos mayores" },
        ],
        correctAnswer: "d", // [cite: 200, 281]
    },
    {
        question: "¿Por qué es importante mantener calientes a los lactantes y niños pequeños?",
        options: [
            { letter: "a", text: "Tienen sistemas de calefacción interna muy eficientes." }, // [cite: 202]
            { letter: "b", text: "Tienen una mayor superficie corporal en relación con su masa y mecanismos de termorregulación menos desarrollados, lo que los hace propensos a la hipotermia." }, // [cite: 202]
            { letter: "c", text: "El frío ayuda a reducir la fiebre." }, // [cite: 203]
            { letter: "d", text: "La hipotermia no es un riesgo significativo en pediatría." }, // [cite: 203]
        ],
        correctAnswer: "b", // [cite: 281]
    },
    {
        question: "¿Qué grupo de edad está típicamente en su pico de condición física pero puede experimentar altos niveles de estrés relacionados con la carrera, la familia y las finanzas?",
        options: [
            { letter: "a", text: "Adolescentes" },
            { letter: "b", text: "Adultos jóvenes (19-40 años)" }, // [cite: 205]
            { letter: "c", text: "Adultos medios (41-60 años)" }, // [cite: 205]
            { letter: "d", text: "Adultos mayores (>60 años)" }, // [cite: 205]
        ],
        correctAnswer: "b", // [cite: 282]
    },
    {
        question: "Una presentación \"atípica\" de un infarto de miocardio (ej. debilidad, confusión, dolor abdominal en lugar de dolor torácico clásico) es más probable en:",
        options: [
            { letter: "a", text: "Atletas jóvenes." }, // [cite: 205]
            { letter: "b", text: "Niños en edad escolar." }, // [cite: 206]
            { letter: "c", text: "Adultos mayores, especialmente mujeres y diabéticos." }, // [cite: 206]
            { letter: "d", text: "Adolescentes varones." }, // [cite: 206]
        ],
        correctAnswer: "c", // [cite: 282]
    },
    {
        question: "Al comunicarte con un adulto mayor con posible deterioro auditivo o visual, ¿qué debes hacer?",
        options: [
            { letter: "a", text: "Hablar muy alto y rápido." }, // [cite: 208]
            { letter: "b", text: "Asumir que no pueden entenderte." }, // [cite: 208]
            { letter: "c", text: "Asegurarte de tener su atención, hablar claro, mirarle a la cara y minimizar el ruido de fondo; usar ayudas visuales si es necesario." }, // [cite: 209, 210]
            { letter: "d", text: "Comunicarte únicamente a través de un familiar." }, // [cite: 210]
        ],
        correctAnswer: "c", // [cite: 283, 284]
    },
    {
        question: "¿Cuál es una consideración importante al evaluar a un niño pequeño (1-3 años)?",
        options: [
            { letter: "a", text: "Realizar primero los procedimientos más invasivos o dolorosos." }, // [cite: 212]
            { letter: "b", text: "Permitir que el niño sostenga un objeto de seguridad (manta, juguete) y realizar la evaluación de forma gradual, si es posible \"del pie a la cabeza\"." }, // [cite: 212]
            { letter: "c", text: "Separar inmediatamente al niño de sus padres." }, // [cite: 213]
            { letter: "d", text: "Usar terminología médica compleja para explicar los procedimientos." }, // [cite: 213]
        ],
        correctAnswer: "b", // [cite: 284]
    },
    {
        question: "Los cambios en el sistema respiratorio asociados con el envejecimiento incluyen:",
        options: [
            { letter: "a", text: "Mayor elasticidad pulmonar y fuerza muscular respiratoria." }, // [cite: 214]
            { letter: "b", text: "Menor riesgo de neumonía." }, // [cite: 215]
            { letter: "c", text: "Disminución de la elasticidad pulmonar, menor fuerza de los músculos respiratorios y menor respuesta a la hipoxia/hipercapnia." }, // [cite: 215]
            { letter: "d", text: "Aumento del tamaño de la vía aérea superior." }, // [cite: 216]
        ],
        correctAnswer: "c", // [cite: 285]
    },
    {
        question: "¿Qué grupo de edad puede empezar a comprender la causa y efecto en relación con las enfermedades o lesiones y puede ser un participante más activo en su propia evaluación?",
        options: [
            { letter: "a", text: "Lactantes" },
            { letter: "b", text: "Niños pequeños" },
            { letter: "c", text: "Niños en edad escolar (6-12 años)" }, // [cite: 217]
            { letter: "d", text: "Preescolares" }, // [cite: 217]
        ],
        correctAnswer: "c", // [cite: 286]
    },
    {
        question: "La disminución de la reserva cardiovascular en adultos mayores significa que:",
        options: [
            { letter: "a", text: "Pueden correr maratones sin entrenamiento." }, // [cite: 217]
            { letter: "b", text: "Su corazón puede compensar el estrés (como shock o fiebre) de manera más eficiente que en personas jóvenes." }, // [cite: 218]
            { letter: "c", text: "Tienen una capacidad reducida para aumentar la frecuencia cardíaca y el gasto cardíaco en respuesta al estrés, lo que los hace más vulnerables." }, // [cite: 219]
            { letter: "d", text: "La presión arterial tiende a ser extremadamente baja en este grupo de edad." }, // [cite: 220]
        ],
        correctAnswer: "c", // [cite: 286]
    },
    {
        question: "¿Cuál es una estrategia efectiva al evaluar a un lactante?",
        options: [
            { letter: "a", text: "Comenzar con la cabeza y la boca." }, // [cite: 221]
            { letter: "b", text: "Realizar la evaluación mientras el lactante está en los brazos del cuidador si es posible, y auscultar corazón y pulmones cuando esté tranquilo." }, // [cite: 222]
            { letter: "c", text: "Usar movimientos rápidos e impredecibles." }, // [cite: 223]
            { letter: "d", text: "Ignorar al cuidador y centrarse solo en el bebé." }, // [cite: 223]
        ],
        correctAnswer: "b", // [cite: 287]
    },
];