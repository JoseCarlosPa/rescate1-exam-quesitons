import { GiSnowflake1 } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function SnowSlopeEvacuations() {
    return (
        <LessonTemplate
            title="Evacuaciones en Nieve y Pendientes"
            icon={<GiSnowflake1 className="w-14 h-14 text-white"/>}
            moduleNumber={37}
            route={AllRoutes.ROPE_SNOW_SLOPE_EVACUATIONS}
            forumKey="rope-evacuacion-nieve-pendiente"
        />
    );
}
