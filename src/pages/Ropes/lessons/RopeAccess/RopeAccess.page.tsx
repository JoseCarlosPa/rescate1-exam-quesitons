import { GiCarabiner } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function RopeAccess() {
    return (
        <LessonTemplate
            title="Acceso por Cuerda"
            icon={<GiCarabiner className="w-14 h-14 text-white"/>}
            moduleNumber={34}
            route={AllRoutes.ROPE_ROPE_ACCESS}
            forumKey="rope-acceso-por-cuerda"
        />
    );
}
