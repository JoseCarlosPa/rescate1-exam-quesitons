import { GiSuspensionBridge } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function HighLines() {
    return (
        <LessonTemplate
            title="Líneas Altas (Highlines)"
            icon={<GiSuspensionBridge className="w-14 h-14 text-white"/>}
            moduleNumber={29}
            route={AllRoutes.ROPE_HIGH_LINES}
            forumKey="rope-lineas-altas"
        />
    );
}
