import { GiKnot } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function Knots() {
    return (
        <LessonTemplate
            title="Nudos"
            icon={<GiKnot className="w-14 h-14 text-white"/>}
            moduleNumber={8}
            route={AllRoutes.ROPE_KNOTS}
            forumKey="rope-nudos"
        />
    );
}
