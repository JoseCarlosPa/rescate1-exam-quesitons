import { TbFirstAidKit } from "react-icons/tb";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function LitterRigging() {
    return (
        <LessonTemplate
            title="Camillas y Aparejo de Camillas"
            icon={<TbFirstAidKit className="w-14 h-14 text-white"/>}
            moduleNumber={13}
            route={AllRoutes.ROPE_LITTER_RIGGING}
            forumKey="rope-camillas-aparejo"
        />
    );
}
