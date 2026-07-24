import {FaUserTie, FaExclamationTriangle} from "react-icons/fa";
import {MdCheckCircle} from "react-icons/md";

export default function SelectingInstructor() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaUserTie className="w-6 h-6 mr-2 text-amber-500"/>
                    Seleccionando una Escuela o Instructor de Rescate con Cuerdas
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Existen muchas formas de aprender sobre rescate con cuerdas. La mejor es que el equipo tome
                    un curso impartido en un terreno similar a donde realiza sus rescates. Un instructor externo
                    puede aportar información nueva y variaciones en las técnicas, además de observar las
                    operaciones del equipo desde una perspectiva fresca, notando cosas que los instructores
                    internos podrían pasar por alto.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg mb-4">
                    <div className="flex items-center mb-2">
                        <FaExclamationTriangle className="w-5 h-5 text-amber-600 mr-2"/>
                        <p className="font-bold text-amber-700">No existe una certificación nacional oficial</p>
                    </div>
                    <p className="text-gray-700 text-sm">
                        Como no existe una certificación reconocida a nivel nacional para instructores de rescate
                        con cuerdas, cualquier persona puede presentarse como instructor. Si alguien paga por sus
                        servicios, se convierte en un instructor "profesional" — incluso si su única calificación
                        fue haber tomado un curso introductorio. Esto pone la responsabilidad de investigar sobre
                        el equipo u organización.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Preguntas sobre el curso</h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {[
                        'Contenido y alcance del curso',
                        'Origen de cualquier certificación otorgada',
                        'Clases anteriores impartidas',
                        'Experiencia del instructor como docente',
                        'Experiencia del instructor en rescates reales',
                        'Seguro de responsabilidad civil (liability insurance)',
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start bg-white border border-gray-200 rounded-lg p-3">
                            <MdCheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0"/>
                            <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-gray-800">
                    <strong>Señal de alerta:</strong> si un curso promete certificar a un principiante como
                    técnico o instructor de rescate en cuatro horas, o incluso en un fin de semana completo,
                    debes ser desconfiado. Un buen curso dedica tiempo a enseñar los fundamentos y, antes de
                    ofrecer un curso avanzado, debe conocer cuánta experiencia y entrenamiento previo tienes.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Preguntas sobre las referencias del curso</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>¿Cuántos estudiantes habrá en la clase?</li>
                    <li>¿Cuál es la proporción estudiante/instructor?</li>
                    <li>¿Se imparte en el aula o en campo?</li>
                    <li>¿Cuál es la proporción entre práctica y teoría?</li>
                    <li>¿La clase se imparte en el propio terreno del equipo?</li>
                    <li>¿Cuál es su historial de seguridad?</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Calificaciones del instructor</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>¿Tienen los instructores experiencia en servicios de emergencia?</li>
                    <li>¿Cuánta experiencia tienen como docentes?</li>
                    <li>¿Son instructores de tiempo completo, parcial u ocasional?</li>
                    <li>¿Pueden proporcionar referencias de clases anteriores?</li>
                    <li className="font-semibold text-amber-700">¿Han participado los instructores en rescates reales con cuerdas?</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Este último punto es especialmente importante: un instructor con experiencia real en rescates
                    aporta una conexión con el mundo real que no tiene alguien cuyo único bagaje es haber asistido
                    a cursos. Ningún curso, por completo que sea, agota todo lo que un rescatista necesita saber —
                    tomar una sola capacitación no significa que tu formación esté cerca de completarse.
                </p>
            </div>
        </div>
    );
}
