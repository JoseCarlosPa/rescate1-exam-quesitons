export interface GlosarioItem {
    termino: string;
    definicion: string;
    ejemplo?: string;
    tipo: 'termino' | 'prefijo' | 'sufijo' | 'mnemotecnia';
}

export const terminosData: GlosarioItem[] = [
    {
        termino: 'Abdomen Agudo',
        definicion: 'Síndrome clínico caracterizado por dolor abdominal intenso de inicio súbito, que a menudo requiere intervención quirúrgica urgente.',
        ejemplo: 'Una apendicitis perforada puede presentarse como un cuadro de abdomen agudo.',
        tipo: 'termino'
    },
    {
        termino: 'Abrasión',
        definicion: 'Lesión superficial de la piel causada por raspado o fricción.',
        ejemplo: 'Un ciclista que cae sobre el asfalto puede sufrir abrasiones en rodillas y codos.',
        tipo: 'termino'
    },
    {
        termino: 'ACV / EVC',
        definicion: 'Accidente Cerebrovascular o Enfermedad Vascular Cerebral. Interrupción del flujo sanguíneo a una parte del cerebro, causando daño neuronal (infarto o hemorragia).',
        ejemplo: 'Paciente presenta parálisis facial y debilidad en brazo derecho de inicio súbito, sospechoso de ACV.',
        tipo: 'termino'
    },
    {
        termino: 'Agudo',
        definicion: 'Describe una condición de inicio súbito, corta duración y generalmente severa.',
        ejemplo: 'Dolor agudo en el pecho.',
        tipo: 'termino'
    },
    {
        termino: 'Anafilaxia',
        definicion: 'Reacción alérgica grave y potencialmente mortal que afecta a múltiples sistemas del cuerpo.',
        ejemplo: 'Administrar epinefrina es crucial en un shock anafiláctico.',
        tipo: 'termino'
    },
    {
        termino: 'Arteria',
        definicion: 'Vaso sanguíneo que transporta sangre oxigenada desde el corazón hacia el resto del cuerpo (excepto la arteria pulmonar).',
        ejemplo: 'La arteria femoral es un vaso principal en la pierna.',
        tipo: 'termino'
    },
    {
        termino: 'Asfixia',
        definicion: 'Falta de oxígeno en el cuerpo que puede llevar a la inconsciencia o la muerte.',
        ejemplo: 'La maniobra de Heimlich se usa para tratar la asfixia por obstrucción de la vía aérea.',
        tipo: 'termino'
    },
    {
        termino: 'AVDI (o Alerta-Verbal-Dolor-Inconsciente)',
        definicion: 'Escala rápida para evaluar el nivel de conciencia de un paciente.',
        ejemplo: 'El paciente solo responde a estímulos dolorosos, clasificándose como "D" en AVDI.',
        tipo: 'termino'
    },
    {
        termino: 'Bradicardia',
        definicion: 'Frecuencia cardíaca anormalmente lenta (generalmente < 60 lpm en adultos).',
        ejemplo: 'Bradicardia sintomática puede requerir marcapasos transcutáneo.',
        tipo: 'termino'
    },
    {
        termino: 'Bradipnea',
        definicion: 'Frecuencia respiratoria anormalmente lenta.',
        ejemplo: 'La sobredosis de opiáceos puede causar bradipnea severa.',
        tipo: 'termino'
    },
    {
        termino: 'Cánula Nasal',
        definicion: 'Dispositivo con dos puntas que se insertan en las fosas nasales para administrar oxígeno a bajo flujo.',
        ejemplo: 'Se colocó una cánula nasal a 2 litros por minuto.',
        tipo: 'termino'
    },
    {
        termino: 'Cánula Orofaríngea (Guedel)',
        definicion: 'Dispositivo curvo de plástico que se inserta en la boca para mantener la lengua alejada de la pared posterior de la faringe y asegurar la permeabilidad de la vía aérea en pacientes inconscientes sin reflejo nauseoso.',
        ejemplo: 'Se midió e insertó una cánula orofaríngea para mantener la vía aérea abierta.',
        tipo: 'termino'
    },
    {
        termino: 'Capilar',
        definicion: 'Vaso sanguíneo microscópico que conecta arteriolas y vénulas, donde ocurre el intercambio de gases, nutrientes y desechos.',
        ejemplo: 'El llenado capilar se evalúa presionando el lecho ungueal.',
        tipo: 'termino'
    },
    {
        termino: 'Cianosis',
        definicion: 'Coloración azulada de la piel y mucosas debido a una oxigenación insuficiente de la sangre.',
        ejemplo: 'Cianosis peribucal y en lechos ungueales.',
        tipo: 'termino'
    },
    {
        termino: 'Convulsión',
        definicion: 'Actividad eléctrica anormal y súbita en el cerebro que causa cambios en el comportamiento, movimiento o nivel de conciencia.',
        ejemplo: 'Proteger al paciente de lesiones durante una convulsión tónico-clónica.',
        tipo: 'termino'
    },
    {
        termino: 'Contusión',
        definicion: 'Lesión en los tejidos blandos producida por un golpe, sin que se rompa la piel (moretón).',
        ejemplo: 'Contusión pulmonar tras un traumatismo torácico.',
        tipo: 'termino'
    },
    {
        termino: 'Crónico',
        definicion: 'Describe una condición de larga duración, desarrollo lento o recurrente.',
        ejemplo: 'Enfermedad Pulmonar Obstructiva Crónica (EPOC).',
        tipo: 'termino'
    },
    {
        termino: 'DCAP-BTLS',
        definicion: 'Mnemotecnia para la evaluación de trauma: Deformidades, Contusiones, Abrasiones, Punciones/Penetraciones - Quemaduras (Burns), Sensibilidad (Tenderness), Laceraciones, Hinchazón (Swelling).',
        ejemplo: 'Se realizó una evaluación secundaria buscando DCAP-BTLS en todas las extremidades.',
        tipo: 'termino'
    },
    {
        termino: 'DEA (Desfibrilador Externo Automático)',
        definicion: 'Dispositivo portátil que analiza el ritmo cardíaco y administra una descarga eléctrica si detecta una arritmia desfibrilable (FV/TVSP).',
        ejemplo: 'Aplicar los parches del DEA lo antes posible en un PCR presenciado.',
        tipo: 'termino'
    },
    {
        termino: 'Desfibrilación',
        definicion: 'Administración de una descarga eléctrica controlada al corazón para intentar revertir ciertas arritmias letales.',
        ejemplo: 'La desfibrilación temprana mejora la supervivencia en la fibrilación ventricular.',
        tipo: 'termino'
    },
    {
        termino: 'Diaforesis',
        definicion: 'Sudoración profusa, a menudo asociada con condiciones médicas como shock o infarto.',
        ejemplo: 'Paciente pálido, frío y con diaforesis intensa.',
        tipo: 'termino'
    },
    {
        termino: 'Disnea',
        definicion: 'Dificultad para respirar o sensación de falta de aire.',
        ejemplo: 'Disnea de esfuerzo en paciente con insuficiencia cardíaca.',
        tipo: 'termino'
    },
    {
        termino: 'Edema',
        definicion: 'Acumulación anormal de líquido en los tejidos del cuerpo, causando hinchazón.',
        ejemplo: 'Edema agudo de pulmón requiere manejo inmediato.',
        tipo: 'termino'
    },
    {
        termino: 'Epistaxis',
        definicion: 'Hemorragia nasal (sangrado por la nariz).',
        ejemplo: 'Controlar la epistaxis posterior puede ser difícil.',
        tipo: 'termino'
    },
    {
        termino: 'Escala de Coma de Glasgow (ECG / GCS)',
        definicion: 'Herramienta estandarizada para evaluar el nivel de conciencia basándose en la respuesta ocular, verbal y motora (puntaje de 3 a 15).',
        ejemplo: `Desglose:\n
      • Respuesta ocular (1-4):\n
         1. Ninguna\n
         2. Al dolor\n
         3. Al estímulo verbal\n
         4. Espontánea\n
      • Respuesta verbal (1-5):\n
        1. Ninguna\n
        2. Sonidos incomprensibles\n
        3. Palabras inapropiadas\n
        4. Confuso\n
        5. Orientado\n
      • Respuesta motora (1-6):\n
        1. Ninguna\n
        2. Extensión anormal\n
        3. Flexión anormal\n
        4. Retira al dolor\n
        5. Localiza el dolor\n
        6. Obedece órdenes`,
        tipo: 'termino'
    },
    {
        termino: 'Férula',
        definicion: 'Dispositivo rígido o semirrígido utilizado para inmovilizar una parte del cuerpo lesionada, generalmente una extremidad con fractura o luxación.',
        ejemplo: 'Se aplicó una férula de vacío para inmovilizar la fractura de tibia.',
        tipo: 'termino'
    },
    {
        termino: 'Fractura',
        definicion: 'Rotura de un hueso. Puede ser cerrada (piel intacta) o abierta (hueso expuesto).',
        ejemplo: 'Fractura abierta de fémur con hemorragia activa.',
        tipo: 'termino'
    },
    {
        termino: 'Hemorragia',
        definicion: 'Pérdida de sangre desde el sistema circulatorio. Puede ser externa (visible) o interna.',
        ejemplo: 'Control de hemorragia externa mediante presión directa y elevación.',
        tipo: 'termino'
    },
    {
        termino: 'Hemotórax',
        definicion: 'Acumulación de sangre en el espacio pleural (entre el pulmón y la pared torácica).',
        ejemplo: 'Un hemotórax masivo puede causar shock hipovolémico.',
        tipo: 'termino'
    },
    {
        termino: 'Hipertensión',
        definicion: 'Presión arterial anormalmente alta.',
        ejemplo: 'Crisis hipertensiva con cifras de 220/120 mmHg.',
        tipo: 'termino'
    },
    {
        termino: 'Hipoglucemia',
        definicion: 'Nivel anormalmente bajo de azúcar (glucosa) en la sangre.',
        ejemplo: 'Administrar glucosa oral o intravenosa en hipoglucemia sintomática.',
        tipo: 'termino'
    },
    {
        termino: 'Hipotensión',
        definicion: 'Presión arterial anormalmente baja.',
        ejemplo: 'La hipotensión es un signo tardío de shock en pacientes jóvenes.',
        tipo: 'termino'
    },
    {
        termino: 'Hipovolemia',
        definicion: 'Disminución del volumen de sangre circulante en el cuerpo.',
        ejemplo: 'La deshidratación severa puede llevar a hipovolemia.',
        tipo: 'termino'
    },
    {
        termino: 'Hipoxia',
        definicion: 'Deficiencia de oxígeno en los tejidos del cuerpo.',
        ejemplo: 'La administración de oxígeno suplementario combate la hipoxia.',
        tipo: 'termino'
    },
    {
        termino: 'Infarto Agudo de Miocardio (IAM)',
        definicion: 'Necrosis (muerte) de una porción del músculo cardíaco causada por falta prolongada de riego sanguíneo.',
        ejemplo: 'El electrocardiograma mostró elevación del segmento ST, indicativo de IAM.',
        tipo: 'termino'
    },
    {
        termino: 'Isquemia',
        definicion: 'Reducción del flujo sanguíneo a un tejido, provocando falta de oxígeno y nutrientes.',
        ejemplo: 'Dolor torácico por isquemia miocárdica (angina).',
        tipo: 'termino'
    },
    {
        termino: 'Laceración',
        definicion: 'Herida producida por un desgarro de los tejidos, con bordes irregulares.',
        ejemplo: 'Laceración profunda que requiere sutura.',
        tipo: 'termino'
    },
    {
        termino: 'Neumotórax',
        definicion: 'Acumulación de aire en el espacio pleural, que causa colapso pulmonar.',
        ejemplo: 'Neumotórax a tensión requiere descompresión inmediata con aguja.',
        tipo: 'termino'
    },
    {
        termino: 'OPQRST',
        definicion: 'Mnemotecnia para evaluar el dolor: Onset (Inicio), Provocación/Paliación, Quality (Calidad), Radiación, Severity (Severidad), Time (Tiempo).',
        ejemplo: 'Se utilizó OPQRST para caracterizar el dolor torácico del paciente.',
        tipo: 'termino'
    },
    {
        termino: 'Oxigenoterapia',
        definicion: 'Administración de oxígeno a una concentración mayor que la del aire ambiente para tratar o prevenir la hipoxia.',
        ejemplo: 'Se inició oxigenoterapia con mascarilla no recirculante a 15 lpm.',
        tipo: 'termino'
    },
    {
        termino: 'Palpación',
        definicion: 'Examen físico mediante el tacto para detectar sensibilidad, masas, temperatura, etc.',
        ejemplo: 'Palpación abdominal en busca de dolor o rigidez.',
        tipo: 'termino'
    },
    {
        termino: 'PCR (Paro Cardiorrespiratorio)',
        definicion: 'Cese súbito de la función cardíaca y respiratoria efectiva.',
        ejemplo: 'Iniciar RCP de alta calidad inmediatamente en caso de PCR.',
        tipo: 'termino'
    },
    {
        termino: 'Perfusión',
        definicion: 'Circulación de sangre a través de los tejidos y órganos.',
        ejemplo: 'Piel pálida y fría indica mala perfusión periférica.',
        tipo: 'termino'
    },
    {
        termino: 'SAMPLE',
        definicion: 'Mnemotecnia para obtener la historia clínica del paciente: Signos/Síntomas, Alergias, Medicamentos, Padecimientos previos (historia médica), Última comida (Last oral intake), Eventos previos al incidente.',
        ejemplo: 'Se obtuvo la historia SAMPLE mientras se evaluaban los signos vitales.',
        tipo: 'termino'
    },
    {
        termino: 'Saturación de Oxígeno (SpO2)',
        definicion: 'Medida no invasiva del porcentaje de hemoglobina en la sangre arterial que está saturada con oxígeno. Se mide con un oxímetro de pulso.',
        ejemplo: 'Paciente con SpO2 del 88% requiere oxígeno suplementario.',
        tipo: 'termino'
    },
    {
        termino: 'Sepsis',
        definicion: 'Respuesta sistémica y potencialmente mortal del cuerpo a una infección.',
        ejemplo: 'La sepsis puede progresar rápidamente a shock séptico.',
        tipo: 'termino'
    },
    {
        termino: 'Shock',
        definicion: 'Estado crítico de hipoperfusión tisular generalizada. Varios tipos: hipovolémico, cardiogénico, anafiláctico, séptico, neurogénico.',
        ejemplo: 'Tratamiento inicial del shock hipovolémico incluye control de hemorragia y reposición de volumen.',
        tipo: 'termino'
    },
    {
        termino: 'Signos Vitales',
        definicion: 'Mediciones básicas: Pulso, Frecuencia Respiratoria, Presión Arterial, Temperatura, SpO2.',
        ejemplo: 'Monitorización continua de signos vitales cada 5 minutos en paciente crítico.',
        tipo: 'termino'
    },
    {
        termino: 'Síncope',
        definicion: 'Pérdida breve y súbita de la conciencia debido a disminución temporal del flujo sanguíneo cerebral (desmayo).',
        ejemplo: 'Investigar la causa del síncope (cardíaca, neurológica, vasovagal).',
        tipo: 'termino'
    },
    {
        termino: 'SNC (Sistema Nervioso Central)',
        definicion: 'Parte del sistema nervioso compuesta por el encéfalo y la médula espinal.',
        ejemplo: 'Un traumatismo craneoencefálico afecta directamente al SNC.',
        tipo: 'termino'
    },
    {
        termino: 'Taquicardia',
        definicion: 'Frecuencia cardíaca anormalmente rápida (generalmente > 100 lpm en adultos en reposo).',
        ejemplo: 'Taquicardia supraventricular requiere valoración y posible tratamiento.',
        tipo: 'termino'
    },
    {
        termino: 'Taquipnea',
        definicion: 'Frecuencia respiratoria anormalmente rápida.',
        ejemplo: 'La acidosis metabólica puede causar taquipnea compensatoria.',
        tipo: 'termino'
    },
    {
        termino: 'Torniquete',
        definicion: 'Dispositivo que se aplica a una extremidad para detener una hemorragia arterial grave que no puede controlarse por otros medios.',
        ejemplo: 'Aplicar un torniquete lo más proximal posible a la herida y anotar la hora.',
        tipo: 'termino'
    },
    {
        termino: 'Trauma',
        definicion: 'Lesión física o herida causada por una fuerza externa.',
        ejemplo: 'Evaluación primaria del paciente de trauma siguiendo el ABCDE.',
        tipo: 'termino'
    },
    {
        termino: 'Triage',
        definicion: 'Proceso de clasificación de pacientes basado en la gravedad de sus lesiones o enfermedades para priorizar la atención, especialmente en incidentes con múltiples víctimas.',
        ejemplo: 'Se realizó un triage rápido utilizando el método START.',
        tipo: 'termino'
    },
    {
        termino: 'Vena',
        definicion: 'Vaso sanguíneo que transporta sangre desoxigenada desde los tejidos hacia el corazón (excepto la vena pulmonar).',
        ejemplo: 'Se canalizó una vena periférica para administrar fluidos.',
        tipo: 'termino'
    },
    {
        termino: 'Ventilación',
        definicion: 'Proceso mecánico de mover aire hacia dentro y fuera de los pulmones.',
        ejemplo: 'Ventilación con bolsa-mascarilla a una frecuencia de 10-12 por minuto.',
        tipo: 'termino'
    },
    {
        termino: 'Vía Aérea',
        definicion: 'Conducto por donde pasa el aire hasta los pulmones (nariz, boca, faringe, laringe, tráquea, bronquios).',
        ejemplo: 'Mantener una vía aérea permeable es la máxima prioridad.',
        tipo: 'termino'
    },

    // --- PREFIJOS ---
    {
        termino: 'a- / an-',
        definicion: 'Prefijo que indica ausencia, falta o negación.',
        ejemplo: 'Apnea (ausencia de respiración), Anoxia (ausencia de oxígeno).',
        tipo: 'prefijo'
    },
    {
        termino: 'brady-',
        definicion: 'Prefijo que significa lento.',
        ejemplo: 'Bradicardia (ritmo cardíaco lento), Bradipnea (respiración lenta).',
        tipo: 'prefijo'
    },
    {
        termino: 'circum-',
        definicion: 'Prefijo que significa alrededor de.',
        ejemplo: 'Circumoral (alrededor de la boca).',
        tipo: 'prefijo'
    },
    {
        termino: 'dys-',
        definicion: 'Prefijo que indica dificultad, dolor o anormalidad.',
        ejemplo: 'Disnea (dificultad para respirar), Disfagia (dificultad para tragar).',
        tipo: 'prefijo'
    },
    {
        termino: 'endo-',
        definicion: 'Prefijo que significa dentro o interno.',
        ejemplo: 'Endotraqueal (dentro de la tráquea).',
        tipo: 'prefijo'
    },
    {
        termino: 'epi-',
        definicion: 'Prefijo que significa sobre, encima o además de.',
        ejemplo: 'Epidural (sobre la duramadre), Epigastrio (región sobre el estómago).',
        tipo: 'prefijo'
    },
    {
        termino: 'eu-',
        definicion: 'Prefijo que significa bueno, normal o fácil.',
        ejemplo: 'Eupnea (respiración normal).',
        tipo: 'prefijo'
    },
    {
        termino: 'hemi-',
        definicion: 'Prefijo que significa mitad.',
        ejemplo: 'Hemiplejia (parálisis de la mitad del cuerpo).',
        tipo: 'prefijo'
    },
    {
        termino: 'hyper-',
        definicion: 'Prefijo que indica exceso, por encima de lo normal.',
        ejemplo: 'Hipertensión (presión arterial alta), Hiperglucemia (azúcar en sangre alta).',
        tipo: 'prefijo'
    },
    {
        termino: 'hypo-',
        definicion: 'Prefijo que indica deficiencia, por debajo de lo normal.',
        ejemplo: 'Hipotensión (presión arterial baja), Hipoxia (oxígeno bajo).',
        tipo: 'prefijo'
    },
    {
        termino: 'inter-',
        definicion: 'Prefijo que significa entre.',
        ejemplo: 'Intercostal (entre las costillas).',
        tipo: 'prefijo'
    },
    {
        termino: 'intra-',
        definicion: 'Prefijo que significa dentro.',
        ejemplo: 'Intravenoso (dentro de una vena), Intramuscular (dentro de un músculo).',
        tipo: 'prefijo'
    },
    {
        termino: 'peri-',
        definicion: 'Prefijo que significa alrededor.',
        ejemplo: 'Pericardio (membrana alrededor del corazón), Peri umbilical (alrededor del ombligo).',
        tipo: 'prefijo'
    },
    {
        termino: 'poly-',
        definicion: 'Prefijo que significa mucho o varios.',
        ejemplo: 'Politraumatismo (múltiples traumatismos), Poliuria (orinar mucho).',
        tipo: 'prefijo'
    },
    {
        termino: 'post-',
        definicion: 'Prefijo que significa después o detrás.',
        ejemplo: 'Postoperatorio (después de la operación), Postictal (después de una convulsión).',
        tipo: 'prefijo'
    },
    {
        termino: 'pre-',
        definicion: 'Prefijo que significa antes o delante.',
        ejemplo: 'Prehospitalario (antes del hospital), Precordial (delante del corazón).',
        tipo: 'prefijo'
    },
    {
        termino: 'sub-',
        definicion: 'Prefijo que significa debajo o inferior.',
        ejemplo: 'Subcutáneo (debajo de la piel), Sublingual (debajo de la lengua).',
        tipo: 'prefijo'
    },
    {
        termino: 'supra-',
        definicion: 'Prefijo que significa sobre o encima.',
        ejemplo: 'Supraventricular (encima de los ventrículos).',
        tipo: 'prefijo'
    },
    {
        termino: 'tachy-',
        definicion: 'Prefijo que significa rápido.',
        ejemplo: 'Taquicardia (ritmo cardíaco rápido), Taquipnea (respiración rápida).',
        tipo: 'prefijo'
    },
    {
        termino: 'trans-',
        definicion: 'Prefijo que significa a través de.',
        ejemplo: 'Transdérmico (a través de la piel).',
        tipo: 'prefijo'
    },

    // --- SUFIJOS ---
    {
        termino: '-algia',
        definicion: 'Sufijo que significa dolor.',
        ejemplo: 'Neuralgia (dolor en un nervio), Mialgia (dolor muscular).',
        tipo: 'sufijo'
    },
    {
        termino: '-centesis',
        definicion: 'Sufijo que indica una punción quirúrgica para extraer líquido.',
        ejemplo: 'Toracocentesis (punción del tórax).',
        tipo: 'sufijo'
    },
    {
        termino: '-ectomía',
        definicion: 'Sufijo que significa extirpación quirúrgica.',
        ejemplo: 'Apendicectomía (extirpación del apéndice).',
        tipo: 'sufijo'
    },
    {
        termino: '-emia',
        definicion: 'Sufijo relacionado con la sangre.',
        ejemplo: 'Anemia (falta de glóbulos rojos), Hipoglucemia (bajo nivel de azúcar en sangre).',
        tipo: 'sufijo'
    },
    {
        termino: '-espasmo',
        definicion: 'Sufijo que indica una contracción involuntaria y súbita.',
        ejemplo: 'Broncoespasmo (contracción de los bronquios), Laringoespasmo.',
        tipo: 'sufijo'
    },
    {
        termino: '-grafía',
        definicion: 'Sufijo que significa registro o imagen.',
        ejemplo: 'Electrocardiografía (registro de la actividad eléctrica del corazón).',
        tipo: 'sufijo'
    },
    {
        termino: '-itis',
        definicion: 'Sufijo que indica inflamación.',
        ejemplo: 'Apenciditis (inflamación del apéndice), Faringitis (inflamación de la faringe).',
        tipo: 'sufijo'
    },
    {
        termino: '-logía',
        definicion: 'Sufijo que significa estudio o ciencia de.',
        ejemplo: 'Cardiología (estudio del corazón), Neurología (estudio del sistema nervioso).',
        tipo: 'sufijo'
    },
    {
        termino: '-megalia',
        definicion: 'Sufijo que indica agrandamiento.',
        ejemplo: 'Hepatomegalia (agrandamiento del hígado), Cardiomegalia (agrandamiento del corazón).',
        tipo: 'sufijo'
    },
    {
        termino: '-metría',
        definicion: 'Sufijo que significa medición.',
        ejemplo: 'Oximetría (medición del oxígeno), Espirometría (medición de la capacidad pulmonar).',
        tipo: 'sufijo'
    },
    {
        termino: '-oma',
        definicion: 'Sufijo que generalmente significa tumor o masa.',
        ejemplo: 'Hematoma (acumulación de sangre coagulada, masa).',
        tipo: 'sufijo'
    },
    {
        termino: '-osis',
        definicion: 'Sufijo que indica condición anormal o enfermedad.',
        ejemplo: 'Cianosis (condición azulada), Acidosis (condición ácida).',
        tipo: 'sufijo'
    },
    {
        termino: '-patía',
        definicion: 'Sufijo que significa enfermedad.',
        ejemplo: 'Cardiopatía (enfermedad del corazón), Neuropatía (enfermedad de los nervios).',
        tipo: 'sufijo'
    },
    {
        termino: '-penia',
        definicion: 'Sufijo que indica deficiencia o disminución.',
        ejemplo: 'Leucopenia (disminución de glóbulos blancos).',
        tipo: 'sufijo'
    },
    {
        termino: '-plejia',
        definicion: 'Sufijo que significa parálisis.',
        ejemplo: 'Hemiplejia (parálisis de medio cuerpo), Paraplejia (parálisis de las piernas).',
        tipo: 'sufijo'
    },
    {
        termino: '-pnea',
        definicion: 'Sufijo relacionado con la respiración.',
        ejemplo: 'Apnea (sin respiración), Disnea (dificultad para respirar), Taquipnea (respiración rápida).',
        tipo: 'sufijo'
    },
    {
        termino: '-rragia',
        definicion: 'Sufijo que indica un flujo o descarga excesiva, generalmente de sangre.',
        ejemplo: 'Hemorragia (descarga de sangre).',
        tipo: 'sufijo'
    },
    {
        termino: '-rrea',
        definicion: 'Sufijo que indica flujo o descarga (no necesariamente sangre).',
        ejemplo: 'Rinorrea (flujo nasal), Diarrea.',
        tipo: 'sufijo'
    },
    {
        termino: '-scopia',
        definicion: 'Sufijo que significa examen visual o inspección (generalmente con un instrumento).',
        ejemplo: 'Laringoscopia (examen visual de la laringe).',
        tipo: 'sufijo'
    },
    {
        termino: '-stomía',
        definicion: 'Sufijo que indica la creación quirúrgica de una abertura artificial.',
        ejemplo: 'Traqueostomía (abertura en la tráquea).',
        tipo: 'sufijo'
    },
    {
        termino: '-tomía',
        definicion: 'Sufijo que significa incisión o corte quirúrgico.',
        ejemplo: 'Cricotirotomía (incisión en la membrana cricotiroidea).',
        tipo: 'sufijo'
    },
    {
        termino: '-uria',
        definicion: 'Sufijo relacionado con la orina.',
        ejemplo: 'Hematuria (sangre en la orina), Poliuria (orinar mucho).',
        tipo: 'sufijo'
    },
    {
        termino: 'SAMPLE',
        definicion: 'Mnemotecnia utilizada para obtener la historia clínica relevante de un paciente.',
        ejemplo: `Desglose:\n
      • S: Signos y Síntomas (¿Qué le pasa? ¿Qué siente?)\n
      • A: Alergias (¿Es alérgico a algún medicamento, alimento, etc.?)\n
      • M: Medicamentos (¿Toma alguna medicación regularmente? ¿Dosis? ¿Cuándo fue la última?)\n
      • P: Padecimientos previos / Historia médica (¿Sufre de alguna enfermedad crónica? ¿Cirugías previas?)\n
      • L: Última ingesta oral (Last Oral Intake) (¿Cuándo fue la última vez que comió o bebió algo?)\n
      • E: Eventos previos al incidente (¿Qué estaba haciendo justo antes de que comenzara el problema?)`,
        tipo: 'mnemotecnia' // 2. Asignar el tipo 'mnemotecnia'
    },
    {
        termino: 'OPQRST',
        definicion: 'Mnemotecnia utilizada para evaluar el dolor de un paciente.',
        ejemplo: `Desglose:\n
      • O: Onset / Inicio (¿Cuándo empezó el dolor? ¿Fue súbito o gradual?)\n
      • P: Provocación / Paliación (¿Hay algo que lo mejore o lo empeore? ¿Movimiento, reposo, posición?)\n
      • Q: Quality / Calidad (¿Cómo es el dolor? ¿Opresivo, punzante, quemante, sordo...?)\n
      • R: Radiación / Región (¿Dónde le duele exactamente? ¿Se irradia o se mueve a otra parte?)\n
      • S: Severity / Severidad (En una escala del 0 al 10, ¿qué número le daría a su dolor?)\n
      • T: Time / Tiempo (¿Es constante o intermitente? ¿Cuánto tiempo lleva con el dolor?)`,
        tipo: 'mnemotecnia' // 2. Asignar el tipo 'mnemotecnia'
    },
    {
        termino: 'DCAP-BTLS',
        definicion: 'Mnemotecnia utilizada durante la evaluación física de un paciente de trauma para buscar lesiones específicas.',
        ejemplo: `Desglose:\n
      • D: Deformidades (¿Hay alguna deformidad ósea visible?)\n
      • C: Contusiones (¿Hay moretones?)\n
      • A: Abrasiones (¿Hay raspaduras?)\n
      • P: Punciones / Penetraciones (¿Hay heridas penetrantes?)\n
      • B: Burns / Quemaduras (¿Hay quemaduras? ¿De qué tipo y extensión?)\n
      • T: Tenderness / Sensibilidad (¿Hay dolor a la palpación en alguna zona?)\n
      • L: Laceraciones (¿Hay heridas abiertas con bordes irregulares?)\n
      • S: Swelling / Hinchazón (¿Hay edema o hinchazón?)`,
        tipo: 'mnemotecnia' // 2. Asignar el tipo 'mnemotecnia'
    },
    {
        termino: 'AVDI', // Puedes renombrar la entrada existente o añadir esta si prefieres mantener ambas
        definicion: 'Escala rápida para evaluar el nivel de conciencia de un paciente.',
        ejemplo: `Desglose:\n
      • A: Alerta (El paciente está despierto, consciente y orientado).\n
      • V: Verbal (El paciente responde a estímulos verbales, aunque esté desorientado o confuso).\n
      • D: Dolor (El paciente solo responde a estímulos dolorosos).\n
      • I: Inconsciente (El paciente no responde a ningún estímulo).`,
        tipo: 'mnemotecnia' // Asegúrate que el tipo sea consistente
    },
    {
        termino: 'ABCDE',
        definicion: 'Mnemotecnia utilizada para la evaluación primaria de un paciente en situaciones de emergencia.',
        ejemplo: `Desglose:\n
      • A: Airway / Vía aérea (¿Está la vía aérea permeable?)\n
      • B: Breathing / Respiración (¿Está respirando adecuadamente?)\n
      • C: Circulation / Circulación (¿Hay signos de hemorragia o shock?)\n
      • D: Disability / Discapacidad (Evaluar el estado neurológico, como la Escala de Coma de Glasgow).\n
      • E: Exposure / Exposición (Exponer al paciente para buscar lesiones ocultas, manteniendo la temperatura).`,
        tipo: 'mnemotecnia'
    },
    {
        termino: 'FAST',
        definicion: 'Mnemotecnia utilizada para identificar signos de un accidente cerebrovascular (ACV).',
        ejemplo: `Desglose:\n
      • F: Face / Cara (¿Hay asimetría facial al sonreír?)\n
      • A: Arms / Brazos (¿Puede levantar ambos brazos? ¿Uno cae?)\n
      • S: Speech / Habla (¿Tiene dificultad para hablar o se le entiende mal?)\n
      • T: Time / Tiempo (Actuar rápidamente y llamar a emergencias).`,
        tipo: 'mnemotecnia'
    },
    {
        termino: 'MARCH',
        definicion: 'Mnemotecnia utilizada en el manejo de trauma para priorizar intervenciones críticas.',
        ejemplo: `Desglose:\n
      • M: Massive Hemorrhage / Hemorragia masiva (Controlar hemorragias graves).\n
      • A: Airway / Vía aérea (Asegurar la permeabilidad de la vía aérea).\n
      • R: Respiration / Respiración (Tratar neumotórax o problemas respiratorios).\n
      • C: Circulation / Circulación (Evaluar perfusión y tratar shock).\n
      • H: Hypothermia / Hipotermia (Prevenir pérdida de calor).`,
        tipo: 'mnemotecnia'
    },
    {
        termino: 'SOAP',
        definicion: 'Mnemotecnia utilizada para documentar la evaluación y tratamiento del paciente.',
        ejemplo: `Desglose:\n
      • S: Subjective / Subjetivo (Información proporcionada por el paciente, como síntomas).\n
      • O: Objective / Objetivo (Signos observados, como signos vitales y hallazgos físicos).\n
      • A: Assessment / Evaluación (Diagnóstico o impresión clínica).\n
      • P: Plan (Tratamiento o intervenciones realizadas).`,
        tipo: 'mnemotecnia'
    },
    {
        termino: 'GEMS',
        definicion: 'Mnemotecnia utilizada para evaluar pacientes geriátricos.',
        ejemplo: `Desglose:\n
      • G: Geriatric / Geriátrico (Considerar problemas específicos de la edad avanzada).\n
      • E: Environmental / Entorno (Evaluar el entorno del paciente para posibles riesgos).\n
      • M: Medical / Médico (Buscar condiciones médicas subyacentes).\n
      • S: Social / Social (Evaluar el soporte social y las necesidades del paciente).`,
        tipo: 'mnemotecnia'
    },
    {
        termino: 'PERL',
        definicion: 'Mnemotecnia utilizada para evaluar la respuesta pupilar de un paciente.',
        ejemplo: `Desglose:\n
      • P: Pupils / Pupilas\n
      • E: Equal / Iguales (¿Son del mismo tamaño?)\n
      • R: Reactive / Reactivas (¿Reaccionan a la luz?)\n
      • L: Light / Luz (¿Reaccionan adecuadamente a la luz?)`,
        tipo: 'mnemotecnia'
    },
    {
        termino: 'LEMON',
        definicion: 'Mnemotecnia utilizada para evaluar la dificultad de intubación en un paciente.',
        ejemplo: `Desglose:\n
      • L: Look / Mirar (¿Hay características anatómicas que sugieran dificultad?)\n
      • E: Evaluate / Evaluar (Usar la regla 3-3-2 para medir la apertura oral, distancia hioidea y tiromental).\n
      • M: Mallampati / Clasificación de Mallampati (Evaluar la visibilidad de estructuras orofaríngeas).\n
      • O: Obstruction / Obstrucción (¿Hay obstrucciones en la vía aérea?)\n
      • N: Neck Mobility / Movilidad del cuello (¿El cuello tiene rango de movimiento adecuado?)`,
        tipo: 'mnemotecnia'
    },
    {
        termino: 'AEIOU-TIPS',
        definicion: 'Mnemotecnia utilizada para recordar las posibles causas de alteración del estado mental.',
        ejemplo: `Desglose:\n
      • A: Alcohol\n
      • E: Epilepsia\n
      • I: Insulina (hipoglucemia o hiperglucemia)\n
      • O: Overdose / Sobredosis (drogas o medicamentos)\n
      • U: Uremia (insuficiencia renal)\n
      • T: Trauma (lesión craneal)\n
      • I: Infección (sepsis, meningitis)\n
      • P: Psiquiátrico (trastornos mentales) o Envenenamiento (Poisoning)\n
      • S: Stroke / Accidente cerebrovascular`,
        tipo: 'mnemotecnia'
    },
    {
        termino: 'ALICIA',
        definicion: 'Mnemotecnia utilizada para evaluar el dolor de un paciente.',
        ejemplo: `Desglose:\n
      • A: Aparición (¿Cuándo comenzó el dolor? ¿Fue súbito o gradual?)\n
      • L: Localización (¿Dónde se localiza el dolor? ¿Es en un punto específico o generalizado?)\n
      • I: Irradiación (¿El dolor se mueve o se irradia a otra parte del cuerpo?)\n
      • C: Características (¿Cómo describiría el dolor? ¿Es punzante, opresivo, quemante, etc.?)\n
      • I: Intensidad (En una escala del 0 al 10, ¿qué tan intenso es el dolor?)\n
      • A: Alivio/Agravantes (¿Hay algo que mejore o empeore el dolor?)`,
        tipo: 'mnemotecnia'
    },
    {
        termino: 'Adrenalina / Epinefrina (Autoinyector)',
        definicion: 'Medicamento simpaticomimético usado para tratar reacciones alérgicas graves (anafilaxia). El TEM Básico puede asistir o administrarla mediante autoinyector según protocolo.',
        ejemplo: 'Paciente con anafilaxia recibió una dosis de epinefrina intramuscular a través de autoinyector en el muslo.',
        tipo: 'termino'
    },
    {
        termino: 'Aspirina (Ácido Acetilsalicílico)',
        definicion: 'Medicamento antiinflamatorio no esteroideo (AINE) y antiplaquetario. Se administra a pacientes con sospecha de síndrome coronario agudo (dolor torácico de origen cardíaco) según protocolo.',
        ejemplo: 'Se administraron 324 mg de aspirina masticable a paciente con dolor torácico sugestivo de IAM.',
        tipo: 'termino'
    },
    {
        termino: 'Auscultación',
        definicion: 'Acción de escuchar los sonidos producidos dentro del cuerpo, generalmente con un estetoscopio (ej. ruidos pulmonares, cardíacos, intestinales).',
        ejemplo: 'La auscultación pulmonar reveló sibilancias bilaterales.',
        tipo: 'termino'
    },
    {
        termino: 'Avulsión',
        definicion: 'Lesión en la que un colgajo de piel u otro tejido es arrancado parcial o totalmente del cuerpo.',
        ejemplo: 'Avulsión extensa en el antebrazo tras accidente con maquinaria.',
        tipo: 'termino'
    },
    {
        termino: 'Cánula Nasofaríngea (NPA)',
        definicion: 'Tubo blando y flexible que se inserta a través de una fosa nasal hasta la faringe posterior para mantener la vía aérea permeable en pacientes conscientes o semiconscientes con reflejo nauseoso intacto.',
        ejemplo: 'Se insertó una cánula nasofaríngea lubricada en la fosa nasal derecha.',
        tipo: 'termino'
    },
    {
        termino: 'Carbón Activado',
        definicion: 'Sustancia que se administra por vía oral para adsorber (unir a su superficie) ciertas toxinas ingeridas en el tracto digestivo, disminuyendo su absorción.',
        ejemplo: 'Administración de carbón activado tras consulta con el centro de toxicología por ingesta de medicamentos.',
        tipo: 'termino'
    },
    {
        termino: 'Crepitantes / Estertores',
        definicion: 'Sonidos pulmonares anormales, finos y burbujeantes, escuchados durante la inspiración. Usualmente indican presencia de líquido en los alvéolos (ej. edema pulmonar, neumonía).',
        ejemplo: 'Se auscultaron crepitantes en ambas bases pulmonares.',
        tipo: 'termino'
    },
    {
        termino: 'Estado Mental Alterado (EMA)',
        definicion: 'Cualquier desviación del estado de conciencia normal y orientado de un paciente. Abarca desde confusión leve hasta coma profundo.',
        ejemplo: 'Paciente diabético encontrado con estado mental alterado; se sospecha hipoglucemia.',
        tipo: 'termino'
    },
    {
        termino: 'Evisceración',
        definicion: 'Protrusión de órganos internos (generalmente abdominales) a través de una herida abierta.',
        ejemplo: 'Cubrir la evisceración abdominal con apósitos estériles húmedos y luego un vendaje oclusivo seco.',
        tipo: 'termino'
    },
    {
        termino: 'Fontanela',
        definicion: 'Áreas blandas en el cráneo de un bebé donde los huesos aún no se han fusionado completamente. Pueden indicar hidratación o aumento de presión intracraneal.',
        ejemplo: 'La fontanela anterior del lactante se palpaba tensa y abombada.',
        tipo: 'termino'
    },
    {
        termino: 'Geriatría (Consideraciones)',
        definicion: 'Rama de la medicina enfocada en los adultos mayores. En prehospitalaria implica reconocer diferencias en la presentación de enfermedades, polifarmacia, mayor riesgo de caídas y comorbilidades.',
        ejemplo: 'Paciente geriátrico con IAM puede presentar disnea o síncope en lugar de dolor torácico clásico.',
        tipo: 'termino'
    },
    {
        termino: 'Glucosa Oral',
        definicion: 'Gel o pasta de azúcar simple que se administra por vía oral (generalmente entre la mejilla y la encía) a pacientes conscientes con hipoglucemia confirmada o sospechada.',
        ejemplo: 'Se administró un tubo de glucosa oral al paciente con glucemia de 50 mg/dL.',
        tipo: 'termino'
    },
    {
        termino: 'Golpe de Calor',
        definicion: 'Emergencia médica grave causada por fallo del sistema de termorregulación del cuerpo, resultando en temperatura corporal peligrosamente alta (>40°C) y alteraciones del SNC (convulsiones, coma).',
        ejemplo: 'Paciente encontrado inconsciente tras ejercicio intenso en clima cálido, piel caliente y seca; sospecha de golpe de calor.',
        tipo: 'termino'
    },
    {
        termino: 'Hemostasia',
        definicion: 'Proceso fisiológico para detener el sangrado o la hemorragia.',
        ejemplo: 'La presión directa es el método inicial para lograr la hemostasia en heridas externas.',
        tipo: 'termino'
    },
    {
        termino: 'Hipotermia',
        definicion: 'Condición en la que la temperatura corporal central desciende por debajo de los 35°C (95°F), afectando las funciones fisiológicas.',
        ejemplo: 'Retirar ropa mojada y cubrir con mantas para tratar la hipotermia leve.',
        tipo: 'termino'
    },
    {
        termino: 'Nitroglicerina (NTG)',
        definicion: 'Medicamento vasodilatador utilizado para tratar el dolor torácico asociado a angina de pecho o infarto agudo de miocardio. El TEM Básico puede asistir al paciente a tomar su propia NTG prescrita (sublingual), según protocolo y si la PA es adecuada.',
        ejemplo: 'Se asistió al paciente en la administración de una dosis de nitroglicerina sublingual de su propio frasco.',
        tipo: 'termino'
    },
    {
        termino: 'Parto Inminente (Signos)',
        definicion: 'Indicadores de que el nacimiento del bebé es muy próximo: contracciones fuertes y frecuentes (cada 2-3 min), sensación de pujo o necesidad de evacuar, coronamiento (visualización de la cabeza del bebé).',
        ejemplo: 'La paciente refería ganas de pujar y se observó coronamiento; se preparó el equipo para parto de emergencia.',
        tipo: 'termino'
    },
    {
        termino: 'Pupilas (Evaluación / PERRLA)',
        definicion: 'Examen del tamaño, igualdad y reactividad de las pupilas a la luz. PERRLA: Pupilas Iguales, Redondas, Reactivas a la Luz y Acomodación (la acomodación es menos evaluada en prehospitalaria).',
        ejemplo: 'Evaluación pupilar: PERRL. Una pupila dilatada y no reactiva puede indicar lesión cerebral grave.',
        tipo: 'termino'
    },
    {
        termino: 'Quemadura (Clasificación)',
        definicion: 'Lesión en los tejidos causada por calor, químicos, electricidad, radiación o fricción. Se clasifican por profundidad: 1er grado (superficial, ej. eritema solar), 2do grado (espesor parcial, ampollas), 3er grado (espesor total, aspecto carbonáceo o blanquecino).',
        ejemplo: 'Paciente con quemaduras de 2do y 3er grado en el brazo tras incendio.',
        tipo: 'termino'
    },
    {
        termino: 'Regla de los Nueves',
        definicion: 'Método utilizado para estimar rápidamente el porcentaje de la superficie corporal total (SCT) afectada por quemaduras en adultos.',
        ejemplo: 'Según la Regla de los Nueves, la quemadura que afecta todo el brazo derecho representa un 9% de la SCT.',
        tipo: 'termino'
    },
    {
        termino: 'Salbutamol / Albuterol (Inhalador/Nebulizador)',
        definicion: 'Medicamento broncodilatador utilizado para tratar el broncoespasmo en condiciones como asma o EPOC. El TEM Básico puede asistir al paciente con su inhalador de dosis medida (MDI) o administrarlo nebulizado según protocolo.',
        ejemplo: 'Se administraron 2 disparos de salbutamol con cámara espaciadora.',
        tipo: 'termino'
    },
    {
        termino: 'Sibilancias',
        definicion: 'Sonido pulmonar anormal, agudo y musical, generalmente escuchado durante la espiración. Causado por el estrechamiento de las vías aéreas (ej. asma, EPOC, anafilaxia).',
        ejemplo: 'Paciente asmático presenta sibilancias audibles sin estetoscopio.',
        tipo: 'termino'
    },
    {
        termino: 'Vendaje Oclusivo',
        definicion: 'Vendaje que sella una herida y no permite el paso de aire o fluidos. Se usa en heridas torácicas penetrantes (sellado en 3 lados) o para cubrir evisceraciones (sellado completo, seco sobre húmedo).',
        ejemplo: 'Se aplicó un vendaje oclusivo de tres lados a la herida succionante en el tórax.',
        tipo: 'termino'
    },
    {
        termino: 'Abandono (Legal/Ético)',
        definicion: 'Terminación unilateral de la atención a un paciente por parte del proveedor prehospitalario sin asegurar la continuidad de la atención por personal de igual o mayor nivel de capacitación.',
        ejemplo: 'Dejar a un paciente en la sala de espera del hospital sin haber realizado una transferencia formal al personal de enfermería o médico podría considerarse abandono.',
        tipo: 'termino'
    },
    {
        termino: 'Aspiración de Secreciones (Suctioning)',
        definicion: 'Procedimiento para remover sangre, vómito, mucosidad u otras secreciones de la vía aérea mediante un dispositivo de succión (manual o mecánico) para mantenerla permeable.',
        ejemplo: 'Se realizó aspiración orofaríngea con cánula rígida (Yankauer) por 10 segundos.',
        tipo: 'termino'
    },
    {
        termino: 'Bolsa-Válvula-Mascarilla (BVM / Ambú)',
        definicion: 'Dispositivo manual utilizado para proporcionar ventilaciones con presión positiva a pacientes que no respiran adecuadamente o están en apnea.',
        ejemplo: 'Ventilación con BVM conectada a oxígeno a alto flujo, asegurando un buen sellado y elevación torácica.',
        tipo: 'termino'
    },
    {
        termino: 'Collarín Cervical',
        definicion: 'Dispositivo rígido o semirrígido que se coloca alrededor del cuello para limitar el movimiento de la columna cervical en pacientes con sospecha de lesión espinal.',
        ejemplo: 'Se aplicó un collarín cervical de tamaño adecuado antes de movilizar al paciente.',
        tipo: 'termino'
    },
    {
        termino: 'Comunicación por Radio (Reporte)',
        definicion: 'Transmisión de información concisa y estructurada sobre el paciente y la situación a la base, al hospital receptor o a otras unidades, utilizando un equipo de radiocomunicación.',
        ejemplo: 'Reporte radial inicial: "[Nombre unidad] a [Base/Hospital], tenemos paciente masculino de aprox. 50 años, con dificultad respiratoria aguda..."',
        tipo: 'termino'
    },
    {
        termino: 'Consentimiento (Implícito / Explícito)',
        definicion: 'Permiso otorgado por el paciente para recibir atención. Explícito: dado verbalmente o por escrito por un paciente competente. Implícito: asumido en emergencias cuando el paciente está inconsciente, incapacitado o es menor sin tutor presente, asumiendo que querría ayuda.',
        ejemplo: 'Paciente consciente y orientado otorgó consentimiento explícito para la evaluación. Paciente inconsciente recibió atención bajo consentimiento implícito.',
        tipo: 'termino'
    },
    {
        termino: 'Equipo de Protección Personal (EPP) / BSI',
        definicion: 'Equipo utilizado para proteger al proveedor de la exposición a sangre, fluidos corporales u otros materiales potencialmente infecciosos (Guantes, protección ocular, mascarilla, bata). BSI: Body Substance Isolation (Aislamiento de Sustancias Corporales).',
        ejemplo: 'Utilizar siempre guantes como mínimo EPP antes de cualquier contacto con el paciente.',
        tipo: 'termino'
    },
    {
        termino: 'Formato de Registro de Atención Prehospitalaria (FRAP) / PCR',
        definicion: 'Documento legal y médico donde se registra toda la información relevante sobre la atención proporcionada a un paciente, incluyendo evaluación, tratamiento, tiempos y datos demográficos. PCR: Prehospital Care Report.',
        ejemplo: 'Completar el FRAP de manera precisa y legible es esencial para la continuidad de la atención y para fines legales.',
        tipo: 'termino'
    },
    {
        termino: 'Inmovilización Espinal / Restricción del Movimiento Espinal (SMR)',
        definicion: 'Conjunto de técnicas y dispositivos (collarín cervical, tabla espinal, fijadores laterales, correas) utilizados para minimizar el movimiento de la columna vertebral en pacientes con sospecha de lesión espinal. SMR (Spinal Motion Restriction) es el término más actual que enfatiza limitar el movimiento en lugar de inmovilización completa.',
        ejemplo: 'Se aplicó restricción del movimiento espinal utilizando collarín y tabla larga debido al mecanismo de lesión.',
        tipo: 'termino'
    },
    {
        termino: 'Mascarilla con Reservorio (No Recirculante / NRB)',
        definicion: 'Dispositivo de oxigenoterapia que permite administrar altas concentraciones de oxígeno (hasta 90%+) a pacientes que respiran espontáneamente.',
        ejemplo: 'Paciente con SpO2 baja y disnea severa fue colocado con mascarilla no recirculante a 15 lpm.',
        tipo: 'termino'
    },
    {
        termino: 'Mecanismo de Lesión (MOI) / Naturaleza de la Enfermedad (NOI)',
        definicion: 'MOI: Las fuerzas o eventos que causaron una lesión traumática (ej. caída de altura, colisión vehicular). NOI: La condición médica subyacente o tipo de enfermedad que presenta el paciente (ej. dificultad respiratoria, dolor torácico).',
        ejemplo: 'Evaluar el MOI ayuda a anticipar posibles lesiones ocultas. Determinar la NOI guía la evaluación médica.',
        tipo: 'termino'
    },
    {
        termino: 'Motivo de Consulta (Chief Complaint)',
        definicion: 'La razón principal por la cual el paciente o alguien en su nombre solicitó ayuda de emergencia, expresada idealmente en las propias palabras del paciente.',
        ejemplo: 'El motivo de consulta referido por el paciente fue "un fuerte dolor en el pecho".',
        tipo: 'termino'
    },
    {
        termino: 'Negligencia (Legal/Ético)',
        definicion: 'Falla en actuar conforme al estándar de cuidado esperado para un proveedor con el mismo nivel de capacitación, resultando en daño al paciente. Requiere probar: Deber de actuar, Incumplimiento del deber, Daño y Causalidad.',
        ejemplo: 'No administrar oxígeno a un paciente hipóxico según protocolo podría considerarse negligencia si causa daño.',
        tipo: 'termino'
    },
    {
        termino: 'Posición de Fowler / Semi-Fowler',
        definicion: 'Posición en la que el paciente está sentado, con la cabecera de la camilla elevada. Fowler: 45-60 grados. Semi-Fowler: 30-45 grados. Usada a menudo para pacientes con dificultad respiratoria o problemas cardíacos.',
        ejemplo: 'Se colocó al paciente en posición de Semi-Fowler para facilitar su respiración.',
        tipo: 'termino'
    },
    {
        termino: 'Posición de Recuperación (Lateral de Seguridad)',
        definicion: 'Posición en la que se coloca a un paciente inconsciente que respira espontáneamente y no tiene sospecha de lesión espinal, para mantener la vía aérea permeable y facilitar el drenaje de fluidos.',
        ejemplo: 'Paciente postictal fue colocado en posición lateral de seguridad.',
        tipo: 'termino'
    },
    {
        termino: 'Seguridad de la Escena',
        definicion: 'Evaluación continua de los peligros potenciales en el lugar del incidente (tráfico, materiales peligrosos, violencia, inestabilidad estructural, etc.) para garantizar la seguridad del personal prehospitalario, del paciente y de los espectadores.',
        ejemplo: 'Prioridad número uno al llegar a cualquier llamado: evaluar la seguridad de la escena.',
        tipo: 'termino'
    },
    {
        termino: 'Tabla Espinal Larga / Corta',
        definicion: 'Dispositivos rígidos utilizados para la restricción del movimiento espinal y la extricación de pacientes. Larga: para cuerpo completo. Corta: para extricación de pacientes sentados (ej. KED).',
        ejemplo: 'Extricación del vehículo utilizando una tabla espinal corta y luego transferencia a tabla larga.',
        tipo: 'termino'
    },
    {
        termino: 'Transferencia del Paciente (Handoff Report)',
        definicion: 'Proceso formal de entregar la responsabilidad del cuidado del paciente a otro proveedor de salud (ej. personal de urgencias del hospital), incluyendo un resumen verbal conciso y completo de la evaluación, tratamiento y estado del paciente.',
        ejemplo: 'Se realizó la transferencia del paciente al médico de urgencias, entregando un reporte verbal y el FRAP.',
        tipo: 'termino'
    },
    {
        termino: 'Triángulo de Evaluación Pediátrica (TEP / PAT)',
        definicion: 'Herramienta de evaluación visual rápida para niños que valora tres componentes: Apariencia (tono, interactividad, consuelo, mirada, llanto/habla), Trabajo Respiratorio (sonidos, retracciones, aleteo nasal, posición) y Circulación Cutánea (color de piel: palidez, cianosis, moteado).',
        ejemplo: 'El TEP inicial mostró un niño con apariencia letárgica, aumento del trabajo respiratorio y piel pálida.',
        tipo: 'termino'
    },
    {
        termino: 'Hematoma',
        definicion: 'Un hematoma es una acumulación de sangre, usualmente coagulada, que se forma en un órgano, tejido o espacio del cuerpo debido a la ruptura de un vaso sanguíneo',
        ejemplo: 'Es común encontrar hematomas en la piel, donde se manifiestan como moretones o cardenales. Los hematomas pueden ser causados por golpes, caídas, cirugías o incluso por algunas enfermedades.' ,
        tipo: 'termino'
    },
    {
        "termino": "Acceso Intraóseo (IO)",
        "definicion": "Técnica para administrar líquidos, medicamentos y productos sanguíneos directamente en la médula ósea cuando el acceso intravenoso no es posible o es muy lento de conseguir.",
        "ejemplo": "En el paciente pediátrico en paro cardíaco, se estableció un acceso intraóseo en la tibia proximal para la administración de epinefrina.",
        "tipo": "termino"
    },
    {
        "termino": "Agonista",
        "definicion": "Sustancia que se une a un receptor celular y desencadena una respuesta, imitando la acción de una sustancia natural del cuerpo.",
        "ejemplo": "El salbutamol es un agonista de los receptores beta-2, lo que causa la relajación de los músculos bronquiales.",
        "tipo": "termino"
    },
    {
        "termino": "Antagonista",
        "definicion": "Sustancia que se une a un receptor celular pero no provoca una respuesta, bloqueando o atenuando los efectos de un agonista.",
        "ejemplo": "La naloxona es un antagonista de los receptores opioides, utilizada para revertir sobredosis.",
        "tipo": "termino"
    },
    {
        "termino": "Capnografía",
        "definicion": "Medición no invasiva de la concentración de dióxido de carbono (CO2) en el aire espirado. Es el estándar de oro para confirmar la colocación de un tubo endotraqueal y monitorear la calidad de la RCP y la ventilación.",
        "ejemplo": "La capnografía mostró un valor de EtCO2 de 35 mmHg, indicando una ventilación adecuada.",
        "tipo": "termino"
    },
    {
        "termino": "Cardioversión",
        "definicion": "Procedimiento médico que utiliza una descarga eléctrica sincronizada con el complejo QRS del electrocardiograma para convertir una taquiarritmia inestable (como la taquicardia supraventricular o la fibrilación auricular con respuesta ventricular rápida) a un ritmo sinusal normal.",
        "ejemplo": "Se realizó una cardioversión sincronizada a 100 Joules debido a que el paciente presentaba taquicardia con signos de inestabilidad hemodinámica.",
        "tipo": "termino"
    },
    {
        "termino": "Cetoacidosis Diabética (CAD)",
        "definicion": "Complicación grave de la diabetes, principalmente tipo 1, caracterizada por hiperglucemia, acidosis metabólica y presencia de cuerpos cetónicos en sangre y orina. A menudo se presenta con respiración de Kussmaul (rápida y profunda) y aliento con olor a frutas.",
        "ejemplo": "Paciente con glucemia de 450 mg/dL, pH sanguíneo bajo y cetonas en orina fue diagnosticado con cetoacidosis diabética.",
        "tipo": "termino"
    },
    {
        "termino": "Extricación",
        "definicion": "Proceso de remover a un paciente de un lugar confinado, como un vehículo accidentado, de manera segura y eficiente, minimizando el movimiento de la columna vertebral si se sospecha lesión.",
        "ejemplo": "El equipo de bomberos realizó la extricación del conductor utilizando herramientas hidráulicas y una tabla espinal corta.",
        "tipo": "termino"
    },
    {
        "termino": "Fibrilación Ventricular (FV)",
        "definicion": "Arritmia cardíaca letal caracterizada por una actividad eléctrica ventricular caótica y desorganizada, lo que resulta en un cese de la contracción cardíaca efectiva. Es un ritmo desfibrilable.",
        "ejemplo": "El DEA analizó el ritmo y recomendó una descarga, indicando la presencia de fibrilación ventricular.",
        "tipo": "termino"
    },
    {
        "termino": "Índice de Shock",
        "definicion": "Herramienta rápida para evaluar el estado hemodinámico, calculada dividiendo la frecuencia cardíaca entre la presión arterial sistólica. Un valor > 0.9 puede sugerir shock oculto.",
        "ejemplo": "Paciente con FC de 120 lpm y PAS de 100 mmHg tiene un índice de shock de 1.2, lo que eleva la sospecha de hipovolemia.",
        "tipo": "termino"
    },
    {
        "termino": "Maniobra de Sellick (Presión Cricoidea)",
        "definicion": "Técnica que consiste en aplicar presión sobre el cartílago cricoides para comprimir el esófago y prevenir la regurgitación y aspiración de contenido gástrico durante la intubación. Su uso es controvertido y depende del protocolo local.",
        "ejemplo": "Se aplicó la maniobra de Sellick mientras se realizaba la intubación de secuencia rápida.",
        "tipo": "termino"
    },
    {
        "termino": "Taquicardia Ventricular sin Pulso (TVSP)",
        "definicion": "Arritmia cardíaca letal en la que los ventrículos laten a un ritmo muy rápido y descoordinado, sin generar un pulso palpable ni un gasto cardíaco efectivo. Es un ritmo desfibrilable.",
        "ejemplo": "El monitor mostró taquicardia ventricular y al no palpar pulso se inició RCP y se preparó el desfibrilador.",
        "tipo": "termino"
    },
    {
        "termino": "Tromboembolia Pulmonar (TEP)",
        "definicion": "Obstrucción de una o más arterias pulmonares por un coágulo de sangre (trombo) que generalmente se origina en las venas profundas de las piernas. Puede causar disnea súbita, dolor torácico y colapso cardiovascular.",
        "ejemplo": "Paciente con historia reciente de cirugía de cadera presenta disnea aguda y taquicardia, alta sospecha de TEP.",
        "tipo": "termino"
    },
    {
        "termino": "Valoración de la Escena",
        "definicion": "Evaluación sistemática y continua del entorno de una emergencia para identificar peligros, determinar el mecanismo de lesión o naturaleza de la enfermedad, el número de pacientes y la necesidad de recursos adicionales, garantizando la seguridad del equipo.",
        "ejemplo": "La valoración de la escena reveló un vehículo inestable y cables eléctricos caídos, por lo que se esperó a bomberos y a la compañía eléctrica antes de aproximarse.",
        "tipo": "termino"
    },
    {
        "termino": "auto-",
        "definicion": "Prefijo que significa 'propio' o 'por sí mismo'.",
        "ejemplo": "Autoinyector (dispositivo que se inyecta a sí mismo), Autoinmune (reacción inmune contra el propio cuerpo).",
        "tipo": "prefijo"
    },
    {
        "termino": "macro-",
        "definicion": "Prefijo que significa 'grande' o 'anormalmente grande'.",
        "ejemplo": "Macrocéfalo (cabeza anormalmente grande).",
        "tipo": "prefijo"
    },
    {
        "termino": "micro-",
        "definicion": "Prefijo que significa 'pequeño'.",
        "ejemplo": "Microscópico (demasiado pequeño para ser visto a simple vista), Microaspiración (aspiración de pequeñas cantidades).",
        "tipo": "prefijo"
    },
    {
        "termino": "-cele",
        "definicion": "Sufijo que indica una hernia o protrusión.",
        "ejemplo": "Meningocele (protrusión de las meninges).",
        "tipo": "sufijo"
    },
    {
        "termino": "-stasis",
        "definicion": "Sufijo que significa 'detención' o 'control'.",
        "ejemplo": "Hemostasis (detención del sangrado).",
        "tipo": "sufijo"
    },
    {
        "termino": "CINCINNATI",
        "definicion": "Escala de valoración prehospitalaria utilizada para identificar un posible accidente cerebrovascular (ACV) mediante la evaluación de tres signos clave: parálisis facial, caída del brazo y habla anormal. Es similar a FAST.",
        "ejemplo": "Desglose:\n  • Parálisis Facial: Pedir al paciente que sonría o muestre los dientes. ¿Un lado de la cara no se mueve igual que el otro?\n  • Caída del Brazo: Pedir al paciente que cierre los ojos y extienda ambos brazos hacia adelante por 10 segundos. ¿Un brazo se cae o no se mueve?\n  • Habla Anormal: Pedir al paciente que repita una frase simple. ¿Arrastra las palabras, usa palabras incorrectas o no puede hablar?",
        "tipo": "mnemotecnia"
    },
    {
        "termino": "PASTE",
        "definicion": "Mnemotecnia utilizada para evaluar a pacientes con dificultad para respirar (disnea), especialmente útil en casos de posible asma o EPOC.",
        "ejemplo": "Desglose:\n  • P: Provocación/Progresión (¿Qué lo provocó? ¿Ha empeorado?)\n  • A: Associated chest pain (¿Hay dolor de pecho asociado?)\n  • S: Sputum (¿Hay producción de esputo/flema? ¿De qué color?)\n  • T: Talking tiredness / Temperature (¿Se cansa al hablar? ¿Tiene fiebre?)\n  • E: Exacerbation history (¿Ha tenido episodios similares antes? ¿Qué le ayudó?)",
        "tipo": "mnemotecnia"
    }


];