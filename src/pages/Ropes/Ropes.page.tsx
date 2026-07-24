import {useState} from "react";
import {NavLink} from "react-router";
import {GiRolledCloth} from "react-icons/gi";
import {IoReturnDownBack} from "react-icons/io5";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {AllRoutes} from "../../components/Router/Router.constants";
import SEOWrapper from "../../components/SEOWrapper/SEOWrapper.component";
import {ROPE_LESSONS} from "./Ropes.constants";

export default function RopesPage() {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredLessons = ROPE_LESSONS.filter((lesson) =>
        lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <SEOWrapper
            title="Rescate con Cuerdas | Curso Completo para Paramédicos"
            description="Curso completo de rescate técnico con cuerdas dividido en 37 lecciones: nudos, anclajes, sistemas de izado y descenso, rapel, evacuaciones y más. Material educativo para técnicos en emergencias."
            keywords="rescate con cuerdas, rescue técnico, nudos de rescate, rapel, ascenso por cuerda, polipastos, NFPA 1006, rescate vertical"
            section="ropes"
            difficulty="Intermediate"
            timeRequired="PT8H"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div
                className="flex flex-col items-center min-h-screen h-full bg-gradient-to-b from-orange-50 to-gray-100 pb-16 p-4">
                <div className="flex flex-col items-center w-full max-w-3xl">
                    <div
                        className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <GiRolledCloth className="w-14 h-14 text-white"/>
                    </div>
                    <p className="text-5xl font-extrabold mb-2 flex text-center mt-2 text-amber-600 tracking-tight drop-shadow">
                        Rescate con Cuerdas
                    </p>
                    <p className="text-lg text-gray-600 mb-6">Curso Técnico Completo — 37 Lecciones</p>
                    <NavLink
                        to={AllRoutes.MAIN}
                        className="flex gap-2 mb-4 bg-white shadow-md rounded-xl p-3 hover:bg-amber-100 border border-amber-200 transition duration-300 ease-in-out"
                    >
                        <IoReturnDownBack className="w-5 h-5 my-auto text-amber-500"/>
                        <p className="text-lg font-medium">Regresar</p>
                    </NavLink>
                </div>

                <div className="relative w-full max-w-md mb-6 mt-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400"/>
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar lección..."
                        className="w-full p-3 pl-10 border border-amber-300 rounded-xl shadow-sm focus:ring-2 focus:ring-amber-400 outline-none transition duration-300 ease-in-out"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-w-7xl mb-2 mt-4">
                    {filteredLessons.map((lesson) => (
                        <NavLink
                            key={lesson.id}
                            to={lesson.route}
                            className="bg-white shadow-lg border border-amber-100 rounded-2xl md:p-7 p-2 flex flex-col justify-center items-center hover:bg-amber-50 transition duration-300 ease-in-out group relative focus:ring-2 focus:ring-amber-300 outline-none"
                        >
                            <span className="absolute top-2 left-3 text-xs font-semibold text-amber-400">
                                {lesson.number.toString().padStart(2, '0')}
                            </span>
                            <div
                                className="mb-2 mt-2 group-hover:scale-110 transition-transform duration-200">{lesson.icon}</div>
                            <p className="flex text-center text-amber-600 font-bold text-lg mt-2 group-hover:underline">
                                {lesson.title}
                            </p>
                        </NavLink>
                    ))}
                </div>
            </div>
        </SEOWrapper>
    );
}
