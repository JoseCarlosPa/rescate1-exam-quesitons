import {
    FaAmbulance,
    FaBaby,
    FaBacteria,
    FaBomb,
    FaBookMedical,
    FaCarCrash,
    FaChild,
    FaFireAlt,
    FaHandHoldingMedical,
    FaHeadSideMask,
    FaNotesMedical,
    FaQrcode,
    FaWineBottle
} from "react-icons/fa";
import {AllRoutes} from "./components/Router/Router.constants.ts";
import {IoIosBody, IoMdBriefcase} from "react-icons/io";
import {LuRadioTower} from "react-icons/lu";
import {GiMedicines, GiMorgueFeet, GiProtectionGlasses, GiStomach, GiTrenchBodyArmor} from "react-icons/gi";
import {RxLetterSpacing} from "react-icons/rx";
import {TbBodyScan, TbDisabled, TbMedicalCrossCircle} from "react-icons/tb";
import {CiMedicalCross} from "react-icons/ci";
import {FaHeartPulse, FaMaskVentilator, FaPersonCane, FaTruckMedical} from "react-icons/fa6";
import {RiBrain2Fill} from "react-icons/ri";
import {MdBloodtype, MdFace6, MdOutlineFireTruck} from "react-icons/md";
import {BsSignStopFill} from "react-icons/bs";
import {SiSpine} from "react-icons/si";
import {PiBabyBold, PiBrainFill} from "react-icons/pi";
import {AiOutlineWoman} from "react-icons/ai";
import {GrTest} from "react-icons/gr";

export type tLection = {
    id: string,
    title: string,
    icon: React.ReactNode,
    route: string,
    active?: boolean,
    grade?: number,
    key: string

}


