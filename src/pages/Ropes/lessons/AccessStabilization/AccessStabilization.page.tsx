import { FaTools } from "react-icons/fa";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function AccessStabilization() {
    return (
        <LessonTemplate
            title="Acceso y Estabilización"
            icon={<FaTools className="w-14 h-14 text-white"/>}
            moduleNumber={24}
            route={AllRoutes.ROPE_ACCESS_STABILIZATION}
            forumKey="rope-acceso-estabilizacion"
        />
    );
}
