import {
    IChecklistEquipamiento,
    IChecklistGeneral,
    IChecklistMecanica,
    IChecklistTrauma,
    IChecklistViaAerea
} from "./AmbulanceChecklist.types.ts";

// Opciones de Unidades
export const UNIDADES_AMBULANCIA = [
    "A-4",
    "A-10",
    "A-11",
    "A-12",
    "A-13",
];

// Opciones de Guardias/Turnos
export const GUARDIAS = [
    "Viernes Nocturna",
    "Sabado Diurna",
    "Sabado Nocturno",
    "Domingo Diurna",
    "Guardia extraordinaria"
];

// Opciones de Motivos
export const MOTIVOS_CHECKLIST = [
    "Inicio de turno",
    "Fin de turno",
    "Cambio de guardia",
    "Revisión rutinaria",
    "Post-servicio",
    "Auditoría",
    "Otro"
];

// Instrucciones del formulario
export const INSTRUCCIONES_CHECKLIST = [
    "Los sobrantes de material deben ser reportados al coordinador de turno.",
    "El equipo dañado debe ser etiquetado y reportado inmediatamente.",
    "El equipo perdido debe documentarse en el reporte de incidencias.",
    "Todo el equipo debe ser secado adecuadamente antes de guardarse.",
    "Verificar fechas de caducidad de medicamentos y materiales."
];

// Valores iniciales - Datos Generales
export const INITIAL_DATOS_GENERALES: IChecklistGeneral = {
    unidad: "",
    guardia: "",
    nombreEncargado: "",
    motivo: ""
};

// Valores iniciales - Equipamiento
export const INITIAL_EQUIPAMIENTO: IChecklistEquipamiento = {
    // Inmovilización y Traslado
    camillaRigida: 0,
    baseBloques: 0,
    bloquesIndividuales: 0,
    sujetadoresAranas: 0,
    tablaPediatrica: 0,
    camillaMarina: 0,

    // Collarines
    collarinAdulto: 0,
    collarinPediatrico: 0,

    // Arañas
    aranaAdulto: 0,
    aranaPediatrica: 0,

    // Férulas
    ferulasSuperiores: 0,
    ferulasInferiores: 0,
    ferulaTraccion: 0,

    // Extracción
    chalecoExtraccion: 0,
    sillaEscaleras: 0,

    // Carro Camilla
    cinturonesCarroCamilla: 0,
    mesaCarroCamilla: 0,

    // Torunderos
    torunderoAlcohol: 0,
    torunderoJabonQuirurgico: 0,
    torunderoYodo: 0,
    torundeloBenzal: 0,

    // Varios Diagnóstico
    carbonActivado: 0,
    cajaPunzos: 0,
    ligadura: 0,

    // Estetoscopios
    estetoscopioAdultoDobleCampana: 0,
    estetoscopioPediatrico: 0,

    // Ropa de cama
    sabanaBlanca: 0,
    cobertor: 0,
    mantaTermicaReutilizable: 0,

    // RPBI
    contenedorPunzocortante: 0,
    bolsasRojas: 0,
    bolsasAmarillas: 0,

    // Equipo COVID
    kitCovid: 0,
    goggleTransparentes: 0,

    // Seguridad y Rescate
    guiaMaterialesPeligrosos: 0,
    tarjetasTriage: 0,
    sabanaQuemados: 0,

    // Cascos por color
    cascosBlancos: 0,
    cascosNegros: 0,
    cascosRojos: 0,
    cascosAmarillos: 0,
    cascosAzules: 0,

    // Bomberos
    chaqueton: 0,
    cascoBombero: 0,
    herramientaHalligan: 0,

    // Equipo Cardíaco
    monitorCecom: 0,
    deaZollA: 0,
    deaZollB: 0,
    deaAmarillo: 0,
    deaPowerheartVerde: 0,
    deaPowerheartNaranja: 0,
    deaFirstSave: 0,

    // Obstetricia
    dopplerFetal: 0,
    estetoscopioPinard: 0,
    kitObstetricoDesechable: 0,

    // Sanitario
    rastrillo: 0,
    aspiradorPortatil: 0,
    rinon: 0,
    comodo: 0,
    patoOrinal: 0,
    boteBasura: 0,

    // Desinfección
    desinfectanteManos: 0,
    desinfectanteSuperficies: 0
};

