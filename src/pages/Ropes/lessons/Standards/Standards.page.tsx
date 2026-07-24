import { MdSecurity } from "react-icons/md";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function Standards() {
    return (
        <LessonTemplate
            title="Normativas y Estándares"
            icon={<MdSecurity className="w-14 h-14 text-white"/>}
            moduleNumber={3}
            route={AllRoutes.ROPE_STANDARDS}
            forumKey="rope-normativas"
        />
    );
}
