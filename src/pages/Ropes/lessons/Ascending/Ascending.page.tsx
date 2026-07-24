import { GiMountainClimbing } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function Ascending() {
    return (
        <LessonTemplate
            title="Ascenso"
            icon={<GiMountainClimbing className="w-14 h-14 text-white"/>}
            moduleNumber={22}
            route={AllRoutes.ROPE_ASCENDING}
            forumKey="rope-ascenso"
        />
    );
}
