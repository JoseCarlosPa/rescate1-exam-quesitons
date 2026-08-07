import { DosageQuestion } from './ContrarrelojDosis.types';

export const DOSAGE_QUESTIONS: DosageQuestion[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // VITALES – EASY
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-vit-easy-1',
    drug: 'Epinefrina',
    drugEmoji: '💉',
    category: 'vitales',
    difficulty: 'easy',
    scenario:
      'Paciente adulto de 45 años en paro cardiorrespiratorio (FV/TVSP). Se realiza RCP de alta calidad y se prepara el primer medicamento vasopresor.',
    patientInfo: { condition: 'Paro cardíaco - FV refractaria', age: 45, weight: 75 },
    formula: '1 mg IV fijo (adultos)',
    question: '¿Cuál es la dosis estándar de Epinefrina IV en paro cardíaco adulto?',
    options: ['0.5 mg IV cada 3-5 min', '1 mg IV cada 3-5 min', '2 mg IV cada 10 min', '0.1 mg IV cada 2 min'],
    correct: '1 mg IV cada 3-5 min',
    explanation:
      'La dosis estándar de Epinefrina en paro cardíaco es 1 mg IV/IO cada 3-5 minutos. Es el vasopresor de primera línea en ACLS para ritmos con o sin pulso.',
    reference: 'AHA ACLS 2020',
    timeLimit: 20,
  },
  {
    id: 'd-vit-easy-2',
    drug: 'Epinefrina',
    drugEmoji: '💉',
    category: 'vitales',
    difficulty: 'easy',
    scenario:
      'Paciente de 32 años picado por abeja. Presenta urticaria generalizada, angioedema, broncoespasmo y PA 80/50 mmHg. Diagnóstico: Anafilaxia severa.',
    patientInfo: { condition: 'Anafilaxia severa', age: 32, weight: 70 },
    formula: '0.3-0.5 mg IM fijo (adultos)',
    question: '¿Cuál es la dosis de Epinefrina IM en anafilaxia adulto?',
    options: ['0.1 mg IM muslo', '0.3 mg IM muslo', '0.5 mg IM deltoides', '1 mg IM muslo'],
    correct: '0.3 mg IM muslo',
    explanation:
      'En anafilaxia adultos: Epinefrina 0.3-0.5 mg IM en cara anterolateral del muslo. Se prefiere el muslo sobre el deltoides por mayor velocidad de absorción. Se puede repetir cada 5-15 min.',
    reference: 'WAO Anaphylaxis Guidelines 2020',
    timeLimit: 20,
  },
  {
    id: 'd-vit-easy-3',
    drug: 'Atropina',
    drugEmoji: '🫀',
    category: 'vitales',
    difficulty: 'easy',
    scenario:
      'Paciente de 68 años con bradicardia sinusal sintomática. FC 38 lpm, PA 90/60 mmHg, mareo y síncope inminente.',
    patientInfo: { condition: 'Bradicardia sinusal sintomática', age: 68, weight: 80 },
    formula: '0.5 mg IV fijo, repetir cada 3-5 min hasta 3 mg',
    question: '¿Cuál es la dosis inicial de Atropina IV para bradicardia adulto?',
    options: ['0.1 mg IV', '0.5 mg IV', '1 mg IV', '2 mg IV'],
    correct: '0.5 mg IV',
    explanation:
      'Atropina 0.5 mg IV es la dosis inicial para bradicardia sintomática en adultos. Se puede repetir cada 3-5 minutos hasta una dosis máxima de 3 mg. Dosis <0.5 mg pueden paradójicamente empeorar la bradicardia.',
    reference: 'AHA ACLS 2020',
    timeLimit: 20,
  },
  {
    id: 'd-vit-easy-4',
    drug: 'Naloxona',
    drugEmoji: '🧪',
    category: 'vitales',
    difficulty: 'easy',
    scenario:
      'Paciente adulto de 28 años encontrado inconsciente con miosis bilateral, bradipnea (6 rpm) y cianosis. Se sospecha sobredosis de opioides.',
    patientInfo: { condition: 'Sobredosis de opioides', age: 28, weight: 70 },
    formula: '0.4-2 mg IM/IV/IN adulto',
    question: '¿Cuál es la dosis de Naloxona en sobredosis de opioides adulto?',
    options: ['0.1 mg IV', '0.4-2 mg IV/IM/IN', '5 mg IV', '10 mg IM'],
    correct: '0.4-2 mg IV/IM/IN',
    explanation:
      'Naloxona 0.4-2 mg IV/IM/IN en sobredosis de opioides. Inicio de acción en 2-5 min. La vida media es corta (30-90 min), puede ser necesario repetir dosis. Titular según respuesta respiratoria.',
    reference: 'SAMHSA Opioid Overdose Guidelines',
    timeLimit: 20,
  },
  {
    id: 'd-vit-easy-5',
    drug: 'Aspirina',
    drugEmoji: '💊',
    category: 'vitales',
    difficulty: 'easy',
    scenario:
      'Paciente de 55 años con dolor torácico opresivo irradiado al brazo izquierdo por 30 minutos. Diaforético, ECG muestra elevación del ST en cara inferior. Sospecha de IAMCEST.',
    patientInfo: { condition: 'Síndrome Coronario Agudo (IAMCEST)', age: 55, weight: 85 },
    formula: 'Dosis fija: 160-325 mg VO masticada',
    question: '¿Cuál es la dosis de Aspirina en síndrome coronario agudo (SCA)?',
    options: ['81 mg VO masticada', '160-325 mg VO masticada', '500 mg VO', '1000 mg VO'],
    correct: '160-325 mg VO masticada',
    explanation:
      'Aspirina 160-325 mg VO masticada es la dosis estándar en SCA. Masticarla aumenta la absorción. El inicio de acción es en 5-10 minutos. Contraindicada en alergia documentada o sangrado activo.',
    reference: 'AHA/ACC SCA Guidelines 2021',
    timeLimit: 20,
  },
  {
    id: 'd-vit-easy-6',
    drug: 'Nitroglicerina',
    drugEmoji: '💊',
    category: 'vitales',
    difficulty: 'easy',
    scenario:
      'Paciente de 60 años con angina de pecho. Dolor torácico 6/10. PA 140/90 mmHg. Sin contraindicaciones. Solicita alivio del dolor.',
    patientInfo: { condition: 'Angina de pecho', age: 60, weight: 75 },
    formula: '0.4 mg SL cada 5 min (máx 3 dosis)',
    question: '¿Cuál es la dosis de Nitroglicerina sublingual en angina?',
    options: ['0.1 mg SL', '0.4 mg SL cada 5 min', '1 mg SL', '2 mg SL'],
    correct: '0.4 mg SL cada 5 min',
    explanation:
      'Nitroglicerina 0.4 mg SL cada 5 minutos, máximo 3 dosis. Contraindicada si PA <90 mmHg sistólica, uso de inhibidores de fosfodiesterasa en las últimas 24-48 h, o infarto ventricular derecho.',
    reference: 'AHA/ACC Chest Pain Guidelines 2021',
    timeLimit: 20,
  },
  {
    id: 'd-vit-easy-7',
    drug: 'Vasopresina',
    drugEmoji: '💉',
    category: 'vitales',
    difficulty: 'easy',
    scenario:
      'Equipo de SVA atiende paro cardíaco refractario en adulto de 50 años. Se discute el uso de Vasopresina como alternativa o complemento al vasopresor habitual.',
    patientInfo: { condition: 'Paro cardíaco refractario', age: 50, weight: 80 },
    formula: '40 UI IV dosis única',
    question: '¿Cuál es la dosis de Vasopresina en paro cardíaco?',
    options: ['10 UI IV', '20 UI IV', '40 UI IV dosis única', '80 UI IV'],
    correct: '40 UI IV dosis única',
    explanation:
      'Vasopresina 40 UI IV dosis única puede reemplazar la primera o segunda dosis de Epinefrina en paro cardíaco. No se ha demostrado superioridad sobre Epinefrina, por lo que no está en los algoritmos ACLS 2020 como recomendación primaria.',
    reference: 'AHA ACLS 2020',
    timeLimit: 20,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // VITALES – MEDIUM
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-vit-med-1',
    drug: 'Epinefrina',
    drugEmoji: '💉',
    category: 'vitales',
    difficulty: 'medium',
    scenario:
      'Niño de 5 años, 20 kg, presenta anafilaxia severa con broncoespasmo e hipotensión. Se prepara Epinefrina IM para administración inmediata.',
    patientInfo: { condition: 'Anafilaxia pediátrica', age: 5, weight: 20 },
    formula: '0.01 mg/kg IM (máx 0.3 mg)',
    question: '¿Cuántos mg de Epinefrina IM debe recibir este niño de 20 kg?',
    options: ['0.1 mg IM', '0.2 mg IM', '0.3 mg IM', '0.5 mg IM'],
    correct: '0.2 mg IM',
    explanation:
      'Cálculo: 0.01 mg/kg × 20 kg = 0.2 mg IM. La dosis máxima pediátrica es 0.3 mg. Como 0.2 mg < 0.3 mg, no se aplica el máximo. Administrar en cara anterolateral del muslo.',
    reference: 'AHA PALS 2020',
    timeLimit: 30,
  },
  {
    id: 'd-vit-med-2',
    drug: 'Naloxona',
    drugEmoji: '🧪',
    category: 'vitales',
    difficulty: 'medium',
    scenario:
      'Niño de 4 años, 16 kg, ingirió opioides del botiquín familiar. Presenta FR de 8 rpm, miosis y somnolencia profunda. Se necesita Naloxona IV.',
    patientInfo: { condition: 'Intoxicación por opioides pediátrica', age: 4, weight: 16 },
    formula: '0.01 mg/kg IV/IM (máx 2 mg)',
    question: '¿Cuántos mg de Naloxona IV debe recibir este niño de 16 kg?',
    options: ['0.08 mg IV', '0.16 mg IV', '0.4 mg IV', '2 mg IV'],
    correct: '0.16 mg IV',
    explanation:
      'Cálculo: 0.01 mg/kg × 16 kg = 0.16 mg IV. Este es el cálculo correcto basado en peso. Se puede repetir cada 2-3 minutos según respuesta. La dosis máxima es 2 mg.',
    reference: 'AHA PALS 2020',
    timeLimit: 30,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ANALGESIA – EASY
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-analg-easy-1',
    drug: 'Ketorolaco',
    drugEmoji: '💊',
    category: 'analgesia',
    difficulty: 'easy',
    scenario:
      'Paciente adulta de 40 años con cólico renal derecho. Dolor 9/10. Sin contraindicaciones para AINEs. Se decide analgesia parenteral.',
    patientInfo: { condition: 'Cólico renal - dolor agudo', age: 40, weight: 65 },
    formula: '15-30 mg IV fijo adulto',
    question: '¿Cuál es la dosis de Ketorolaco IV en adulto para dolor agudo?',
    options: ['5 mg IV', '15-30 mg IV', '60 mg IV', '100 mg IV'],
    correct: '15-30 mg IV',
    explanation:
      'Ketorolaco 15-30 mg IV en adultos (<65 años). En mayores de 65 años o con <50 kg usar 15 mg. Duración máxima de uso: 5 días. Excelente para dolor tipo cólico, traumático o musculoesquelético.',
    reference: 'Pain Management Guidelines 2020',
    timeLimit: 20,
  },
  {
    id: 'd-analg-easy-2',
    drug: 'Morfina',
    drugEmoji: '💊',
    category: 'analgesia',
    difficulty: 'easy',
    scenario:
      'Paciente adulto de 55 años con dolor torácico isquémico intenso 8/10. PA 130/80 mmHg. FR 18 rpm. Se decide titulación de opioide.',
    patientInfo: { condition: 'Dolor isquémico agudo', age: 55, weight: 80 },
    formula: '2-4 mg IV lento fijo (adulto inicial)',
    question: '¿Cuál es la dosis inicial de Morfina IV en adulto para dolor agudo?',
    options: ['0.5 mg IV', '2-4 mg IV lento', '10 mg IV', '15 mg IV'],
    correct: '2-4 mg IV lento',
    explanation:
      'Morfina 2-4 mg IV lento (>2-5 min) es la dosis estándar inicial en adultos. Se puede titular cada 5-10 min según respuesta y tolerancia. Monitorizar FR y nivel de consciencia.',
    reference: 'NAEMSP Pain Management Guidelines',
    timeLimit: 20,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ANALGESIA – MEDIUM
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-analg-med-1',
    drug: 'Fentanilo',
    drugEmoji: '💉',
    category: 'analgesia',
    difficulty: 'medium',
    scenario:
      'Paciente adulto de 35 años, 80 kg, con fractura de fémur. Dolor 9/10. PA 110/70 mmHg. Se decide analgesia con Fentanilo IV.',
    patientInfo: { condition: 'Fractura de fémur - dolor severo', age: 35, weight: 80 },
    formula: '1-2 mcg/kg IV lento',
    question: '¿Cuántos mcg de Fentanilo IV debe recibir este paciente de 80 kg (dosis baja)?',
    options: ['40 mcg IV', '80 mcg IV', '160 mcg IV', '200 mcg IV'],
    correct: '80 mcg IV',
    explanation:
      'Cálculo dosis baja: 1 mcg/kg × 80 kg = 80 mcg IV. La dosis alta sería 2 mcg/kg × 80 kg = 160 mcg. Se inicia con 1 mcg/kg (80 mcg) y se titula. Fentanilo es 100x más potente que morfina.',
    reference: 'NAEMSP 2017 Pain Guidelines',
    timeLimit: 30,
  },
  {
    id: 'd-analg-med-2',
    drug: 'Midazolam',
    drugEmoji: '💉',
    category: 'analgesia',
    difficulty: 'medium',
    scenario:
      'Niño de 6 años, 22 kg, en status epiléptico. Convulsiones activas por más de 5 minutos. Sin acceso venoso. Se decide Midazolam IM.',
    patientInfo: { condition: 'Status epiléptico pediátrico', age: 6, weight: 22 },
    formula: '0.1-0.2 mg/kg IM (máx 10 mg)',
    question: '¿Cuántos mg de Midazolam IM para este niño de 22 kg (dosis 0.1 mg/kg)?',
    options: ['1 mg IM', '2.2 mg IM', '4 mg IM', '10 mg IM'],
    correct: '2.2 mg IM',
    explanation:
      'Cálculo: 0.1 mg/kg × 22 kg = 2.2 mg IM. La dosis máxima es 10 mg. El Midazolam IM es de primera línea en convulsiones pediátricas sin acceso IV. Equivalente a diazepam rectal o lorazepam IV.',
    reference: 'AHA PALS 2020',
    timeLimit: 30,
  },
  {
    id: 'd-analg-med-3',
    drug: 'Morfina',
    drugEmoji: '💊',
    category: 'analgesia',
    difficulty: 'medium',
    scenario:
      'Niño de 8 años, 28 kg, con quemaduras de segundo grado en extremidades. Dolor intenso durante curación. Se decide Morfina IV.',
    patientInfo: { condition: 'Quemaduras pediátricas - dolor procedural', age: 8, weight: 28 },
    formula: '0.1-0.2 mg/kg IV lento (máx 15 mg)',
    question: '¿Cuántos mg de Morfina IV para este niño de 28 kg (dosis 0.1 mg/kg)?',
    options: ['1.4 mg IV', '2.8 mg IV', '5.6 mg IV', '15 mg IV'],
    correct: '2.8 mg IV',
    explanation:
      'Cálculo: 0.1 mg/kg × 28 kg = 2.8 mg IV. Administrar lentamente en 2-5 minutos. Monitorizar saturación de oxígeno y frecuencia respiratoria. Tener Naloxona disponible.',
    reference: 'PALS 2020 Pain Management',
    timeLimit: 30,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ANALGESIA – HARD
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-analg-hard-1',
    drug: 'Ketamina',
    drugEmoji: '💉',
    category: 'analgesia',
    difficulty: 'hard',
    scenario:
      'Paciente trauma adulto, 90 kg, con múltiples fracturas costales y fractura de pelvis. Hemodinámicamente inestable (PA 80/50). Se decide analgesia disociativa con Ketamina IV en dosis subanestésica.',
    patientInfo: { condition: 'Politrauma - dolor severo con inestabilidad hemodinámica', age: 38, weight: 90 },
    question: '¿Cuántos mg de Ketamina IV dosis subanestésica (0.3 mg/kg) para este paciente de 90 kg?',
    options: ['15 mg IV', '27 mg IV', '90 mg IV', '135 mg IV'],
    correct: '27 mg IV',
    explanation:
      'Cálculo: 0.3 mg/kg × 90 kg = 27 mg IV. La dosis subanestésica de Ketamina (0.1-0.5 mg/kg) proporciona analgesia sin sedación profunda, ideal en pacientes inestables. Mantiene reflejos de vía aérea y tono simpático.',
    reference: 'ACEP Pain Management Policy 2017',
    timeLimit: 35,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CARDIOVASCULAR – EASY
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-cardio-easy-1',
    drug: 'Amiodarona',
    drugEmoji: '🫀',
    category: 'cardiovascular',
    difficulty: 'easy',
    scenario:
      'Paciente adulto en paro cardíaco con FV/TVSP refractaria a desfibrilación y Epinefrina. Se decide antiarrítmico IV.',
    patientInfo: { condition: 'FV/TVSP refractaria a desfibrilación', age: 52, weight: 78 },
    formula: '300 mg IV bolo fijo (primera dosis)',
    question: '¿Cuál es la primera dosis de Amiodarona IV en FV/TVSP sin pulso?',
    options: ['100 mg IV', '150 mg IV', '300 mg IV', '500 mg IV'],
    correct: '300 mg IV',
    explanation:
      'Amiodarona 300 mg IV en bolo en FV/TVSP refractaria. Segunda dosis: 150 mg IV si persiste FV. Es el antiarrítmico de primera línea en ritmos desfibrilables refractarios según AHA ACLS 2020.',
    reference: 'AHA ACLS 2020',
    timeLimit: 20,
  },
  {
    id: 'd-cardio-easy-2',
    drug: 'Adenosina',
    drugEmoji: '🫀',
    category: 'cardiovascular',
    difficulty: 'easy',
    scenario:
      'Paciente de 30 años con taquicardia paroxística supraventricular (TSV). FC 180 lpm, PA 110/70 mmHg, estable. Maniobras vagales sin éxito.',
    patientInfo: { condition: 'Taquicardia supraventricular (TSV)', age: 30, weight: 70 },
    formula: '6 mg IV rápido primera dosis',
    question: '¿Cuál es la primera dosis de Adenosina IV en TSV?',
    options: ['3 mg IV rápido', '6 mg IV rápido', '12 mg IV rápido', '20 mg IV rápido'],
    correct: '6 mg IV rápido',
    explanation:
      'Adenosina 6 mg IV en bolo rápido (seguido de flush 20 mL SF) es la primera dosis en TSV. Si no convierte en 1-2 min, segunda dosis 12 mg IV. Vida media muy corta (~10 seg). Administrar lo más proximal posible.',
    reference: 'AHA ACLS 2020',
    timeLimit: 20,
  },
  {
    id: 'd-cardio-easy-3',
    drug: 'Adenosina',
    drugEmoji: '🫀',
    category: 'cardiovascular',
    difficulty: 'easy',
    scenario:
      'Paciente de 30 años con TSV persistente. Ya recibió primera dosis de Adenosina 6 mg sin conversión. FC 180 lpm, estable.',
    patientInfo: { condition: 'TSV refractaria a primera dosis adenosina', age: 30, weight: 70 },
    formula: '12 mg IV rápido segunda dosis',
    question: '¿Cuál es la segunda dosis de Adenosina IV si no convierte la TSV?',
    options: ['6 mg IV (repetir igual)', '12 mg IV rápido', '18 mg IV rápido', '24 mg IV rápido'],
    correct: '12 mg IV rápido',
    explanation:
      'Si la primera dosis de 6 mg no convierte la TSV, se administran 12 mg IV rápido. Se puede repetir una segunda dosis de 12 mg si persiste. Dosis máxima total: 30 mg.',
    reference: 'AHA ACLS 2020',
    timeLimit: 20,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CARDIOVASCULAR – MEDIUM
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-cardio-med-1',
    drug: 'Metoprolol',
    drugEmoji: '🫀',
    category: 'cardiovascular',
    difficulty: 'medium',
    scenario:
      'Paciente adulto de 65 años, 70 kg, con fibrilación auricular de inicio reciente, FC 145 lpm, PA 130/85 mmHg, hemodinámicamente estable. Se decide control de frecuencia con Metoprolol IV.',
    patientInfo: { condition: 'FA con respuesta ventricular rápida', age: 65, weight: 70 },
    formula: '2.5-5 mg IV en 2 min (repetir hasta 3 dosis)',
    question: '¿Cuál es la dosis inicial de Metoprolol IV para control de frecuencia en FA?',
    options: ['1 mg IV en 1 min', '2.5-5 mg IV en 2 min', '10 mg IV en 5 min', '15 mg IV en 10 min'],
    correct: '2.5-5 mg IV en 2 min',
    explanation:
      'Metoprolol 2.5-5 mg IV en 2 minutos, se puede repetir cada 5 min hasta 3 dosis (máx 15 mg). Contraindicado en broncoespasmo activo, bloqueo AV de alto grado y signos de IC descompensada.',
    reference: 'AHA/ACC FA Guidelines 2019',
    timeLimit: 30,
  },
  {
    id: 'd-cardio-med-2',
    drug: 'Labetalol',
    drugEmoji: '🫀',
    category: 'cardiovascular',
    difficulty: 'medium',
    scenario:
      'Paciente de 45 años, 75 kg, con crisis hipertensiva severa. PA 220/130 mmHg, cefalea intensa. Sin déficit neurológico. Se decide Labetalol IV.',
    patientInfo: { condition: 'Crisis hipertensiva severa', age: 45, weight: 75 },
    formula: '20 mg IV inicial (dosis fija)',
    question: '¿Cuál es la dosis inicial de Labetalol IV en crisis hipertensiva?',
    options: ['5 mg IV', '10 mg IV', '20 mg IV', '80 mg IV'],
    correct: '20 mg IV',
    explanation:
      'Labetalol 20 mg IV inicial, seguido de dosis de 40-80 mg cada 10 min según respuesta (máx 300 mg). También puede administrarse como infusión 2 mg/min. Bloquea α y β, ideal en crisis hipertensiva.',
    reference: 'JNC Hypertension Guidelines',
    timeLimit: 30,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CARDIOVASCULAR – HARD
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-cardio-hard-1',
    drug: 'Dopamina',
    drugEmoji: '💉',
    category: 'cardiovascular',
    difficulty: 'hard',
    scenario:
      'Paciente adulto, 80 kg, en shock cardiogénico post-infarto. PA 75/50 mmHg. FC 110 lpm. Se decide iniciar Dopamina en infusión. Ampolla 200 mg/5 mL diluida en 250 mL SF (concentración 800 mcg/mL). Se quiere iniciar a 5 mcg/kg/min.',
    patientInfo: { condition: 'Shock cardiogénico', age: 60, weight: 80 },
    question: '¿A cuántos mL/h debe programar la bomba de Dopamina (800 mcg/mL) para 5 mcg/kg/min en paciente de 80 kg?',
    options: ['15 mL/h', '30 mL/h', '45 mL/h', '60 mL/h'],
    correct: '30 mL/h',
    explanation:
      'Cálculo: 5 mcg/kg/min × 80 kg = 400 mcg/min = 24,000 mcg/h. A 800 mcg/mL: 24,000 / 800 = 30 mL/h. Verificar siempre concentración en etiqueta. Titular según respuesta hemodinámica.',
    reference: 'AHA ACLS 2020 Shock Guidelines',
    timeLimit: 45,
  },
  {
    id: 'd-cardio-hard-2',
    drug: 'Norepinefrina',
    drugEmoji: '💉',
    category: 'cardiovascular',
    difficulty: 'hard',
    scenario:
      'Paciente de 65 años, 70 kg, en shock séptico. PA 65/40 mmHg a pesar de reanimación con líquidos 30 mL/kg. Se inicia Norepinefrina. Dilución: 4 mg en 250 mL (16 mcg/mL). Dosis objetivo inicial: 0.1 mcg/kg/min.',
    patientInfo: { condition: 'Shock séptico refractario a líquidos', age: 65, weight: 70 },
    question: '¿A cuántos mL/h se programa la infusión de Norepinefrina (16 mcg/mL) a 0.1 mcg/kg/min para 70 kg?',
    options: ['13.1 mL/h', '26.25 mL/h', '42 mL/h', '52.5 mL/h'],
    correct: '26.25 mL/h',
    explanation:
      'Cálculo: 0.1 mcg/kg/min × 70 kg = 7 mcg/min = 420 mcg/h. A 16 mcg/mL: 420/16 = 26.25 mL/h. Norepinefrina es el vasopresor de primera línea en shock séptico según Surviving Sepsis Campaign.',
    reference: 'Surviving Sepsis Campaign 2021',
    timeLimit: 45,
  },
  {
    id: 'd-cardio-hard-3',
    drug: 'Amiodarona',
    drugEmoji: '🫀',
    category: 'cardiovascular',
    difficulty: 'hard',
    scenario:
      'Paciente adulto con TSV/FA de alta frecuencia estabilizada con cardioversión. Se decide mantenimiento con Amiodarona IV. Protocolo: 360 mg IV en 6 horas. Dilución estándar: 900 mg en 500 mL (1.8 mg/mL).',
    patientInfo: { condition: 'Post-cardioversión - mantenimiento antiarrítmico', age: 58, weight: 75 },
    question: '¿A cuántos mL/h se programa la infusión de Amiodarona (1.8 mg/mL) para 360 mg en 6 horas?',
    options: ['20 mL/h', '33.3 mL/h', '50 mL/h', '66.7 mL/h'],
    correct: '33.3 mL/h',
    explanation:
      'Cálculo: 360 mg / 6 h = 60 mg/h. A 1.8 mg/mL: 60/1.8 = 33.3 mL/h. Protocolo ACLS: 150 mg IV en 10 min → 360 mg en 6h → 540 mg en 18h. Monitorizar bradicardia e hipotensión.',
    reference: 'AHA ACLS 2020',
    timeLimit: 45,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // METABOLICOS – EASY
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-metab-easy-1',
    drug: 'Glucosa Oral',
    drugEmoji: '🍬',
    category: 'metabolicos',
    difficulty: 'easy',
    scenario:
      'Paciente diabético de 55 años, consciente y con reflejo de deglución intacto, presenta glucemia de 48 mg/dL. Verbaliza correctamente pero está débil y diaforético.',
    patientInfo: { condition: 'Hipoglucemia - paciente consciente', age: 55, weight: 70 },
    formula: 'Regla de los 15: 15 g CHO cada 15 min',
    question: '¿Cuál es el tratamiento de primera línea en hipoglucemia con paciente consciente?',
    options: ['Glucagón 1 mg IM', '15 g de glucosa oral (regla 15)', 'Dextrosa D50 25 g IV', 'Insulina regular 5 UI'],
    correct: '15 g de glucosa oral (regla 15)',
    explanation:
      'En hipoglucemia con paciente consciente y con reflejo de deglución: administrar 15 g de carbohidratos orales (tabletas de glucosa, jugo, gel). Reevaluar glucemia en 15 min. Repetir si <70 mg/dL.',
    reference: 'ADA Hypoglycemia Guidelines 2022',
    timeLimit: 20,
  },
  {
    id: 'd-metab-easy-2',
    drug: 'Glucagón',
    drugEmoji: '💉',
    category: 'metabolicos',
    difficulty: 'easy',
    scenario:
      'Paciente diabético de 48 años, inconsciente, glucemia 32 mg/dL. Sin acceso IV disponible. Se considera glucagón IM.',
    patientInfo: { condition: 'Hipoglucemia severa - sin acceso IV', age: 48, weight: 72 },
    formula: '1 mg IM/SC adulto',
    question: '¿Cuál es la dosis de Glucagón IM en adulto con hipoglucemia severa?',
    options: ['0.5 mg IM', '1 mg IM', '2 mg IM', '5 mg IM'],
    correct: '1 mg IM',
    explanation:
      'Glucagón 1 mg IM/SC en adultos con hipoglucemia severa sin acceso IV. Inicio de acción en 8-10 min. En niños <20 kg: 0.5 mg. Puede causar náuseas/vómitos al recuperar consciencia.',
    reference: 'ADA Hypoglycemia Guidelines 2022',
    timeLimit: 20,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // METABOLICOS – MEDIUM
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-metab-med-1',
    drug: 'Dextrosa D50',
    drugEmoji: '💉',
    category: 'metabolicos',
    difficulty: 'medium',
    scenario:
      'Paciente adulto de 60 años, inconsciente, glucemia 28 mg/dL. Acceso IV disponible. Se decide Dextrosa al 50% IV.',
    patientInfo: { condition: 'Hipoglucemia severa inconsciente con acceso IV', age: 60, weight: 75 },
    formula: '25 g IV = 50 mL D50% fijo adulto',
    question: '¿Cuántos mL de Dextrosa al 50% (D50) se administran a un adulto en hipoglucemia severa?',
    options: ['10 mL D50', '25 mL D50', '50 mL D50', '100 mL D50'],
    correct: '50 mL D50',
    explanation:
      'Dextrosa D50% 50 mL (= 25 g de glucosa) IV en adultos. Administrar lentamente. D50 es hiperosmolar y puede causar lesión vascular si extravasa. En niños, preferir D10% o D25% para menor riesgo.',
    reference: 'AHA 2020 Altered Mental Status Protocol',
    timeLimit: 25,
  },
  {
    id: 'd-metab-med-2',
    drug: 'Bicarbonato de Sodio',
    drugEmoji: '💉',
    category: 'metabolicos',
    difficulty: 'medium',
    scenario:
      'Paciente adulto de 55 años, 70 kg, en acidosis metabólica severa (pH 7.05, HCO3 8 mEq/L) por sepsis. Se indica Bicarbonato IV.',
    patientInfo: { condition: 'Acidosis metabólica severa', age: 55, weight: 70 },
    formula: '1 mEq/kg IV (dosis inicial)',
    question: '¿Cuántos mEq de Bicarbonato de Sodio IV debe recibir este paciente de 70 kg?',
    options: ['35 mEq IV', '50 mEq IV', '70 mEq IV', '100 mEq IV'],
    correct: '70 mEq IV',
    explanation:
      'Cálculo: 1 mEq/kg × 70 kg = 70 mEq IV. Una ampolla estándar de NaHCO3 al 8.4% contiene 50 mEq en 50 mL. Para 70 mEq se necesitan ~70 mL. Reevaluar gasometría post-tratamiento.',
    reference: 'ACLS 2020 - Manejo de paro cardíaco con causa reversible',
    timeLimit: 30,
  },
  {
    id: 'd-metab-med-3',
    drug: 'Glucagón',
    drugEmoji: '💉',
    category: 'metabolicos',
    difficulty: 'medium',
    scenario:
      'Niño de 6 años, 18 kg, diabético tipo 1. Hipoglucemia severa con pérdida de consciencia. Sin acceso IV. Se decide glucagón IM.',
    patientInfo: { condition: 'Hipoglucemia severa pediátrica', age: 6, weight: 18 },
    formula: '0.5 mg IM en <20 kg / 1 mg en ≥20 kg',
    question: '¿Cuál es la dosis de Glucagón IM en este niño de 18 kg?',
    options: ['0.1 mg IM', '0.5 mg IM', '1 mg IM', '2 mg IM'],
    correct: '0.5 mg IM',
    explanation:
      'En niños <20 kg: Glucagón 0.5 mg IM. En niños ≥20 kg o adultos: 1 mg IM. Este niño pesa 18 kg, por lo que la dosis correcta es 0.5 mg IM.',
    reference: 'ADA Pediatric Hypoglycemia Guidelines',
    timeLimit: 25,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // METABOLICOS – HARD
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-metab-hard-1',
    drug: 'Glucagón',
    drugEmoji: '💉',
    category: 'metabolicos',
    difficulty: 'hard',
    scenario:
      'Paciente de 58 años, 75 kg, con sobredosis de β-bloqueadores (Propranolol). Bradicardia severa FC 32 lpm, PA 60/40 mmHg refractaria a Atropina y marcapasos externo. Se considera Glucagón IV como antídoto específico.',
    patientInfo: { condition: 'Sobredosis de β-bloqueadores', age: 58, weight: 75 },
    question: '¿Cuántos mg de Glucagón IV se administran como dosis inicial en sobredosis de β-bloqueadores para este paciente de 75 kg?',
    options: ['1 mg IV', '3-5 mg IV (bolo)', '10 mg IV', '75 mg IV'],
    correct: '3-5 mg IV (bolo)',
    explanation:
      'Glucagón 3-5 mg IV en bolo lento (no basado en peso) es la dosis estándar en sobredosis de β-bloqueadores. Activa adenilciclasa independientemente de receptores β. Se puede continuar con infusión de 1-5 mg/h.',
    reference: 'Toxicología Clínica - ACMT Guidelines',
    timeLimit: 35,
  },
  {
    id: 'd-metab-hard-2',
    drug: 'Bicarbonato de Sodio',
    drugEmoji: '💉',
    category: 'metabolicos',
    difficulty: 'hard',
    scenario:
      'Niño de 4 años, 16 kg, en paro cardíaco por acidosis severa conocida. El equipo decide administrar Bicarbonato de Sodio IV durante la reanimación.',
    patientInfo: { condition: 'Paro cardíaco con acidosis severa pediátrico', age: 4, weight: 16 },
    question: '¿Cuántos mEq de Bicarbonato de Sodio IV debe recibir este niño de 16 kg (dosis 1 mEq/kg)?',
    options: ['8 mEq IV', '16 mEq IV', '32 mEq IV', '50 mEq IV'],
    correct: '16 mEq IV',
    explanation:
      'Cálculo: 1 mEq/kg × 16 kg = 16 mEq IV. En pediatría se usa solución al 4.2% (0.5 mEq/mL) para menor osmolaridad. Volumen: 16 mEq / 0.5 mEq/mL = 32 mL. En neonatos, siempre diluir al 4.2%.',
    reference: 'AHA PALS 2020',
    timeLimit: 35,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // AIRWAY – EASY
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-airway-easy-1',
    drug: 'Oxígeno',
    drugEmoji: '🫁',
    category: 'airway',
    difficulty: 'easy',
    scenario:
      'Paciente adulto de 50 años con EPOC exacerbada moderada. SpO2 88% al aire ambiente. FR 26 rpm. Alerta y cooperador. Se decide oxigenoterapia controlada.',
    patientInfo: { condition: 'EPOC exacerbación - hipoxemia moderada', age: 50, weight: 75 },
    formula: 'Titular para SpO2 88-92% en EPOC',
    question: '¿Cuál es el objetivo de SpO2 en paciente con EPOC que recibe oxígeno suplementario?',
    options: ['94-98% (igual que todos)', '88-92% (titular en EPOC)', '99-100% (saturar al máximo)', '85-88% (lo mínimo posible)'],
    correct: '88-92% (titular en EPOC)',
    explanation:
      'En EPOC, el objetivo de SpO2 es 88-92% con oxígeno suplementario. En no-EPOC: 94-98%. La hiperoxia puede suprimir el estímulo hipóxico y empeorar la hipercapnia en EPOC severo.',
    reference: 'BTS/ATS COPD Guidelines 2023',
    timeLimit: 20,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // AIRWAY – MEDIUM
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-airway-med-1',
    drug: 'Ketamina',
    drugEmoji: '💉',
    category: 'airway',
    difficulty: 'medium',
    scenario:
      'Paciente adulto de 40 años, 75 kg, necesita intubación de secuencia rápida (ISR). Hemodinámicamente inestable. Se decide Ketamina como agente de inducción.',
    patientInfo: { condition: 'ISR - inestabilidad hemodinámica', age: 40, weight: 75 },
    formula: '1.5-2 mg/kg IV para inducción ISR',
    question: '¿Cuántos mg de Ketamina IV para inducción ISR en este paciente de 75 kg (dosis 1.5 mg/kg)?',
    options: ['50 mg IV', '75 mg IV', '112.5 mg IV', '150 mg IV'],
    correct: '112.5 mg IV',
    explanation:
      'Cálculo: 1.5 mg/kg × 75 kg = 112.5 mg IV. Ketamina mantiene tono simpático, ideal en inestabilidad hemodinámica. Contraindicación relativa en HIC o hipertensión severa. Rango 1-2 mg/kg.',
    reference: 'RSI Guidelines - NAEMSP 2021',
    timeLimit: 30,
  },
  {
    id: 'd-airway-med-2',
    drug: 'Lidocaína',
    drugEmoji: '💉',
    category: 'airway',
    difficulty: 'medium',
    scenario:
      'Paciente de 45 años, 80 kg, con trauma craneoencefálico (Glasgow 7). Se prepara ISR. Se decide Lidocaína IV como premededicación para atenuar el aumento de PIC durante la laringoscopía.',
    patientInfo: { condition: 'TCE - ISR con riesgo PIC elevada', age: 45, weight: 80 },
    formula: '1.5 mg/kg IV 3 min antes de laringoscopía',
    question: '¿Cuántos mg de Lidocaína IV (premedicación ISR) para este paciente de 80 kg?',
    options: ['60 mg IV', '80 mg IV', '120 mg IV', '160 mg IV'],
    correct: '120 mg IV',
    explanation:
      'Cálculo: 1.5 mg/kg × 80 kg = 120 mg IV. Se administra 3 min antes de laringoscopía. Atenúa aumento de PIC y respuesta hemodinámica. La evidencia es controversial pero sigue en uso como neuroprotector.',
    reference: 'Emergency Airway Management - Walls et al.',
    timeLimit: 30,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // AIRWAY – HARD
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-airway-hard-1',
    drug: 'Succinilcolina',
    drugEmoji: '💉',
    category: 'airway',
    difficulty: 'hard',
    scenario:
      'Paciente adulto de 35 años, 85 kg, con obstrucción de vía aérea inminente por angioedema. ISR emergente. Sin contraindicaciones para Succinilcolina. Se necesita parálisis rápida.',
    patientInfo: { condition: 'ISR urgente - obstrucción vía aérea', age: 35, weight: 85 },
    question: '¿Cuántos mg de Succinilcolina IV (1.5 mg/kg) debe recibir este paciente de 85 kg para ISR?',
    options: ['85 mg IV', '127.5 mg IV', '170 mg IV', '200 mg IV'],
    correct: '127.5 mg IV',
    explanation:
      'Cálculo: 1.5 mg/kg × 85 kg = 127.5 mg IV. Dosis para ISR: 1.5 mg/kg (adultos). Inicio de acción <60 segundos, duración 5-10 min. Contraindicada en hipercalemia, quemaduras extensas, rabdomiólisis, miopatías.',
    reference: 'RSI Guidelines - NAEMSP/ACEP 2021',
    timeLimit: 35,
  },
  {
    id: 'd-airway-hard-2',
    drug: 'Rocuronio',
    drugEmoji: '💉',
    category: 'airway',
    difficulty: 'hard',
    scenario:
      'Paciente de 42 años, 90 kg, con hipercalemia conocida (K+ 7.2 mEq/L) en ISR. Se decide Rocuronio como alternativa a Succinilcolina (que está contraindicada).',
    patientInfo: { condition: 'ISR con hipercalemia - contraindicación Succinilcolina', age: 42, weight: 90 },
    question: '¿Cuántos mg de Rocuronio IV (1.2 mg/kg) para ISR en este paciente de 90 kg?',
    options: ['90 mg IV', '108 mg IV', '126 mg IV', '180 mg IV'],
    correct: '108 mg IV',
    explanation:
      'Cálculo: 1.2 mg/kg × 90 kg = 108 mg IV. Rocuronio 1.2 mg/kg en ISR tiene onset similar a Succinilcolina (~60 seg) pero duración mayor (45-60 min). Reversible con Sugammadex 16 mg/kg en emergencia.',
    reference: 'RSI Guidelines - NAEMSP/ACEP 2021',
    timeLimit: 35,
  },
  {
    id: 'd-airway-hard-3',
    drug: 'Succinilcolina',
    drugEmoji: '💉',
    category: 'airway',
    difficulty: 'hard',
    scenario:
      'Niño de 7 años, 24 kg, necesita ISR de emergencia por convulsiones refractarias con compromiso de vía aérea. Se decide Succinilcolina IV (dosis pediátrica).',
    patientInfo: { condition: 'ISR pediátrica de emergencia', age: 7, weight: 24 },
    question: '¿Cuántos mg de Succinilcolina IV para ISR en este niño de 24 kg (dosis pediátrica 2 mg/kg)?',
    options: ['24 mg IV', '36 mg IV', '48 mg IV', '72 mg IV'],
    correct: '48 mg IV',
    explanation:
      'Cálculo: 2 mg/kg × 24 kg = 48 mg IV. En niños <12 años la dosis es 2 mg/kg (mayor por mayor volumen de distribución). En adultos y adolescentes: 1.5 mg/kg. Tener Atropina lista (0.02 mg/kg) para prevenir bradicardia vagal.',
    reference: 'PALS 2020 - Airway Management',
    timeLimit: 35,
  },
  {
    id: 'd-airway-hard-4',
    drug: 'Rocuronio',
    drugEmoji: '💉',
    category: 'airway',
    difficulty: 'hard',
    scenario:
      'Paciente adulto de 30 años, 65 kg, con trauma facial severo e intubación nasal contraindicada. ISR urgente. Se usa Rocuronio a dosis alta para ISR (1.2 mg/kg).',
    patientInfo: { condition: 'Trauma facial - ISR urgente', age: 30, weight: 65 },
    question: '¿Cuántos mg de Rocuronio IV para ISR en este paciente de 65 kg (1.2 mg/kg)?',
    options: ['52 mg IV', '65 mg IV', '78 mg IV', '91 mg IV'],
    correct: '78 mg IV',
    explanation:
      'Cálculo: 1.2 mg/kg × 65 kg = 78 mg IV. A esta dosis, el onset de Rocuronio es comparable a Succinilcolina (~60 seg). Si falla la intubación, el paciente permanecerá paralizado 45-60 min (plan de vía aérea difícil es esencial).',
    reference: 'RSI Guidelines - NAEMSP/ACEP 2021',
    timeLimit: 35,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CARDIOVASCULAR – HARD (additional)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-cardio-hard-4',
    drug: 'Vasopresina',
    drugEmoji: '💉',
    category: 'cardiovascular',
    difficulty: 'hard',
    scenario:
      'Paciente adulto en paro cardíaco refractario con FV. Ya recibió 3 dosis de Epinefrina. Médico ordena Vasopresina como vasopresor alternativo en el protocolo de paro.',
    patientInfo: { condition: 'Paro cardíaco refractario - FV', age: 55, weight: 82 },
    question: '¿Cuál es la dosis correcta de Vasopresina IV en paro cardíaco?',
    options: ['20 UI IV en infusión', '40 UI IV dosis única', '80 UI IV en 2 dosis', '0.4 UI/min infusión'],
    correct: '40 UI IV dosis única',
    explanation:
      'Vasopresina 40 UI IV en dosis única puede sustituir la primera o segunda dosis de Epinefrina en paro cardíaco. La dosis de 0.4 UI/min es para shock séptico. Los estudios no muestran superioridad sobre Epinefrina en paro.',
    reference: 'AHA ACLS 2020',
    timeLimit: 35,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ANALGESIA – HARD (additional)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-analg-hard-2',
    drug: 'Fentanilo',
    drugEmoji: '💉',
    category: 'analgesia',
    difficulty: 'hard',
    scenario:
      'Paciente adulto de 50 años, 95 kg, con dolor oncológico irruptivo severo en urgencias. Ya tiene tolerancia a opioides. Se decide Fentanilo IV a 2 mcg/kg para breakthrough.',
    patientInfo: { condition: 'Dolor oncológico irruptivo - tolerante a opioides', age: 50, weight: 95 },
    question: '¿Cuántos mcg de Fentanilo IV a 2 mcg/kg para este paciente de 95 kg?',
    options: ['95 mcg IV', '150 mcg IV', '190 mcg IV', '250 mcg IV'],
    correct: '190 mcg IV',
    explanation:
      'Cálculo: 2 mcg/kg × 95 kg = 190 mcg IV. En pacientes tolerantes a opioides, las dosis estándar pueden ser insuficientes. Monitorizar SpO2 y capnografía. Tener Naloxona disponible aunque sea paciente tolerante.',
    reference: 'NAEMSP Pain Management 2017',
    timeLimit: 35,
  },
  {
    id: 'd-analg-hard-3',
    drug: 'Midazolam',
    drugEmoji: '💉',
    category: 'analgesia',
    difficulty: 'hard',
    scenario:
      'Adulto de 70 años, 60 kg, con delirium agitado en urgencias. Se decide sedación con Midazolam IV (0.05 mg/kg dosis baja en anciano) para procedimiento. Riesgo de depresión respiratoria aumentado.',
    patientInfo: { condition: 'Delirium agitado - sedación procedimental en anciano', age: 70, weight: 60 },
    question: '¿Cuántos mg de Midazolam IV (0.05 mg/kg, dosis reducida geriátrica) para este paciente de 60 kg?',
    options: ['1 mg IV', '3 mg IV', '5 mg IV', '6 mg IV'],
    correct: '3 mg IV',
    explanation:
      'Cálculo: 0.05 mg/kg × 60 kg = 3 mg IV. En ancianos, insuficiencia renal/hepática: reducir dosis 50-75%. La dosis estándar adulto joven es 0.1-0.2 mg/kg. Monitorizar con capnografía. Flumazenil disponible.',
    reference: 'AGS Beers Criteria / Sedation Guidelines 2023',
    timeLimit: 35,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // VITALES – HARD
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-vit-hard-1',
    drug: 'Epinefrina',
    drugEmoji: '💉',
    category: 'vitales',
    difficulty: 'hard',
    scenario:
      'Niño de 3 años, 14 kg, en paro cardíaco. El equipo de PALS calcula la dosis de Epinefrina IV/IO.',
    patientInfo: { condition: 'Paro cardíaco pediátrico', age: 3, weight: 14 },
    question: '¿Cuántos mcg de Epinefrina IV/IO (0.01 mg/kg = 10 mcg/kg) para este niño de 14 kg?',
    options: ['70 mcg IV/IO', '100 mcg IV/IO', '140 mcg IV/IO', '200 mcg IV/IO'],
    correct: '140 mcg IV/IO',
    explanation:
      'Cálculo: 0.01 mg/kg × 14 kg = 0.14 mg = 140 mcg IV/IO. Presentación estándar: Epinefrina 1:10,000 (0.1 mg/mL). Volumen: 0.14 mg / 0.1 mg/mL = 1.4 mL IV/IO. Repetir cada 3-5 min.',
    reference: 'AHA PALS 2020',
    timeLimit: 40,
  },
  {
    id: 'd-vit-hard-2',
    drug: 'Atropina',
    drugEmoji: '🫀',
    category: 'vitales',
    difficulty: 'hard',
    scenario:
      'Niño de 8 años, 28 kg, con bradicardia sintomática severa (FC 35 lpm) durante ISR. Se necesita Atropina IV urgente para bradicardia vagal.',
    patientInfo: { condition: 'Bradicardia vagal durante ISR pediátrica', age: 8, weight: 28 },
    question: '¿Cuántos mg de Atropina IV (0.02 mg/kg, mín 0.1 mg, máx 0.5 mg) para este niño de 28 kg?',
    options: ['0.1 mg IV (mínimo)', '0.28 mg IV (calculado)', '0.5 mg IV (máximo)', '1 mg IV'],
    correct: '0.5 mg IV (máximo)',
    explanation:
      'Cálculo: 0.02 mg/kg × 28 kg = 0.56 mg IV. Sin embargo, la dosis máxima en niños es 0.5 mg. Como 0.56 > 0.5, se usa la dosis máxima: 0.5 mg IV. La dosis mínima es 0.1 mg para evitar efecto paradójico.',
    reference: 'AHA PALS 2020',
    timeLimit: 40,
  },
  {
    id: 'd-vit-hard-3',
    drug: 'Naloxona',
    drugEmoji: '🧪',
    category: 'vitales',
    difficulty: 'hard',
    scenario:
      'Paciente de 55 años, 95 kg, tolerante a opioides (usa morfina crónica) con sobredosis accidental. FR 5 rpm, SpO2 82%. Se decide titular Naloxona IV cuidadosamente para no precipitar síndrome de abstinencia severo.',
    patientInfo: { condition: 'Sobredosis opioides en paciente tolerante - FR 5 rpm', age: 55, weight: 95 },
    question: '¿Cuál es la estrategia correcta de Naloxona en paciente tolerante a opioides con depresión respiratoria?',
    options: [
      'Naloxona 2 mg IV en bolo (dosis máxima)',
      'Naloxona 0.04-0.1 mg IV titulado cada 2-3 min',
      'Naloxona 0.4 mg IM dosis única',
      'No usar Naloxona en tolerantes a opioides',
    ],
    correct: 'Naloxona 0.04-0.1 mg IV titulado cada 2-3 min',
    explanation:
      'En pacientes tolerantes a opioides: titular Naloxona 0.04-0.1 mg IV cada 2-3 min hasta FR adecuada, sin revertir completamente. Dosis altas (0.4-2 mg) pueden precipitar síndrome de abstinencia agudo (agitación extrema, convulsiones, edema pulmonar). El objetivo es FR >12 rpm con SpO2 >94%.',
    reference: 'CDC Opioid Prescribing Guidelines / ACMT',
    timeLimit: 40,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CARDIOVASCULAR – MEDIUM (additional)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'd-cardio-med-3',
    drug: 'Amiodarona',
    drugEmoji: '🫀',
    category: 'cardiovascular',
    difficulty: 'medium',
    scenario:
      'Paciente de 70 años con TSV estable refractaria a Adenosina. Se decide Amiodarona IV para control del ritmo según protocolo hospitalario.',
    patientInfo: { condition: 'TSV estable refractaria a adenosina', age: 70, weight: 70 },
    formula: '150 mg IV en 10 min (dosis de carga)',
    question: '¿Cuál es la dosis de carga de Amiodarona IV en arritmia estable?',
    options: ['75 mg IV en 5 min', '150 mg IV en 10 min', '300 mg IV en bolo', '500 mg IV en 30 min'],
    correct: '150 mg IV en 10 min',
    explanation:
      'Amiodarona 150 mg IV en 10 min para taquicardia estable (no paro). Contrario al paro (300 mg bolo), en paciente con pulso se administra lentamente para evitar hipotensión severa. Seguir con infusión de mantenimiento.',
    reference: 'AHA ACLS 2020',
    timeLimit: 25,
  },
  {
    id: 'd-cardio-med-4',
    drug: 'Atropina',
    drugEmoji: '🫀',
    category: 'cardiovascular',
    difficulty: 'medium',
    scenario:
      'Paciente de 60 años, 72 kg, con bradicardia severa FC 35 lpm post-infarto inferior. Hipotensión PA 80/50 mmHg. Se necesita Atropina IV.',
    patientInfo: { condition: 'Bradicardia severa post-infarto con hipotensión', age: 60, weight: 72 },
    formula: '0.5 mg IV, repetir cada 3-5 min (máx 3 mg)',
    question: '¿Cuál es el protocolo de Atropina para bradicardia sintomática según ACLS?',
    options: [
      '0.1 mg IV única dosis',
      '0.5 mg IV, repetir cada 3-5 min hasta 3 mg',
      '1 mg IV bolo directo',
      '2 mg IV en 5 min',
    ],
    correct: '0.5 mg IV, repetir cada 3-5 min hasta 3 mg',
    explanation:
      'Atropina 0.5 mg IV, repetible cada 3-5 minutos hasta dosis máxima de 3 mg. Si no responde: marcapasos transcutáneo, Dopamina 5-10 mcg/kg/min o Epinefrina 2-10 mcg/min.',
    reference: 'AHA ACLS 2020 Bradicardia',
    timeLimit: 25,
  },
];

