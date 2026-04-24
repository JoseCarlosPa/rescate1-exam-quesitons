import {
    IChecklistAmbulancia,
    IChecklistGeneral,
    IChecklistMecanica,
    IChecklistTrauma,
    IChecklistViaAerea,
    IChecklistBotiquinPR
} from "./AmbulanceChecklist.types.ts";

// Opciones de Unidades
export const UNIDADES_AMBULANCIA = [
    "N/A",
    "A-4",
    "A-10",
    "A-11",
    "A-12",
    "A-13",
];

// Opciones de Guardias/Turnos
export const GUARDIAS = [
    "Viernes nocturna",
    "Sábado Diurna",
    "Sábado Nocturna",
    "Domingo Diurna",
    "Guardia extra",
];

// Opciones de Motivos
export const MOTIVOS_CHECKLIST = [
    "Guardia normal",
    "Guardia extra",
    "Servicio Especial",
    "Traslado programado",
    "Capacitación (Practica/Examen)",
    "Surtido post-mecánico",
    "Modificación prehospitalario",
];

// Unidades para botiquín primer respondiente
export const UNIDADES_BOTIQUIN = ["A-10", "A-11", "A-12", "A-13"];

// Opciones de Monitor cardíaco
export const MONITORES_OPCIONES = [
    "Monitor Zoll 1",
    "Monitor Zoll 3",
    "Monitor Lifepack",
];

// Opciones de DEA
export const DEA_OPCIONES = [
    "DEA ZOLL - A",
    "DEA ZOLL - B",
    "DEA AMARILLO",
    "DEA POWER HEART VERDE",
    "DEA POWERHEART NARANJA",
];

// Opciones de color de cascos
export const COLORES_CASCOS = [
    "AZULES",
    "NEGROS",
    "ROJOS",
    "BLANCO",
    "AMARILLOS",
];

// Instrucciones del formulario (del Zoho)
export const INSTRUCCIONES_CHECKLIST = [
    "Llenar TODOS los puntos.",
    "Llenar únicamente con las cantidades existentes en la Unidad que se está revisando.",
    "En caso de que, haya sobrante de equipo, BAJARLO y colocarlo en botiquín rojo de CECOM.",
    "En caso de perdida o daño de algún equipo, por favor avisar inmediatamente al encargado de Prehospitalario de tu guardia y colocar equipo dañado en botiquín rojo de CECOM.",
    "Si vas a dejar secándose equipo, avisar a la siguiente guardia para que lo recojan y lo coloquen en su respectiva Unidad.",
    "Si mueves equipo entre unidades, REGRESARLAS al término de tu guardia.",
    "¡Muchas gracias!",
];

// Valores iniciales - Datos Generales
export const INITIAL_DATOS_GENERALES: IChecklistGeneral = {
    unidad: "",
    guardia: "",
    fechaHora: "",
    nombreEncargado: "",
    apellidoEncargado: "",
    motivo: ""
};

