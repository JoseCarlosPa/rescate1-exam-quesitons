import { GiAnchor } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function AnchorSystems() {
    return (
        <LessonTemplate
            title="Sistemas de Anclaje"
            icon={<GiAnchor className="w-14 h-14 text-white"/>}
            moduleNumber={10}
            route={AllRoutes.ROPE_ANCHOR_SYSTEMS}
            forumKey="rope-sistemas-anclaje"
        />
    );
}
