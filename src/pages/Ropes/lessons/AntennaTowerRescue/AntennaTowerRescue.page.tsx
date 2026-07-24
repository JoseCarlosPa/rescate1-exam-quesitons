import { TbAntenna } from "react-icons/tb";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function AntennaTowerRescue() {
    return (
        <LessonTemplate
            title="Rescate en Torres de Antena y Escaleras Enjauladas"
            icon={<TbAntenna className="w-14 h-14 text-white"/>}
            moduleNumber={35}
            route={AllRoutes.ROPE_ANTENNA_TOWER_RESCUE}
            forumKey="rope-rescate-torres-antena"
        />
    );
}