export const lections: tLection[] = [
    {
        id: '1',
        title: 'Generar Examen',
        icon: <GrTest className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.GENERAL,
        active: true,
        key: 'general-exam',
    },
    {
        id: '2',
        title: 'Aspectos médicos, legales y éticos',
        icon: <IoMdBriefcase className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.LEGAL,
        active: true,
        key: 'legal-aspects',
    },
    {
        id: '3',
        title: 'Comunicaciones y documentación',
        icon: <LuRadioTower className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.COMMUNICATIONS,
        active: true,
        key: 'communications',
    },
    {
        id: '4',
        title: 'Sistemas de SEM',
        icon: <FaAmbulance className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.SEM,
        active: true,
        key: 's-e-m',
    },
    {
        id: '5',
        title: 'Seguridad y bienestar del personal',
        icon: <GiProtectionGlasses className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.SECURITY_OF_PERSONAL,
        active: true,
        key: 'security-of-personal',
    },
    {
        id: '6',
        title: 'Terminología médica',
        icon: <FaBookMedical className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.MEDIC_TERMS,
        active: true,
        key: 'medic-terms',
    },
    {
        id: '7',
        title: 'El cuerpo humano',
        icon: <IoIosBody className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.HUMAN_BODY,
        active: true,
        key: 'human-body',
    },
    {
        id: '8',
        title: 'Desarrollo de la esperanza de vida',
        icon: <FaBaby className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.LIFE_SPEC,
        active: true,
        key: 'life-spec',
    },
    {
        id: '9',
        title: 'Evaluación del paciente',
        icon: <FaNotesMedical className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.EVALUATION,
        active: true,
        key: 'evaluation',
    },
    {
        id: '10',
        title: 'Nemotecnias',
        icon: <RxLetterSpacing className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.MNEMOTECNIAS,
        active: true,
        key: 'nnemotecnias',
    },
    {
        id: '11',
        title: 'Manejo de la vía aérea',
        icon: <FaHeadSideMask className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.AIRWAY_MANAGE,
        active: true,
        key: 'airway-manage',
    },
    {
        id: '12',
        title: 'Principios de farmacología',
        icon: <GiMedicines className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.PHARMACOLOGY,
        active: true,
        key: 'pharmacology',
    },
    {
        id: '13',
        title: 'Administración medicamentos',
        icon: <IoMdBriefcase className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.MED_ADMIN,
        active: true,
        key: 'med-admin',
    },
    {
        id: '14',
        title: 'Shock',
        icon: <TbMedicalCrossCircle className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.SHOCK,
        active: true,
        key: 'shock',
    },
    {
        id: '15',
        title: 'Reanimación de SVB',
        icon: <FaHandHoldingMedical className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.REANIMATE_SVB,
        active: true,
        key: 'reanima-svb',
    },
    {
        id: '16',
        title: 'CÓDIGO MEGA',
        icon: <FaQrcode className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.MEGA,
        active: true,
        key: 'codigo-mega',
    },
    {
        id: '17',
        title: 'Visión médica general',
        icon: <CiMedicalCross className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.MEDIC_VISION,
        active: true,
        key: 'medic-vision',
    },
    {
        id: '18',
        title: 'Emergencias respiratorias',
        icon: <FaMaskVentilator className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.AIRWAY_EMERGENCY,
        active: true,
        key: 'airway-emergency',
    },
    {
        id: '19',
        title: 'Emergencias cardiovasculares',
        icon: <FaHeartPulse className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.CARDIO_EMERGENCY,
        active: true,
        key: 'cardio-emergency',
    },
    {
        id: '20',
        title: 'Emergencias neurológicas',
        icon: <RiBrain2Fill className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.NEURO_EMERGENCY,
        active: true,
        key: 'neuro-emergency',
    },
    {
        id: '21',
        title: 'Emergencias gastrointestinales y urológicas',
        icon: <GiStomach className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.GASTRO_EMERGENCY,
        active: true,
        key: 'gastro-emergency',
    },
    {
        id: '22',
        title: 'Emergencias endocrinas y hematológicas',
        icon: <CiMedicalCross className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.ENDOCRINE_EMERGENCY,
        active: true,
        key: 'endocrine-emergency',
    },
    {
        id: '23',
        title: 'Conceptos generales de trauma',
        icon: <FaCarCrash className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TRAUMA,
        active: true,
        key: 'trauma',
    },
    {
        id: '24',
        title: 'INMOVILIZACION',
        icon: <TbBodyScan className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.IMMOBILIZATION,
        active: true,
        key: 'inmovilizacion',
    },
    {
        id: '25',
        title: 'Hemorragia',
        icon: <MdBloodtype className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.BLEEDING,
        active: true,
        key: 'hemorragia',
    },
    {
        id: '26',
        title: 'STOP THE BLEED',
        icon: <BsSignStopFill className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.STOP_THE_BLEED,
        active: true,
        key: 'stop-the-bleed',

    },
    {
        id: '27',
        title: 'Lesiones de cara y cuello',
        icon: <MdFace6 className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.FACE_AND_NECK,
        active: true,
        key: 'lesiones-cara-cuello',

    },
    {
        id: '28',
        title: 'Lesiones del tejido blando',
        icon: <CiMedicalCross className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.SOFT_TISSUE,
        active: true,
        key: 'lesiones-tejido-blando',

    },
    {
        id: '29',
        title: 'Lesiones de cabeza y columna vertebral',
        icon: <SiSpine className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.HEAD_AND_COLUMN_INJURIES,
        active: true,
        key: 'lesiones-cabeza-columna',
    },
    {
        id: '30',
        title: 'Lesiones del torax',
        icon: <GiTrenchBodyArmor className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TORAX_INJURIES,
        active: true,
        key: 'lesiones-torax',
    },
    {
        id: '31',
        title: 'Lesiones ortopédicas',
        icon: <GiMorgueFeet className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.FEET_INJURIES,
        active: true,
        key: 'lesiones-ortopedicas',

    },
    {
        id: '32',
        title: 'Lesiones abdominales y genitourinarias',
        icon: <CiMedicalCross className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.ABDO_GENI_INJURIES,
        active: true,
        key: 'lesiones-abdominales-genitourinarias',
    },
    {
        id: '33',
        title: 'Emergencias inmunologicas',
        icon: <FaBacteria className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.INMUNO_EMERGENCY,
        active: true,
        key: 'emergencias-inmunologicas',
    },
    {
        id: '34',
        title: 'Toxicología',
        icon: <FaWineBottle className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TOXICOLOGY,
        active: true,
        key: 'toxicologia',
    },
    {
        id: '35',
        title: 'Emergencias ambientales',
        icon: <FaFireAlt className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.AMBIENTAL_EMERGENCIES,
        active: true,
        key: 'emergencias-ambientales',
    },
    {
        id: '36',
        title: 'Emergencias psiquiátricas',
        icon: <PiBrainFill className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.PSIQUIATRIC_EMERGENCY,
        active: true,

        key: 'emergencias-psiquiatricas',
    },
    {
        id: '37',
        title: 'Emergencias ginecológicas',
        icon: <AiOutlineWoman className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.GINE_EMERGENCY,
        active: true,

        key: 'emergencias-ginecologicas',
    },
    {
        id: '38',
        title: 'Cuidados obstétricos y neonatales',
        icon: <PiBabyBold className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.OBSTETRIC_CARE,
        active: true,

        key: 'cuidados-obstetricos-neonatales',
    },
    {
        id: '39',
        title: 'Emergencias pediátricas',
        icon: <FaChild className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.PEDIATRIC_EMERGENCIES,
        active: true,

        key: 'emergencias-pediatricas',
    },
    {
        id: '40',
        title: 'Emergencias geriátricas',
        icon: <FaPersonCane className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.GERIATRIC_EMERGENCIES,
        active: true,

        key: 'emergencias-geriatricas',
    },
    {
        id: '41',
        title: 'Pacientes con necesidades especiales',
        icon: <TbDisabled className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.SPECIAL_NEEDS_PACIENT,
        active: true,

        key: 'pacientes-necesidades-especiales',
    },
    {
        id: '42',
        title: 'Operaciones de transporte',
        icon: <FaTruckMedical className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TRANSPORT_OPERATIONS,
        active: true,
        key: 'operaciones-transporte',
    },
    {
        id: '43',
        title: 'Manejo de incidentes',
        icon: <MdOutlineFireTruck className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.INCIDENT_MANAGEMENT,
        active: true,
        key: 'manejo-incidentes',
    },
    {
        id: '44',
        title: 'Respuesta al terrorismo y manejo de desastres',
        icon: <FaBomb className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TERRORIST_MANAGEMENT,
        active: true,
        key: 'respuesta-terrorismo-manejo-desastres',
    },
]