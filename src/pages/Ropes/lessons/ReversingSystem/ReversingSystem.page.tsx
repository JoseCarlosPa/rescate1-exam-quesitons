import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function ReversingSystem() {
    return (
        <LessonTemplate
            title="Reversión de un Sistema"
            icon={<MdOutlineSystemUpdateAlt className="w-14 h-14 text-white"/>}
            moduleNumber={18}
            route={AllRoutes.ROPE_REVERSING_SYSTEM}
            forumKey="rope-reversion-sistema"
        />
    );
}
