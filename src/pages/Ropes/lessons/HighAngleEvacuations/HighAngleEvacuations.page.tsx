import { GiMountainClimbing } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function HighAngleEvacuations() {
    return (
        <LessonTemplate
            title="Evacuaciones en Alto Ángulo"
            icon={<GiMountainClimbing className="w-14 h-14 text-white"/>}
            moduleNumber={26}
            route={AllRoutes.ROPE_HIGH_ANGLE_EVACUATIONS}
            forumKey="rope-evacuacion-alto-angulo"
        />
    );
}
