import { GiRolledCloth } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function Introduction() {
    return (
        <LessonTemplate
            title="Introducción al Rescate con Cuerdas"
            icon={<GiRolledCloth className="w-14 h-14 text-white"/>}
            moduleNumber={1}
            route={AllRoutes.ROPE_INTRODUCTION}
            forumKey="rope-introduccion"
        />
    );
}
