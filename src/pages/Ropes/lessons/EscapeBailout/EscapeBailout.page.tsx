import { FaShieldAlt } from "react-icons/fa";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function EscapeBailout() {
    return (
        <LessonTemplate
            title="Escape y Evacuación de Emergencia"
            icon={<FaShieldAlt className="w-14 h-14 text-white"/>}
            moduleNumber={36}
            route={AllRoutes.ROPE_ESCAPE_BAILOUT}
            forumKey="rope-escape-evacuacion-emergencia"
        />
    );
}