// Valores iniciales - Botiquín Trauma
export const INITIAL_TRAUMA: IChecklistTrauma = {
    // Medicamentos
    paracetamol: 0,
    aspirina: 0,
    ketorolaco: 0,
    epinefrina: 0,

    // Termómetros
    termometroOral: 0,
    termometroRectal: 0,
    termometroDigital: 0,
    termometroInfrarrojo: 0,

    // Signos Vitales
    glucometro: 0,
    pulsoximetro: 0,
    baumanometroAdulto: 0,
    baumanometroPediatrico: 0,
    estetoscopio: 0,

    // Curación
    torunderoAlcohol: 0,
    torunderoJabon: 0,
    torunderoYodo: 0,
    torundeloBenzal: 0,
    cintaBlanca: 0,
    cintaMicropor: 0,
    cloruroEtilo: 0,
    cajaPunzos: 0,

    // Control de Hemorragias
    ligadura: 0,
    torniquete: 0,

    // Otros
    electrolitosOrales: 0,
    botiquinPrimerRespondiente: 0
};

// Valores iniciales - Vía Aérea
export const INITIAL_VIA_AEREA: IChecklistViaAerea = {
    // Oxigenoterapia
    puntasNasalesAdulto: 0,
    puntasNasalesPediatrico: 0,
    mascarillaSimpleAdulto: 0,
    mascarillaSimplePediatrico: 0,
    mascarillaReservorioAdulto: 0,
    mascarillaReservorioPediatrico: 0,

    // BVM
    bvmNeonato: 0,
    bvmPediatrico: 0,
    bvmAdulto: 0,
    mascarillasTransparentes: 0,
    conectoresBvm: 0,
    filtroBvm: 0,

    // Cánulas
    canulasOrofaringeas: 0,
    canulasNasofaringeas: 0,

    // Tanques O2
    tanquePortatil: 0,
    tanqueFijo: 0,

    // Nebulización
    salbutamol: 0,
    aerocamaraMascarilla: 0,

    // Laringoscopio
    mangoLaringoscopio: 0,
    pilasLaringoscopio: 0,
    hojasRectas: 0,
    hojasCurvas: 0,

    // Accesorios Intubación
    lubricante: 0,
    estileteAdulto: 0,
    estiletePediatrico: 0,
    pinzasMagillAdulto: 0,
    pinzasMagillPediatrico: 0,
    mascarillaLaringea1_5: 0,
    mascarillaLaringea2: 0,
    mascarillaLaringea2_5: 0,
    mascarillaLaringea3: 0,
    mascarillaLaringea4: 0,
    mascarillaLaringea5: 0,
    tuboBougies: 0
};

// Valores iniciales - Mecánica
export const INITIAL_MECANICA: IChecklistMecanica = {
    // General
    tablaPartes: 0,

    // Herramientas
    llaves: 0,
    equipoHerramientasMano: 0,
    llaveCruz: 0,
    gatoHidraulico: 0,

    // Seguridad Vial
    triangulosConos: 0,
    cablesPasaCorriente: 0,
    extintor: 0,
    lamparaPortatilEmergencia: 0,

    // Neumáticos
    neumaticoRefaccion: 0
};

