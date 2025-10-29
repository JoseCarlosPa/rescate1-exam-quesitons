export default function Practice(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos
                para análisis</h2>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Paciente con
                    autismo en crisis</h3>
                <p className="italic text-gray-600 mb-4">
                    Niño de 12 años con trastorno del espectro autista. Durante una visita al centro
                    comercial,
                    se presenta agitado, gritando y autolesionándose tras un ruido fuerte. Los
                    padres reportan
                    que no responde a su nombre y presenta movimientos repetitivos.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>A: Vía aérea permeable</li>
                        <li>B: FR elevada por agitación, saturación normal</li>
                        <li>C: FC elevada, perfusión adecuada</li>
                        <li>D: Agitado, no responde a comandos verbales</li>
                        <li>E: Heridas menores por autolesión en brazos</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo apropiado:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Minimizar estímulos sensoriales (luces, sonidos)</li>
                        <li>Permitir que los padres permanezcan cerca</li>
                        <li>Evitar contacto físico innecesario</li>
                        <li>Usar tono de voz calmado y consistente</li>
                        <li>Considerar sedación solo si hay riesgo inmediato</li>
                        <li>Transporte con un padre acompañante</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Paciente con
                    ventilador domiciliario</h3>
                <p className="italic text-gray-600 mb-4">
                    Mujer de 45 años con esclerosis lateral amiotrófica (ELA), dependiente de
                    ventilador domiciliario.
                    La familia llama por falla en el equipo. Al llegar, encuentran a la paciente
                    consciente pero
                    con dificultad respiratoria evidente.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>A: Traqueostomía permeable</li>
                        <li>B: FR 30/min, ventilador con alarma, SpO₂ 89%</li>
                        <li>C: FC 110/min, TA estable</li>
                        <li>D: Consciente, ansiosa, comunicación por parpadeo</li>
                        <li>E: Paciente en cama, múltiples dispositivos médicos</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo correcto:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Verificar conexiones del ventilador y fuente de energía</li>
                        <li>Tener BVM conectado a oxígeno listo para usar</li>
                        <li>Aspirar secreciones de traqueostomía si es necesario</li>
                        <li>Comunicarse directamente con la paciente</li>
                        <li>Obtener información de cuidadores sobre configuraciones</li>
                        <li>Transportar con ventilador portátil si está disponible</li>
                        <li>Monitorización continua durante transporte</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Paciente con
                    discapacidad intelectual</h3>
                <p className="italic text-gray-600 mb-4">
                    Hombre de 30 años con síndrome de Down que vive en un hogar grupal. Presenta
                    dolor abdominal agudo.
                    El personal reporta que ha estado inquieto y se niega a comer desde la mañana.
                    Tiene dificultad para expresar lo que le duele.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>A: Vía aérea permeable</li>
                        <li>B: Respiración normal</li>
                        <li>C: FC 95/min, TA dentro de parámetros normales</li>
                        <li>D: Consciente, limitaciones cognitivas evidentes</li>
                        <li>E: Protege región abdominal, no fiebre</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo apropiado:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Usar lenguaje simple y directo</li>
                        <li>Obtener historia del cuidador familiar</li>
                        <li>Permitir que cuidador acompañe durante evaluación</li>
                        <li>Explicar procedimientos en términos simples</li>
                        <li>Ser paciente y permitir tiempo extra</li>
                        <li>Evaluar dolor usando escalas visuales apropiadas</li>
                        <li>Considerar condiciones médicas asociadas al síndrome</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}