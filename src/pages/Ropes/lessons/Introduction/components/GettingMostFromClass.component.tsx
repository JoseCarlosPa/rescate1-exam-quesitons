import {GiMuscleUp} from "react-icons/gi";
import {FaBookReader, FaBalanceScale} from "react-icons/fa";

export default function GettingMostFromClass() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiMuscleUp className="w-6 h-6 mr-2 text-amber-500"/>
                    Aprovechando al Máximo una Clase
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Estos consejos ayudan a aprovechar el tiempo (y el dinero) invertido en una capacitación de
                    rescate con cuerdas.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
                    <h3 className="font-bold text-gray-800 mb-2">Condición física</h3>
                    <p className="text-gray-700 text-sm">
                        Las torres de rapel y las laderas de práctica requieren múltiples subidas. En tu primer
                        rapel, es posible que agarres la cuerda con tanta intensidad que se tensen músculos y
                        ligamentos. Estira piernas y tobillos para tener la flexibilidad necesaria. El rapel y
                        los sistemas de rescate son trabajo físico pesado — asegúrate de estar en condiciones
                        para levantar camillas y traccionar cuerdas.
                    </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
                    <div className="flex items-center mb-2">
                        <FaBalanceScale className="w-5 h-5 text-amber-500 mr-2"/>
                        <h3 className="font-bold text-gray-800">Equilibrio entre preguntar y escuchar</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                        Durante la clase, se debe buscar un equilibrio entre hacer preguntas y dejar que el
                        instructor enseñe. Usualmente hay al menos un estudiante que busca demostrar lo que sabe
                        en lugar de aprender lo que se está enseñando. Un buen instructor incorporará ideas
                        alternativas, pero su responsabilidad principal es con todo el grupo.
                    </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <div className="flex items-center mb-2">
                        <FaBookReader className="w-5 h-5 text-amber-500 mr-2"/>
                        <h3 className="font-bold text-gray-800">La práctica hace la diferencia</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                        La práctica en campo hace que la teoría y las habilidades se integren y refuerza el
                        aprendizaje. Lo que se escucha en clase no se retiene tanto como lo que se hace en clase.
                        Esta es la oportunidad de trabajar los sistemas bajo la mirada experimentada del instructor.
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Otras Fuentes de Aprendizaje</h2>
                <p className="text-gray-700 leading-relaxed">
                    Los libros y revistas son excelentes para repasar y conocer diferentes ideas y conceptos —
                    algunos existen desde hace mucho tiempo, pero siempre hay algo que aprender de ellos. Los
                    seminarios de rescate también son un buen lugar para aprender, ya que dan la oportunidad de
                    hablar con otras personas del medio y ver demostraciones de cómo otros equipos abordan sus
                    problemas técnicos.
                </p>
            </div>
        </div>
    );
}
