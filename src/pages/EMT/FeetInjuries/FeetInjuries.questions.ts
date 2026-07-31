import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre un esguince y una distensión?",
        answer: "Un esguince es una lesión de los ligamentos, que son los tejidos que conectan los huesos entre sí en una articulación.  Una distensión es un estiramiento o desgarro de un músculo o un tendón, que es el tejido que conecta el músculo con el hueso. ",
    },
    {
        question: "¿Cuál es el objetivo principal de la inmovilización (ferulización) de una fractura?",
        answer: "El objetivo principal es prevenir el movimiento del hueso fracturado para minimizar el daño adicional a los músculos, nervios o vasos sanguíneos circundantes.  También ayuda a reducir el dolor y puede disminuir la hemorragia. ",
    },
    {
        question: "¿Qué es una fractura abierta y por qué es más grave que una cerrada?",
        answer: "Una fractura abierta es aquella en la que hay una herida en la piel sobre el sitio de la fractura, comunicando el hueso con el exterior.  Es más grave debido al alto riesgo de infección por la contaminación de la herida. ",
    },
    {
        question: "¿Qué es el síndrome compartimental y cuáles son sus signos característicos?",
        answer: "Es una emergencia médica en la que la inflamación o el sangrado aumentan la presión dentro de un compartimento muscular a un nivel peligroso, lo que puede cortar el flujo sanguíneo a la extremidad.  Los signos característicos son conocidos como 'las 6 P': Dolor (Pain) desproporcionado a la lesión, Parestesia (hormigueo), Palidez, Parálisis, Ausencia de pulso (Pulselessness) y Presión. ",
    },
    {
        question: "¿Cuándo está indicado el uso de una férula de tracción?",
        answer: "Una férula de tracción está indicada específicamente para una fractura cerrada y aislada en el tercio medio del fémur.  No debe usarse si hay lesiones en la rodilla, el tobillo, el pie o la pelvis del mismo lado. ",
    },
    {
        question: "¿Por qué una fractura de pelvis se considera una lesión potencialmente mortal?",
        answer: "La pelvis alberga grandes vasos sanguíneos, y una fractura puede causar una hemorragia interna masiva en la cavidad pélvica, llevando a un shock hipovolémico grave. ",
    },
    {
        question: "¿Qué es una luxación y cómo se debe manejar?",
        answer: "Una luxación es el desplazamiento de un hueso de su posición normal en una articulación.  Se debe inmovilizar la articulación en la posición en que se encontró y nunca intentar recolocarla en el campo, ya que podría causar más daño a los nervios y vasos sanguíneos. ",
    },
    {
        question: "¿Qué significa la evaluación 'PMS' o 'CMS' y cuándo se realiza?",
        answer: "Se refiere a la evaluación de Pulso, Motricidad y Sensibilidad (o Circulación, Motricidad y Sensibilidad) en la parte distal de una extremidad lesionada.  Es crucial realizar esta evaluación antes y después de aplicar cualquier férula para asegurarse de que la inmovilización no ha comprometido la circulación o la función nerviosa. ",
    },
];


