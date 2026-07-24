import { GiCog } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function Hardware() {
    return (
        <LessonTemplate
            title="Hardware de Rescate con Cuerdas"
            icon={<GiCog className="w-14 h-14 text-white"/>}
            moduleNumber={6}
            route={AllRoutes.ROPE_HARDWARE}
            forumKey="rope-hardware"
        />
    );
}
