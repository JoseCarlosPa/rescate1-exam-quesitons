import { FaUserShield } from "react-icons/fa";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function PersonalEquipment() {
    return (
        <LessonTemplate
            title="Equipo Personal"
            icon={<FaUserShield className="w-14 h-14 text-white"/>}
            moduleNumber={7}
            route={AllRoutes.ROPE_PERSONAL_EQUIPMENT}
            forumKey="rope-equipo-personal"
        />
    );
}
