import {FaHeartbeat, FaNotesMedical, FaUserMd} from "react-icons/fa";
import {BsClockHistory} from "react-icons/bs";

export default function Overview(){
    return(
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                        <FaUserMd className="text-orange-500"/>
                        ¿Qué es la Evaluación del Paciente?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Es un proceso sistemático y dinámico que permite identificar lesiones o
                        enfermedades que amenazan la vida y requieren intervención inmediata. La
                        evaluación del paciente es la base de la atención prehospitalaria y debe
                        realizarse de manera ordenada, eficiente y continua.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                        <p className="text-orange-800 font-medium">💡 Concepto clave:</p>
                        <p className="text-orange-700">Una evaluación sistemática puede ser la
                            diferencia entre la vida y la muerte del paciente.</p>
                    </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                    <div
                        className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-full">
                        <FaNotesMedical className="w-20 h-20 text-orange-600"/>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                    <BsClockHistory className="text-blue-500"/>
                    Fases principales de la evaluación
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-medium text-lg mb-2 text-blue-700 flex items-center gap-2">
                                                        <span
                                                            className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                                Evaluación de la escena
                            </h3>
                            <p className="text-blue-600">Seguridad, mecanismo de lesión o
                                naturaleza de la enfermedad, número de pacientes y recursos
                                necesarios.</p>
                        </div>
                        <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                            <h3 className="font-medium text-lg mb-2 text-red-700 flex items-center gap-2">
                                                        <span
                                                            className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                                Evaluación primaria
                            </h3>
                            <p className="text-red-600">Detección de amenazas inmediatas a la
                                vida usando el protocolo ABCDE.</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-medium text-lg mb-2 text-green-700 flex items-center gap-2">
                                                        <span
                                                            className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                                Evaluación secundaria
                            </h3>
                            <p className="text-green-600">Examen físico completo o enfocado,
                                historia clínica y signos vitales detallados.</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-medium text-lg mb-4 text-gray-800 flex items-center gap-2">
                            <FaHeartbeat className="text-red-500"/>
                            Importancia crítica
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-gray-700">Permite priorizar intervenciones que salvan vidas</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-gray-700">Reduce errores y omisiones peligrosas</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-gray-700">Mejora la comunicación con el equipo médico</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-gray-700">Facilita la transición hospitalaria</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-medium text-lg mb-3 text-yellow-800">⚠️ Recordatorio
                    importante</h3>
                <p className="text-yellow-700">La evaluación del paciente es un proceso continuo
                    que se repite durante todo el encuentro con el paciente. Los hallazgos
                    pueden cambiar y requieren reevaluación constante.</p>
            </div>
        </div>
    );
}