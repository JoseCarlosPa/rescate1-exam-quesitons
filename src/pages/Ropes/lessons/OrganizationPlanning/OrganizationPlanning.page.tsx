import { FaTasks } from "react-icons/fa";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function OrganizationPlanning() {
    return (
        <LessonTemplate
            title="Organización y Planificación"
            icon={<FaTasks className="w-14 h-14 text-white"/>}
            moduleNumber={32}
            route={AllRoutes.ROPE_ORGANIZATION_PLANNING}
            forumKey="rope-organizacion-planificacion"
        />
    );
}