export const feetInjuriesQuestions: Question[] = [
    {
        "question": "Un paciente de 25 años tiene una deformidad angular y dolor intenso en el tercio medio del fémur derecho después de un accidente de esquí. No hay heridas abiertas. ¿Qué dispositivo de inmovilización es el más apropiado?",
        "options": [
            {"letter": "a", "text": "Una férula rígida larga"},
            {"letter": "b", "text": "Una férula de vacío"},
            {"letter": "c", "text": "Una férula de tracción"},
            {"letter": "d", "text": "Inmovilizar la pierna a la otra pierna no lesionada"}
        ],
        "correctAnswer": "c",
        "explanation": "Para una fractura aislada y cerrada en el tercio medio del fémur, la férula de tracción es el dispositivo de elección. Aplica una tracción longitudinal que ayuda a realinear el hueso, reduce el dolor, alivia los espasmos musculares y, lo más importante, disminuye el espacio disponible para el sangrado interno, ayudando a controlar la hemorragia."
    },
    {
        "question": "Después de aplicar una férula en un antebrazo fracturado, usted reevalúa el pulso radial y nota que está ausente. La mano está pálida y fría. ¿Cuál es su siguiente acción?",
        "options": [
            {"letter": "a", "text": "Transportar inmediatamente al paciente sin hacer cambios"},
            {
                "letter": "b",
                "text": "Aflojar la férula, realinear la extremidad y volver a ferulizar, reevaluando el pulso"
            },
            {"letter": "c", "text": "Aplicar calor en la mano para mejorar la circulación"},
            {"letter": "d", "text": "Elevar la extremidad por encima del nivel del corazón"}
        ],
        "correctAnswer": "b",
        "explanation": "La pérdida del pulso distal después de la inmovilización es un signo de compromiso neurovascular, una emergencia que amenaza la extremidad. Indica que la férula puede estar demasiado apretada o que la hinchazón ha aumentado. La acción correcta es aflojar el vendaje, intentar realinear y volver a ferulizar, con el objetivo de restaurar el flujo sanguíneo."
    },
    {
        "question": "Un niño sufre una caída y presenta dolor en el antebrazo. La radiografía muestra una fractura en la que el hueso está doblado y roto solo en un lado. Este tipo de fractura se conoce como:",
        "options": [
            {"letter": "a", "text": "Conminuta"},
            {"letter": "b", "text": "Transversal"},
            {"letter": "c", "text": "En tallo verde"},
            {"letter": "d", "text": "Patológica"}
        ],
        "correctAnswer": "c",
        "explanation": "La fractura 'en tallo verde' es común en niños, cuyos huesos son más blandos y flexibles que los de los adultos. Al igual que una rama verde y joven, el hueso se dobla y se rompe por un lado, pero permanece intacto por el otro. Una fractura conminuta se rompe en múltiples fragmentos."
    },
    {
        "question": "Un paciente con una fractura de tibia se queja de un dolor 'insoportable' que no mejora con la inmovilización. La pierna se siente muy tensa al tacto. Estos signos son altamente sugestivos de:",
        "options": [
            {"letter": "a", "text": "Una infección de la herida"},
            {"letter": "b", "text": "Síndrome compartimental"},
            {"letter": "c", "text": "Una luxación de rodilla asociada"},
            {"letter": "d", "text": "Daño al nervio ciático"}
        ],
        "correctAnswer": "b",
        "explanation": "El síndrome compartimental es una emergencia quirúrgica. Ocurre cuando la presión dentro de un compartimento muscular cerrado aumenta hasta el punto de cortar el suministro de sangre a los tejidos. El dolor desproporcionado a la lesión, junto con la tensión y la hinchazón, son los signos de alarma clásicos."
    },
    {
        "question": "Al inmovilizar una fractura en el tercio medio del húmero, la regla general es inmovilizar:",
        "options": [
            {"letter": "a", "text": "Únicamente la articulación del codo"},
            {"letter": "b", "text": "Las articulaciones del hombro y el codo"},
            {"letter": "c", "text": "Únicamente la articulación del hombro"},
            {"letter": "d", "text": "La muñeca y los dedos"}
        ],
        "correctAnswer": "b",
        "explanation": "La regla fundamental para inmovilizar una fractura de un hueso largo es estabilizar la articulación por encima y la articulación por debajo del sitio de la fractura. Para el húmero, esto significa que tanto el hombro como el codo deben ser inmovilizados para prevenir el movimiento y un mayor daño."
    },
    {
        "question": "Usted atiende a un paciente con una luxación anterior del hombro, con una deformidad visible. El manejo prehospitalario adecuado incluye:",
        "options": [
            {"letter": "a", "text": "Intentar reducir la luxación con una maniobra de tracción"},
            {
                "letter": "b",
                "text": "Colocar un cabestrillo y una banda para inmovilizar la articulación en la posición encontrada"
            },
            {"letter": "c", "text": "Aplicar una férula de tracción al brazo"},
            {"letter": "d", "text": "Realizar ejercicios de rango de movimiento para evaluar el daño"}
        ],
        "correctAnswer": "b",
        "explanation": "El personal prehospitalario generalmente no debe intentar reducir una luxación, ya que podría causar más daño a nervios o vasos sanguíneos. El manejo correcto es 'inmovilizar en la posición encontrada', proporcionando soporte y comodidad. Un cabestrillo (sling) y una banda (swathe) son ideales para esto."
    },
    {
        "question": "Una fractura de pelvis debe sospecharse en un paciente de trauma que presenta:",
        "options": [
            {"letter": "a", "text": "Dolor en la parte baja de la espalda y dificultad para respirar"},
            {"letter": "b", "text": "Inestabilidad pélvica a la compresión y signos de shock hipovolémico"},
            {"letter": "c", "text": "Una deformidad obvia en el fémur"},
            {"letter": "d", "text": "Priapismo y déficit neurológico en las piernas"}
        ],
        "correctAnswer": "b",
        "explanation": "Las fracturas de pelvis pueden causar una hemorragia interna masiva. Por lo tanto, los signos clave son la inestabilidad mecánica del anillo pélvico (detectada con una suave compresión) y los signos sistémicos de shock por pérdida de sangre (taquicardia, hipotensión, piel pálida y fría)."
    },
    {
        "question": "Un paciente tiene una fractura abierta de tobillo con un fragmento óseo visible. ¿Cuál es el primer paso en el manejo de la herida antes de inmovilizar?",
        "options": [
            {"letter": "a", "text": "Intentar reintroducir el fragmento óseo debajo de la piel"},
            {"letter": "b", "text": "Irrigar la herida abundantemente con agua no estéril"},
            {"letter": "c", "text": "Cubrir la herida con un apósito estéril seco"},
            {"letter": "d", "text": "Aplicar un ungüento antibiótico directamente sobre el hueso"}
        ],
        "correctAnswer": "c",
        "explanation": "En una fractura abierta, la prioridad es prevenir una mayor contaminación. Nunca se debe intentar reintroducir el hueso. El paso inicial es controlar cualquier sangrado activo y luego cubrir la herida con un apósito estéril y seco para protegerla antes de proceder con la inmovilización."
    },
    {
        "question": "La lesión que ocurre cuando se tuerce una articulación, causando daño a los ligamentos, se define como:",
        "options": [
            {"letter": "a", "text": "Distensión"},
            {"letter": "b", "text": "Luxación"},
            {"letter": "c", "text": "Contusión"},
            {"letter": "d", "text": "Esguince"}
        ],
        "correctAnswer": "d",
        "explanation": "Por definición, un esguince es una lesión de los ligamentos, que son las bandas de tejido que conectan un hueso con otro en una articulación. Una distensión, por otro lado, es una lesión de un músculo o un tendón."
    },
    {
        "question": "El uso de una férula de tracción está contraindicado en un paciente con una fractura de fémur si también presenta:",
        "options": [
            {"letter": "a", "text": "Dolor intenso y espasmos musculares"},
            {"letter": "b", "text": "Una fractura en la muñeca del mismo lado"},
            {"letter": "c", "text": "Una sospecha de fractura de tobillo en la misma pierna"},
            {"letter": "d", "text": "Abrasiones en el muslo afectado"}
        ],
        "correctAnswer": "c",
        "explanation": "Una férula de tracción funciona aplicando fuerza contra el tobillo y el pie para estirar la pierna. Si hay una lesión en el tobillo o el pie de la misma extremidad, no se puede aplicar la tracción de manera segura, ya que podría empeorar la lesión distal. Es una contraindicación clave para su uso."
    }
]

