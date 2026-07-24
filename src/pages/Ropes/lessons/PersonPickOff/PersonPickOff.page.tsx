import { FaUsers } from "react-icons/fa";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function PersonPickOff() {
    return (
        <LessonTemplate
            title="Recogida Estándar de Persona (Pick-Off)"
            icon={<FaUsers className="w-14 h-14 text-white"/>}
            moduleNumber={25}
            route={AllRoutes.ROPE_PERSON_PICK_OFF}
            forumKey="rope-recogida-persona"
        />
    );
}
