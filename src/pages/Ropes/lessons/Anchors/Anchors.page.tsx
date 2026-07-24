import { GiAnchor } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function Anchors() {
    return (
        <LessonTemplate
            title="Anclajes"
            icon={<GiAnchor className="w-14 h-14 text-white"/>}
            moduleNumber={9}
            route={AllRoutes.ROPE_ANCHORS}
            forumKey="rope-anclajes"
        />
    );
}
