import { GiAnchor } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function HighAnchorsDirectionals() {
    return (
        <LessonTemplate
            title="Anclajes Altos y Direccionales"
            icon={<GiAnchor className="w-14 h-14 text-white"/>}
            moduleNumber={30}
            route={AllRoutes.ROPE_HIGH_ANCHORS_DIRECTIONALS}
            forumKey="rope-anclajes-altos-direccionales"
        />
    );
}
