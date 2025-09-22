import {LessonConfig} from "./AdminDashboard.types.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";

export const initialLessons: LessonConfig[] = [
    {id: 1, name: "Examen General", enabled: true, route: AllRoutes.GENERAL},
    {id: 2, name: "Aspectos Legales", enabled: true, route: AllRoutes.LEGAL},
    {id: 3, name: "Comunicaciones", enabled: true, route: AllRoutes.COMMUNICATIONS},
    {id: 4, name: "Sistema SEM", enabled: true, route: AllRoutes.SEM},
    {id: 5, name: "Seguridad del Personal", enabled: true, route: AllRoutes.SECURITY_OF_PERSONAL},
    {id: 6, name: "Términos Médicos", enabled: true, route: AllRoutes.MEDIC_TERMS},
    {id: 7, name: "Cuerpo Humano", enabled: true, route: AllRoutes.HUMAN_BODY},
    {id: 8, name: "Desarrollo y Esperanza de Vida", enabled: true, route: AllRoutes.LIFE_SPEC},
    {id: 9, name: "Evaluación del Paciente", enabled: true, route: AllRoutes.EVALUATION},
    {id: 10, name: "Mnemotecnias", enabled: true, route: AllRoutes.MNEMOTECNIAS},
    {id: 11, name: "Manejo de Vía Aérea", enabled: true, route: AllRoutes.AIRWAY_MANAGE},
    {id: 12, name: "Farmacología", enabled: true, route: AllRoutes.PHARMACOLOGY},
    {id: 13, name: "Administración de Medicamentos", enabled: true, route: AllRoutes.MED_ADMIN},
    {id: 14, name: "Shock", enabled: true, route: AllRoutes.SHOCK},
    {id: 15, name: "Reanimación SVB", enabled: true, route: AllRoutes.REANIMATE_SVB},
    {id: 16, name: "Código Mega", enabled: true, route: AllRoutes.MEGA},
    {id: 17, name: "Visión Médica General", enabled: true, route: AllRoutes.MEDIC_VISION},
    {id: 18, name: "Emergencias Respiratorias", enabled: true, route: AllRoutes.AIRWAY_EMERGENCY},
    {id: 19, name: "Emergencias Cardiovasculares", enabled: true, route: AllRoutes.CARDIO_EMERGENCY},
    {id: 20, name: "Emergencias Neurológicas", enabled: true, route: AllRoutes.NEURO_EMERGENCY}
    , {id: 21, name: "Emergencias Gastrointestinales", enabled: true, route: AllRoutes.GASTRO_EMERGENCY}
    , {id: 22, name: "Emergencias Endocrinológicas", enabled: true, route: AllRoutes.ENDOCRINE_EMERGENCY}
    , {id: 23, name: "Trauma", enabled: true, route: AllRoutes.TRAUMA}
    , {id: 24, name: "Inmovilización", enabled: true, route: AllRoutes.IMMOBILIZATION}
    , {id: 25, name: "Hemorragias", enabled: true, route: AllRoutes.BLEEDING}
    , {id: 27, name: "Lesiones de Cara y Cuello", enabled: true, route: AllRoutes.FACE_AND_NECK}
    , {id: 27, name: "Lesiones de Tejidos Blandos", enabled: true, route: AllRoutes.SOFT_TISSUE}
    , {id: 28, name: "Lesiones de Cabeza y Columna", enabled: true, route: AllRoutes.HEAD_AND_COLUMN_INJURIES}
    , {id: 30, name: "Lesiones de Tórax", enabled: true, route: AllRoutes.TORAX_INJURIES}
    , {id: 31, name: "Lesiones Ortopedicas", enabled: true, route: AllRoutes.FEET_INJURIES}
    , {id: 32, name: "Lesiones Abdominales y Genitourinarias", enabled: true, route: AllRoutes.ABDO_GENI_INJURIES}
    , {id: 33, name: "Emergencias Inmunológicas", enabled: true, route: AllRoutes.INMUNO_EMERGENCY}
    , {id: 34, name: "Toxicología", enabled: true, route: AllRoutes.TOXICOLOGY}
    , {id: 35, name: "Emergencias Ambientales", enabled: true, route: AllRoutes.AMBIENTAL_EMERGENCIES}
    , {id: 36, name: "Emergencia Psiquiátrica", enabled: true, route: AllRoutes.PSIQUIATRIC_EMERGENCY}
    , {id: 37, name: "Emergencia Ginecológica", enabled: true, route: AllRoutes.GINE_EMERGENCY}
    , {id: 38, name: "Atención Obstétrica", enabled: true, route: AllRoutes.OBSTETRIC_CARE}
    , {id: 39, name: "Emergencias Pediátricas", enabled: true, route: AllRoutes.PEDIATRIC_EMERGENCIES}
    , {id: 40, name: "Emergencias Geriátricas", enabled: true, route: AllRoutes.GERIATRIC_EMERGENCIES}
    , {id: 41, name: "Paciente con Necesidades Especiales", enabled: true, route: AllRoutes.SPECIAL_NEEDS_PACIENT}
    , {id: 42, name: "Transporte y Operaciones", enabled: true, route: AllRoutes.TRANSPORT_OPERATIONS}
    , {id: 43, name: "Manejo de Incidentes", enabled: true, route: AllRoutes.INCIDENT_MANAGEMENT}
    , {id: 44, name: "Manejo en Situaciones Terroristas", enabled: true, route: AllRoutes.TERRORIST_MANAGEMENT}
];