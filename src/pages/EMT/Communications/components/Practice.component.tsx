export default function Practice(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                prácticos para análisis</h2>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 bg-orange-50 rounded-lg shadow-sm mb-4">
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Error de
                        comunicación en radio</h3>
                    <p className="italic text-gray-600 mb-4">
                        Un TAMP transmite un reporte de paciente politraumatizado, pero omite
                        mencionar la saturación de oxígeno y el tratamiento administrado.
                    </p>
                    <div>
                        <h4 className="font-medium mb-2">Errores:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Falta de información relevante para la recepción hospitalaria.
                            </li>
                            <li>Puede retrasar la preparación del equipo de salud.</li>
                        </ul>
                    </div>
                </div>
                <div className="p-5 bg-blue-50 rounded-lg shadow-sm mb-4">
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2:
                        Documentación incompleta</h3>
                    <p className="italic text-gray-600 mb-4">
                        Un paciente rechaza el traslado, pero el TAMP no documenta la
                        advertencia de riesgos ni obtiene la firma del paciente.
                    </p>
                    <div>
                        <h4 className="font-medium mb-2">Consecuencias:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Riesgo legal para el TAMP y la institución.</li>
                            <li>No se protege adecuadamente al personal ante posibles
                                reclamaciones.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-5 bg-green-50 rounded-lg shadow-sm mb-4">
                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3:
                        Comunicación efectiva</h3>
                    <p className="italic text-gray-600 mb-4">
                        El equipo de ambulancia utiliza el sistema SAMPLE y OPQRST para obtener
                        información precisa y transmite un reporte claro y completo al hospital.
                    </p>
                    <div>
                        <h4 className="font-medium mb-2">Beneficios:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Mejor preparación del hospital para recibir al paciente.</li>
                            <li>Reducción de errores y mejora en la atención.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}