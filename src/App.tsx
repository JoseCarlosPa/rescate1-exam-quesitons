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
            className="flex flex-col items-center min-h-screen h-full bg-gradient-to-b from-orange-50 to-gray-100 pb-16 md:px-0 p-4 ">
            <div className="flex flex-col items-center w-full max-w-3xl">
                <img src={logo}
                     alt="Logo" className="h-28 w-28 mb-2 drop-shadow-lg rounded-full "/>
                <p className="text-xs italic text-gray-500 mb-1 text-center">Generación 2025 Rescate 1: Esta plataforma fue hecha por y para los alumnos de la clase sábados R1 2025</p>
                <p className="text-5xl font-extrabold mb-6 flex text-center mt-2 text-orange-500 tracking-tight drop-shadow">TAMP-B</p>
            </div>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-4 w-full max-w-4xl mb-2 mt-2">
                <NavLink to={AllRoutes.MAIN}
                         className="flex items-center justify-center gap-2 bg-white shadow-md rounded-xl p-3 hover:bg-orange-100 border border-orange-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-orange-300 outline-none">
                    <IoReturnDownBack className="w-5 h-5 my-auto text-orange-400"  />
                    <p className="text-lg font-medium">Regresar</p>
                </NavLink>
                <NavLink to={AllRoutes.GLOSARY}
                         className="flex items-center justify-center gap-2 bg-white shadow-md rounded-xl p-3 hover:bg-orange-100 border border-orange-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-orange-300 outline-none">
                    <TbListLetters className="w-5 h-5 my-auto text-orange-400"  />
                    <p className="text-lg font-medium">Glosario</p>
                </NavLink>
                <button
                    onClick={() => setShowRandomQuestion(!showRandomQuestion)}
                    className="cursor-pointer flex items-center justify-center gap-2 bg-white shadow-md rounded-xl p-3 hover:bg-orange-100 border border-orange-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-orange-300 outline-none">
                    <FaQuestion className="w-4 h-4 my-auto text-orange-400" />
                    <span className="text-lg font-medium">{showRandomQuestion ? 'Cerrar Pregunta aleatoria ' : 'Pregunta aleatoria'}</span>
                </button>
                <NavLink to={AllRoutes.STUDY_CASES}
                         className="flex items-center justify-center gap-2 bg-white shadow-md rounded-xl p-3 hover:bg-orange-100 border border-orange-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-orange-300 outline-none">
                    <GoBook className="w-5 h-5 my-auto text-orange-400"  />
                    <p className="text-lg font-medium">Casos de estudio</p>
                </NavLink>
                <NavLink to={AllRoutes.ALOGIRTHMS}
                         className="flex items-center justify-center gap-2 bg-white shadow-md rounded-xl p-3 hover:bg-orange-100 border border-orange-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-orange-300 outline-none">
                    <GoWorkflow className="w-5 h-5 my-auto text-orange-400"  />
                    <p className="text-lg font-medium truncate">Algoritmos/Protocolos</p>
                </NavLink>
            </div>
            {showRandomQuestion ? <div className="w-full flex justify-center items-center mt-4 animate-fade-in">
                <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl shadow-lg p-4 border border-orange-100">
                    <RandomQuestion/>
                </div>
            </div> : null}

            {loading ? <AiOutlineLoading3Quarters className="animate-spin h-20 w-20 text-orange-500 mt-8"/> : null}

            <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-12 w-full max-w-7xl ">
                {leactionWithGrades.map((lection) => {
                    return (
                        <NavLink
                            key={lection.id}
                            to={lection.route}
                            className={`${lection.active ? 'bg-white' : 'bg-gray-100'} shadow-lg border border-orange-100 rounded-2xl p-7 flex flex-col justify-center items-center hover:bg-orange-50 transition duration-300 ease-in-out group relative focus:ring-2 focus:ring-orange-300 outline-none`}
                        >
                            {user?.id ?
                                <div className="gap-1 w-full flex justify-end items-center absolute top-3 right-4">
                                    <MdOutlineGrade className="w-5 h-5 text-orange-500"/>
                                    <p className="text-gray-500 text-sm font-semibold">{lection?.grade}/100</p>
                                </div>
                                : null}

                            <div className="mb-2 mt-2 group-hover:scale-110 transition-transform duration-200">{lection.icon}</div>
                            <p className="flex text-center text-orange-600 font-bold text-lg mt-2 group-hover:underline">{lection.title}</p>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export default App
