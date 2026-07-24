import { GiKnot } from "react-icons/gi";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import LessonTemplate from "../../components/LessonTemplate.component";

export default function KnotPass() {
    return (
        <LessonTemplate
            title="Paso de Nudo en un Sistema"
            icon={<GiKnot className="w-14 h-14 text-white"/>}
            moduleNumber={19}
            route={AllRoutes.ROPE_KNOT_PASS}
            forumKey="rope-paso-de-nudo"
        />
    );
}
