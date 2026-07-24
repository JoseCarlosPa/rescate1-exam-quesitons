import { GiStairsGoal } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function PuttingItTogether() {
    return (
        <LessonTemplate
            title="Integración Final"
            icon={<GiStairsGoal className="w-14 h-14 text-white"/>}
            moduleNumber={33}
            route={AllRoutes.ROPE_PUTTING_IT_TOGETHER}
            forumKey="rope-integracion-final"
        />
    );
}
