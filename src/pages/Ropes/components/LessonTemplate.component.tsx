import {ReactNode} from "react";
import {NavLink} from "react-router";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz, MdConstruction} from "react-icons/md";
import {AllRoutes} from "../../../components/Router/Router.constants";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component";
import {ForumSection} from "../../../components/ForumSection";

interface LessonTemplateProps {
    title: string;
    icon: ReactNode;
    moduleNumber: number;
    route: string;
    forumKey: string;
}

export default function LessonTemplate({title, icon, moduleNumber, route, forumKey}: LessonTemplateProps) {
    return (
        <SEOWrapper
            title={`${title} | Rescate con Cuerdas`}
            description={`Lección ${moduleNumber} del curso de Rescate con Cuerdas: ${title}. Material educativo para técnicos en emergencias.`}
            keywords={`rescate con cuerdas, ${title.toLowerCase()}, NFPA 1006, paramédicos`}
            section="ropes"
            difficulty="Intermediate"
            timeRequired="PT2H"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-5xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    {icon}
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-amber-600 mb-1">Lección {moduleNumber}</p>
                            <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                {title}
                            </h1>
                            <p className="text-sm italic mb-4 text-gray-500">Alumnos Rescate 1</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.ROPE_RESCUE}
                                    className="flex gap-2 mb-4 bg-white shadow rounded-lg p-2 hover:bg-amber-50 transition duration-300 ease-in-out"
                                >
                                    <IoReturnDownBack className="w-5 h-5 my-auto"/>
                                    <p className="text-lg">Regresar a lecciones</p>
                                </NavLink>
                            </div>
                        </header>

                        {/* Acceso al examen */}
                        <div className="flex justify-center mb-8">
                            <NavLink
                                to={`${route}/exam`}
                                className="flex flex-col items-center justify-center p-4 w-48 bg-white rounded-lg shadow hover:bg-amber-50 transition duration-300 hover:shadow-md"
                            >
                                <MdQuiz className="w-10 h-10 text-amber-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                        </div>

                        {/* Placeholder de contenido */}
                        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-10 mb-8 text-center">
                            <MdConstruction className="w-16 h-16 text-amber-400 mx-auto mb-4"/>
                            <h2 className="text-2xl font-bold text-gray-700 mb-2">Contenido próximamente</h2>
                            <p className="text-gray-500">
                                Esta lección está en construcción. Mientras tanto, puedes revisar el examen
                                de práctica para esta lección.
                            </p>
                        </div>

                        {/* Foro de Discusión */}
                        <ForumSection
                            pagina={forumKey}
                            titulo={`Foro de Discusión - ${title}`}
                        />
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}