// Valores iniciales - Ambulancia
export const INITIAL_AMBULANCIA: IChecklistAmbulancia = {
    // Inmovilización
    camillaRigida: 0,
    baseBloques: 0,
    bloques: 0,
    sujetadores: 0,
    collarinAdulto: 0,
    collarinPediatrico: 0,
    aranaAdulto: 0,
    aranaPediatrica: 0,
    tubular: 0,
    tablaPediatrica: 0,
    bloquesPediatricos: 0,
    inmovilizadorPelvico: 0,
    // Férulas
    ferulasSuperiores: 0,
    ferulasInferiores: 0,
    ferulasTubulares: 0,
    bombaFerulaNeumatica: 0,
    chalecoExtraccion: 0,
    ferulaTraccion: 0,
    camillaMarina: 0,
    sillaEscaleras: 0,
    espatula: 0,
    // Carro Camilla
    cinturonesCarroCamilla: 0,
    mesaCarroCamilla: 0,
    // Seguridad
    chalecosNaranjas: 0,
    // Varios
    carbonActivado: 0,
    torunderoAlcohol: 0,
    torunderoJabonQuirurgico: 0,
    torunderoYodo: 0,
    torundeloBenzal: 0,
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
    // COVID
    kitCovidTrajesTyvek: false,
    kitCovidBotas: false,
    kitCovidGuantes: false,
    kitCovidN95: false,
    kitCovidNinguno: false,
    goggleTransparentes: 0,
    // Seguridad y Rescate
    guiaMaterialesPeligrosos: 0,
    sabanaQuemados: 0,
    tarjetasTriage: 0,
    kitTriage: 0,
    // Cascos
    cascosCantidad: 0,
    casco4BlancosPresentes: "",
    casco9NegrosPresentes: "",
    casco11RojosPresentes: "",
    casco12AmarillosPresentes: "",
    casco13AzulesPresentes: "",
    cascosColorAlternativo: "",
    // Bomberos
    chaqueton: 0,
    cascoBombero: 0,
    herramientaHalligan: 0,
    // Monitor
    monitorCardiaco: [],
    monitorFunciona: "",
    monitorCableAC: 0,
    monitorPaletas: 0,
    monitorBrazaleteTA: 0,
    monitorCableBrazaleteTA: 0,
    monitorOximetro: 0,
    monitorEtCO2: 0,
    monitorCableECG3: 0,
    monitorCableECG12: 0,
    monitorGelCondutor: 0,
    monitorParches: 0,
    monitorParchesBuenEstado: "",
    monitorElectrodos: 0,
    monitorPapelImpresion: 0,
    monitorBateria: 0,
    // DEA
    deaPresentes: [],
    deaFunciona: "",
    deaParches: 0,
    deaParchesBuenEstado: "",
    // Rastrillo
    rastrillo: 0,
    // Obstetricia
    dopplerFetal: 0,
    dopplerFunciona: "",
    gelConductor: 0,
    estetoscopioPinard: 0,
    kitObstetricoDesechable: 0,
    charolaAcero: 0,
    tapaChaola: 0,
    pinzasUmbilicales: 0,
    pinzasRochester: 0,
    onfalotomo: 0,
    tijeraMayo: 0,
    perillaAspiracion: 0,
    // Aspirador
    aspiradorPortatil: 0,
    aspiradorFunciona: "",
    vasoAspirador: 0,
    manguera: 0,
    canulaYankauer: 0,
    sondaBlanda: 0,
    // Sanitario
    rinon: 0,
    comodo: 0,
    patoOrinal: 0,
    boteBasura: 0,
    // Desinfección
    desinfectanteManos: 0,
    desinfectanteSuperficies: 0,
};

// Valores iniciales - Botiquín Trauma
export const INITIAL_TRAUMA: IChecklistTrauma = {
    cajaMedicamentos: 0,
    termometroOral: 0,
    termometroRectal: 0,
    termometroDigital: 0,
    termometroInfrarrojo: 0,
    termometroInfrarrojFunciona: "",
    glucometro: 0,
    glucometroFunciona: "",
    pulsoximetro: 0,
    pulsoximetroFunciona: "",
    baumanometroAdulto: 0,
    baumanometroAdultoFunciona: "",
    estetoscopioAdulto: 0,
    baumanometroPediatrico: 0,
    baumanometroPediatricoFunciona: "",
    brazaletesPediatricos: [],
    torunderoAlcohol: 0,
    torunderoJabonQuirurgico: 0,
    torunderoYodo: 0,
    torundeloBenzal: 0,
    electrolitosOrales: 0,
    cintaBlanca: 0,
    cintaMicropor: 0,
    cloruroEtilo: 0,
    cajaPunzos: 0,
    ligadura: 0,
    torniquete: 0,
    botiquinPrimerRespondiente: 0,
};

// Valores iniciales - Botiquín Primer Respondiente
export const INITIAL_BOTIQUIN_PR: IChecklistBotiquinPR = {
    unidadCorresponde: "",
    baumanometroAdulto: 0,
    baumanometroFunciona: "",
    estetoscopioAdulto: 0,
    ferulaSAM: 0,
    pulsoximetro: 0,
    pulsoximetroFunciona: "",
    glucometro: 0,
    glucometroFunciona: "",
    torunderoAlcohol: 0,
    torunderoJabon: 0,
    mascarillaFiltro: 0,
    canulaOrofaringea: 0,
    canulaNasofaringea: 0,
    cintaBlanca: 0,
    torniquete: 0,
    ligadura: 0,
};