export const feetInjuriesChallengeQuestions: Question[] = [
    {
        "question": "Un trabajador agrícola de 34 años queda atrapado por maquinaria y presenta una fractura abierta de tibia con un fragmento óseo de 6 cm expuesto, contaminado con tierra y restos vegetales, y sangrado activo moderado. El tiempo estimado de traslado al centro de trauma más cercano es de 45 minutos. ¿Cuál es el manejo prehospitalario más apropiado de la herida y la extremidad?",
        "options": [
            {"letter": "a", "text": "Irrigar agresivamente la herida con solución salina para retirar toda la contaminación visible antes de cubrirla"},
            {"letter": "b", "text": "Controlar la hemorragia activa con presión directa, cubrir la herida con un apósito estéril seco sin irrigar ni desbridar en el campo, alinear e inmovilizar la extremidad en la posición encontrada (o con tracción axial suave si hay deformidad grave) y trasladar sin retrasar el transporte"},
            {"letter": "c", "text": "Reintroducir cuidadosamente el fragmento óseo bajo la piel para reducir el riesgo de infección y luego aplicar un vendaje compresivo"},
            {"letter": "d", "text": "Aplicar un torniquete proximal de manera preventiva a todas las fracturas abiertas con exposición ósea, independientemente del estado hemodinámico"}
        ],
        "correctAnswer": "b",
        "explanation": "En una fractura abierta, la prioridad prehospitalaria es el control de la hemorragia mayor (presión directa, y torniquete solo si la hemorragia es exsanguinante e incontrolable) seguido de la protección de la herida contra mayor contaminación mediante un apósito estéril seco. La irrigación agresiva y el desbridamiento son intervenciones intrahospitalarias que forman parte del manejo definitivo (junto con antibióticos IV y profilaxis antitetánica), no del campo, porque el objetivo prehospitalario es minimizar el tiempo de escena y trasladar rápidamente. Nunca se debe reintroducir un fragmento óseo expuesto, ya que arrastraría más contaminación hacia tejidos profundos y podría lesionar estructuras neurovasculares. La alineación suave y la inmovilización reducen el dolor, disminuyen el sangrado adicional y previenen daño secundario a tejidos blandos durante el transporte."
    },
    {
        "question": "Dos horas después de inmovilizar una fractura cerrada de tibia y peroné en un paciente de 19 años, el equipo de traslado interfacilidades lo reevalúa: el pulso pedio está presente, el llenado capilar es normal, pero el paciente refiere un dolor 9/10 que ha empeorado progresivamente y no cede con los analgésicos administrados, con dolor intenso a la extensión pasiva de los dedos del pie y una sensación de 'adormecimiento' en el primer espacio interdigital. ¿Cómo debe interpretarse este cuadro?",
        "options": [
            {"letter": "a", "text": "Como una respuesta normal al dolor postraumático, ya que la presencia de pulso distal y llenado capilar normal descartan cualquier compromiso vascular significativo"},
            {"letter": "b", "text": "Como signos tempranos de síndrome compartimental agudo; el pulso distal palpable no lo descarta, porque la isquemia microvascular y nerviosa ocurre a presiones tisulares muy por debajo de la presión arterial necesaria para ocluir una arteria mayor, por lo que se debe aflojar la inmovilización, elevar al nivel del corazón (no por encima) y notificar de inmediato para medición de presión compartimental"},
            {"letter": "c", "text": "Como evidencia de que la férula está demasiado floja y debe apretarse para brindar mayor estabilidad y así reducir el dolor"},
            {"letter": "d", "text": "Como un signo confiable de que el síndrome compartimental ya está en fase tardía e irreversible, por lo que no se justifica ninguna intervención adicional"}
        ],
        "correctAnswer": "b",
        "explanation": "El síndrome compartimental agudo se desarrolla en un continuo, y sus signos más tempranos y sensibles son el dolor desproporcionado a la lesión, el dolor que empeora con el estiramiento pasivo de los músculos del compartimento afectado, y la parestesia en el territorio del nervio que atraviesa ese compartimento (en la pierna, el nervio peroneo profundo inerva el primer espacio interdigital). La palidez, la parálisis y la ausencia de pulso ('las 6 P') son signos tardíos que indican daño isquémico ya avanzado; esperar a que aparezcan retrasa fatalmente la intervención, ya que la presión que compromete capilares y nervios es mucho menor que la presión diastólica necesaria para ocluir una arteria. Por eso un pulso distal presente y un llenado capilar normal NO excluyen el síndrome compartimental. La conducta correcta es aflojar cualquier constricción externa, mantener la extremidad al nivel del corazón (elevarla por encima reduce aún más la presión de perfusión) y escalar de inmediato para una posible fasciotomía, ya que el tejido muscular sufre daño irreversible después de aproximadamente 4 a 6 horas de isquemia."
    },
    {
        "question": "Un motociclista de 28 años presenta una deformidad angulada grave en la rodilla derecha compatible con luxación de rodilla. El pie derecho está pálido, frío, con llenado capilar de 5 segundos y pulso pedio y tibial posterior ausentes a la palpación, aunque el Doppler portátil detecta un flujo débil. El traslado al centro de trauma tomará 20 minutos. ¿Cuál es la prioridad de manejo?",
        "options": [
            {"letter": "a", "text": "Inmovilizar la rodilla en la posición encontrada sin intentar realinear, y transportar de inmediato, dado que cualquier manipulación adicional retrasaría el traslado sin beneficio"},
            {"letter": "b", "text": "Realizar un único intento suave de realinear la extremidad hacia su posición anatómica aplicando tracción axial longitudinal para intentar restaurar el flujo distal, reevaluando el pulso inmediatamente después, y luego inmovilizar y transportar sin demora adicional a un centro con capacidad quirúrgica vascular"},
            {"letter": "c", "text": "Esperar en la escena hasta que un médico llegue para realizar la reducción, ya que el personal prehospitalario nunca debe manipular una luxación bajo ninguna circunstancia"},
            {"letter": "d", "text": "Aplicar un torniquete en el muslo para 'proteger' la extremidad isquémica mientras se transporta"}
        ],
        "correctAnswer": "b",
        "explanation": "La luxación de rodilla tiene una de las tasas más altas de lesión de la arteria poplítea entre todas las luxaciones articulares, porque la arteria está anclada proximal y distalmente y tiene poca movilidad para acomodar el desplazamiento óseo. La ausencia de pulsos distales con signos de isquemia franca (palidez, frialdad, llenado capilar retardado) constituye una emergencia con isquemia caliente en curso, y la extremidad puede volverse inviable después de 6 a 8 horas de isquemia total. A diferencia de la regla general de 'inmovilizar en la posición encontrada' para luxaciones sin compromiso vascular, cuando existe isquemia distal documentada, muchos protocolos de trauma autorizan un único intento suave de realineamiento axial —no una reducción articular formal con manipulación forzada— precisamente para intentar liberar la compresión sobre la arteria y restaurar algo de flujo antes del traslado, reevaluando el pulso de inmediato. El torniquete estaría contraindicado porque empeoraría la isquemia en lugar de tratarla; aquí el problema es la falta de flujo distal a la lesión, no una hemorragia exsanguinante."
    },
    {
        "question": "Un carpintero de 41 años sufre la amputación traumática completa de cuatro dedos de la mano derecha con una sierra circular. Hay sangrado moderado controlado con presión directa y un vendaje compresivo. Los dedos amputados fueron recuperados en el lugar. ¿Cuál es el manejo correcto tanto del muñón como del segmento amputado antes del traslado?",
        "options": [
            {"letter": "a", "text": "Sumergir directamente los dedos amputados en agua con hielo para preservarlos y transportarlos junto al paciente"},
            {"letter": "b", "text": "Envolver los dedos amputados en un apósito humedecido con solución salina estéril, colocarlos dentro de una bolsa plástica sellada, y luego colocar esa bolsa dentro de otro recipiente con agua fría y hielo, evitando el contacto directo del tejido con el hielo; mantener presión directa y elevación en el muñón, sin aplicar torniquete a menos que la hemorragia sea incontrolable"},
            {"letter": "c", "text": "Descartar los segmentos amputados en el lugar, ya que su reimplantación rara vez es posible y transportarlos solo añade peso y complejidad al traslado"},
            {"letter": "d", "text": "Aplicar un torniquete arterial proximal de forma inmediata y rutinaria en toda amputación digital, independientemente de si el sangrado está controlado con presión directa"}
        ],
        "correctAnswer": "b",
        "explanation": "El manejo correcto del tejido amputado busca preservar su viabilidad para una posible reimplantación quirúrgica sin causar lesión por congelación directa: el contacto directo del tejido con hielo o agua helada produce daño celular por congelación que puede hacer inviable la reimplantación, por eso se envuelve en gasa humedecida con solución salina (nunca agua dulce directa ni alcohol), se sella en una bolsa plástica, y esa bolsa se enfría de forma indirecta rodeándola con hielo. En el muñón, la mayoría de las amputaciones sangran menos de lo esperado porque los vasos se retraen y espasman; por ello la presión directa y la elevación suelen ser suficientes, reservando el torniquete para hemorragia exsanguinante que no responde a medidas menos invasivas, dado que el torniquete prolongado puede comprometer aún más el tejido remanente disponible para la cirugía reconstructiva. Descartar el segmento amputado elimina la posibilidad de reimplantación, que los cirujanos de mano deben evaluar en el hospital receptor."
    },
    {
        "question": "Un paciente de 52 años presenta una fractura-luxación de tobillo con deformidad grave: el pie está rotado externamente casi 90 grados con la piel sobre el maléolo medial extremadamente pálida y tensa, y el pulso pedio y tibial posterior están ausentes. El hospital más cercano con capacidad ortopédica está a 35 minutos. ¿Cuál es la acción prehospitalaria más apropiada según los principios de manejo de luxaciones con compromiso neurovascular?",
        "options": [
            {"letter": "a", "text": "Inmovilizar el tobillo exactamente en la posición encontrada, sin intentar realinearlo, y transportar de inmediato para preservar la anatomía para el cirujano"},
            {"letter": "b", "text": "Realizar tracción suave y realineamiento del pie hacia su posición anatómica para reducir la tensión sobre la piel y las estructuras vasculares, reevaluando el pulso, la sensibilidad y el color inmediatamente después, y luego inmovilizar en la posición corregida"},
            {"letter": "c", "text": "Aplicar hielo directamente sobre la piel pálida y tensa para reducir la inflamación antes de inmovilizar"},
            {"letter": "d", "text": "Retrasar el transporte en la escena hasta lograr una reducción anatómica completa y confirmada radiográficamente"}
        ],
        "correctAnswer": "b",
        "explanation": "Aunque la regla general para luxaciones es inmovilizar en la posición encontrada, esta regla tiene una excepción reconocida: cuando existe compromiso neurovascular evidente (palidez extrema, tensión cutánea que amenaza necrosis por presión, o ausencia de pulsos distales) y el traslado será prolongado, se justifica un intento suave y único de realineamiento para aliviar la tracción o compresión sobre la arteria, el nervio o la piel, disminuyendo el riesgo de necrosis cutánea o isquemia irreversible mientras se llega al centro definitivo. Este realineamiento no busca lograr una reducción anatómica perfecta ni debe forzarse si encuentra resistencia significativa o aumenta el dolor de forma marcada; su objetivo es exclusivamente reducir la deformidad extrema que está comprometiendo la perfusión y la viabilidad tisular. La reevaluación inmediata de pulso, motricidad y sensibilidad después de cualquier manipulación es obligatoria para documentar si la intervención mejoró o empeoró el estado neurovascular."
    },
    {
        "question": "Un peatón de 60 años es atropellado por un vehículo y presenta dolor a la palpación de la sínfisis del pubis, inestabilidad marcada a la compresión lateral de las crestas ilíacas, equimosis perineal y signos de shock (frecuencia cardíaca 128, presión arterial 84/50). ¿Cuál es el manejo prehospitalario más apropiado, integrando el control de la hemorragia pélvica y la minimización del daño adicional?",
        "options": [
            {"letter": "a", "text": "Realizar múltiples maniobras repetidas de compresión y 'bamboleo' pélvico para confirmar el grado de inestabilidad antes de decidir el tipo de inmovilización"},
            {"letter": "b", "text": "Colocar al paciente en posición de Trendelenburg y aplicar presión manual sostenida sobre ambas crestas ilíacas durante todo el traslado en lugar de un dispositivo de estabilización"},
            {"letter": "c", "text": "Minimizar la manipulación pélvica, aplicar un inmovilizador/cinturón pélvico circunferencial centrado sobre los trocánteres mayores (no sobre la cresta ilíaca), movilizar al paciente en bloque evitando el log-roll completo, e iniciar reposición de volumen con transporte prioritario a un centro de trauma con capacidad de control de hemorragia"},
            {"letter": "d", "text": "Retrasar la inmovilización pélvica hasta confirmar la fractura mediante radiografía en el hospital, ya que aplicar un cinturón sin confirmación diagnóstica podría enmascarar hallazgos del examen físico"}
        ],
        "correctAnswer": "c",
        "explanation": "Las fracturas pélvicas inestables asociadas a shock son una de las causas de hemorragia exsanguinante no controlable con presión directa convencional, porque el sangrado proviene del plexo venoso presacro y de fracturas óseas dentro de un espacio retroperitoneal que puede acomodar varios litros de sangre. El principio de manejo es reducir el volumen de ese espacio y estabilizar mecánicamente el anillo pélvico lo antes posible mediante un cinturón pélvico comercial o improvisado, colocado a la altura de los trocánteres mayores (no sobre las crestas ilíacas, donde sería inefectivo o incluso perjudicial). Las maniobras repetidas de compresión o 'bamboleo' para probar la inestabilidad, así como el log-roll completo, deben evitarse porque pueden desalojar coágulos ya formados y reiniciar o empeorar la hemorragia; por esa misma razón, el examen de inestabilidad pélvica debe realizarse una sola vez y con suavidad. El transporte no debe retrasarse para obtener confirmación radiográfica: el diagnóstico clínico de inestabilidad pélvica con shock es suficiente para justificar la inmovilización inmediata y el traslado prioritario a un centro con capacidad de control de hemorragia (angioembolización o fijación externa)."
    }
]