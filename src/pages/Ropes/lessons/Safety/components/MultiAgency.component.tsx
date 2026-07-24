import {MdGroups, MdCheckCircle} from "react-icons/md";
import {FaExclamationTriangle} from "react-icons/fa";

const STEPS = [
    {
        title: 'Evaluar la Situación',
        detail: 'Al llegar a la escena, el líder del equipo debe primero averiguar quién está a cargo del incidente, recibir un briefing completo, conocer el sistema de comando y determinar quién tiene la responsabilidad médica sobre el paciente.',
    },
    {
        title: 'Estabilizar y Asegurar',
        detail: 'Si se trabaja con una agencia con poca experiencia en rescate con cuerdas, la preocupación inicial es estabilizar a la víctima y establecer aseguramiento (belay) para toda persona expuesta a una caída. Verificar rápidamente cualquier cuerda ya instalada.',
    },
    {
        title: 'Coordinar los Equipos',
        detail: 'Sin importar quién esté a cargo, el líder de tu equipo sigue siendo responsable de la seguridad de tu propio equipo. Aprovechar el trabajo ya realizado por otros, y hacer que los equipos trabajen juntos, ahorra tiempo valioso.',
    },
];

export default function MultiAgency() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <MdGroups className="w-6 h-6 mr-2 text-red-500"/>
                    Respuestas Multiagencia
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    En muchas jurisdicciones, el equipo de rescate con cuerdas trabajará junto a una unidad
                    médica de primera respuesta, policía, bomberos u otro escuadrón de rescate. Si ya existe una
                    buena relación de trabajo con la agencia que se apoya, muchos de estos problemas ya estarán
                    resueltos.
                </p>

                <div className="space-y-4">
                    {STEPS.map((step, idx) => (
                        <div key={idx} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-5">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 text-white font-bold flex items-center justify-center">
                                {idx + 1}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{step.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
                <div className="flex items-center mb-2">
                    <FaExclamationTriangle className="w-5 h-5 text-red-600 mr-2"/>
                    <p className="font-bold text-red-700">La seguridad de tu equipo es tu responsabilidad</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Sin importar quién esté a cargo del incidente, el líder de tu equipo sigue siendo responsable
                    de la seguridad de tu propio equipo. Si no tiene suficiente control sobre la participación del
                    equipo para garantizar un nivel de seguridad aceptable, puede tener que negarse a participar.
                    Es una decisión difícil rechazar ayudar en una emergencia, pero ningún miembro del equipo se
                    comprometió a tomar riesgos injustificados.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-2">
                    <MdCheckCircle className="w-5 h-5 text-green-500 mr-2"/>
                    <p className="font-bold text-gray-800">Un activo valioso</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                    No todas las agencias tienen la misma experiencia en rescate con cuerdas. Tu equipo puede ser
                    un activo muy valioso si se integra rápidamente a una respuesta en curso de manera
                    inteligente y profesional. Ayuda mucho haber trabajado antes con las otras agencias — si no,
                    en la escena tendrás que demostrar tanto tu experiencia técnica como tu capacidad de
                    comunicarte y trabajar con otros.
                </p>
            </div>
        </div>
    );
}
