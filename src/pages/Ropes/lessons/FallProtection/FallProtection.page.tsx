import { FaShieldAlt } from "react-icons/fa";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function FallProtection() {
    return (
        <LessonTemplate
            title="Protección Contra Caídas"
            icon={<FaShieldAlt className="w-14 h-14 text-white"/>}
            moduleNumber={23}
            route={AllRoutes.ROPE_FALL_PROTECTION}
            forumKey="rope-proteccion-caidas"
        />
    );
}