export const CATEGORY_INFO = {
  vitales: {
    label: 'Medicamentos Vitales',
    emoji: '💉',
    description: 'Epinefrina, Atropina, Vasopresina, Naloxona',
    color: 'from-red-600 to-rose-700',
    bgColor: 'bg-red-950/60',
    borderColor: 'border-red-500/40',
    textColor: 'text-red-300',
  },
  analgesia: {
    label: 'Analgesia y Sedación',
    emoji: '💊',
    description: 'Morfina, Fentanilo, Midazolam, Ketamina, Ketorolaco',
    color: 'from-purple-600 to-violet-700',
    bgColor: 'bg-purple-950/60',
    borderColor: 'border-purple-500/40',
    textColor: 'text-purple-300',
  },
  cardiovascular: {
    label: 'Cardiovascular',
    emoji: '🫀',
    description: 'Amiodarona, Adenosina, Dopamina, Norepinefrina',
    color: 'from-pink-600 to-rose-700',
    bgColor: 'bg-pink-950/60',
    borderColor: 'border-pink-500/40',
    textColor: 'text-pink-300',
  },
  metabolicos: {
    label: 'Metabólicos',
    emoji: '🧪',
    description: 'Dextrosa, Glucagón, Insulina, Bicarbonato',
    color: 'from-amber-600 to-yellow-700',
    bgColor: 'bg-amber-950/60',
    borderColor: 'border-amber-500/40',
    textColor: 'text-amber-300',
  },
  airway: {
    label: 'Vía Aérea (ISR)',
    emoji: '🫁',
    description: 'Succinilcolina, Rocuronio, Ketamina, Lidocaína',
    color: 'from-teal-600 to-cyan-700',
    bgColor: 'bg-teal-950/60',
    borderColor: 'border-teal-500/40',
    textColor: 'text-teal-300',
  },
  all: {
    label: 'Todas las Categorías',
    emoji: '⚡',
    description: 'Mix de todos los medicamentos',
    color: 'from-slate-600 to-slate-700',
    bgColor: 'bg-slate-950/60',
    borderColor: 'border-slate-500/40',
    textColor: 'text-slate-300',
  },
};

export const DIFFICULTY_INFO = {
  easy: {
    label: 'Fácil',
    emoji: '🟢',
    description: 'Dosis fijas estándar – sin cálculo de peso',
    timeDescription: '20 segundos por pregunta',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/50',
    bgColor: 'bg-emerald-950/40',
  },
  medium: {
    label: 'Medio',
    emoji: '🟡',
    description: 'Cálculos basados en peso del paciente',
    timeDescription: '25-30 segundos por pregunta',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/50',
    bgColor: 'bg-amber-950/40',
  },
  hard: {
    label: 'Difícil',
    emoji: '🔴',
    description: 'Infusiones, casos complejos, distractores engañosos',
    timeDescription: '35-45 segundos por pregunta',
    color: 'text-rose-400',
    borderColor: 'border-rose-500/50',
    bgColor: 'bg-rose-950/40',
  },
};

export const QUESTIONS_PER_ROUND = 8;

export const LETTER_LABELS = ['A', 'B', 'C', 'D'];