// Labels para campos de Equipamiento (para mostrar en UI)
export const EQUIPAMIENTO_LABELS: Record<keyof IChecklistEquipamiento, string> = {
    // Inmovilización y Traslado
    camillaRigida: "Camilla rígida",
    baseBloques: "Base de bloques",
    bloquesIndividuales: "Bloques individuales",
    sujetadoresAranas: "Sujetadores (arañas)",
    tablaPediatrica: "Tabla pediátrica",
    camillaMarina: "Camilla marina",

    // Collarines
    collarinAdulto: "Collarín adulto",
    collarinPediatrico: "Collarín pediátrico",

    // Arañas
    aranaAdulto: "Araña adulto",
    aranaPediatrica: "Araña pediátrica",

    // Férulas
    ferulasSuperiores: "Férulas superiores",
    ferulasInferiores: "Férulas inferiores",
    ferulaTraccion: "Férula de tracción",

    // Extracción
    chalecoExtraccion: "Chaleco de extracción",
    sillaEscaleras: "Silla para escaleras",

    // Carro Camilla
    cinturonesCarroCamilla: "Cinturones carro camilla",
    mesaCarroCamilla: "Mesa para carro camilla",

    // Torunderos
    torunderoAlcohol: "Torundero de alcohol",
    torunderoJabonQuirurgico: "Torundero jabón quirúrgico",
    torunderoYodo: "Torundero de yodo",
    torundeloBenzal: "Torundero de benzal",

    // Varios Diagnóstico
    carbonActivado: "Carbón activado",
    cajaPunzos: "Caja de punzos",
    ligadura: "Ligadura",

    // Estetoscopios
    estetoscopioAdultoDobleCampana: "Estetoscopio adulto/doble campana",
    estetoscopioPediatrico: "Estetoscopio pediátrico",

    // Ropa de cama
    sabanaBlanca: "Sábana blanca",
    cobertor: "Cobertor",
    mantaTermicaReutilizable: "Manta térmica reutilizable",

    // RPBI
    contenedorPunzocortante: "Contenedor punzocortante",
    bolsasRojas: "Bolsas rojas",
    bolsasAmarillas: "Bolsas amarillas",

    // Equipo COVID
    kitCovid: "Kit COVID (Botas, Guantes, N-95)",
    goggleTransparentes: "Goggles transparentes",

    // Seguridad y Rescate
    guiaMaterialesPeligrosos: "Guía materiales peligrosos",
    tarjetasTriage: "Tarjetas de Triage",
    sabanaQuemados: "Sábana para quemados",

    // Cascos por color
    cascosBlancos: "Cascos blancos",
    cascosNegros: "Cascos negros",
    cascosRojos: "Cascos rojos",
    cascosAmarillos: "Cascos amarillos",
    cascosAzules: "Cascos azules",

    // Bomberos
    chaqueton: "Chaquetón",
    cascoBombero: "Casco de bombero",
    herramientaHalligan: "Herramienta Halligan",

    // Equipo Cardíaco
    monitorCecom: "Monitor (CECOM)",
    deaZollA: "DEA Zoll A",
    deaZollB: "DEA Zoll B",
    deaAmarillo: "DEA Amarillo",
    deaPowerheartVerde: "DEA Powerheart Verde",
    deaPowerheartNaranja: "DEA Powerheart Naranja",
    deaFirstSave: "DEA First Save",

    // Obstetricia
    dopplerFetal: "Doppler fetal",
    estetoscopioPinard: "Estetoscopio de Pinard",
    kitObstetricoDesechable: "Kit obstétrico desechable",

    // Sanitario
    rastrillo: "Rastrillo",
    aspiradorPortatil: "Aspirador portátil",
    rinon: "Riñón",
    comodo: "Cómodo",
    patoOrinal: "Pato orinal",
    boteBasura: "Bote de basura",

    // Desinfección
    desinfectanteManos: "Desinfectante para manos",
    desinfectanteSuperficies: "Desinfectante superficies"
};

