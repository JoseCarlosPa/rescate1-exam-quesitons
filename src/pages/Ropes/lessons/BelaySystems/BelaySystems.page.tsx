import { GiCarabiner } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function BelaySystems() {
    return (
        <LessonTemplate
            title="Sistemas de Aseguramiento (Belay)"
            icon={<GiCarabiner className="w-14 h-14 text-white"/>}
            moduleNumber={15}
            route={AllRoutes.ROPE_BELAY_SYSTEMS}
            forumKey="rope-sistemas-aseguramiento"
        />
    );
}
