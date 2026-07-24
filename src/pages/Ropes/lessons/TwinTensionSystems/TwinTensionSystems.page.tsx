import { GiSuspensionBridge } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function TwinTensionSystems() {
    return (
        <LessonTemplate
            title="Sistemas de Doble Tensión"
            icon={<GiSuspensionBridge className="w-14 h-14 text-white"/>}
            moduleNumber={14}
            route={AllRoutes.ROPE_TWIN_TENSION_SYSTEMS}
            forumKey="rope-sistemas-doble-tension"
        />
    );
}
