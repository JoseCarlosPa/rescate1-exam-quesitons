import { Timestamp } from "firebase/firestore";

// Datos Generales - Sección 1
export interface IChecklistGeneral {
    unidad: string;
    guardia: string;
    fechaHora: string;
    nombreEncargado: string;
    apellidoEncargado: string;
    motivo: string;
}

// Ambulancia - Sección 2 (reemplaza "Equipamiento")
export interface IChecklistAmbulancia {
    // Inmovilización y Traslado
    camillaRigida: number;
    baseBloques: number;
    bloques: number;
    sujetadores: number;
    collarinAdulto: number;
    collarinPediatrico: number;
    aranaAdulto: number;
    aranaPediatrica: number;
    tubular: number;
    tablaPediatrica: number;
    bloquesPediatricos: number;
    inmovilizadorPelvico: number;

    // Férulas
    ferulasSuperiores: number;
    ferulasInferiores: number;
    ferulasTubulares: number; // Férulas neumáticas
    bombaFerulaNeumatica: number;
    chalecoExtraccion: number;
    ferulaTraccion: number;
    camillaMarina: number;
    sillaEscaleras: number;
    espatula: number;

    // Carro Camilla
    cinturonesCarroCamilla: number;
    mesaCarroCamilla: number;

    // Seguridad y Rescate
    chalecosNaranjas: number;

    // Varios
    carbonActivado: number;
    torunderoAlcohol: number;
    torunderoJabonQuirurgico: number;
    torunderoYodo: number;
    torundeloBenzal: number;
    cajaPunzos: number;
    ligadura: number;

    // Estetoscopios
    estetoscopioAdultoDobleCampana: number;
    estetoscopioPediatrico: number;

    // Ropa de cama
    sabanaBlanca: number;
    cobertor: number;
    mantaTermicaReutilizable: number;

    // RPBI
    contenedorPunzocortante: number;
    bolsasRojas: number;
    bolsasAmarillas: number;

    // Equipo COVID (checkboxes)
    kitCovidTrajesTyvek: boolean;
    kitCovidBotas: boolean;
    kitCovidGuantes: boolean;
    kitCovidN95: boolean;
    kitCovidNinguno: boolean;
    goggleTransparentes: number;

    // Seguridad y Rescate
    guiaMaterialesPeligrosos: number;
    sabanaQuemados: number;
    tarjetasTriage: number;
    kitTriage: number;

    // Cascos
    cascosCantidad: number;
    casco4BlancosPresentes: string; // Si/No
    casco9NegrosPresentes: string; // Si/No
    casco11RojosPresentes: string; // Si/No
    casco12AmarillosPresentes: string; // Si/No
    casco13AzulesPresentes: string; // Si/No
    cascosColorAlternativo: string;

    // Bomberos
    chaqueton: number;
    cascoBombero: number;
    herramientaHalligan: number;

    // Monitor (multi-select)
    monitorCardiaco: string[]; // Monitor Zoll 1, Monitor Zoll 3, Monitor Lifepack
    monitorFunciona: string; // Si/No
    monitorCableAC: number;
    monitorPaletas: number;
    monitorBrazaleteTA: number;
    monitorCableBrazaleteTA: number;
    monitorOximetro: number;
    monitorEtCO2: number;
    monitorCableECG3: number;
    monitorCableECG12: number;
    monitorGelCondutor: number;
    monitorParches: number;
    monitorParchesBuenEstado: string; // rating 0-5
    monitorElectrodos: number;
    monitorPapelImpresion: number;
    monitorBateria: number;

    // DEA (multi-select)
    deaPresentes: string[]; // DEA ZOLL-A, DEA ZOLL-B, DEA AMARILLO, DEA POWER HEART VERDE, DEA POWERHEART NARANJA
    deaFunciona: string; // Si/No
    deaParches: number;
    deaParchesBuenEstado: string; // rating 0-5

    // Rastrillo
    rastrillo: number;

    // Obstetricia
    dopplerFetal: number;
    dopplerFunciona: string; // Si/No
    gelConductor: number;
    estetoscopioPinard: number;
    kitObstetricoDesechable: number;
    charolaAcero: number;
    tapaChaola: number;
    pinzasUmbilicales: number;
    pinzasRochester: number;
    onfalotomo: number;
    tijeraMayo: number;
    perillaAspiracion: number;

    // Aspirador portátil
    aspiradorPortatil: number;
    aspiradorFunciona: string; // Si/No
    vasoAspirador: number;
    manguera: number;
    canulaYankauer: number;
    sondaBlanda: number;

    // Sanitario
    rinon: number;
    comodo: number;
    patoOrinal: number;
    boteBasura: number;

    // Desinfección
    desinfectanteManos: number;
    desinfectanteSuperficies: number;
}

// Botiquín de Trauma - Sección 3
export interface IChecklistTrauma {
    cajaMedicamentos: number; // Módulo con medicamentos

    // Termómetros
    termometroOral: number;
    termometroRectal: number;
    termometroDigital: number;
    termometroInfrarrojo: number;
    termometroInfrarrojFunciona: string; // Si/No

