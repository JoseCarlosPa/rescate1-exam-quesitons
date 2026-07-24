import { FaClipboardCheck } from "react-icons/fa";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function EquipmentTesting() {
    return (
        <LessonTemplate
            title="Pruebas de Equipo de Seguridad de Vida"
            icon={<FaClipboardCheck className="w-14 h-14 text-white"/>}
            moduleNumber={4}
            route={AllRoutes.ROPE_EQUIPMENT_TESTING}
            forumKey="rope-pruebas-equipo"
        />
    );
}
