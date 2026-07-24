import { TbFirstAidKit } from "react-icons/tb";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function LowAngleEvacuations() {
    return (
        <LessonTemplate
            title="Evacuaciones en Bajo Ángulo"
            icon={<TbFirstAidKit className="w-14 h-14 text-white"/>}
            moduleNumber={27}
            route={AllRoutes.ROPE_LOW_ANGLE_EVACUATIONS}
            forumKey="rope-evacuacion-bajo-angulo"
        />
    );
}
