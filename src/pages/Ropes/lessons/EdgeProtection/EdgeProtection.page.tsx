import { FaShieldAlt } from "react-icons/fa";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function EdgeProtection() {
    return (
        <LessonTemplate
            title="Protección de Arista"
            icon={<FaShieldAlt className="w-14 h-14 text-white"/>}
            moduleNumber={11}
            route={AllRoutes.ROPE_EDGE_PROTECTION}
            forumKey="rope-proteccion-arista"
        />
    );
}
