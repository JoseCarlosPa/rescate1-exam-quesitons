import { FaShieldAlt } from "react-icons/fa";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function Safety() {
    return (
        <LessonTemplate
            title="Seguridad"
            icon={<FaShieldAlt className="w-14 h-14 text-white"/>}
            moduleNumber={2}
            route={AllRoutes.ROPE_SAFETY}
            forumKey="rope-seguridad"
        />
    );
}