// Categorías de Equipamiento
export const EQUIPAMIENTO_CATEGORIAS = {
    inmovilizacion: {
        titulo: "Inmovilización y Traslado",
        campos: ["camillaRigida", "baseBloques", "bloquesIndividuales", "sujetadoresAranas", "tablaPediatrica", "camillaMarina"] as (keyof IChecklistEquipamiento)[]
    },
    collarines: {
        titulo: "Collarines",
        campos: ["collarinAdulto", "collarinPediatrico"] as (keyof IChecklistEquipamiento)[]
    },
    aranas: {
        titulo: "Arañas",
        campos: ["aranaAdulto", "aranaPediatrica"] as (keyof IChecklistEquipamiento)[]
    },
    ferulas: {
        titulo: "Férulas",
        campos: ["ferulasSuperiores", "ferulasInferiores", "ferulaTraccion"] as (keyof IChecklistEquipamiento)[]
    },
    extraccion: {
        titulo: "Extracción",
        campos: ["chalecoExtraccion", "sillaEscaleras"] as (keyof IChecklistEquipamiento)[]
    },
    carroCamilla: {
        titulo: "Carro Camilla",
        campos: ["cinturonesCarroCamilla", "mesaCarroCamilla"] as (keyof IChecklistEquipamiento)[]
    },
    torunderos: {
        titulo: "Torunderos",
        campos: ["torunderoAlcohol", "torunderoJabonQuirurgico", "torunderoYodo", "torundeloBenzal"] as (keyof IChecklistEquipamiento)[]
    },
    variosDiagnostico: {
        titulo: "Varios Diagnóstico",
        campos: ["carbonActivado", "cajaPunzos", "ligadura"] as (keyof IChecklistEquipamiento)[]
    },
    estetoscopios: {
        titulo: "Estetoscopios",
        campos: ["estetoscopioAdultoDobleCampana", "estetoscopioPediatrico"] as (keyof IChecklistEquipamiento)[]
    },
    ropaCama: {
        titulo: "Ropa de Cama",
        campos: ["sabanaBlanca", "cobertor", "mantaTermicaReutilizable"] as (keyof IChecklistEquipamiento)[]
    },
    rpbi: {
        titulo: "Residuos Peligrosos (RPBI)",
        campos: ["contenedorPunzocortante", "bolsasRojas", "bolsasAmarillas"] as (keyof IChecklistEquipamiento)[]
    },
    covid: {
        titulo: "Equipo COVID",
        campos: ["kitCovid", "goggleTransparentes"] as (keyof IChecklistEquipamiento)[]
    },
    seguridadRescate: {
        titulo: "Seguridad y Rescate",
        campos: ["guiaMaterialesPeligrosos", "tarjetasTriage", "sabanaQuemados"] as (keyof IChecklistEquipamiento)[]
    },
    cascos: {
        titulo: "Cascos de Seguridad",
        campos: ["cascosBlancos", "cascosNegros", "cascosRojos", "cascosAmarillos", "cascosAzules"] as (keyof IChecklistEquipamiento)[]
    },
    bomberos: {
        titulo: "Equipo Bomberos",
        campos: ["chaqueton", "cascoBombero", "herramientaHalligan"] as (keyof IChecklistEquipamiento)[]
    },
    cardiaco: {
        titulo: "Equipo Cardíaco / DEA",
        campos: ["monitorCecom", "deaZollA", "deaZollB", "deaAmarillo", "deaPowerheartVerde", "deaPowerheartNaranja", "deaFirstSave"] as (keyof IChecklistEquipamiento)[]
    },
    obstetricia: {
        titulo: "Obstetricia",
        campos: ["dopplerFetal", "estetoscopioPinard", "kitObstetricoDesechable"] as (keyof IChecklistEquipamiento)[]
    },
    sanitario: {
        titulo: "Equipo Sanitario",
        campos: ["rastrillo", "aspiradorPortatil", "rinon", "comodo", "patoOrinal", "boteBasura"] as (keyof IChecklistEquipamiento)[]
    },
    desinfeccion: {
        titulo: "Desinfección",
        campos: ["desinfectanteManos", "desinfectanteSuperficies"] as (keyof IChecklistEquipamiento)[]
    }
};

// Labels para campos de Trauma
export const TRAUMA_LABELS: Record<keyof IChecklistTrauma, string> = {
    paracetamol: "Paracetamol",
    aspirina: "Aspirina",
    ketorolaco: "Ketorolaco",
    epinefrina: "Epinefrina",
    termometroOral: "Termómetro oral",
    termometroRectal: "Termómetro rectal",
    termometroDigital: "Termómetro digital",
    termometroInfrarrojo: "Termómetro infrarrojo",
    glucometro: "Glucómetro",
    pulsoximetro: "Pulsoxímetro",
    baumanometroAdulto: "Baumanómetro adulto",
    baumanometroPediatrico: "Baumanómetro pediátrico",
    estetoscopio: "Estetoscopio",
    torunderoAlcohol: "Torundero de alcohol",
    torunderoJabon: "Torundero de jabón",
    torunderoYodo: "Torundero de yodo",
    torundeloBenzal: "Torundero de benzal",
    cintaBlanca: "Cinta blanca",
    cintaMicropor: "Cinta micropor",
    cloruroEtilo: "Cloruro de etilo",
    cajaPunzos: "Caja de punzos",
    ligadura: "Ligadura",
    torniquete: "Torniquete",
    electrolitosOrales: "Electrolitos orales",
    botiquinPrimerRespondiente: "Botiquín primer respondiente"
};

