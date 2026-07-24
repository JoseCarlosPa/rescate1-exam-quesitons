import { MdOutlineAnalytics } from "react-icons/md";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function AnalyzingSystem() {
    return (
        <LessonTemplate
            title="Análisis de un Sistema de Rescate"
            icon={<MdOutlineAnalytics className="w-14 h-14 text-white"/>}
            moduleNumber={20}
            route={AllRoutes.ROPE_ANALYZING_SYSTEM}
            forumKey="rope-analisis-sistema"
        />
    );
}
