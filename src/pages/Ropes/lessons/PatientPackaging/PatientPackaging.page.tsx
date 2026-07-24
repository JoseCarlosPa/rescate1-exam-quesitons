import { TbFirstAidKit } from "react-icons/tb";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function PatientPackaging() {
    return (
        <LessonTemplate
            title="Empaquetamiento del Paciente"
            icon={<TbFirstAidKit className="w-14 h-14 text-white"/>}
            moduleNumber={12}
            route={AllRoutes.ROPE_PATIENT_PACKAGING}
            forumKey="rope-empaquetamiento-paciente"
        />
    );
}
