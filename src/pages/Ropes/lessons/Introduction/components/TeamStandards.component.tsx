import {MdOutlineLibraryBooks, MdCheckCircle} from "react-icons/md";
import {BsShieldCheck} from "react-icons/bs";
import {GiLightBulb} from "react-icons/gi";
import {FaSearch} from "react-icons/fa";

export default function TeamStandards() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShieldCheck className="w-6 h-6 mr-2 text-amber-500"/>
                    Estandarización de Sistemas
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Estandarizar los sistemas de rescate del equipo reduce la cantidad de conocimiento que el
                    estudiante debe dominar para desempeñarse bien como parte del equipo. El enfoque de sistemas
                    estandarizados evita el problema de ser introducido a una amplia variedad de habilidades y
                    luego tener que combinarlas como un sistema funcional en medio de un rescate real.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    En su lugar, el equipo puede revisar y entrenar lo que funciona mejor para la mayoría de sus
                    respuestas, y tanto los miembros antiguos como los nuevos sabrán qué esperar. Con el
                    conocimiento de las habilidades básicas del equipo, el nuevo integrante puede participar en
                    rescates y comenzar a desarrollar experiencia de campo. Con esa base, puede avanzar a
                    habilidades más avanzadas y desarrollar capacidades de liderazgo — el mismo enfoque que se
                    usa desde hace años en los servicios de bomberos y medicina de emergencia.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <MdOutlineLibraryBooks className="w-6 h-6 mr-2 text-amber-500"/>
                    Manual del Equipo
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Un manual de procedimientos operativos estándar (o guías) cumple varias funciones: es un
                    recurso que ayuda a los miembros del equipo a aprender y repasar los sistemas del equipo,
                    ilustra los procedimientos al nuevo integrante, permite el autoestudio del novato y resuelve
                    confusiones sobre cuáles son los sistemas que el equipo prefiere usar.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
                    <p className="text-gray-700 text-sm">
                        Escribir un manual de equipo obliga al equipo a estudiar a fondo lo que está haciendo.
                        Ponerlo por escrito hace que se observen las cosas desde una perspectiva diferente, lo
                        cual puede ayudar a detectar errores o resaltar lugares donde se puede añadir más finura.
                        En lugar de reescribir los manuales de rescate con cuerdas existentes, el equipo puede
                        incorporar por referencia las partes que ya ha adoptado como procedimiento estándar — el
                        manual tendrá más credibilidad si cita textos publicados en lugar de copiar y pegar.
                    </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                    <p className="text-gray-800 text-sm">
                        <strong>Importancia legal:</strong> el manual del equipo documenta los estándares de
                        entrenamiento y respuesta, lo cual es fundamental si alguna vez son cuestionados por otra
                        agencia o un tribunal. Es mucho mejor poder mostrar un documento con un estándar de
                        desempeño que cumplen, que depender de opiniones variadas sobre el nivel de habilidad y
                        la adecuación del entrenamiento del equipo.
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiLightBulb className="w-6 h-6 mr-2 text-amber-500"/>
                    Improvisación
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Aunque la capacidad de improvisar es importante, a veces se usa como excusa para no aprender
                    las habilidades fundamentales. Poder adaptar tus habilidades a lo inesperado requiere haber
                    aprendido primero esas habilidades. Estandarizar las habilidades fundamentales del equipo
                    facilita el aprendizaje y brinda la capacidad de desempeñarse en las respuestas más rutinarias,
                    donde se desarrolla la experiencia y el juicio necesarios para la efectividad y la seguridad.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaSearch className="w-6 h-6 mr-2 text-amber-500"/>
                    Revisión (Debriefing)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Si un equipo no puede analizar honestamente su desempeño después de un entrenamiento o
                    rescate, no puede mejorar. Felicitar al equipo por un buen trabajo está bien, pero es la
                    búsqueda de la mejora la que hace que el equipo sea mejor. Es responsabilidad de los líderes
                    del equipo establecer el proceso de revisión y utilizarlo.
                </p>
                <ul className="space-y-2">
                    <li className="flex items-start bg-white border border-gray-200 rounded-lg p-3">
                        <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"/>
                        <span className="text-gray-700 text-sm">Todo rescate pudo haberse hecho un poco más seguro o más rápido, incluso los que parecen perfectos.</span>
                    </li>
                    <li className="flex items-start bg-white border border-gray-200 rounded-lg p-3">
                        <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"/>
                        <span className="text-gray-700 text-sm">Es importante señalar también lo que funcionó excepcionalmente bien, para reforzar el entrenamiento.</span>
                    </li>
                    <li className="flex items-start bg-white border border-gray-200 rounded-lg p-3">
                        <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"/>
                        <span className="text-gray-700 text-sm">Los escenarios de entrenamiento y los rescates deben revisarse de inicio a fin, buscando ahorrar tiempo, eliminar confusión o aumentar la seguridad.</span>
                    </li>
                    <li className="flex items-start bg-white border border-gray-200 rounded-lg p-3">
                        <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"/>
                        <span className="text-gray-700 text-sm">Cualquier problema, especialmente un accidente o casi-accidente, debe discutirse de manera objetiva.</span>
                    </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                    Los mejores equipos de rescate son aquellos que tienen el valor y la disposición para criticar
                    su propio desempeño.
                </p>
            </div>
        </div>
    );
}