// Valores iniciales - Vía Aérea
export const INITIAL_VIA_AEREA: IChecklistViaAerea = {
    puntasNasalesAdulto: false,
    puntasNasalesPediatrico: false,
    mascarillaSimpleAdulto: false,
    mascarillaSimplePediatrico: false,
    mascarillaReservorioAdulto: false,
    mascarillaReservorioPediatrico: false,
    bvmNeonato: false,
    bvmPediatrico: false,
    bvmAdulto: false,
    mascarillaTransparenteAdultoGrande: false,
    mascarillaTransparenteAdulto: false,
    mascarillaTransparentePediatrica: false,
    mascarillaTransparenteNeonato: false,
    conectores: 0,
    canulasOrofaringeas: 0,
    canulasNasofaringeas: 0,
    tanquePortatil: 0,
    tanqueFijo: 0,
    filtroBvm: 0,
    salbutamol: 0,
    salbutamolCaduco: "",
    aerocamaraCamara: 0,
    aerocamaraMascarilla: 0,
    mangoLaringoscopio: 0,
    laringoscopioFunciona: "",
    pilas: 0,
    lubricante: 0,
    hojasRectas: 0,
    hojasCurvas: 0,
    estileteAdulto: 0,
    estiletePediatrico: 0,
    pinzasMagillAdulto: 0,
    pinzasMagillPediatrico: 0,
    mascarillasLaringeas: "",
    tuboBougies: 0,
    bougie: 0,
};

// Valores iniciales - Mecánica
export const INITIAL_MECANICA: IChecklistMecanica = {
    tablaPartes: 0,
    llaves: 0,
    equipoHerramientasMano: 0,
    equipoSellado: "",
    triangulosConos: 0,
    llaveCruz: 0,
    neumaticoRefaccion: 0,
    gatoHidraulico: 0,
    cablesPasaCorriente: 0,
    extintor: 0,
    extintorCargadoSeguro: "",
    lamparaPortatil: 0,
    lamparaFunciona: "",
};

