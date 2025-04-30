import { doc, getDoc } from "firebase/firestore";
import {auth, db} from "./firebase/firebaseConfig.ts";
import {useState} from "react";


export default function useApp(){

    const [loading,setLoading] = useState<boolean>(true)


    async function getUserExams() {
        setLoading(true)
        const user = auth.currentUser;

        if (user) {
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const userData = userDoc.data();
                setLoading(false)
                return userData.exams || []; // Devuelve el arreglo "exams" o un arreglo vacío si no existe
            } else {
                console.error("El documento del usuario no existe.");
            }
        } else {
            console.error("No hay un usuario autenticado.");
        }
        setLoading(false)

        return [];
    }

    return {
        getUserExams,
        loading,
        setLoading
    }
}