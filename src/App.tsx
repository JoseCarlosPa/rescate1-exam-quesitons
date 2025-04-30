import './App.css'
import {NavLink} from "react-router";
import logo from "./assets/logo.png";
import {AllRoutes} from "./components/Router/Router.constants.ts";
import {lections, tLection} from "./App.constants.tsx";
import {useUserContext} from "./Providers/UserProvider/User.context.tsx";
import {useEffect, useState} from "react";
import useApp from "./App.hook.ts";
import {MdOutlineGrade} from "react-icons/md";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import RandomQuestion from "./components/RandomQuestion/RandomQuestion.component.tsx";
import {IoReturnDownBack} from "react-icons/io5";
import {FaQuestion} from "react-icons/fa";
import {TbListLetters} from "react-icons/tb";
import {GoBook, GoWorkflow} from "react-icons/go";

function App() {

    const {user} = useUserContext()
    const [leactionWithGrades, setLeactionWithGrades] = useState<tLection[]>([])
    const [showRandomQuestion, setShowRandomQuestion] = useState<boolean>(false)
    const {getUserExams, loading, setLoading} = useApp()

    useEffect(() => {
        if (user?.id) {
            const data = getUserExams()
            data.then((res) => {
                const lectionsWithGrades = lections.map((lection, index) => {
                    return {
                        ...lection,
                        grade: res[index] || 0
                    }
                })

                setLeactionWithGrades(lectionsWithGrades)

            })
        } else {
            const lectionsWithGrades = lections.map((lection) => {
                return {
                    ...lection,
                    grade: 0
                }
            })
            setLeactionWithGrades(lectionsWithGrades)
        }
        setLoading(false)
    }, [user?.id])


    return (
        <div
            className="flex flex-col items-center min-h-screen h-full bg-gray-100 pb-12 md:px-0   p-4 ">
            <img src={logo}
                 alt="Logo" className="h-24 w-24 mb-4"/>
            <p className="text-sm italic">Generación 2025 Rescate 1: Esta plataforma fue hecha por y para los alumnos de
                la clase sabados R1 2025</p>
            <p className="text-5xl font-bold mb-4 flex text-center mt-2">TAMP-B</p>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
                <NavLink to={AllRoutes.MAIN}
                         className="flex items-center justify-center gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
                <NavLink to={AllRoutes.GLOSARY}
                         className="flex items-center justify-center gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out">
                    <TbListLetters className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Glosario</p>
                </NavLink>
                <button
                    onClick={() => setShowRandomQuestion(!showRandomQuestion)}
                    className="cursor-pointer flex items-center justify-center gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out">
                    <FaQuestion className="w-3 h-3 my-auto" />
                    {showRandomQuestion ? 'Cerrar Pregunta aleatoria ' : 'Pregunta aleatoria'}
                </button>
                <NavLink to={AllRoutes.STUDY_CASES}
                         className="flex items-center justify-center gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out">
                    <GoBook className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Casos de estudio</p>
                </NavLink>
                <NavLink to={AllRoutes.ALOGIRTHMS}
                         className="flex items-center justify-center gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out">
                    <GoWorkflow className="w-5 h-5 my-auto"  />
                    <p className="text-lg truncate">Algortimos/Protocolos</p>
                </NavLink>
            </div>
            {showRandomQuestion ? <div className="w-full flex justify-center items-center">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <RandomQuestion/>
                </div>
            </div> : null}

            {loading ? <AiOutlineLoading3Quarters className="animate-spin h-20 w-20 text-orange-500"/> : null}

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-12 w-full md:px-20 ">
                {leactionWithGrades.map((lection) => {
                    return (
                        <NavLink
                            key={lection.id}
                            to={lection.route}
                            className={`${lection.active ? 'bg-white' : 'bg-gray-200'} shadow-md rounded-lg p-6 flex flex-col justify-center items-center hover:bg-orange-100   transition duration-300 ease-in-out`}>
                            {user?.id ?
                                <div className="gap-1 w-full flex justify-end items-center">
                                    <MdOutlineGrade className="w-5 h-5 text-orange-500"/>
                                    <p className="text-gray-500  ">{lection?.grade}/100</p>

                                </div>
                                : null}

                            {lection.icon}
                            <p className="flex text-center text-orange-500">{lection.title}</p>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export default App