// =====================
// CATEGORÍAS DE AMBULANCIA
// =====================
export const AMBULANCIA_CATEGORIAS = {
    inmovilizacion: {
        titulo: "Inmovilización y Traslado",
        campos: [
            { key: "camillaRigida", label: "Camilla rígida", tipo: "radio", opciones: [0, 1, 2] },
            { key: "baseBloques", label: "Base de bloques", tipo: "radio", opciones: [0, 1, 2] },
            { key: "bloques", label: "Bloques", tipo: "radio", opciones: [0, 1, 2, 3, 4] },
            { key: "sujetadores", label: "Sujetadores", tipo: "radio", opciones: [0, 1, 2, 3, 4] },
            { key: "collarinAdulto", label: "Collarín adulto", tipo: "radio", opciones: [0, 1, 2] },
            { key: "collarinPediatrico", label: "Collarín pediátrico", tipo: "radio", opciones: [0, 1, 2] },
            { key: "aranaAdulto", label: "Araña adulto", tipo: "radio", opciones: [0, 1, 2] },
            { key: "aranaPediatrica", label: "Araña pediátrica", tipo: "radio", opciones: [0, 1] },
            { key: "tubular", label: "Tubular", tipo: "radio", opciones: [0, 1] },
            { key: "tablaPediatrica", label: "Tabla pediátrica", tipo: "radio", opciones: [0, 1] },
            { key: "bloquesPediatricos", label: "Bloques pediátricos", tipo: "radio", opciones: [0, 1, 2] },
            { key: "inmovilizadorPelvico", label: "Inmovilizador pélvico", tipo: "radio", opciones: [0, 1] },
        ]
    },
    ferulas: {
        titulo: "Férulas y Extracción",
        campos: [
            { key: "ferulasSuperiores", label: "Férulas superiores", tipo: "radio", opciones: [0, 1, 2] },
            { key: "ferulasInferiores", label: "Férulas inferiores", tipo: "radio", opciones: [0, 1, 2] },
            { key: "ferulasTubulares", label: "Férulas neumáticas", tipo: "radio", opciones: [0, 1, 2, 3, 4] },
            { key: "bombaFerulaNeumatica", label: "Bomba férula neumática", tipo: "radio", opciones: [0, 1] },
            { key: "chalecoExtraccion", label: "Chaleco de extracción", tipo: "radio", opciones: [0, 1] },
            { key: "ferulaTraccion", label: "Férula de tracción", tipo: "radio", opciones: [0, 1] },
            { key: "camillaMarina", label: "Camilla marina", tipo: "radio", opciones: [0, 1] },
            { key: "sillaEscaleras", label: "Silla para escaleras", tipo: "radio", opciones: [0, 1] },
            { key: "espatula", label: "Espátula", tipo: "radio", opciones: [0, 1] },
        ]
    },
    carroCamilla: {
        titulo: "Carro Camilla",
        campos: [
            { key: "cinturonesCarroCamilla", label: "Cinturones carro camilla", tipo: "radio", opciones: [0, 1, 2] },
            { key: "mesaCarroCamilla", label: "Mesa para carro camilla", tipo: "radio", opciones: [0, 1] },
            { key: "chalecosNaranjas", label: "Chalecos naranjas", tipo: "radio", opciones: [0, 1, 2, 3, 4] },
        ]
    },
    varios: {
        titulo: "Varios",
        campos: [
            { key: "carbonActivado", label: "Carbón activado", tipo: "radio", opciones: [0, 1] },
            { key: "torunderoAlcohol", label: "Torundero Alcohol", tipo: "radio", opciones: [0, 1] },
            { key: "torunderoJabonQuirurgico", label: "Torundero Jabón quirúrgico", tipo: "radio", opciones: [0, 1] },
            { key: "torunderoYodo", label: "Torundero Yodo", tipo: "radio", opciones: [0, 1] },
            { key: "torundeloBenzal", label: "Torundero Benzal", tipo: "radio", opciones: [0, 1] },
            { key: "cajaPunzos", label: "Caja de Punzos", tipo: "radio", opciones: [0, 1] },
            { key: "ligadura", label: "Ligadura", tipo: "radio", opciones: [0, 1] },
            { key: "estetoscopioAdultoDobleCampana", label: "Estetoscopio adulto o doble campana", tipo: "radio", opciones: [0, 1, 2] },
            { key: "estetoscopioPediatrico", label: "Estetoscopio pediátrico", tipo: "radio", opciones: [0, 1] },
        ]
    },
    ropaCama: {
        titulo: "Ropa de Cama y RPBI",
        campos: [
            { key: "sabanaBlanca", label: "Sábana blanca", tipo: "radio", opciones: [0, 1] },
            { key: "cobertor", label: "Cobertor", tipo: "radio", opciones: [0, 1] },
            { key: "mantaTermicaReutilizable", label: "Manta térmica reutilizable", tipo: "radio", opciones: [0, 1] },
            { key: "contenedorPunzocortante", label: "Contenedor punzocortante", tipo: "radio", opciones: [0, 1] },
            { key: "bolsasRojas", label: "Bolsas rojas", tipo: "radio", opciones: [0, 1, 2] },
            { key: "bolsasAmarillas", label: "Bolsas amarillas", tipo: "radio", opciones: [0, 1, 2] },
        ]
    },
    seguridadRescate: {
        titulo: "Seguridad y Rescate",
        campos: [
            { key: "guiaMaterialesPeligrosos", label: "Guía de materiales peligrosos", tipo: "radio", opciones: [0, 1] },
            { key: "sabanaQuemados", label: "Sábana para quemados", tipo: "radio", opciones: [0, 1] },
            { key: "tarjetasTriage", label: "Tarjetas TRIAGE", tipo: "radio", opciones: [0, 1] },
            { key: "kitTriage", label: "KIT TRIAGE", tipo: "radio", opciones: [0, 1] },
        ]
    },
    bomberos: {
        titulo: "Equipo Bomberos",
        campos: [
            { key: "chaqueton", label: "Chaquetón de bombero", tipo: "radio", opciones: [0, 1] },
            { key: "cascoBombero", label: "Casco de bombero", tipo: "radio", opciones: [0, 1] },
            { key: "herramientaHalligan", label: "Halligan", tipo: "radio", opciones: [0, 1] },
        ]
    },
};

