import { Timestamp } from "firebase/firestore";

// Datos Generales - Sección 1
export interface IChecklistGeneral {
    unidad: string;
    guardia: string;
    nombreEncargado: string;
    motivo: string;
}

// Equipamiento General - Sección 2
export interface IChecklistEquipamiento {
    // Inmovilización y Traslado
    camillaRigida: number;
    baseBloques: number;
    bloquesIndividuales: number;
    sujetadoresAranas: number;
    tablaPediatrica: number;
    camillaMarina: number;
    
    // Collarines
    collarinAdulto: number;
    collarinPediatrico: number;
    
    // Arañas
    aranaAdulto: number;
    aranaPediatrica: number;
    
    // Férulas
    ferulasSuperiores: number;
    ferulasInferiores: number;
    ferulaTraccion: number;
    
    // Extracción
    chalecoExtraccion: number;
    sillaEscaleras: number;
    
    // Carro Camilla
    cinturonesCarroCamilla: number;
    mesaCarroCamilla: number;
    
    // Torunderos
    torunderoAlcohol: number;
    torunderoJabonQuirurgico: number;
    torunderoYodo: number;
    torundeloBenzal: number;
    
    // Varios Diagnóstico
    carbonActivado: number;
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
    
    // Equipo COVID
    kitCovid: number;
    goggleTransparentes: number;
    
    // Seguridad y Rescate
    guiaMaterialesPeligrosos: number;
    tarjetasTriage: number;
    sabanaQuemados: number;
    
    // Cascos por color
    cascosBlancos: number;
    cascosNegros: number;
    cascosRojos: number;
    cascosAmarillos: number;
    cascosAzules: number;
    
    // Bomberos
    chaqueton: number;
    cascoBombero: number;
    herramientaHalligan: number;
    
    // Equipo Cardíaco
    monitorCecom: number;
    deaZollA: number;
    deaZollB: number;
    deaAmarillo: number;
    deaPowerheartVerde: number;
    deaPowerheartNaranja: number;
    deaFirstSave: number;
    
    // Obstetricia
    dopplerFetal: number;
    estetoscopioPinard: number;
    kitObstetricoDesechable: number;
    
    // Sanitario
    rastrillo: number;
    aspiradorPortatil: number;
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
    // Medicamentos
    paracetamol: number;
    aspirina: number;
    ketorolaco: number;
    epinefrina: number;
    
    // Termómetros
    termometroOral: number;
    termometroRectal: number;
    termometroDigital: number;
    termometroInfrarrojo: number;
    
    // Signos Vitales
    glucometro: number;
    pulsoximetro: number;
    baumanometroAdulto: number;
    baumanometroPediatrico: number;
    estetoscopio: number;
    
    // Curación
    torunderoAlcohol: number;
    torunderoJabon: number;
    torunderoYodo: number;
    torundeloBenzal: number;
    cintaBlanca: number;
    cintaMicropor: number;
    cloruroEtilo: number;
    cajaPunzos: number;
    
    // Control de Hemorragias
    ligadura: number;
    torniquete: number;
    
    // Otros
    electrolitosOrales: number;
    botiquinPrimerRespondiente: number;
}

// Botiquín de Vía Aérea - Sección 4
export interface IChecklistViaAerea {
    // Oxigenoterapia
    puntasNasalesAdulto: number;
    puntasNasalesPediatrico: number;
    mascarillaSimpleAdulto: number;
    mascarillaSimplePediatrico: number;
    mascarillaReservorioAdulto: number;
    mascarillaReservorioPediatrico: number;
    
    // BVM
    bvmNeonato: number;
    bvmPediatrico: number;
    bvmAdulto: number;
    mascarillasTransparentes: number;
    conectoresBvm: number;
    filtroBvm: number;
    
    // Cánulas
    canulasOrofaringeas: number;
    canulasNasofaringeas: number;
    
    // Tanques O2
    tanquePortatil: number;
    tanqueFijo: number;
    
    // Nebulización
    salbutamol: number;
    aerocamaraMascarilla: number;
    
    // Laringoscopio
    mangoLaringoscopio: number;
    pilasLaringoscopio: number;
    hojasRectas: number;
    hojasCurvas: number;
    
    // Accesorios Intubación
    lubricante: number;
    estileteAdulto: number;
    estiletePediatrico: number;
    pinzasMagillAdulto: number;
    pinzasMagillPediatrico: number;
    mascarillaLaringea1_5: number;
    mascarillaLaringea2: number;
    mascarillaLaringea2_5: number;
    mascarillaLaringea3: number;
    mascarillaLaringea4: number;
    mascarillaLaringea5: number;
    tuboBougies: number;
}

// Mecánica y Seguridad - Sección 5
export interface IChecklistMecanica {
    // General
    tablaPartes: number;
    
    // Herramientas
    llaves: number;
    equipoHerramientasMano: number;
    llaveCruz: number;
    gatoHidraulico: number;
    
    // Seguridad Vial
    triangulosConos: number;
    cablesPasaCorriente: number;
    extintor: number;
    lamparaPortatilEmergencia: number;
    
    // Neumáticos
    neumaticoRefaccion: number;
}

// Checklist Completo
export interface IChecklistCompleto {
    id?: string;
    fechaCreacion: Timestamp | Date;
    datosGenerales: IChecklistGeneral;
    equipamiento: IChecklistEquipamiento;
    botiquinTrauma: IChecklistTrauma;
    viaAerea: IChecklistViaAerea;
    mecanica: IChecklistMecanica;
}

// Estado del formulario
export interface IChecklistFormState {
    currentStep: number;
    datosGenerales: IChecklistGeneral;
    equipamiento: IChecklistEquipamiento;
    botiquinTrauma: IChecklistTrauma;
    viaAerea: IChecklistViaAerea;
    mecanica: IChecklistMecanica;
    isSubmitting: boolean;
    isCompleted: boolean;
}

