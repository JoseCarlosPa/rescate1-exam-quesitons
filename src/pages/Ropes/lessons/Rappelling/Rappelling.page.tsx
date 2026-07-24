import { GiMountainClimbing } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function Rappelling() {
    return (
        <LessonTemplate
            title="Rapel"
            icon={<GiMountainClimbing className="w-14 h-14 text-white"/>}
            moduleNumber={21}
            route={AllRoutes.ROPE_RAPPELLING}
            forumKey="rope-rapel"
        />
    );
}
