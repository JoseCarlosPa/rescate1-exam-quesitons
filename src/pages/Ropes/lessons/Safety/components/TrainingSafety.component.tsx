import {useState} from "react";
import {GiBrain} from "react-icons/gi";
import {BsToggleOn, BsToggleOff} from "react-icons/bs";
import {FaUserFriends} from "react-icons/fa";

export default function TrainingSafety() {
    const [liveLoad, setLiveLoad] = useState(true);

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <GiBrain className="w-6 h-6 mr-2 text-red-500"/>
                    El Miedo Durante el Entrenamiento
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Es común encontrar personas genuinamente aterrorizadas de confiar su vida a una cuerda
                    "delgada". El miedo puede causar errores — en un caso, la causa sospechada de un accidente de
                    rapel fue un desmayo provocado por el miedo. Al inicio del entrenamiento de un nuevo miembro
                    del equipo es el momento de identificar y abordar cualquier problema con la exposición a la
                    altura.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        El miedo, una respuesta normal a la altura, se supera con confianza en el equipo y las
                        habilidades. Manejar el miedo requiere cambiar el enfoque de la altura hacia los
                        fundamentos del trabajo con cuerdas: el montaje del equipo, la verificación de seguridad y
                        la técnica correcta de rapel.
                    </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                        <strong>Selección de personal:</strong> algunas personas pueden aprender a manejar la
                        altura y otras no. Estas últimas pueden ser miembros efectivos del equipo en rescates de
                        ángulo bajo o en un rol de apoyo, siempre que no se les coloque en una posición expuesta.
                        Un buen método de progresión es comenzar a un rescatista en una altura baja con la cuerda
                        viniendo desde arriba (como una escalera) antes de pasar a un rapel alto en un acantilado.
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2">Carga Viva vs. Carga Simulada</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Existe una diferencia de opinión sobre si se debe usar un maniquí de rescate en lugar de una
                    persona real para el entrenamiento. Explora ambas posturas:
                </p>

                <div className="flex justify-center mb-4">
                    <button
                        onClick={() => setLiveLoad(!liveLoad)}
                        className="flex items-center gap-2 bg-white border-2 border-gray-300 rounded-full px-5 py-2 font-semibold text-gray-700 hover:border-red-400 transition"
                    >
                        {liveLoad ? <BsToggleOn className="w-8 h-8 text-red-500"/> : <BsToggleOff className="w-8 h-8 text-gray-400"/>}
                        {liveLoad ? 'Viendo: Carga Viva (persona real)' : 'Viendo: Carga Simulada (maniquí)'}
                    </button>
                </div>

                {liveLoad ? (
                    <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-xl p-6">
                        <div className="flex items-center mb-3">
                            <FaUserFriends className="w-8 h-8 mr-3"/>
                            <h3 className="text-xl font-bold">A favor de la Carga Viva</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                            <li>• La experiencia de estar en la posición del paciente durante un escenario es muy informativa, y el valor obtenido justifica el riesgo mínimo.</li>
                            <li>• Ver el rescate desde la perspectiva del paciente permite analizar qué tan fluida, cómoda y eficiente es la maniobra.</li>
                            <li>• En terreno difícil, una persona consciente puede ayudar al rescatista — algo que un maniquí pesado no puede hacer.</li>
                            <li>• Puede ser más seguro colocar a una persona real en la posición que manipular un maniquí pesado hasta el lugar.</li>
                        </ul>
                    </div>
                ) : (
                    <div className="bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-xl p-6">
                        <div className="flex items-center mb-3">
                            <FaUserFriends className="w-8 h-8 mr-3 opacity-60"/>
                            <h3 className="text-xl font-bold">A favor del Maniquí</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                            <li>• Algunos departamentos tienen políticas que prohíben usar personas reales para entrenamiento.</li>
                            <li>• No hay justificación para poner a alguien en riesgo cuando un maniquí puede cumplir la misma función.</li>
                            <li>• Elimina por completo el riesgo físico de la persona que actúa como "paciente".</li>
                        </ul>
                    </div>
                )}

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg mt-4">
                    <p className="text-gray-800 text-sm">
                        <strong>El factor decisivo es la percepción del riesgo:</strong> si es tan peligroso estar
                        en la camilla, probablemente es igual de peligroso estar a cargo de esa camilla. Si ese es
                        el caso, se necesita entrenamiento adicional antes de poner a cualquiera en la cuerda.
                    </p>
                </div>
            </div>
        </div>
    );
}