export const MONITOR_DEA_CATEGORIAS = {
    monitor: {
        titulo: "Monitor Cardíaco",
        campos: [
            { key: "monitorCardiaco", label: "Monitor cardíaco", tipo: "checkboxes", opciones: MONITORES_OPCIONES },
            { key: "monitorFunciona", label: "¿Funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "monitorCableAC", label: "Cable de corriente (AC)", tipo: "number" },
            { key: "monitorPaletas", label: "Paletas", tipo: "number" },
            { key: "monitorBrazaleteTA", label: "Brazalete T/A", tipo: "number" },
            { key: "monitorCableBrazaleteTA", label: "Cable Brazalete T/A", tipo: "number" },
            { key: "monitorOximetro", label: "Oxímetro", tipo: "number" },
            { key: "monitorEtCO2", label: "EtCO2", tipo: "number" },
            { key: "monitorCableECG3", label: "Cable ECG 3 puntas", tipo: "number" },
            { key: "monitorCableECG12", label: "Cable ECG 12 puntas", tipo: "number" },
            { key: "monitorGelCondutor", label: "Gel conductor", tipo: "number" },
            { key: "monitorParches", label: "Parches", tipo: "number" },
            { key: "monitorParchesBuenEstado", label: "Estado de parches", tipo: "select", opciones: ["0", "1", "2", "3", "4", "5"] },
            { key: "monitorElectrodos", label: "Electrodos", tipo: "number" },
            { key: "monitorPapelImpresion", label: "Papel de impresión", tipo: "number" },
            { key: "monitorBateria", label: "Baterías", tipo: "number" },
        ]
    },
    dea: {
        titulo: "Desfibrilador Externo Automático (DEA)",
        campos: [
            { key: "deaPresentes", label: "DEA Presentes", tipo: "checkboxes", opciones: DEA_OPCIONES },
            { key: "deaFunciona", label: "¿Funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "deaParches", label: "Parches", tipo: "number" },
            { key: "deaParchesBuenEstado", label: "Estado de parches", tipo: "select", opciones: ["0", "1", "2", "3", "4", "5"] },
            { key: "rastrillo", label: "Rastrillo", tipo: "number" },
        ]
    }
};

export const OBSTETRICIA_ASPIRADOR_CATEGORIAS = {
    obstetricia: {
        titulo: "Obstetricia",
        campos: [
            { key: "dopplerFetal", label: "Doppler Fetal", tipo: "number" },
            { key: "dopplerFunciona", label: "¿Doppler Funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "gelConductor", label: "Gel Conductor", tipo: "number" },
            { key: "estetoscopioPinard", label: "Estetoscopio Pinard", tipo: "number" },
            { key: "kitObstetricoDesechable", label: "Kit obstétrico desechable", tipo: "number" },
            { key: "charolaAcero", label: "Charola de acero", tipo: "number" },
            { key: "tapaChaola", label: "Tapa de charola", tipo: "number" },
            { key: "pinzasUmbilicales", label: "Pinzas umbilicales", tipo: "number" },
            { key: "pinzasRochester", label: "Pinzas rochester", tipo: "number" },
            { key: "onfalotomo", label: "Onfalótomo", tipo: "number" },
            { key: "tijeraMayo", label: "Tijera Mayo", tipo: "number" },
            { key: "perillaAspiracion", label: "Perilla de aspiración", tipo: "number" },
        ]
    },
    aspirador: {
        titulo: "Aspirador",
        campos: [
            { key: "aspiradorPortatil", label: "Aspirador portátil", tipo: "number" },
            { key: "aspiradorFunciona", label: "¿Aspirador funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "vasoAspirador", label: "Vaso aspirador", tipo: "number" },
            { key: "manguera", label: "Manguera", tipo: "number" },
            { key: "canulaYankauer", label: "Cánula yankauer", tipo: "number" },
            { key: "sondaBlanda", label: "Sonda blanda", tipo: "number" },
        ]
    },
    sanitario: {
        titulo: "Sanitario y Desinfección",
        campos: [
            { key: "rinon", label: "Riñón", tipo: "number" },
            { key: "comodo", label: "Cómodo", tipo: "number" },
            { key: "patoOrinal", label: "Pato orinal", tipo: "number" },
            { key: "boteBasura", label: "Bote de basura", tipo: "number" },
            { key: "desinfectanteManos", label: "Desinfectante de manos", tipo: "number" },
            { key: "desinfectanteSuperficies", label: "Desinfectante de superficies", tipo: "number" },
        ]
    }
};

export const TRAUMA_CATEGORIAS = {
    medicamentos: {
        titulo: "Medicamentos",
        campos: [
            { key: "cajaMedicamentos", label: "Módulo con medicamentos", tipo: "number" },
        ]
    },
    termometros: {
        titulo: "Termómetros",
        campos: [
            { key: "termometroOral", label: "Termómetro Oral", tipo: "number" },
            { key: "termometroRectal", label: "Termómetro Rectal", tipo: "number" },
            { key: "termometroDigital", label: "Termómetro Digital", tipo: "number" },
            { key: "termometroInfrarrojo", label: "Termómetro Infrarrojo", tipo: "number" },
            { key: "termometroInfrarrojFunciona", label: "¿Termómetro Infrarrojo funciona?", tipo: "select", opciones: ["Si", "No"] },
        ]
    },
    signosVitales: {
        titulo: "Signos Vitales",
        campos: [
            { key: "glucometro", label: "Glucómetro", tipo: "number" },
            { key: "glucometroFunciona", label: "¿Glucómetro funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "pulsoximetro", label: "Pulsioxímetro", tipo: "number" },
            { key: "pulsoximetroFunciona", label: "¿Pulsioxímetro funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "baumanometroAdulto", label: "Baumanómetro Adulto", tipo: "number" },
            { key: "baumanometroAdultoFunciona", label: "¿Baumanómetro Adulto funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "estetoscopioAdulto", label: "Estetoscopio Adulto", tipo: "number" },
            { key: "baumanometroPediatrico", label: "Baumanómetro Pediátrico", tipo: "number" },
            { key: "baumanometroPediatricoFunciona", label: "¿Baumanómetro Pediátrico funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "brazaletesPediatricos", label: "Brazaletes pediátricos", tipo: "checkboxes", opciones: ["Chico", "Mediano", "Grande"] },
        ]
    },
    curacion: {
        titulo: "Curación y Control",
        campos: [
            { key: "torunderoAlcohol", label: "Torundero Alcohol", tipo: "number" },
            { key: "torunderoJabonQuirurgico", label: "Torundero Jabón Quirúrgico", tipo: "number" },
            { key: "torunderoYodo", label: "Torundero Yodo", tipo: "number" },
            { key: "torundeloBenzal", label: "Torundero Benzal", tipo: "number" },
            { key: "electrolitosOrales", label: "Electrolitos orales", tipo: "number" },
            { key: "cintaBlanca", label: "Cinta blanca", tipo: "number" },
            { key: "cintaMicropor", label: "Cinta micropor", tipo: "number" },
            { key: "cloruroEtilo", label: "Cloruro de etilo", tipo: "number" },
            { key: "cajaPunzos", label: "Caja de Punzos", tipo: "number" },
            { key: "ligadura", label: "Ligadura", tipo: "number" },
            { key: "torniquete", label: "Torniquete", tipo: "number" },
            { key: "botiquinPrimerRespondiente", label: "Botiquín Primer Respondiente", tipo: "number" },
        ]
    }
};

export const BOTIQUIN_PR_CATEGORIAS = {
    general: {
        titulo: "Botiquín Primer Respondiente",
        campos: [
            { key: "unidadCorresponde", label: "Unidad correspondiente", tipo: "select", opciones: UNIDADES_BOTIQUIN },
            { key: "baumanometroAdulto", label: "Baumanómetro Adulto", tipo: "number" },
            { key: "baumanometroFunciona", label: "¿Baumanómetro funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "estetoscopioAdulto", label: "Estetoscopio Adulto", tipo: "number" },
            { key: "ferulaSAM", label: "Férula SAM", tipo: "number" },
            { key: "pulsoximetro", label: "Pulsioxímetro", tipo: "number" },
            { key: "pulsoximetroFunciona", label: "¿Pulsioxímetro funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "glucometro", label: "Glucómetro", tipo: "number" },
            { key: "glucometroFunciona", label: "¿Glucómetro funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "torunderoAlcohol", label: "Torundero Alcohol", tipo: "number" },
            { key: "torunderoJabon", label: "Torundero Jabón", tipo: "number" },
            { key: "mascarillaFiltro", label: "Mascarilla con filtro", tipo: "number" },
            { key: "canulaOrofaringea", label: "Cánula Orofaringea", tipo: "number" },
            { key: "canulaNasofaringea", label: "Cánula Nasofaringea", tipo: "number" },
            { key: "cintaBlanca", label: "Cinta blanca", tipo: "number" },
            { key: "torniquete", label: "Torniquete", tipo: "number" },
            { key: "ligadura", label: "Ligadura", tipo: "number" },
        ]
    }
};

export const VIA_AEREA_CATEGORIAS = {
    oxigenoterapia: {
        titulo: "Oxigenoterapia",
        campos: [
            { key: "puntasNasalesAdulto", label: "Puntas Nasales Adulto", tipo: "boolean" },
            { key: "puntasNasalesPediatrico", label: "Puntas Nasales Pediátrico", tipo: "boolean" },
            { key: "mascarillaSimpleAdulto", label: "Mascarilla Simple Adulto", tipo: "boolean" },
            { key: "mascarillaSimplePediatrico", label: "Mascarilla Simple Pediátrico", tipo: "boolean" },
            { key: "mascarillaReservorioAdulto", label: "Mascarilla Reservorio Adulto", tipo: "boolean" },
            { key: "mascarillaReservorioPediatrico", label: "Mascarilla Reservorio Pediátrico", tipo: "boolean" },
        ]
    },
    bvm: {
        titulo: "BVM y Mascarillas",
        campos: [
            { key: "bvmNeonato", label: "BVM Neonato", tipo: "boolean" },
            { key: "bvmPediatrico", label: "BVM Pediátrico", tipo: "boolean" },
            { key: "bvmAdulto", label: "BVM Adulto", tipo: "boolean" },
            { key: "mascarillaTransparenteAdultoGrande", label: "Masc. Transparente Adulto Gde", tipo: "boolean" },
            { key: "mascarillaTransparenteAdulto", label: "Masc. Transparente Adulto", tipo: "boolean" },
            { key: "mascarillaTransparentePediatrica", label: "Masc. Transparente Pediátrica", tipo: "boolean" },
            { key: "mascarillaTransparenteNeonato", label: "Masc. Transparente Neonato", tipo: "boolean" },
            { key: "conectores", label: "Conectores", tipo: "number" },
        ]
    },
    canulasTanques: {
        titulo: "Cánulas y Tanques",
        campos: [
            { key: "canulasOrofaringeas", label: "Cánulas Orofaríngeas", tipo: "number" },
            { key: "canulasNasofaringeas", label: "Cánulas Nasofaríngeas", tipo: "number" },
            { key: "tanquePortatil", label: "Tanque Portátil", tipo: "number" },
            { key: "tanqueFijo", label: "Tanque Fijo", tipo: "number" },
        ]
    },
    moduloNegro: {
        titulo: "Módulo Negro / Nebulización",
        campos: [
            { key: "filtroBvm", label: "Filtro BVM", tipo: "number" },
            { key: "salbutamol", label: "Salbutamol", tipo: "number" },
            { key: "salbutamolCaduco", label: "¿Salbutamol Caduco?", tipo: "select", opciones: ["Si está caduco", "No está caduco"] },
            { key: "aerocamaraCamara", label: "Aerocámara Cámara", tipo: "number" },
            { key: "aerocamaraMascarilla", label: "Aerocámara Mascarilla", tipo: "number" },
        ]
    },
    intubacion: {
        titulo: "Intubación",
        campos: [
            { key: "mangoLaringoscopio", label: "Mango Laringoscopio", tipo: "number" },
            { key: "laringoscopioFunciona", label: "¿Laringoscopio Funciona?", tipo: "select", opciones: ["Si", "No"] },
            { key: "pilas", label: "Pilas", tipo: "number" },
            { key: "lubricante", label: "Lubricante", tipo: "number" },
            { key: "hojasRectas", label: "Hojas Rectas", tipo: "number" },
            { key: "hojasCurvas", label: "Hojas Curvas", tipo: "number" },
            { key: "estileteAdulto", label: "Estilete Adulto", tipo: "number" },
            { key: "estiletePediatrico", label: "Estilete Pediátrico", tipo: "number" },
            { key: "pinzasMagillAdulto", label: "Pinzas Magill Adulto", tipo: "number" },
            { key: "pinzasMagillPediatrico", label: "Pinzas Magill Pediátrico", tipo: "number" },
            { key: "mascarillasLaringeas", label: "Mascarillas Laríngeas", tipo: "text" },
            { key: "tuboBougies", label: "Tubo Bougies", tipo: "number" },
            { key: "bougie", label: "Bougie", tipo: "number" },
        ]
    }
};

export const MECANICA_CATEGORIAS = {
    general: {
        titulo: "General",
        campos: [
            { key: "tablaPartes", label: "Tabla de partes", tipo: "number" },
        ]
    },
    herramientas: {
        titulo: "Herramientas",
        campos: [
            { key: "llaves", label: "Llaves", tipo: "number" },
            { key: "equipoHerramientasMano", label: "Equipo herramientas de mano", tipo: "number" },
            { key: "equipoSellado", label: "¿Equipo sellado?", tipo: "select", opciones: ["Si", "No"] },
            { key: "triangulosConos", label: "Triángulos / Conos", tipo: "number" },
            { key: "llaveCruz", label: "Llave de cruz", tipo: "number" },
            { key: "neumaticoRefaccion", label: "Neumático de refacción", tipo: "number" },
            { key: "gatoHidraulico", label: "Gato hidráulico", tipo: "number" },
            { key: "cablesPasaCorriente", label: "Cables pasa corriente", tipo: "number" },
        ]
    },
    seguridad: {
        titulo: "Seguridad",
        campos: [
            { key: "extintor", label: "Extintor", tipo: "number" },
            { key: "extintorCargadoSeguro", label: "¿Extintor cargado y con seguro?", tipo: "select", opciones: ["Si", "No"] },
            { key: "lamparaPortatil", label: "Lámpara portátil", tipo: "number" },
            { key: "lamparaFunciona", label: "¿Lámpara funciona?", tipo: "select", opciones: ["Si", "No"] },
        ]
    }
};

// Pasos del formulario actualizado
export const FORM_STEPS = [
    { id: 1, title: "Datos Generales", description: "Identificación y personal" },
    { id: 2, title: "Ambulancia", description: "Equipamiento general de la ambulancia" },
    { id: 3, title: "Monitor / DEA", description: "Equipo cardíaco" },
    { id: 4, title: "Obstetricia / Aspirador", description: "Equipo obstétrico y aspiración" },
    { id: 5, title: "Botiquín Trauma", description: "Medicamentos y signos vitales" },
    { id: 6, title: "Botiquín Primer Resp.", description: "Botiquín primer respondiente" },
    { id: 7, title: "Vía Aérea", description: "Oxigenoterapia e intubación" },
    { id: 8, title: "Unidad / Mecánica", description: "Herramientas y seguridad vehicular" },
];