// Categorías de Trauma
export const TRAUMA_CATEGORIAS = {
    medicamentos: {
        titulo: "Medicamentos",
        campos: ["paracetamol", "aspirina", "ketorolaco", "epinefrina"] as (keyof IChecklistTrauma)[]
    },
    termometros: {
        titulo: "Termómetros",
        campos: ["termometroOral", "termometroRectal", "termometroDigital", "termometroInfrarrojo"] as (keyof IChecklistTrauma)[]
    },
    signosVitales: {
        titulo: "Signos Vitales",
        campos: ["glucometro", "pulsoximetro", "baumanometroAdulto", "baumanometroPediatrico", "estetoscopio"] as (keyof IChecklistTrauma)[]
    },
    curacion: {
        titulo: "Curación",
        campos: ["torunderoAlcohol", "torunderoJabon", "torunderoYodo", "torundeloBenzal", "cintaBlanca", "cintaMicropor", "cloruroEtilo", "cajaPunzos"] as (keyof IChecklistTrauma)[]
    },
    hemorragias: {
        titulo: "Control de Hemorragias",
        campos: ["ligadura", "torniquete"] as (keyof IChecklistTrauma)[]
    },
    otros: {
        titulo: "Otros",
        campos: ["electrolitosOrales", "botiquinPrimerRespondiente"] as (keyof IChecklistTrauma)[]
    }
};

// Labels para Vía Aérea
export const VIA_AEREA_LABELS: Record<keyof IChecklistViaAerea, string> = {
    puntasNasalesAdulto: "Puntas nasales adulto",
    puntasNasalesPediatrico: "Puntas nasales pediátrico",
    mascarillaSimpleAdulto: "Mascarilla simple adulto",
    mascarillaSimplePediatrico: "Mascarilla simple pediátrico",
    mascarillaReservorioAdulto: "Mascarilla con reservorio adulto",
    mascarillaReservorioPediatrico: "Mascarilla con reservorio pediátrico",
    bvmNeonato: "BVM Neonato",
    bvmPediatrico: "BVM Pediátrico",
    bvmAdulto: "BVM Adulto",
    mascarillasTransparentes: "Mascarillas transparentes",
    conectoresBvm: "Conectores BVM",
    filtroBvm: "Filtro BVM",
    canulasOrofaringeas: "Cánulas orofaríngeas",
    canulasNasofaringeas: "Cánulas nasofaríngeas",
    tanquePortatil: "Tanque portátil O2",
    tanqueFijo: "Tanque fijo O2",
    salbutamol: "Salbutamol",
    aerocamaraMascarilla: "Aerocámara y mascarilla",
    mangoLaringoscopio: "Mango laringoscopio",
    pilasLaringoscopio: "Pilas laringoscopio",
    hojasRectas: "Hojas rectas",
    hojasCurvas: "Hojas curvas",
    lubricante: "Lubricante",
    estileteAdulto: "Estilete adulto",
    estiletePediatrico: "Estilete pediátrico",
    pinzasMagillAdulto: "Pinzas Magill adulto",
    pinzasMagillPediatrico: "Pinzas Magill pediátrico",
    mascarillaLaringea1_5: "Mascarilla laríngea #1.5",
    mascarillaLaringea2: "Mascarilla laríngea #2",
    mascarillaLaringea2_5: "Mascarilla laríngea #2.5",
    mascarillaLaringea3: "Mascarilla laríngea #3",
    mascarillaLaringea4: "Mascarilla laríngea #4",
    mascarillaLaringea5: "Mascarilla laríngea #5",
    tuboBougies: "Tubo para bougies"
};