    // Signos Vitales
    glucometro: number;
    glucometroFunciona: string; // Si/No
    pulsoximetro: number;
    pulsoximetroFunciona: string; // Si/No
    baumanometroAdulto: number;
    baumanometroAdultoFunciona: string; // Si/No
    estetoscopioAdulto: number;
    baumanometroPediatrico: number;
    baumanometroPediatricoFunciona: string; // Si/No
    brazaletesPediatricos: string[]; // Chico, Mediano, Grande

    // Curación
    torunderoAlcohol: number;
    torunderoJabonQuirurgico: number;
    torunderoYodo: number;
    torundeloBenzal: number;
    electrolitosOrales: number;
    cintaBlanca: number;
    cintaMicropor: number;
    cloruroEtilo: number;
    cajaPunzos: number;

    // Control de Hemorragias
    ligadura: number;
    torniquete: number;

    // Otros
    botiquinPrimerRespondiente: number;
}

// Botiquín Primer Respondiente - Sección 4
export interface IChecklistBotiquinPR {
    unidadCorresponde: string; // A-10, A-11, A-12, A-13
    baumanometroAdulto: number;
    baumanometroFunciona: string; // Si/No
    estetoscopioAdulto: number;
    ferulaSAM: number;
    pulsoximetro: number;
    pulsoximetroFunciona: string; // Si/No
    glucometro: number;
    glucometroFunciona: string; // Si/No
    torunderoAlcohol: number;
    torunderoJabon: number;
    mascarillaFiltro: number;
    canulaOrofaringea: number;
    canulaNasofaringea: number;
    cintaBlanca: number;
    torniquete: number;
    ligadura: number;
}

// Botiquín de Vía Aérea - Sección 5
export interface IChecklistViaAerea {
    // Oxigenoterapia (checkboxes)
    puntasNasalesAdulto: boolean;
    puntasNasalesPediatrico: boolean;
    mascarillaSimpleAdulto: boolean;
    mascarillaSimplePediatrico: boolean;
    mascarillaReservorioAdulto: boolean;
    mascarillaReservorioPediatrico: boolean;

    // BVM (checkboxes)
    bvmNeonato: boolean;
    bvmPediatrico: boolean;
    bvmAdulto: boolean;

    // Mascarillas transparentes BVM (checkboxes)
    mascarillaTransparenteAdultoGrande: boolean;
    mascarillaTransparenteAdulto: boolean;
    mascarillaTransparentePediatrica: boolean;
    mascarillaTransparenteNeonato: boolean;

    // Conectores
    conectores: number;

    // Cánulas (dropdown count)
    canulasOrofaringeas: number;
    canulasNasofaringeas: number;

    // Tanques O2
    tanquePortatil: number;
    tanqueFijo: number;

    // Módulo negro
    filtroBvm: number;
    salbutamol: number;
    salbutamolCaduco: string; // Si está caduco / No está caduco
    aerocamaraCamara: number;
    aerocamaraMascarilla: number;

    // Intubación
    mangoLaringoscopio: number;
    laringoscopioFunciona: string; // Si/No
    pilas: number;
    lubricante: number;
    hojasRectas: number;
    hojasCurvas: number;
    estileteAdulto: number;
    estiletePediatrico: number;
    pinzasMagillAdulto: number;
    pinzasMagillPediatrico: number;
    mascarillasLaringeas: string; // "NO HAY" o descripción
    tuboBougies: number;
    bougie: number;
}

// Mecánica/Unidad - Sección 6
export interface IChecklistMecanica {
    // General
    tablaPartes: number;

    // Herramientas
    llaves: number;
    equipoHerramientasMano: number;
    equipoSellado: string; // Si/No
    triangulosConos: number;
    llaveCruz: number;
    neumaticoRefaccion: number;
    gatoHidraulico: number;
    cablesPasaCorriente: number;

    // Seguridad
    extintor: number;
    extintorCargadoSeguro: string; // Si/No
    lamparaPortatil: number;
    lamparaFunciona: string; // Si/No
}

// Checklist Completo
export interface IChecklistCompleto {
    id?: string;
    fechaCreacion: Timestamp | Date;
    datosGenerales: IChecklistGeneral;
    ambulancia: IChecklistAmbulancia;
    botiquinTrauma: IChecklistTrauma;
    botiquinPrimerRespondiente: IChecklistBotiquinPR;
    viaAerea: IChecklistViaAerea;
    mecanica: IChecklistMecanica;
}

// Estado del formulario
export interface IChecklistFormState {
    currentStep: number;
    datosGenerales: IChecklistGeneral;
    ambulancia: IChecklistAmbulancia;
    botiquinTrauma: IChecklistTrauma;
    botiquinPrimerRespondiente: IChecklistBotiquinPR;
    viaAerea: IChecklistViaAerea;
    mecanica: IChecklistMecanica;
    isSubmitting: boolean;
    isCompleted: boolean;
}
