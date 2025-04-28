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
    {
        question: "Al levantar una camilla pesada, ¿dónde debes intentar mantener el peso?",
        options: [
            { letter: "a", text: "Lo más lejos posible de tu cuerpo para mejorar el equilibrio." }, //
            { letter: "b", text: "Lo más cerca posible de tu cuerpo." }, //
            { letter: "c", text: "Principalmente sobre tu espalda baja." }, //
            { letter: "d", text: "Siempre por encima de tu cabeza." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es el principio MÁS importante de la mecánica corporal para prevenir lesiones?",
        options: [
            { letter: "a", text: "Levantar rápidamente para terminar antes." }, //
            { letter: "b", text: "Usar los músculos fuertes de las piernas y mantener la espalda recta." }, //
            { letter: "c", text: "Girar la cintura mientras se levanta." }, //
            { letter: "d", text: "Mantener los brazos completamente extendidos." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuándo está indicado un movimiento de EMERGENCIA de un paciente?",
        options: [
            { letter: "a", text: "Siempre que el paciente se queje de dolor." }, //
            { letter: "b", text: "Cuando el paciente necesita ser movido a una superficie más cómoda." }, //
            { letter: "c", text: "Cuando existe un peligro inmediato para el paciente o el reanimador en la ubicación actual (fuego, derrumbe, etc.)." }, //
            { letter: "d", text: "Para facilitar una evaluación secundaria completa." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué dispositivo es MÁS apropiado para mover a un paciente sin sospecha de trauma espinal desde una cama a una camilla?",
        options: [
            { letter: "a", text: "Tabla espinal larga." }, //
            { letter: "b", text: "Método de levantamiento directo (direct carry) o sábana de arrastre (draw sheet method)." }, //
            { letter: "c", text: "Chaleco de extricación (KED)." }, //
            { letter: "d", text: "Camilla de cuchara (scoop stretcher)." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La camilla de cuchara (scoop stretcher) es especialmente útil para:",
        options: [
            { letter: "a", text: "Pacientes que necesitan sentarse." }, //
            { letter: "b", text: "Mover pacientes con mínima movilización desde espacios reducidos o con sospecha de lesión pélvica/cadera." }, //
            { letter: "c", text: "Transporte a larga distancia dentro del hospital." }, //
            { letter: "d", text: "Pacientes bariátricos exclusivamente." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿En qué posición se debe colocar generalmente a un paciente consciente con dificultad respiratoria (disnea) sin sospecha de trauma?",
        options: [
            { letter: "a", text: "Supina (acostado boca arriba)" }, //
            { letter: "b", text: "Prona (acostado boca abajo)" }, //
            { letter: "c", text: "Posición de Fowler o semi-Fowler (sentado o semi-sentado)" }, //
            { letter: "d", text: "Trendelenburg (cabeza más baja que los pies)" }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué técnica de movimiento implica tirar del paciente por la ropa desde los hombros?",
        options: [
            { letter: "a", text: "Arrastre inclinado." }, //
            { letter: "b", text: "Arrastre por las axilas." }, //
            { letter: "c", text: "Arrastre de ropa (clothes drag)." }, //
            { letter: "d", text: "Levantamiento de manta." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Para mover a un paciente estable por escaleras estrechas, ¿qué equipo sería el MÁS adecuado?",
        options: [
            { letter: "a", text: "Camilla de ambulancia estándar." }, //
            { letter: "b", text: "Tabla espinal larga." }, //
            { letter: "c", text: "Silla de traslado (stair chair)." }, //
            { letter: "d", text: "Camilla de cuchara (scoop stretcher)." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Antes de intentar levantar a cualquier paciente, el TAMP-B debe:",
        options: [
            { letter: "a", text: "Calcular el peso exacto del paciente." }, //
            { letter: "b", text: "Estimar el peso y determinar si necesita ayuda adicional." }, //
            { letter: "c", text: "Intentar levantarlo solo primero." }, //
            { letter: "d", text: "Pedirle al paciente que intente caminar, sin importar su condición." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "El chaleco de extricación (KED - Kendrick Extrication Device) se utiliza principalmente para:",
        options: [
            { letter: "a", text: "Mover pacientes de la cama a la camilla." }, //
            { letter: "b", text: "Inmovilizar y extraer a un paciente sentado con sospecha de lesión espinal (ej. accidente de coche)." }, //
            { letter: "c", text: "Transportar pacientes pediátricos." }, //
            { letter: "d", text: "Levantar pacientes bariátricos." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Un paciente en shock, sin trauma y sin dificultad respiratoria, a menudo se beneficia de ser colocado en posición:",
        options: [
            { letter: "a", text: "Fowler alta." }, //
            { letter: "b", text: "Supina, posiblemente con las piernas ligeramente elevadas (Trendelenburg modificado, según protocolo)." }, //
            { letter: "c", text: "Prona." }, //
            { letter: "d", text: "Sentado con las piernas colgando." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La comunicación clara entre los miembros del equipo es crucial durante un levantamiento para asegurar:",
        options: [
            { letter: "a", text: "Que todos levanten al mismo tiempo y de manera coordinada." }, //
            { letter: "b", text: "Que el paciente se sienta importante." }, //
            { letter: "c", text: "Que se cumpla con el papeleo." }, //
            { letter: "d", text: "Que el levantamiento sea más rápido." }, //
        ],
        correctAnswer: "a", //
    },
    {
        question: "¿Qué tipo de movimiento se utiliza cuando la condición del paciente es grave y requiere transporte inmediato o no se puede evaluar adecuadamente en el lugar, pero no hay peligro inminente en la escena?",
        options: [
            { letter: "a", text: "Movimiento de emergencia." }, //
            { letter: "b", text: "Movimiento no urgente." }, //
            { letter: "c", text: "Movimiento urgente (ej. extricación rápida con tabla espinal)." }, //
            { letter: "d", text: "Movimiento de conveniencia." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es una consideración clave al mover a un paciente bariátrico (muy obeso)?",
        options: [
            { letter: "a", text: "Siempre pueden ser movidos por dos personas." }, //
            { letter: "b", text: "Usar el mismo equipo que para un paciente de peso promedio." }, //
            { letter: "c", text: "Asegurarse de tener suficiente personal y equipo adecuado (camillas bariátricas, técnicas especiales) y planificar el movimiento cuidadosamente." }, //
            { letter: "d", text: "Moverlos lo más rápido posible para minimizar el esfuerzo." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La tabla espinal larga se usa para:",
        options: [
            { letter: "a", text: "Proporcionar comodidad durante el transporte." }, //
            { letter: "b", text: "Inmovilizar a pacientes con sospecha de lesión en la columna vertebral, especialmente durante el traslado." }, //
            { letter: "c", text: "Mover pacientes por escaleras." }, //
            { letter: "d", text: "Sentar a pacientes con dificultad respiratoria." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Al trasladar a un paciente en la camilla principal de la ambulancia, ¿cuál es una práctica de seguridad esencial?",
        options: [
            { letter: "a", text: "Dejar las barandillas laterales bajadas para facilitar el acceso." }, //
            { letter: "b", text: "Asegurar siempre al paciente con todos los cinturones de seguridad." }, //
            { letter: "c", text: "Mover la camilla lo más rápido posible sobre terreno irregular." }, //
            { letter: "d", text: "Permitir que el paciente se siente en el borde si lo desea." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Un paciente inconsciente sin sospecha de trauma que está vomitando debe colocarse preferentemente en:",
        options: [
            { letter: "a", text: "Posición supina." }, //
            { letter: "b", text: "Posición de recuperación (lateral de seguridad)." }, //
            { letter: "c", text: "Posición de Fowler." }, //
            { letter: "d", text: "Posición prona." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "El movimiento \"no urgente\" se caracteriza por:",
        options: [
            { letter: "a", text: "Realizarse rápidamente debido a peligros en la escena." }, //
            { letter: "b", text: "Priorizar la velocidad sobre la comodidad del paciente." }, //
            { letter: "c", text: "Utilizarse cuando no hay amenazas inmediatas a la vida y se puede planificar el movimiento cuidadosamente, a menudo usando dispositivos de traslado." }, //
            { letter: "d", text: "Ser exclusivo para pacientes de trauma." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es el PRIMER paso en cualquier respuesta de SEM, incluso antes de llegar al lado del paciente?",
        options: [
            { letter: "a", text: "Realizar la evaluación primaria." }, //
            { letter: "b", text: "Evaluar la seguridad de la escena (Scene Size-up)." }, //
            { letter: "c", text: "Obtener la historia SAMPLE." }, //
            { letter: "d", text: "Tomar los signos vitales." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La evaluación primaria (XABCDE) tiene como objetivo:",
        options: [
            { letter: "a", text: "Obtener un diagnóstico definitivo." }, //
            { letter: "b", text: "Identificar y tratar inmediatamente las condiciones que amenazan la vida." }, //
            { letter: "c", text: "Realizar una exploración física detallada de la cabeza a los pies." }, //
            { letter: "d", text: "Determinar el historial médico completo del paciente." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Al evaluar la Vía Aérea (A) en un paciente inconsciente, ¿qué debes buscar y hacer primero?",
        options: [
            { letter: "a", text: "Administrar oxígeno inmediatamente." }, //
            { letter: "b", text: "Buscar obstrucciones, escuchar ruidos (ronquidos, gorgoteo) y abrir la vía aérea (ej. maniobra frente-mentón o tracción mandibular si hay sospecha de trauma)." }, //
            { letter: "c", text: "Evaluar la frecuencia respiratoria." }, //
            { letter: "d", text: "Tomar la presión arterial." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Qué evalúas en la 'B' (Breathing/Ventilación) de la evaluación primaria?",
        options: [
            { letter: "a", text: "La frecuencia y calidad del pulso." }, //
            { letter: "b", text: "El nivel de conciencia." }, //
            { letter: "c", text: "La frecuencia, profundidad y esfuerzo respiratorio; auscultar campos pulmonares si es necesario; verificar la oxigenación." }, //
            { letter: "d", text: "El color y temperatura de la piel." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál de los siguientes hallazgos en la 'C' (Circulación) requiere atención inmediata?",
        options: [
            { letter: "a", text: "Pulso radial fuerte y regular de 80 lpm." }, //
            { letter: "b", text: "Piel tibia, rosada y seca." }, //
            { letter: "c", text: "Hemorragia arterial activa (exanguinante)." }, //
            { letter: "d", text: "Llenado capilar de 2 segundos." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La escala AVDI (o AVPU en inglés) se utiliza para evaluar:",
        options: [
            { letter: "a", text: "La frecuencia respiratoria." }, //
            { letter: "b", text: "La presión arterial." }, //
            { letter: "c", text: "El nivel de conciencia del paciente." }, //
            { letter: "d", text: "La presencia de dolor." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué significa la 'E' en XABCDE?",
        options: [
            { letter: "a", text: "Eventos que precedieron al incidente." }, //
            { letter: "b", text: "Equipo necesario." }, //
            { letter: "c", text: "Exposición del paciente (buscar lesiones ocultas) y control del Entorno (prevenir hipotermia)." }, //
            { letter: "d", text: "Evaluación de la efectividad del tratamiento." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La nemotecnia SAMPLE se utiliza para obtener:",
        options: [
            { letter: "a", text: "Los signos vitales del paciente." }, //
            { letter: "b", text: "Una descripción detallada del dolor." }, //
            { letter: "c", text: "El historial médico relevante del paciente." }, //
            { letter: "d", text: "Los hallazgos de la exploración física." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué pregunta corresponde a la 'P' en SAMPLE?",
        options: [
            { letter: "a", text: "¿Qué Pasó? (Eventos)" }, //
            { letter: "b", text: "¿Tiene algún Dolor (Pain)?" }, //
            { letter: "c", text: "¿Tiene antecedentes médicos Previos o Pertinentes?" }, //
            { letter: "d", text: "¿Cuál fue su Última (Past) ingesta oral?" }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La nemotecnia OPQRST se utiliza específicamente para evaluar:",
        options: [
            { letter: "a", text: "El nivel de conciencia." }, //
            { letter: "b", text: "La queja principal del paciente, especialmente el dolor." }, //
            { letter: "c", text: "Las alergias a medicamentos." }, //
            { letter: "d", text: "Los signos vitales basales." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Qué representa la 'Q' en OPQRST?",
        options: [
            { letter: "a", text: "Cantidad (Quantity) - ¿Cuántos medicamentos tomó?" }, //
            { letter: "b", text: "Calidad (Quality) - ¿Cómo es el dolor (ej. opresivo, punzante, quemante)?" }, //
            { letter: "c", text: "Preguntas (Questions) - ¿Tiene alguna pregunta?" }, //
            { letter: "d", text: "Rapidez (Quickness) - ¿Apareció rápido el dolor?" }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuándo se realiza típicamente la evaluación secundaria?",
        options: [
            { letter: "a", text: "Antes de la evaluación primaria." }, //
            { letter: "b", text: "Solo en pacientes de trauma." }, //
            { letter: "c", text: "Después de completar la evaluación primaria y manejar las amenazas inmediatas, si el tiempo y la condición del paciente lo permiten." }, //
            { letter: "d", text: "Únicamente en el hospital." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es la diferencia principal entre una evaluación física enfocada y una evaluación rápida de trauma (céfalo-caudal)?",
        options: [
            { letter: "a", text: "La evaluación rápida se enfoca solo en la queja principal." }, //
            { letter: "b", text: "La evaluación enfocada examina todo el cuerpo de la cabeza a los pies." }, //
            { letter: "c", text: "La evaluación enfocada se centra en la región afectada según la queja o lesión, mientras que la rápida es una revisión sistemática de cabeza a pies (usualmente para trauma significativo o paciente inconsciente)." }, //
            { letter: "d", text: "No hay diferencia, son lo mismo." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La nemotecnia DCAP-BTLS se usa durante la exploración física para buscar signos de lesión. ¿Qué significa la 'D'?",
        options: [
            { letter: "a", text: "Dificultad respiratoria." }, //
            { letter: "b", text: "Dolor (dolor a la palpación)." }, //
            { letter: "c", text: "Deformidades." }, //
            { letter: "d", text: "Decoloración." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La reevaluación de un paciente estable debe realizarse al menos cada:",
        options: [
            { letter: "a", text: "5 minutos." }, //
            { letter: "b", text: "15 minutos." }, //
            { letter: "c", text: "30 minutos." }, //
            { letter: "d", text: "Solo una vez antes de llegar al hospital." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La reevaluación de un paciente inestable debe realizarse al menos cada:",
        options: [
            { letter: "a", text: "5 minutos." }, //
            { letter: "b", text: "15 minutos." }, //
            { letter: "c", text: "20 minutos." }, //
            { letter: "d", text: "Solo si hay un cambio significativo." }, //
        ],
        correctAnswer: "a", //
    },
    {
        question: "¿Qué componente de los signos vitales nos da información sobre la perfusión periférica?",
        options: [
            { letter: "a", text: "La frecuencia respiratoria." }, //
            { letter: "b", text: "La temperatura corporal central." }, //
            { letter: "c", text: "El color, temperatura y humedad de la piel, y el llenado capilar." }, //
            { letter: "d", text: "La escala de coma de Glasgow." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué indica una pupila dilatada y no reactiva en un paciente con traumatismo craneoencefálico?",
        options: [
            { letter: "a", text: "Una condición normal." }, //
            { letter: "b", text: "Posible aumento de la presión intracraneal y herniación cerebral (un signo grave)." }, //
            { letter: "c", text: "Uso de gotas oftálmicas." }, //
            { letter: "d", text: "Que el paciente está despierto y alerta." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es el propósito de determinar el Mecanismo de Lesión (MOI) en un paciente de trauma?",
        options: [
            { letter: "a", text: "Determinar quién tuvo la culpa del accidente." }, //
            { letter: "b", text: "Ayudar a predecir posibles lesiones ocultas basadas en las fuerzas involucradas." }, //
            { letter: "c", text: "Decidir qué hospital está más cerca." }, //
            { letter: "d", text: "Calcular el costo del daño vehicular." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Qué significa P.E.R.R.L.A. (o P.I.C.A. en algunas regiones) al evaluar las pupilas?",
        options: [
            { letter: "a", text: "Palidez, Equimosis, Rigidez, Ruidos, Laceraciones, Abrasiones." }, //
            { letter: "b", text: "Presión, Enrojecimiento, Reacción, Rotación, Lagrimeo, Agudeza." }, //
            { letter: "c", text: "Pupilas Iguales, Redondas, Reactivas a la Luz y Acomodación." }, //
            { letter: "d", text: "Paciente Intubado Con Anestesia." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es el primer paso al evaluar la Ventilación (B) en un paciente consciente que habla contigo?",
        options: [
            { letter: "a", text: "Insertar una cánula orofaríngea." }, //
            { letter: "b", text: "Evaluar la frecuencia, ritmo y calidad de sus respiraciones y si habla en frases completas." }, //
            { letter: "c", text: "Aplicar inmediatamente ventilación con bolsa-mascarilla." }, //
            { letter: "d", text: "Auscultar los pulmones bilateralmente." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La auscultación de ruidos respiratorios como sibilancias sugiere:",
        options: [
            { letter: "a", text: "Líquido en los alvéolos (edema pulmonar)." }, //
            { letter: "b", text: "Obstrucción de la vía aérea superior (cuerpo extraño)." }, //
            { letter: "c", text: "Estrechamiento de las vías aéreas inferiores (broncoespasmo, como en asma o EPOC)." }, //
            { letter: "d", text: "Neumotórax a tensión." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es la diferencia entre un signo y un síntoma?",
        options: [
            { letter: "a", text: "Son lo mismo." }, //
            { letter: "b", text: "Un signo es algo que el TAMP observa o mide (objetivo), mientras que un síntoma es algo que el paciente siente o describe (subjetivo)." }, //
            { letter: "c", text: "Un signo es subjetivo y un síntoma es objetivo." }, //
            { letter: "d", text: "Un signo se relaciona con trauma y un síntoma con enfermedad médica." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Por qué es importante preguntar por la \"Última ingesta oral\" (L en SAMPLE)?",
        options: [
            { letter: "a", text: "Para saber si el paciente tiene hambre." }, //
            { letter: "b", text: "Por si el paciente necesita cirugía (riesgo de aspiración con anestesia) o si los síntomas podrían estar relacionados con alimentos." }, //
            { letter: "c", text: "Para determinar sus preferencias alimenticias." }, //
            { letter: "d", text: "No es relevante en la atención prehospitalaria." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Si durante la evaluación primaria encuentras una amenaza para la vida (ej. obstrucción de vía aérea, hemorragia grave), ¿qué debes hacer?",
        options: [
            { letter: "a", text: "Continuar con la evaluación primaria completa antes de tratarla." }, //
            { letter: "b", text: "Tratarla inmediatamente antes de continuar con el siguiente paso de la evaluación primaria." }, //
            { letter: "c", text: "Omitir la evaluación primaria y pasar directamente a la secundaria." }, //
            { letter: "d", text: "Anotarla para tratarla durante el transporte." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La Escala de Coma de Glasgow (ECG / GCS) evalúa tres componentes. ¿Cuáles son?",
        options: [
            { letter: "a", text: "Respuesta Ocular, Respuesta Verbal y Respuesta Motora." }, //
            { letter: "b", text: "Pulso, Respiración y Presión Arterial." }, //
            { letter: "c", text: "Apertura de Vía Aérea, Ventilación y Circulación." }, //
            { letter: "d", text: "Signos, Síntomas y Alergias." }, //
        ],
        correctAnswer: "a", //
    },
    {
        question: "¿Cuál es el propósito de la Reevaluación continua?",
        options: [
            { letter: "a", text: "Cumplir con un requisito de tiempo." }, //
            { letter: "b", text: "Detectar cambios en la condición del paciente (mejoría o deterioro) y evaluar la efectividad de las intervenciones." }, //
            { letter: "c", text: "Llenar el tiempo durante el transporte." }, //
            { letter: "d", text: "Repetir la historia SAMPLE." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es la maniobra manual preferida para abrir la vía aérea en un paciente INCONSCIENTE SIN sospecha de lesión cervical?",
        options: [
            { letter: "a", text: "Tracción mandibular (Jaw-thrust)." }, //
            { letter: "b", text: "Inclinación de la cabeza y elevación del mentón (Head-tilt/Chin-lift)." }, //
            { letter: "c", text: "Elevación solo del mentón." }, //
            { letter: "d", text: "Rotación de la cabeza hacia un lado." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿En qué situación se debe utilizar la maniobra de tracción mandibular para abrir la vía aérea?",
        options: [
            { letter: "a", text: "En todos los pacientes inconscientes." }, //
            { letter: "b", text: "Solo en niños." }, //
            { letter: "c", text: "Cuando se sospecha una lesión en la columna cervical (trauma)." }, //
            { letter: "d", text: "Cuando la maniobra de inclinación de cabeza-elevación de mentón no funciona." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La cánula orofaríngea (OPA) está indicada en:",
        options: [
            { letter: "a", text: "Pacientes conscientes que se quejan de dificultad para respirar." }, //
            { letter: "b", text: "Pacientes inconscientes SIN reflejo nauseoso." }, //
            { letter: "c", text: "Pacientes con trauma facial severo." }, //
            { letter: "d", text: "Pacientes que han ingerido veneno." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cómo se mide correctamente una cánula orofaríngea (OPA) antes de insertarla?",
        options: [
            { letter: "a", text: "Desde la comisura labial hasta el ángulo de la mandíbula." }, //
            { letter: "b", text: "Desde el centro de la boca hasta el lóbulo de la oreja." }, //
            { letter: "c", text: "Desde la punta de la nariz hasta el lóbulo de la oreja." }, //
            { letter: "d", text: "El tamaño no importa, todas son universales." }, //
        ],
        correctAnswer: "a", //
    },
    {
        question: "¿Cuál es una contraindicación para el uso de la cánula nasofaríngea (NPA)?",
        options: [
            { letter: "a", text: "Paciente inconsciente sin reflejo nauseoso." }, //
            { letter: "b", text: "Paciente consciente con dificultad respiratoria." }, //
            { letter: "c", text: "Sospecha de fractura de la base del cráneo (signos como ojos de mapache, signo de Battle)." }, //
            { letter: "d", text: "Paciente con asma." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Al succionar la vía aérea de un adulto, la duración de la succión no debe exceder:",
        options: [
            { letter: "a", text: "5 segundos." }, //
            { letter: "b", text: "10-15 segundos." }, //
            { letter: "c", text: "30 segundos." }, //
            { letter: "d", text: "1 minuto." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Qué dispositivo de oxigenoterapia administra la concentración de oxígeno MÁS ALTA?",
        options: [
            { letter: "a", text: "Cánula nasal." }, //
            { letter: "b", text: "Mascarilla simple." }, //
            { letter: "c", text: "Mascarilla no recirculante con reservorio (Non-rebreather mask)." }, //
            { letter: "d", text: "Mascarilla tipo Venturi." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es el flujo de oxígeno recomendado para una cánula nasal?",
        options: [
            { letter: "a", text: "10-15 litros por minuto (lpm)." }, //
            { letter: "b", text: "6-10 lpm." }, //
            { letter: "c", text: "1-6 lpm." }, //
            { letter: "d", text: "Menos de 1 lpm." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La ventilación con Bolsa-Válvula-Mascarilla (BVM/Ambú) está indicada cuando el paciente:",
        options: [
            { letter: "a", text: "Está hablando claramente pero rápido." }, //
            { letter: "b", text: "Tiene una frecuencia respiratoria de 16 rpm y buen volumen tidal." }, //
            { letter: "c", text: "Está en apnea (no respira) o tiene ventilaciones inadecuadas (muy lentas, muy superficiales)." }, //
            { letter: "d", text: "Tiene una saturación de oxígeno del 95% en aire ambiente." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es la frecuencia de ventilación adecuada para un adulto usando una BVM?",
        options: [
            { letter: "a", text: "Una ventilación cada 10 segundos (6 por minuto)." }, //
            { letter: "b", text: "Una ventilación cada 5-6 segundos (10-12 por minuto)." }, //
            { letter: "c", text: "Una ventilación cada 3 segundos (20 por minuto)." }, //
            { letter: "d", text: "Lo más rápido posible." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Un ruido de \"gorgoteo\" al evaluar la vía aérea usualmente indica:",
        options: [
            { letter: "a", text: "Estrechamiento de las vías aéreas inferiores (broncoespasmo)." }, //
            { letter: "b", text: "Obstrucción parcial de la vía aérea superior por la lengua." }, //
            { letter: "c", text: "Presencia de líquidos (sangre, vómito, secreciones) en la vía aérea superior." }, //
            { letter: "d", text: "Inflamación de la laringe (crup)." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué se debe hacer INMEDIATAMENTE si se escuchan gorgoteos en la vía aérea de un paciente?",
        options: [
            { letter: "a", text: "Insertar una cánula orofaríngea." }, //
            { letter: "b", text: "Administrar oxígeno a alto flujo." }, //
            { letter: "c", text: "Realizar succión de la vía aérea." }, //
            { letter: "d", text: "Iniciar ventilaciones con BVM." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es el propósito principal de una cánula nasofaríngea (NPA)?",
        options: [
            { letter: "a", text: "Administrar medicamentos directamente a los pulmones." }, //
            { letter: "b", text: "Mantener permeable la vía aérea superior en pacientes que pueden tener reflejo nauseoso." }, //
            { letter: "c", text: "Reemplazar la necesidad de succión." }, //
            { letter: "d", text: "Servir como ruta para la intubación endotraqueal." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Qué indica una buena técnica de ventilación con BVM?",
        options: [
            { letter: "a", text: "Ruidos fuertes provenientes del estómago." }, //
            { letter: "b", text: "La máxima compresión posible de la bolsa." }, //
            { letter: "c", text: "Elevación visible y adecuada del tórax con cada ventilación." }, //
            { letter: "d", text: "Una frecuencia de 30 ventilaciones por minuto." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué medida de seguridad es ESENCIAL al manejar cilindros de oxígeno?",
        options: [
            { letter: "a", text: "Mantenerlos acostados durante el transporte." }, //
            { letter: "b", text: "Usar aceite o grasa para lubricar el regulador." }, //
            { letter: "c", text: "Asegurarse de que no haya fuentes de ignición cerca (fuego, chispas, fumar) y manejarlos con cuidado." }, //
            { letter: "d", text: "Abrir la válvula principal lo más rápido posible." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué adjunto de vía aérea es preferible en un paciente con trauma facial severo que le impide abrir la boca o tener buen sello con mascarilla?",
        options: [
            { letter: "a", text: "Cánula orofaríngea (OPA)." }, //
            { letter: "b", text: "Cánula nasofaríngea (NPA), si no hay contraindicación." }, //
            { letter: "c", text: "Intubación endotraqueal inmediata por el TAMP-B." }, //
            { letter: "d", text: "No usar ningún adjunto." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "El estridor es un ruido agudo escuchado durante la inspiración y generalmente indica:",
        options: [
            { letter: "a", text: "Líquido en la vía aérea inferior." }, //
            { letter: "b", text: "Broncoespasmo severo." }, //
            { letter: "c", text: "Obstrucción parcial de la vía aérea SUPERIOR (ej. cuerpo extraño, edema laríngeo)." }, //
            { letter: "d", text: "Neumonía." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Al usar una BVM, ¿cuál es el riesgo si se ventila demasiado rápido o con demasiado volumen?",
        options: [
            { letter: "a", text: "Hipoxia." }, //
            { letter: "b", text: "Insuflación gástrica, que puede llevar a vómito y aspiración." }, //
            { letter: "c", text: "Colapso pulmonar (atelectasia)." }, //
            { letter: "d", text: "Bradicardia." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Qué dispositivo de oxígeno permite administrar una concentración de O2 específica y es útil en pacientes con EPOC que retienen CO2?",
        options: [
            { letter: "a", text: "Mascarilla no recirculante." }, //
            { letter: "b", text: "Mascarilla simple." }, //
            { letter: "c", text: "Mascarilla tipo Venturi." }, //
            { letter: "d", text: "Cánula nasal." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es el primer paso si un paciente adulto consciente con sospecha de atragantamiento (obstrucción completa) no puede toser, hablar ni respirar?",
        options: [
            { letter: "a", text: "Iniciar RCP inmediatamente." }, //
            { letter: "b", text: "Realizar compresiones abdominales (maniobra de Heimlich)." }, //
            { letter: "c", text: "Intentar la ventilación boca a boca." }, //
            { letter: "d", text: "Realizar un barrido digital a ciegas." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "El nombre oficial y no propietario de un medicamento se conoce como:",
        options: [
            { letter: "a", text: "Nombre comercial o de marca." }, //
            { letter: "b", text: "Nombre químico." }, //
            { letter: "c", text: "Nombre genérico." }, //
            { letter: "d", text: "Nombre código." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Una razón específica por la cual NO se debe administrar un medicamento, incluso si normalmente está indicado para esa condición, se llama:",
        options: [
            { letter: "a", text: "Indicación." }, //
            { letter: "b", text: "Efecto secundario." }, //
            { letter: "c", text: "Contraindicación." }, //
            { letter: "d", text: "Acción terapéutica." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La vía de administración sublingual (SL) implica colocar el medicamento:",
        options: [
            { letter: "a", text: "Debajo de la lengua." }, //
            { letter: "b", text: "Inyectado en el músculo." }, //
            { letter: "c", text: "Inhalado en los pulmones." }, //
            { letter: "d", text: "Aplicado sobre la piel." }, //
        ],
        correctAnswer: "a", //
    },
    {
        question: "¿Cuál de los siguientes NO es uno de los \"6 correctos\" de la administración de medicamentos?",
        options: [
            { letter: "a", text: "Paciente correcto." }, //
            { letter: "b", text: "Medicamento correcto." }, //
            { letter: "c", text: "Color correcto del medicamento." }, //
            { letter: "d", text: "Dosis correcta." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Un efecto no deseado de un medicamento que ocurre además del efecto terapéutico esperado se denomina:",
        options: [
            { letter: "a", text: "Indicación." }, //
            { letter: "b", text: "Contraindicación." }, //
            { letter: "c", text: "Acción." }, //
            { letter: "d", text: "Efecto secundario." }, //
        ],
        correctAnswer: "d", //
    },
    {
        question: "¿Cuál es la forma farmacéutica del Salbutamol/Albuterol cuando se usa en un inhalador de dosis medida (MDI)?",
        options: [
            { letter: "a", text: "Tableta." }, //
            { letter: "b", text: "Gel." }, //
            { letter: "c", text: "Aerosol presurizado." }, //
            { letter: "d", text: "Polvo para reconstituir." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La vía de administración oral (PO) significa que el paciente:",
        options: [
            { letter: "a", text: "Inhala el medicamento." }, //
            { letter: "b", text: "Se aplica el medicamento en la piel." }, //
            { letter: "c", text: "Recibe una inyección." }, //
            { letter: "d", text: "Traga el medicamento." }, //
        ],
        correctAnswer: "d", //
    },
    {
        question: "La \"acción\" de un medicamento se refiere a:",
        options: [
            { letter: "a", text: "Cómo se ve el medicamento." }, //
            { letter: "b", text: "El efecto que tiene en el cuerpo." }, //
            { letter: "c", text: "Las razones para administrarlo." }, //
            { letter: "d", text: "Las razones para no administrarlo." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Qué vía de administración permite la absorción más rápida en la circulación sistémica?",
        options: [
            { letter: "a", text: "Oral (PO)." }, //
            { letter: "b", text: "Subcutánea (SC)." }, //
            { letter: "c", text: "Intravenosa (IV) - (Aunque no la administre el TAMP-B, es importante conocer el principio)." }, //
            { letter: "d", text: "Tópica (sobre la piel)." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Verificar la fecha de caducidad de un medicamento es parte de asegurar el:",
        options: [
            { letter: "a", text: "Paciente correcto." }, //
            { letter: "b", text: "Medicamento correcto (y su integridad/eficacia)." }, //
            { letter: "c", text: "Vía correcta." }, //
            { letter: "d", text: "Momento correcto." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Qué significa la vía de administración Intramuscular (IM)?",
        options: [
            { letter: "a", text: "Dentro de la vena." }, //
            { letter: "b", text: "Debajo de la piel." }, //
            { letter: "c", text: "Dentro del músculo." }, //
            { letter: "d", text: "Dentro de la nariz." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La documentación precisa después de administrar un medicamento debe incluir TODO EXCEPTO:",
        options: [
            { letter: "a", text: "El nombre del medicamento." }, //
            { letter: "b", text: "La dosis administrada." }, //
            { letter: "c", text: "La vía de administración." }, //
            { letter: "d", text: "El costo del medicamento." }, //
        ],
        correctAnswer: "d", //
    },
    {
        question: "¿Por qué es importante conocer las alergias del paciente (la 'A' en SAMPLE) antes de administrar o ayudar con un medicamento?",
        options: [
            { letter: "a", text: "Para calcular la dosis correcta." }, //
            { letter: "b", text: "Para evitar una reacción alérgica potencialmente mortal." }, //
            { letter: "c", text: "Para determinar la vía de administración." }, //
            { letter: "d", text: "No es relevante para la farmacología." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Los medicamentos como la nitroglicerina y la glucosa oral dependen de una absorción a través de:",
        options: [
            { letter: "a", text: "La piel." }, //
            { letter: "b", text: "Las membranas mucosas (sublingual, bucal)." }, //
            { letter: "c", text: "El tracto gastrointestinal después de la digestión." }, //
            { letter: "d", text: "La vía intramuscular." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Qué información debe verificarse SIEMPRE en la etiqueta del medicamento antes de administrarlo?",
        options: [
            { letter: "a", text: "El color de la etiqueta." }, //
            { letter: "b", text: "El nombre del medicamento y la concentración/dosis." }, //
            { letter: "c", text: "El fabricante." }, //
            { letter: "d", text: "El país de origen." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "El término \"indicación\" en farmacología se refiere a:",
        options: [
            { letter: "a", text: "Un efecto adverso del medicamento." }, //
            { letter: "b", text: "La razón o condición médica para la cual se administra el medicamento." }, //
            { letter: "c", text: "La forma en que el medicamento se presenta (tableta, líquido, etc.)." }, //
            { letter: "d", text: "La interacción con otros medicamentos." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Ayudar a un paciente a tomar su propio medicamento prescrito (ej. inhalador) requiere:",
        options: [
            { letter: "a", text: "Ignorar los \"6 correctos\" ya que es medicamento del paciente." }, //
            { letter: "b", text: "Confirmar los \"6 correctos\" (que sea su medicamento, dosis correcta según prescripción, etc.) y seguir protocolos locales." }, //
            { letter: "c", text: "Administrar una dosis doble por si acaso." }, //
            { letter: "d", text: "Desalentar al paciente de tomar su medicación." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es la indicación principal para administrar glucosa oral?",
        options: [
            { letter: "a", text: "Paciente inconsciente con sospecha de diabetes." }, //
            { letter: "b", text: "Paciente consciente con nivel bajo de glucosa en sangre confirmado (hipoglucemia) que puede tragar." }, //
            { letter: "c", text: "Paciente con hiperglucemia (azúcar alta)." }, //
            { letter: "d", text: "Cualquier paciente diabético, como medida preventiva." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es la principal contraindicación para administrar nitroglicerina a un paciente con dolor torácico?",
        options: [
            { letter: "a", text: "Frecuencia cardíaca > 100 lpm." }, //
            { letter: "b", text: "Presión arterial sistólica < 90-100 mmHg o uso reciente de inhibidores de PDE-5 (Viagra, Cialis, etc.)." }, //
            { letter: "c", text: "El paciente no tiene receta para nitroglicerina. (Esto es una condición necesaria, pero la contraindicación es la de la opción b)." }, //
            { letter: "d", text: "El paciente tomó aspirina." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La aspirina se administra en el contexto prehospitalario a pacientes con sospecha de síndrome coronario agudo porque:",
        options: [
            { letter: "a", text: "Alivia el dolor inmediatamente." }, //
            { letter: "b", text: "Disuelve los coágulos ya formados." }, //
            { letter: "c", text: "Ayuda a prevenir la formación de nuevos coágulos al inhibir la agregación plaquetaria." }, //
            { letter: "d", text: "Baja la presión arterial." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿En qué sitio anatómico se administra un autoinyector de epinefrina?",
        options: [
            { letter: "a", text: "En el músculo deltoides (brazo)." }, //
            { letter: "b", text: "En la cara anterolateral del muslo." }, //
            { letter: "c", text: "Por vía subcutánea en el abdomen." }, //
            { letter: "d", text: "Por vía intravenosa." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es la indicación CLAVE para usar un autoinyector de epinefrina?",
        options: [
            { letter: "a", text: "Reacción alérgica leve con picazón." }, //
            { letter: "b", text: "Ataque de asma." }, //
            { letter: "c", text: "Anafilaxia: reacción alérgica severa con dificultad respiratoria y/o hipotensión (shock)." }, //
            { letter: "d", text: "Dolor torácico." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Al asistir a un paciente con su inhalador de dosis medida (MDI) para el asma, ¿qué instrucción es importante darle?",
        options: [
            { letter: "a", text: "Inhalar rápidamente justo antes de presionar el MDI." }, //
            { letter: "b", text: "Contener la respiración por unos segundos después de inhalar el medicamento." }, //
            { letter: "c", text: "Exhalar mientras presiona el MDI." }, //
            { letter: "d", text: "Usar el inhalador boca abajo." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "El carbón activado funciona principalmente:",
        options: [
            { letter: "a", text: "Neutralizando químicamente el veneno." }, //
            { letter: "b", text: "Induciendo el vómito." }, //
            { letter: "c", text: "Adsorbiendo (uniéndose a) ciertas toxinas en el estómago para prevenir su absorción." }, //
            { letter: "d", text: "Acelerando el metabolismo del veneno en el hígado." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es la indicación para administrar Naloxona (Narcan)?",
        options: [
            { letter: "a", text: "Sobredosis de cualquier droga recreativa." }, //
            { letter: "b", text: "Paro cardíaco de causa desconocida." }, //
            { letter: "c", text: "Sospecha de sobredosis de opioides con depresión respiratoria significativa o apnea." }, //
            { letter: "d", text: "Agitación psicomotriz." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Por qué es crucial verificar la presión arterial antes y después de administrar nitroglicerina?",
        options: [
            { letter: "a", text: "Porque la nitroglicerina puede causar hipertensión severa." }, //
            { letter: "b", text: "Porque la nitroglicerina es un vasodilatador y puede causar hipotensión significativa." }, //
            { letter: "c", text: "Porque afecta la frecuencia respiratoria." }, //
            { letter: "d", text: "Para asegurar que el paciente tenga una vía IV permeable." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La dosis estándar de aspirina para sospecha de síndrome coronario agudo suele ser:",
        options: [
            { letter: "a", text: "81 mg (dosis baja o \"baby aspirin\")." }, //
            { letter: "b", text: "162 a 324 mg (usualmente 2-4 tabletas masticables de 81 mg)." }, //
            { letter: "c", text: "500 mg." }, //
            { letter: "d", text: "1000 mg." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Qué medicamento se considera fundamental en el tratamiento inicial de casi cualquier paciente con dificultad respiratoria o signos de hipoxia?",
        options: [
            { letter: "a", text: "Glucosa oral." }, //
            { letter: "b", text: "Aspirina." }, //
            { letter: "c", text: "Oxígeno." }, //
            { letter: "d", text: "Naloxona." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Si un paciente consciente con hipoglucemia conocida se niega a tomar glucosa oral, ¿qué debes hacer?",
        options: [
            { letter: "a", text: "Forzar al paciente a tomarla." }, //
            { letter: "b", text: "Administrarla por vía intramuscular." }, //
            { letter: "c", text: "Documentar el rechazo, explicar los riesgos y preparar para un posible deterioro/transporte." }, //
            { letter: "d", text: "Dejar al paciente en la escena." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Antes de ayudar a un paciente a usar su broncodilatador (MDI o nebulizador), ¿qué debes confirmar?",
        options: [
            { letter: "a", text: "Que el paciente no haya comido recientemente." }, //
            { letter: "b", text: "Que el medicamento le pertenezca, no esté caducado, y seguir los \"6 correctos\" según sea aplicable." }, //
            { letter: "c", text: "Que la presión arterial esté elevada." }, //
            { letter: "d", text: "Que el paciente tenga más de 18 años." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La vía de administración Intranasal (IN) para Naloxona implica:",
        options: [
            { letter: "a", text: "Inyectar en la fosa nasal." }, //
            { letter: "b", text: "Rociar el medicamento en una o ambas fosas nasales usando un atomizador." }, //
            { letter: "c", text: "Que el paciente inhale un polvo." }, //
            { letter: "d", text: "Colocar una tableta debajo de la lengua." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es un efecto secundario común de la nitroglicerina?",
        options: [
            { letter: "a", text: "Dolor de cabeza (cefalea)." }, //
            { letter: "b", text: "Bradicardia (frecuencia cardíaca lenta)." }, //
            { letter: "c", text: "Hipertensión." }, //
            { letter: "d", text: "Somnolencia extrema." }, //
        ],
        correctAnswer: "a", //
    },
    {
        question: "¿Cuál es una contraindicación absoluta para administrar carbón activado?",
        options: [
            { letter: "a", text: "Ingestión de una sustancia desconocida." }, //
            { letter: "b", text: "Paciente vomitando activamente." }, //
            { letter: "c", text: "Ingestión de productos ácidos, álcalis o derivados del petróleo (hidrocarburos)." }, //
            { letter: "d", text: "Han pasado más de 2 horas desde la ingestión." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La epinefrina causa ___________ de los vasos sanguíneos y ___________ de los bronquios.",
        options: [
            { letter: "a", text: "Vasodilatación / Broncoconstricción" }, //
            { letter: "b", text: "Vasoconstricción / Broncodilatación" }, //
            { letter: "c", text: "Vasoconstricción / Broncoconstricción" }, //
            { letter: "d", text: "Vasodilatación / Broncodilatación" }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Después de administrar cualquier medicamento, ¿qué es crucial hacer como parte de la reevaluación?",
        options: [
            { letter: "a", text: "Preguntar al paciente si le gustó el sabor." }, //
            { letter: "b", text: "Medir la temperatura corporal." }, //
            { letter: "c", text: "Evaluar la respuesta del paciente al medicamento (mejoría, empeoramiento, efectos secundarios) y reevaluar los signos vitales." }, //
            { letter: "d", text: "Administrar una segunda dosis inmediatamente." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es la definición MÁS precisa de shock?",
        options: [
            { letter: "a", text: "Una caída repentina de la presión arterial." }, //
            { letter: "b", text: "Una reacción emocional extrema al trauma." }, //
            { letter: "c", text: "Un estado de hipoperfusión celular generalizada (entrega inadecuada de oxígeno a las células)." }, //
            { letter: "d", text: "Una frecuencia cardíaca muy rápida." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué tipo de shock es causado por una pérdida significativa de sangre o fluidos corporales?",
        options: [
            { letter: "a", text: "Cardiogénico" }, //
            { letter: "b", text: "Distributivo" }, //
            { letter: "c", text: "Obstructivo" }, //
            { letter: "d", text: "Hipovolémico" }, //
        ],
        correctAnswer: "d", //
    },
    {
        question: "Un paciente con una reacción alérgica severa (anafilaxia) que presenta urticaria, dificultad respiratoria e hipotensión está probablemente en shock:",
        options: [
            { letter: "a", text: "Séptico" }, //
            { letter: "b", text: "Anafiláctico (un tipo de shock distributivo)" }, //
            { letter: "c", text: "Neurogénico" }, //
            { letter: "d", text: "Hipovolémico" }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál de los siguientes signos es característico del shock COMPENSADO?",
        options: [
            { letter: "a", text: "Presión arterial muy baja (hipotensión)." }, //
            { letter: "b", text: "Piel caliente y seca." }, //
            { letter: "c", text: "Ansiedad, piel pálida/fría/húmeda, taquicardia, llenado capilar retardado, pero presión arterial aún normal." }, //
            { letter: "d", text: "Inconsciencia profunda." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "El shock cardiogénico se debe a una falla en:",
        options: [
            { letter: "a", text: "El volumen sanguíneo (contenido)." }, //
            { letter: "b", text: "El tono de los vasos sanguíneos (contenedor)." }, //
            { letter: "c", text: "La función de bomba del corazón." }, //
            { letter: "d", text: "Una obstrucción física del flujo sanguíneo." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es el manejo prehospitalario básico MÁS importante para la mayoría de los tipos de shock?",
        options: [
            { letter: "a", text: "Administrar líquidos intravenosos agresivamente (rol más avanzado)." }, //
            { letter: "b", text: "Asegurar vía aérea permeable, administrar oxígeno a alto flujo, controlar hemorragias externas y mantener la temperatura corporal." }, //
            { letter: "c", text: "Colocar al paciente en posición sentada." }, //
            { letter: "d", text: "Administrar analgésicos potentes." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Un paciente con lesión en la médula espinal alta que presenta piel caliente y seca por debajo del nivel de la lesión, bradicardia e hipotensión podría estar experimentando shock:",
        options: [
            { letter: "a", text: "Hipovolémico" }, //
            { letter: "b", text: "Cardiogénico" }, //
            { letter: "c", text: "Séptico" }, //
            { letter: "d", text: "Neurogénico (un tipo de shock distributivo)" }, //
        ],
        correctAnswer: "d", //
    },
    {
        question: "¿Cuál es la diferencia clave entre el shock compensado y el descompensado?",
        options: [
            { letter: "a", text: "La frecuencia cardíaca." }, //
            { letter: "b", text: "La presencia de dificultad respiratoria." }, //
            { letter: "c", text: "La presión arterial (la hipotensión marca el inicio del shock descompensado)." }, //
            { letter: "d", text: "La temperatura de la piel." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Un neumotórax a tensión o un taponamiento cardíaco pueden causar shock de tipo:",
        options: [
            { letter: "a", text: "Hipovolémico" }, //
            { letter: "b", text: "Distributivo" }, //
            { letter: "c", text: "Cardiogénico" }, //
            { letter: "d", text: "Obstructivo" }, //
        ],
        correctAnswer: "d", //
    },
    {
        question: "¿Por qué es crucial prevenir la hipotermia en pacientes en shock?",
        options: [
            { letter: "a", text: "Porque la hipotermia mejora la coagulación." }, //
            { letter: "b", text: "Porque la hipotermia interfiere con la coagulación sanguínea y empeora la acidosis metabólica." }, //
            { letter: "c", text: "Porque los pacientes en shock siempre sienten calor." }, //
            { letter: "d", text: "Porque facilita la administración de medicamentos." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál de estos NO es un componente esencial para mantener una perfusión adecuada?",
        options: [
            { letter: "a", text: "Una bomba cardíaca funcional." }, //
            { letter: "b", text: "Un volumen sanguíneo adecuado (contenido)." }, //
            { letter: "c", text: "Vasos sanguíneos con tono adecuado (contenedor)." }, //
            { letter: "d", text: "Una alta concentración de azúcar en la sangre." }, //
        ],
        correctAnswer: "d", //
    },
    {
        question: "¿Cuál es el tratamiento prehospitalario INMEDIATO para una hemorragia externa grave que contribuye al shock hipovolémico?",
        options: [
            { letter: "a", text: "Aplicar calor en la herida." }, //
            { letter: "b", text: "Administrar oxígeno." }, //
            { letter: "c", text: "Aplicar presión directa firme sobre la herida." }, //
            { letter: "d", text: "Elevar la cabeza del paciente." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "En un paciente pediátrico, ¿cuál suele ser el signo MÁS temprano y fiable de shock compensado?",
        options: [
            { letter: "a", text: "Hipotensión severa." }, //
            { letter: "b", text: "Bradicardia." }, //
            { letter: "c", text: "Taquicardia inexplicable y cambios sutiles en el estado mental o la perfusión cutánea." }, //
            { letter: "d", text: "Cianosis central." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "El shock séptico es causado por:",
        options: [
            { letter: "a", text: "Una lesión cerebral traumática." }, //
            { letter: "b", text: "Una reacción alérgica." }, //
            { letter: "c", text: "Una infección sistémica grave que causa vasodilatación y fuga capilar." }, //
            { letter: "d", text: "Una embolia pulmonar masiva." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué posición es generalmente recomendada para pacientes en shock (si no hay contraindicación como trauma o dificultad respiratoria severa)?",
        options: [
            { letter: "a", text: "Sentado derecho (Fowler alto)." }, //
            { letter: "b", text: "Prona (boca abajo)." }, //
            { letter: "c", text: "Supina (acostado boca arriba), posiblemente con elevación ligera de piernas si el protocolo lo indica." }, //
            { letter: "d", text: "De lado (recuperación)." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La piel pálida, fría y húmeda (diaforética) en un paciente en shock se debe principalmente a:",
        options: [
            { letter: "a", text: "Fiebre alta." }, //
            { letter: "b", text: "La respuesta del sistema nervioso simpático (vasoconstricción periférica y estimulación de glándulas sudoríparas)." }, //
            { letter: "c", text: "Exposición al frío ambiental." }, //
            { letter: "d", text: "Una reacción alérgica cutánea." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "El objetivo final del manejo del shock es:",
        options: [
            { letter: "a", text: "Aumentar la frecuencia cardíaca." }, //
            { letter: "b", text: "Restaurar la perfusión adecuada a nivel celular." }, //
            { letter: "c", text: "Disminuir la frecuencia respiratoria." }, //
            { letter: "d", text: "Elevar la temperatura corporal central." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es el primer paso al encontrar a una persona colapsada?",
        options: [
            { letter: "a", text: "Iniciar compresiones torácicas inmediatamente." }, //
            { letter: "b", text: "Verificar la seguridad de la escena y luego evaluar la respuesta del paciente." }, //
            { letter: "c", text: "Abrir la vía aérea." }, //
            { letter: "d", text: "Llamar inmediatamente por ayuda avanzada." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cómo se verifica la respiración normal en un paciente sin respuesta?",
        options: [
            { letter: "a", text: "Observando cualquier movimiento torácico durante al menos 30 segundos." }, //
            { letter: "b", text: "Escuchando atentamente si hay ronquidos." }, //
            { letter: "c", text: "Observando el movimiento del tórax y escuchando/sintiendo el aire durante no más de 10 segundos (el jadeo/gasping no es normal)." }, //
            { letter: "d", text: "Pellizcando al paciente para ver si reacciona." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es la frecuencia correcta para las compresiones torácicas en adultos, niños y lactantes?",
        options: [
            { letter: "a", text: "60-80 compresiones por minuto." }, //
            { letter: "b", text: "80-100 compresiones por minuto." }, //
            { letter: "c", text: "100-120 compresiones por minuto." }, //
            { letter: "d", text: "Más de 120 compresiones por minuto." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es la profundidad adecuada de las compresiones torácicas en un adulto?",
        options: [
            { letter: "a", text: "2-3 cm (aproximadamente 1 pulgada)." }, //
            { letter: "b", text: "Al menos 5 cm (2 pulgadas), pero no más de 6 cm (2.4 pulgadas)." }, //
            { letter: "c", text: "Al menos 7 cm (3 pulgadas)." }, //
            { letter: "d", text: "La profundidad no importa tanto como la frecuencia." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La relación correcta de compresión:ventilación para un adulto en RCP por un solo reanimador es:",
        options: [
            { letter: "a", text: "15 compresiones : 2 ventilaciones." }, //
            { letter: "b", text: "30 compresiones : 2 ventilaciones." }, //
            { letter: "c", text: "5 compresiones : 1 ventilación." }, //
            { letter: "d", text: "Compresiones continuas sin ventilaciones." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "En RCP de dos reanimadores para un niño (de 1 año a la pubertad), la relación compresión:ventilación cambia a:",
        options: [
            { letter: "a", text: "30:2" }, //
            { letter: "b", text: "15:2" }, //
            { letter: "c", text: "15:1" }, //
            { letter: "d", text: "30:1" }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Dónde se colocan las manos (o dedos) para las compresiones torácicas en un lactante (< 1 año)?",
        options: [
            { letter: "a", text: "En la parte superior del esternón." }, //
            { letter: "b", text: "Justo debajo del apéndice xifoides." }, //
            { letter: "c", text: "En el centro del pecho, justo debajo de la línea intermamilar." }, //
            { letter: "d", text: "Sobre el abdomen." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es el propósito principal de permitir una expansión torácica completa entre compresiones?",
        options: [
            { letter: "a", text: "Para dar descanso al reanimador." }, //
            { letter: "b", text: "Para permitir que el corazón se llene adecuadamente de sangre." }, //
            { letter: "c", text: "Para facilitar la ventilación." }, //
            { letter: "d", text: "Para evitar fracturar las costillas." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuándo debe utilizarse un DEA (Desfibrilador Externo Automático)?",
        options: [
            { letter: "a", text: "En cualquier paciente inconsciente." }, //
            { letter: "b", text: "Solo si se confirma un infarto de miocardio." }, //
            { letter: "c", text: "Tan pronto como esté disponible en un paciente con paro cardiorrespiratorio sin pulso." }, //
            { letter: "d", text: "Solo después de 5 ciclos de RCP." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Después de administrar una descarga con el DEA, ¿qué se debe hacer INMEDIATAMENTE?",
        options: [
            { letter: "a", text: "Verificar el pulso." }, //
            { letter: "b", text: "Reanudar las compresiones torácicas de alta calidad." }, //
            { letter: "c", text: "Administrar dos ventilaciones." }, //
            { letter: "d", text: "Esperar a que el DEA indique el siguiente paso." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es la profundidad de compresión correcta para un niño (no lactante)?",
        options: [
            { letter: "a", text: "Al menos 1/2 del diámetro anteroposterior del tórax." }, //
            { letter: "b", text: "Al menos 1/3 del diámetro anteroposterior del tórax (aproximadamente 5 cm o 2 pulgadas)." }, //
            { letter: "c", text: "Menos de 4 cm (1.5 pulgadas)." }, //
            { letter: "d", text: "Igual que en adultos (al menos 5 cm, no más de 6 cm)." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cómo se maneja una obstrucción de vía aérea por cuerpo extraño (OVACE) en un adulto consciente que no puede toser ni hablar?",
        options: [
            { letter: "a", text: "Compresiones torácicas de RCP." }, //
            { letter: "b", text: "Barrido digital a ciegas." }, //
            { letter: "c", text: "Compresiones abdominales (maniobra de Heimlich)." }, //
            { letter: "d", text: "Esperar a que pierda la conciencia." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Si un lactante con OVACE consciente no puede llorar ni respirar, ¿cuál es la intervención correcta?",
        options: [
            { letter: "a", text: "Compresiones abdominales." }, //
            { letter: "b", text: "Administrar 5 golpes en la espalda seguidos de 5 compresiones torácicas." }, //
            { letter: "c", text: "Intentar ventilaciones inmediatamente." }, //
            { letter: "d", text: "Colocarlo boca abajo y sacudirlo." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es un elemento clave de la RCP de \"alta calidad\"?",
        options: [
            { letter: "a", text: "Realizar las compresiones lo más rápido posible." }, //
            { letter: "b", text: "Minimizar las interrupciones en las compresiones torácicas (menos de 10 segundos)." }, //
            { letter: "c", text: "Administrar ventilaciones muy profundas." }, //
            { letter: "d", text: "Verificar el pulso cada minuto." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Por qué NO se recomienda el barrido digital a ciegas para intentar extraer un cuerpo extraño de la vía aérea?",
        options: [
            { letter: "a", text: "Porque es ineficaz." }, //
            { letter: "b", text: "Porque podría empujar el objeto más adentro." }, //
            { letter: "c", text: "Porque requiere equipo especial." }, //
            { letter: "d", text: "Porque causa dolor innecesario." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Dónde se verifica el pulso en un lactante durante la evaluación de SVB?",
        options: [
            { letter: "a", text: "Arteria carótida (cuello)." }, //
            { letter: "b", text: "Arteria radial (muñeca)." }, //
            { letter: "c", text: "Arteria femoral (ingle)." }, //
            { letter: "d", text: "Arteria braquial (parte interna del brazo, entre codo y hombro)." }, //
        ],
        correctAnswer: "d", //
    },
    {
        question: "Al ventilar a un paciente durante la RCP, cada ventilación debe durar aproximadamente:",
        options: [
            { letter: "a", text: "3 segundos." }, //
            { letter: "b", text: "Menos de 0.5 segundos." }, //
            { letter: "c", text: "1 segundo, lo suficiente para ver la elevación del tórax." }, //
            { letter: "d", text: "El mayor tiempo posible." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es la prioridad en la secuencia de RCP según las guías actuales (C-A-B)?",
        options: [
            { letter: "a", text: "Abrir la vía aérea (A)." }, //
            { letter: "b", text: "Iniciar ventilaciones (B)." }, //
            { letter: "c", text: "Iniciar compresiones torácicas de alta calidad (C)." }, //
            { letter: "d", text: "Colocar el DEA (D)." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "En un equipo de reanimación (\"Código Mega\"), ¿cuál es el rol MÁS fundamental y continuo que puede desempeñar un TAMP-B?",
        options: [
            { letter: "a", text: "Liderar el código." }, //
            { letter: "b", text: "Administrar medicamentos avanzados." }, //
            { letter: "c", text: "Realizar compresiones torácicas de alta calidad y relevarse frecuentemente." }, //
            { letter: "d", text: "Interpretar el electrocardiograma." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "La comunicación en \"circuito cerrado\" durante una reanimación implica:",
        options: [
            { letter: "a", text: "Hablar en voz muy baja." }, //
            { letter: "b", text: "Que el líder da una orden y el miembro del equipo la repite al recibirla y confirma cuando la ha completado." }, //
            { letter: "c", text: "Usar radios para comunicarse." }, //
            { letter: "d", text: "Que todos hablan al mismo tiempo." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Por qué es crucial minimizar las interrupciones en las compresiones torácicas durante un Código Mega?",
        options: [
            { letter: "a", text: "Porque cada interrupción reduce drásticamente la presión de perfusión coronaria y cerebral." }, //
            { letter: "b", text: "Porque cansa menos a los reanimadores." }, //
            { letter: "c", text: "Porque permite administrar medicamentos más rápido." }, //
            { letter: "d", text: "Porque facilita la intubación." }, //
        ],
        correctAnswer: "a", //
    },
    {
        question: "El uso temprano del DEA es vital porque:",
        options: [
            { letter: "a", text: "Reinicia cualquier actividad eléctrica del corazón." }, //
            { letter: "b", text: "La probabilidad de éxito de la desfibrilación disminuye rápidamente con el tiempo en casos de Fibrilación Ventricular (FV) o Taquicardia Ventricular sin pulso (TVSP)." }, //
            { letter: "c", text: "Asegura que el paciente no sienta dolor." }, //
            { letter: "d", text: "Reemplaza la necesidad de compresiones." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Como TAMP-B en un código, si estás realizando ventilaciones con BVM, ¿qué debes evitar?",
        options: [
            { letter: "a", text: "Usar oxígeno suplementario." }, //
            { letter: "b", text: "Ventilar una vez cada 5-6 segundos (en adulto)." }, //
            { letter: "c", text: "Hiperventilar al paciente (demasiado rápido o con demasiado volumen)." }, //
            { letter: "d", text: "Asegurar un buen sello de la mascarilla." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Qué significa ROSC?",
        options: [
            { letter: "a", text: "Reanimación Óptima Sin Complicaciones." }, //
            { letter: "b", text: "Respuesta Ocular, Sensorial y Coordinada." }, //
            { letter: "c", text: "Retorno de la Circulación Espontánea." }, //
            { letter: "d", text: "Ritmo Organizado Sin Contracción." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "Si durante la RCP se detecta ROSC (ej. el paciente empieza a moverse o respirar, se detecta pulso), ¿cuál es el siguiente paso inmediato?",
        options: [
            { letter: "a", text: "Continuar la RCP exactamente igual." }, //
            { letter: "b", text: "Detener la RCP y evaluar la vía aérea, respiración y circulación (evaluación post-paro), administrar O2 y monitorizar." }, //
            { letter: "c", text: "Administrar una descarga del DEA por si acaso." }, //
            { letter: "d", text: "Retirar todo el equipo y esperar al personal avanzado." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cómo puede un TAMP-B apoyar eficazmente la llegada de un equipo de Soporte Vital Avanzado (SVA)?",
        options: [
            { letter: "a", text: "Deteniendo la RCP para no interferir." }, //
            { letter: "b", text: "Dando un informe conciso y claro de la situación y continuando con RCP de alta calidad hasta que SVA indique lo contrario." }, //
            { letter: "c", text: "Intentando colocar una vía IV." }, //
            { letter: "d", text: "Criticando las acciones del equipo SVA." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Una Orden de No Reanimar (ONR) válida significa que:",
        options: [
            { letter: "a", text: "Se debe realizar RCP pero sin usar el DEA." }, //
            { letter: "b", text: "Se debe intentar la reanimación durante 10 minutos solamente." }, //
            { letter: "c", text: "No se deben iniciar o se deben suspender los esfuerzos de reanimación (RCP, desfibrilación, manejo avanzado vía aérea, etc.)." }, //
            { letter: "d", text: "Solo aplica si el paciente está en un hospital." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "¿Cuál es la base de cualquier esfuerzo de reanimación exitoso, tanto en SVB como en SVA?",
        options: [
            { letter: "a", text: "La administración temprana de epinefrina." }, //
            { letter: "b", text: "La intubación endotraqueal rápida." }, //
            { letter: "c", text: "La RCP de alta calidad (compresiones efectivas y minimización de interrupciones)." }, //
            { letter: "d", text: "El uso de dispositivos mecánicos de compresión." }, //
        ],
        correctAnswer: "c", //
    },
    {
        question: "El concepto de \"equipo de reanimación\" enfatiza:",
        options: [
            { letter: "a", text: "Que una sola persona debe hacer todo." }, //
            { letter: "b", text: "Roles definidos, coordinación, comunicación clara y apoyo mutuo." }, //
            { letter: "c", text: "Que el líder toma todas las decisiones sin consultar." }, //
            { letter: "d", text: "Que la jerarquía es lo más importante." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "Durante un código, si el líder te pide administrar oxígeno y tú estás ocupado con compresiones, ¿qué deberías hacer según la comunicación en circuito cerrado?",
        options: [
            { letter: "a", text: "Ignorar la orden." }, //
            { letter: "b", text: "Decir \"Entendido, administraré oxígeno\" y pedir a otro miembro que te releve en compresiones o esperar el momento adecuado." }, //
            { letter: "c", text: "Gritarle al líder que estás ocupado." }, //
            { letter: "d", text: "Administrar el oxígeno mientras sigues haciendo compresiones." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "¿Cuál es el objetivo principal de las compresiones torácicas durante la RCP?",
        options: [
            { letter: "a", text: "Estimular eléctricamente al corazón." }, //
            { letter: "b", text: "Mantener un flujo sanguíneo artificial mínimo al cerebro y al propio corazón." }, //
            { letter: "c", text: "Romper coágulos en las arterias coronarias." }, //
            { letter: "d", text: "Calentar al paciente." }, //
        ],
        correctAnswer: "b", //
    },
    {
        question: "La hiperventilación durante la RCP es perjudicial porque:",
        options: [
            { letter: "a", text: "Aumenta la presión intratorácica, disminuyendo el retorno venoso al corazón y el gasto cardíaco." }, //
            { letter: "b", text: "Causa hipoxia." }, //
            { letter: "c", text: "Es difícil de realizar con una BVM." }, //
            { letter: "d", text: "Puede dañar los pulmones directamente." }, //
        ],
        correctAnswer: "a", //
    },
    {
        question: "¿Qué debe hacer el TAMP-B si se encuentra con una directiva anticipada válida (como una ONR) al llegar a atender a un paciente en paro?",
        options: [
            { letter: "a", text: "Ignorarla e iniciar RCP." }, //
            { letter: "b", text: "Verificar su validez según protocolo local y respetarla, proporcionando cuidados paliativos si es apropiado." }, //
            { letter: "c", text: "Iniciar RCP mientras se verifica la directiva." }, //
            { letter: "d", text: "Pedirle a la familia que revoque la orden." }, //
        ],
        correctAnswer: "b", //
    },
];