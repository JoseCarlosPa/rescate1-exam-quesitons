import { GiCog } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function RaisingSystems() {
    return (
        <LessonTemplate
            title="Sistemas de Izado y Ventaja Mecánica"
            icon={<GiCog className="w-14 h-14 text-white"/>}
            moduleNumber={17}
            route={AllRoutes.ROPE_RAISING_SYSTEMS}
            forumKey="rope-sistemas-izado"
        />
    );
}
