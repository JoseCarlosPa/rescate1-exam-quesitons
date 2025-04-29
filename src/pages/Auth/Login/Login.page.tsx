import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../firebase/firebaseConfig.ts";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = async () => {
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Inicio de sesión exitoso");
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Usuario registrado exitosamente");
            }
        } catch (error) {
            console.error("Error en la autenticación:", error);
        }
    };

    return (
        <div>
            <h1>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h1>
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuth}>{isLogin ? "Iniciar Sesión" : "Registrarse"}</button>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
            </button>
        </div>
    );
}