// Categorías de Vía Aérea
export const VIA_AEREA_CATEGORIAS = {
    oxigenoterapia: {
        titulo: "Oxigenoterapia",
        campos: ["puntasNasalesAdulto", "puntasNasalesPediatrico", "mascarillaSimpleAdulto", "mascarillaSimplePediatrico", "mascarillaReservorioAdulto", "mascarillaReservorioPediatrico"] as (keyof IChecklistViaAerea)[]
    },
    bvm: {
        titulo: "Bolsa Válvula Mascarilla (BVM)",
        campos: ["bvmNeonato", "bvmPediatrico", "bvmAdulto", "mascarillasTransparentes", "conectoresBvm", "filtroBvm"] as (keyof IChecklistViaAerea)[]
    },
    canulas: {
        titulo: "Cánulas",
        campos: ["canulasOrofaringeas", "canulasNasofaringeas"] as (keyof IChecklistViaAerea)[]
    },
    tanques: {
        titulo: "Suministro de O2",
        campos: ["tanquePortatil", "tanqueFijo"] as (keyof IChecklistViaAerea)[]
    },
    nebulizacion: {
        titulo: "Nebulización",
        campos: ["salbutamol", "aerocamaraMascarilla"] as (keyof IChecklistViaAerea)[]
    },
    laringoscopio: {
        titulo: "Laringoscopio",
        campos: ["mangoLaringoscopio", "pilasLaringoscopio", "hojasRectas", "hojasCurvas"] as (keyof IChecklistViaAerea)[]
    },
    intubacion: {
        titulo: "Accesorios de Intubación",
        campos: ["lubricante", "estileteAdulto", "estiletePediatrico", "pinzasMagillAdulto", "pinzasMagillPediatrico"] as (keyof IChecklistViaAerea)[]
    },
    mascarillasLaringeas: {
        titulo: "Mascarillas Laríngeas",
        campos: ["mascarillaLaringea1_5", "mascarillaLaringea2", "mascarillaLaringea2_5", "mascarillaLaringea3", "mascarillaLaringea4", "mascarillaLaringea5", "tuboBougies"] as (keyof IChecklistViaAerea)[]
    }
};

// Labels para Mecánica
export const MECANICA_LABELS: Record<keyof IChecklistMecanica, string> = {
    tablaPartes: "Tabla de partes",
    llaves: "Llaves",
    equipoHerramientasMano: "Equipo herramientas de mano",
    llaveCruz: "Llave de cruz",
    gatoHidraulico: "Gato hidráulico/mecánico",
    triangulosConos: "Triángulos/Conos",
    cablesPasaCorriente: "Cables pasa-corriente",
    extintor: "Extintor",
    lamparaPortatilEmergencia: "Lámpara portátil de emergencia",
    neumaticoRefaccion: "Neumático de refacción"
};

// Categorías de Mecánica
export const MECANICA_CATEGORIAS = {
    general: {
        titulo: "General",
        campos: ["tablaPartes"] as (keyof IChecklistMecanica)[]
    },
    herramientas: {
        titulo: "Herramientas",
        campos: ["llaves", "equipoHerramientasMano", "llaveCruz", "gatoHidraulico"] as (keyof IChecklistMecanica)[]
    },
    seguridadVial: {
        titulo: "Seguridad Vial",
        campos: ["triangulosConos", "cablesPasaCorriente", "extintor", "lamparaPortatilEmergencia"] as (keyof IChecklistMecanica)[]
    },
    neumaticos: {
        titulo: "Neumáticos",
        campos: ["neumaticoRefaccion"] as (keyof IChecklistMecanica)[]
    }
};

// Pasos del formulario
export const FORM_STEPS = [
    { id: 1, title: "Datos Generales", description: "Identificación y personal" },
    { id: 2, title: "Equipamiento", description: "Equipamiento general de ambulancia" },
    { id: 3, title: "Botiquín Trauma", description: "Medicamentos y curación" },
    { id: 4, title: "Vía Aérea", description: "Oxigenoterapia e intubación" },
    { id: 5, title: "Mecánica", description: "Herramientas y seguridad vehicular" }
];

