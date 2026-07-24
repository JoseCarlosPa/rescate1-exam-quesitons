import { TbLadder } from "react-icons/tb";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function LadderRescueSystems() {
    return (
        <LessonTemplate
            title="Sistemas de Rescate con Escaleras"
            icon={<TbLadder className="w-14 h-14 text-white"/>}
            moduleNumber={31}
            route={AllRoutes.ROPE_LADDER_RESCUE_SYSTEMS}
            forumKey="rope-rescate-escaleras"
        />
    );
}
