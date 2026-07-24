import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function LoweringSystems() {
    return (
        <LessonTemplate
            title="Sistemas de Descenso"
            icon={<MdOutlineSystemUpdateAlt className="w-14 h-14 text-white"/>}
            moduleNumber={16}
            route={AllRoutes.ROPE_LOWERING_SYSTEMS}
            forumKey="rope-sistemas-descenso"
        />
    );
}
