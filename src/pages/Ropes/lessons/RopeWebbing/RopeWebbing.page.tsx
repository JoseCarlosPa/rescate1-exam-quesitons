import { GiRolledCloth } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function RopeWebbing() {
    return (
        <LessonTemplate
            title="Cuerdas y Cintas de Seguridad de Vida"
            icon={<GiRolledCloth className="w-14 h-14 text-white"/>}
            moduleNumber={5}
            route={AllRoutes.ROPE_WEBBING}
            forumKey="rope-cuerdas-cintas"
        />
    );
}
