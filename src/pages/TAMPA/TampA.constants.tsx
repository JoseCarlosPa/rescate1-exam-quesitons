import {AllRoutes} from "../../components/Router/Router.constants.ts";
import {FaGraduationCap, FaLungs, FaHeartPulse, FaBrain, FaVenus, FaBiohazard, FaSkullCrossbones, FaFireFlameCurved, FaSitemap} from "react-icons/fa6";
import {GiDna2, GiPill, GiStomach, GiKidneys} from "react-icons/gi";
import {MdFace6, MdBloodtype} from "react-icons/md";
import {FaHeadSideMask, FaClipboardList} from "react-icons/fa";
import {SiSpine} from "react-icons/si";

export type tTampAModule = {
    id: string,
    title: string,
    icon: React.ReactNode,
    route: string,
    key: string,
}

export const tampAModules: tTampAModule[] = [
    {
        id: '1',
        title: 'Introducción a la formación de TAMP - Avanzado',
        icon: <FaGraduationCap className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_INTRODUCTION,
        key: 'tampa-introduccion',
    },
    {
        id: '2',
        title: 'Anatomía & Fisiología II',
        icon: <GiDna2 className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_ANATOMY_PHYSIOLOGY,
        key: 'tampa-anatomia-fisiologia',
    },
    {
        id: '3',
        title: 'Evaluación de pacientes',
        icon: <FaClipboardList className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_PATIENT_ASSESSMENT,
        key: 'tampa-evaluacion-pacientes',
    },
    {
        id: '4',
        title: 'Pensamiento crítico y toma de decisiones',
        icon: <FaBrain className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_CRITICAL_THINKING,
        key: 'tampa-pensamiento-critico',
    },
    {
        id: '5',
        title: 'Farmacología',
        icon: <GiPill className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_PHARMACOLOGY,
        key: 'tampa-farmacologia',
    },
    {
        id: '6',
        title: 'Manejo de la vía aérea avanzada y difícil',
        icon: <FaHeadSideMask className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_ADVANCED_AIRWAY,
        key: 'tampa-via-aerea-avanzada',
    },
    {
        id: '7',
        title: 'Emergencias respiratorias',
        icon: <FaLungs className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_RESPIRATORY_EMERGENCY,
        key: 'tampa-emergencias-respiratorias',
    },
    {
        id: '8',
        title: 'Emergencias cardiacas (ACLS)',
        icon: <FaHeartPulse className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_CARDIAC_EMERGENCY,
        key: 'tampa-emergencias-cardiacas',
    },
    {
        id: '9',
        title: 'Emergencias neurológicas',
        icon: <FaBrain className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_NEURO_EMERGENCY,
        key: 'tampa-emergencias-neurologicas',
    },
    {
        id: '10',
        title: 'Trauma raquiomedular',
        icon: <SiSpine className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_SPINAL_TRAUMA,
        key: 'tampa-trauma-raquiomedular',
    },
    {
        id: '11',
        title: 'Trauma de cara y cuello',
        icon: <MdFace6 className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_FACE_NECK_TRAUMA,
        key: 'tampa-trauma-cara-cuello',
    },
    {
        id: '12',
        title: 'Emergencias abdominales y gastrointestinales',
        icon: <GiStomach className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_ABDOMINAL_GI_EMERGENCY,
        key: 'tampa-emergencias-abdominales-gastrointestinales',
    },
    {
        id: '13',
        title: 'Emergencias genitourinarias',
        icon: <GiKidneys className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_GENITOURINARY_EMERGENCY,
        key: 'tampa-emergencias-genitourinarias',
    },
    {
        id: '14',
        title: 'Emergencias ginecobstétricas',
        icon: <FaVenus className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_OBSTETRIC_GYN_EMERGENCY,
        key: 'tampa-emergencias-ginecobstetricas',
    },
    {
        id: '15',
        title: 'Emergencias inmunológicas',
        icon: <FaBiohazard className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_IMMUNOLOGIC_EMERGENCY,
        key: 'tampa-emergencias-inmunologicas',
    },
    {
        id: '16',
        title: 'Toxicología',
        icon: <FaSkullCrossbones className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_TOXICOLOGY,
        key: 'tampa-toxicologia',
    },
    {
        id: '17',
        title: 'Emergencias psiquiátricas',
        icon: <FaBrain className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_PSYCHIATRIC_EMERGENCY,
        key: 'tampa-emergencias-psiquiatricas',
    },
    {
        id: '18',
        title: 'Control de hemorragias catastróficas',
        icon: <MdBloodtype className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_HEMORRHAGE_CONTROL,
        key: 'tampa-control-hemorragias-catastroficas',
    },
    {
        id: '19',
        title: 'Quemaduras',
        icon: <FaFireFlameCurved className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_BURNS,
        key: 'tampa-quemaduras',
    },
    {
        id: '20',
        title: 'Accidentes con múltiples víctimas, liderazgo y puesto de mando',
        icon: <FaSitemap className="w-12 h-12 mb-1 text-orange-500"/>,
        route: AllRoutes.TAMPA_MCI_LEADERSHIP,
        key: 'tampa-accidentes-multiples-victimas',
    },
]
