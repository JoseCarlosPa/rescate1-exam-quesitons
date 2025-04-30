import {useEffect, useState} from "react";
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth, db} from "../../../firebase/firebaseConfig.ts";
import {ImSpinner2} from "react-icons/im";
import {FcGoogle} from "react-icons/fc";
import logo from "../../../assets/logo.png";
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {toast} from "sonner";
import * as React from "react";
import {useLogin} from "./Login.hook.ts";
import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {useUserContext} from "../../../Providers/UserProvider/User.context.tsx";
import { useNavigate } from "react-router";
import {examsInitialvalues} from "./Login.constants.ts";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [authing, setAuthing] = useState<boolean>(false)
    const userCollectionsRef = collection(db, 'users')
    const {setUser} = useUserContext()
    const navigate = useNavigate();

    const {handleFirebaseError} = useLogin()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser({
                    id: user.uid,
                    email: user.email,
                    name: null,
                    photoURL: null,
                    role: null
                })
                navigate(AllRoutes.MAIN)
            }
        })

        return () => unsubscribe()
    },[navigate, setUser])

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setAuthing(true)
        signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            const user = userCredential.user
            setUser({
                id: user.uid,
                email: user.email,
                name: null,
                photoURL: null,
                role: null
            })
            navigate(AllRoutes.MAIN)

        }).catch((error) => {
            handleFirebaseError(error)
        })
        setAuthing(false)

    }

    async function signInWithGoogle() {
        setAuthing(true)
        signInWithPopup(auth, new GoogleAuthProvider()).then(async userCredential => {
            const user = userCredential.user
            const data = await getDocs(userCollectionsRef)
            const emails = data.docs.map((doc) => ({...doc.data()}))
            if (emails.find(email => email.email === user.email)) {
                console.log("email", email)
            } else {
                await setDoc(doc(db, 'users', user.uid), {
                    id: user.uid,
                    email: user.email,
                    role: "Alumno",
                    exams: examsInitialvalues,
                })
            }
            setUser({
                id: user.uid,
                email: user.email,
                name: null,
                photoURL: null,
                role: null
            })

            navigate(AllRoutes.MAIN)


        }).catch(error => {
            console.error(error)
            toast.error(error.message)
            setAuthing(false)
        })
    }

    return (
        <div className="bg-gray-100   rounded-lg">
            <div className="">
                <div className="flex justify-center w-full h-full min-h-screen  xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <div className="flex items-center justify-center w-full">
                        <div className="flex items-center xl:p-10">
                            <form onSubmit={handleLogin}
                                  className="flex flex-col w-full h-full pb-6 text-center  rounded-3xl">
                                <NavLink
                                    to={AllRoutes.MAIN}
                                    className="flex justify-center w-full">
                                    <img src={logo}
                                         alt="Logo" className="h-20 w-20 mb-2"/>
                                </NavLink>
                                <h3 className="mb-3 text-4xl font-extrabold text-orange-500">Alumnos Rescate 1</h3>

                                <p className="mb-4 text-gray-700 ">Ingresa tu correo y contraseña</p>
                                <button
                                    type={"button"}
                                    disabled={authing}
                                    onClick={signInWithGoogle}
                                    className="cursor-pointer shadow-lg flex items-center justify-center w-full py-4 mb-6  font-medium transition duration-300 rounded-2xl text-gray-900 bg-white   hover:bg-gray-200 focus:ring-4 focus:ring-gray-300">
                                    {authing ? <ImSpinner2 className="animate-spin w-6 h-6 text-orange-700"/> : <>
                                        <FcGoogle className="mr-2 my-auto"/>
                                        Iniciar con Google</>}

                                </button>
                                <div className="flex items-center mb-3">
                                    <hr className="h-0 border-b border-solid border-gray-500 grow"/>
                                    <p className="mx-4 text-gray-600">o</p>
                                    <hr className="h-0 border-b border-solid border-gray-500 grow"/>
                                </div>
                                <label className="mb-2 text-sm text-start text-gray-900">Correo*</label>
                                <input id="email" type="email" placeholder="tu-email@rescate.com"
                                       onChange={(event) => setEmail(event.target.value)}
                                       className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-200 mb-7 placeholder:text-gray-700   bg-white text-dark-gray-900 rounded-2xl"/>
                                <label className="mb-2 text-sm text-start text-gray-900">Contraseña*</label>
                                <input id="password" type="password" placeholder="Tu constraseña"
                                       onChange={(event) => setPassword(event.target.value)}
                                       className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-200  placeholder:text-gray-700    bg-white text-dark-gray-900 rounded-2xl"/>
                                <div className="flex flex-row justify-end mb-8">
                                    <a href="#" className="mr-4 text-sm font-medium text-orange-300">Olvidaste la
                                        contraseña?</a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-center flex justify-center cursor-pointer px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-orange-400 focus:ring-4 focus:ring-purple-blue-100 bg-orange-500">
                                    {authing ? <ImSpinner2 className="animate-spin w-6 h-6 text-orange-700 "/> : 'Iniciar sesion' }
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}