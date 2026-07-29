import { MdHealing } from "react-icons/md";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Objetivo */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdHealing className="w-8 h-8 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-blue-800">Principios de Empaquetamiento (Packaging)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El empaquetamiento final del paciente transfiere la responsabilidad de su seguridad y confort enteramente al equipo de rescate. Un paciente bien empaquetado estará seguro, cómodo, y protegido de lesiones adicionales causadas por el entorno o el propio equipo.
                </p>
            </div>

            {/* Metas */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Reglas Generales de Confort</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800 mb-1">Acolchado y Aislamiento</p>
                        <p className="text-sm text-gray-700">
                            Las camillas plásticas o de canastilla carecen de acolchado adecuado. Usar colchones de vacío (Vacuum splints) es ideal para inmovilizar y aislar térmicamente. Las mallas (mesh inserts) son útiles en calor para ventilar y drenar líquidos.
                        </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800 mb-1">Carga del Paciente</p>
                        <p className="text-sm text-gray-700">
                            Si el terreno es empinado, estabilice firmemente la camilla. Es mucho más fácil deslizar la camilla por debajo del paciente elevándolo ligeramente que intentar levantarlo y pasarlo por encima de las altas barandas de la canastilla.
                        </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800 mb-1">Rescate Vertical de Arnés</p>
                        <p className="text-sm text-gray-700">
                            Si el paciente cuelga en pared de un arnés, se puede alargar o soltar temporalmente una pata del arnés de la camilla para deslizarla por debajo. <strong>Nunca se debe retirar el seguro (belay) del paciente durante la transición.</strong>
                        </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800 mb-1">Protección de Manos</p>
                        <p className="text-sm text-gray-700">
                            Atar las manos genera pánico y claustrofobia. Hágalo en el último segundo antes de mover la carga y dele a la persona un trozo de cinta para agarrarse y sentir seguridad interior. Ningún dedo debe sobresalir de la baranda.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
