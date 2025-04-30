export interface GlosarioItem {
    termino: string;
    definicion: string;
    ejemplo?: string; // El ejemplo es opcional
    tipo: 'termino' | 'prefijo' | 'sufijo'; // Para identificar qué es cada entrada
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
        ejemplo: 'Paciente con ECG de 8 requiere manejo avanzado de la vía aérea.',
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
];