import { BsSignpost2Fill } from "react-icons/bs";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function GuidingLines() {
    return (
        <LessonTemplate
            title="Líneas Guía"
            icon={<BsSignpost2Fill className="w-14 h-14 text-white"/>}
            moduleNumber={28}
            route={AllRoutes.ROPE_GUIDING_LINES}
            forumKey="rope-lineas-guia"
        />
    );
}
