import {MdTimer} from "react-icons/md";
import {BsCalculator} from "react-icons/bs";
import {TbMedicineSyrup} from "react-icons/tb";

export default function Tables(){
    return(
        <div className="space-y-8">
            <div
                className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <BsCalculator className="w-8 h-8 text-indigo-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-indigo-700">Tablas de Referencia
                        Rápida</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Herramientas esenciales para cálculos rápidos y toma de decisiones en el
                    campo.
                    <span className="text-indigo-600 font-semibold"> Mantén estas referencias siempre accesibles</span>.
                </p>
            </div>

            {/* Vías de administración mejorada */}
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <TbMedicineSyrup className="w-6 h-6 mr-2 text-orange-500"/>
                    Vías de Administración - Comparación Detallada
                </h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg shadow-sm">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                        <tr>
                            <th className="py-3 px-4 border text-left">Vía</th>
                            <th className="py-3 px-4 border text-center">Inicio de Acción</th>
                            <th className="py-3 px-4 border text-left">Ventajas</th>
                            <th className="py-3 px-4 border text-left">Desventajas</th>
                            <th className="py-3 px-4 border text-left">Uso en Emergencias</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-blue-50">
                            <td className="py-3 px-4 border font-medium text-blue-700">Oral</td>
                            <td className="py-3 px-4 border text-center">30-60 min</td>
                            <td className="py-3 px-4 border">
                                <ul className="text-sm">
                                    <li>• Fácil administración</li>
                                    <li>• No invasiva</li>
                                    <li>• Económica</li>
                                    <li>• Autoadministración</li>
                                </ul>
                            </td>
                            <td className="py-3 px-4 border">
                                <ul className="text-sm">
                                    <li>• Absorción lenta e impredecible</li>
                                    <li>• No en inconscientes</li>
                                    <li>• Afectada por alimentos</li>
                                    <li>• Primer paso hepático</li>
                                </ul>
                            </td>
                            <td className="py-3 px-4 border text-sm">Limitada a emergencias
                                leves, pacientes conscientes
                            </td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="py-3 px-4 border font-medium text-green-700">Sublingual</td>
                            <td className="py-3 px-4 border text-center">1-5 min</td>
                            <td className="py-3 px-4 border">
                                <ul className="text-sm">
                                    <li>• Absorción rápida</li>
                                    <li>• Evita primer paso</li>
                                    <li>• Fácil administración</li>
                                    <li>• No requiere deglución</li>
                                </ul>
                            </td>
                            <td className="py-3 px-4 border">
                                <ul className="text-sm">
                                    <li>• Solo pacientes conscientes</li>
                                    <li>• Limitado a ciertos fármacos</li>
                                    <li>• Puede ser escupido</li>
                                    <li>• Sabor desagradable</li>
                                </ul>
                            </td>
                            <td className="py-3 px-4 border text-sm">Ideal para nitroglicerina,
                                algunos analgésicos
                            </td>
                        </tr>
                        <tr className="hover:bg-purple-50">
                            <td className="py-3 px-4 border font-medium text-purple-700">Intramuscular
                                (IM)
                            </td>
                            <td className="py-3 px-4 border text-center">10-30 min</td>
                            <td className="py-3 px-4 border">
                                <ul className="text-sm">
                                    <li>• Absorción predecible</li>
                                    <li>• Útil en inconscientes</li>
                                    <li>• Volúmenes moderados</li>
                                    <li>• Técnica simple</li>
                                </ul>
                            </td>
                            <td className="py-3 px-4 border">
                                <ul className="text-sm">
                                    <li>• Dolor en el sitio</li>
                                    <li>• Riesgo de lesión nerviosa</li>
                                    <li>• Absorción variable en shock</li>
                                    <li>• Requiere técnica estéril</li>
                                </ul>
                            </td>
                            <td className="py-3 px-4 border text-sm">Excelente para epinefrina
                                en anafilaxia, analgésicos
                            </td>
                        </tr>
                        <tr className="hover:bg-red-50">
                            <td className="py-3 px-4 border font-medium text-red-700">Intravenosa
                                (IV)
                            </td>
                            <td className="py-3 px-4 border text-center">30 seg - 2 min</td>
                            <td className="py-3 px-4 border">
                                <ul className="text-sm">
                                    <li>• Efecto inmediato</li>
                                    <li>• Biodisponibilidad 100%</li>
                                    <li>• Control preciso de dosis</li>
                                    <li>• Grandes volúmenes</li>
                                </ul>
                            </td>
                            <td className="py-3 px-4 border">
                                <ul className="text-sm">
                                    <li>• Requiere acceso venoso</li>
                                    <li>• Riesgo de complicaciones</li>
                                    <li>• Técnica más compleja</li>
                                    <li>• Irreversible una vez dada</li>
                                </ul>
                            </td>
                            <td className="py-3 px-4 border text-sm">Estándar de oro en
                                emergencias críticas, shock
                            </td>
                        </tr>
                        <tr className="hover:bg-yellow-50">
                            <td className="py-3 px-4 border font-medium text-yellow-700">Inhalada</td>
                            <td className="py-3 px-4 border text-center">1-5 min</td>
                            <td className="py-3 px-4 border">
                                <ul className="text-sm">
                                    <li>• Acción local directa</li>
                                    <li>• Rápida absorción</li>
                                    <li>• Menos efectos sistémicos</li>
                                    <li>• Autoadministración posible</li>
                                </ul>
                            </td>
                            <td className="py-3 px-4 border">
                                <ul className="text-sm">
                                    <li>• Técnica dependiente</li>
                                    <li>• Dosificación imprecisa</li>
                                    <li>• Limitado a vía respiratoria</li>
                                    <li>• Cooperación del paciente</li>
                                </ul>
                            </td>
                            <td className="py-3 px-4 border text-sm">Primera línea en asma,
                                EPOC, emergencias respiratorias
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Equivalencias y conversiones */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                    <BsCalculator className="w-6 h-6 mr-2"/>
                    Conversiones y Equivalencias Esenciales
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-blue-800 mb-3">Peso</h4>
                        <ul className="space-y-1 text-sm">
                            <li>1 kg = 1000 g</li>
                            <li>1 lb = 0.45 kg</li>
                            <li>1 kg = 2.2 lb</li>
                            <li>1 piedra = 14 lb = 6.35 kg</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-blue-800 mb-3">Volumen</h4>
                        <ul className="space-y-1 text-sm">
                            <li>1 L = 1000 ml</li>
                            <li>1 cucharadita = 5 ml</li>
                            <li>1 cucharada = 15 ml</li>
                            <li>1 onza = 30 ml</li>
                            <li>1 taza = 240 ml</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-blue-800 mb-3">Concentración</h4>
                        <ul className="space-y-1 text-sm">
                            <li>1% = 10 mg/ml</li>
                            <li>1:1000 = 1 mg/ml</li>
                            <li>1:10,000 = 0.1 mg/ml</li>
                            <li>1 g = 1000 mg</li>
                            <li>1 mg = 1000 mcg</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Fórmulas de cálculo */}
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Fórmulas de Cálculo
                    Farmacológico</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-bold text-green-700 mb-3">Cálculo de Dosis</h4>
                        <div className="space-y-4">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="font-semibold mb-2">Dosis = Peso × Dosis por
                                    kg</p>
                                <p className="text-sm text-gray-600">Ejemplo: Paracetamol 15
                                    mg/kg para niño de 20 kg</p>
                                <p className="text-sm text-green-600">Dosis = 20 kg × 15 mg/kg =
                                    300 mg</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="font-semibold mb-2">Volumen = Dosis ÷
                                    Concentración</p>
                                <p className="text-sm text-gray-600">Ejemplo: Administrar 300 mg
                                    de paracetamol (100 mg/ml)</p>
                                <p className="text-sm text-green-600">Volumen = 300 mg ÷ 100
                                    mg/ml = 3 ml</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h4 className="font-bold text-orange-700 mb-3">Goteo IV</h4>
                        <div className="space-y-4">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="font-semibold mb-2">Gotas/min = (Vol ml × Factor
                                    goteo) ÷ Tiempo min</p>
                                <p className="text-sm text-gray-600">Factor goteo estándar = 20
                                    gotas/ml</p>
                                <p className="text-sm text-orange-600">Ejemplo: 250 ml en 2
                                    horas = 42 gotas/min</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="font-semibold mb-2">ml/hr = Vol total ÷ Tiempo en
                                    horas</p>
                                <p className="text-sm text-gray-600">Para bombas de infusión</p>
                                <p className="text-sm text-orange-600">Ejemplo: 500 ml en 4 h =
                                    125 ml/hr</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Términos farmacológicos importantes */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Glosario de Términos
                    Farmacológicos</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg shadow-sm">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                        <tr>
                            <th className="py-3 px-4 border text-left">Término</th>
                            <th className="py-3 px-4 border text-left">Definición</th>
                            <th className="py-3 px-4 border text-left">Importancia Clínica</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-blue-50">
                            <td className="py-3 px-4 border font-medium text-blue-700">Farmacocinética</td>
                            <td className="py-3 px-4 border">Procesos ADME: Absorción,
                                Distribución, Metabolismo, Excreción
                            </td>
                            <td className="py-3 px-4 border">Determina duración e intensidad del
                                efecto
                            </td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="py-3 px-4 border font-medium text-green-700">Farmacodinamia</td>
                            <td className="py-3 px-4 border">Efectos y mecanismos de acción del
                                fármaco en el organismo
                            </td>
                            <td className="py-3 px-4 border">Explica cómo y por qué funciona el
                                medicamento
                            </td>
                        </tr>
                        <tr className="hover:bg-purple-50">
                            <td className="py-3 px-4 border font-medium text-purple-700">Biodisponibilidad</td>
                            <td className="py-3 px-4 border">% de fármaco que llega a
                                circulación sistémica
                            </td>
                            <td className="py-3 px-4 border">IV=100%, oral variable según
                                absorción
                            </td>
                        </tr>
                        <tr className="hover:bg-orange-50">
                            <td className="py-3 px-4 border font-medium text-orange-700">Vida
                                media (T½)
                            </td>
                            <td className="py-3 px-4 border">Tiempo para reducir concentración
                                plasmática a la mitad
                            </td>
                            <td className="py-3 px-4 border">Determina frecuencia de
                                dosificación
                            </td>
                        </tr>
                        <tr className="hover:bg-red-50">
                            <td className="py-3 px-4 border font-medium text-red-700">Efecto de
                                primer paso
                            </td>
                            <td className="py-3 px-4 border">Metabolismo hepático antes de
                                llegar a circulación sistémica
                            </td>
                            <td className="py-3 px-4 border">Reduce biodisponibilidad de
                                medicamentos orales
                            </td>
                        </tr>
                        <tr className="hover:bg-yellow-50">
                            <td className="py-3 px-4 border font-medium text-yellow-700">Agonista</td>
                            <td className="py-3 px-4 border">Fármaco que activa receptores
                                produciendo respuesta
                            </td>
                            <td className="py-3 px-4 border">Ejemplo: Salbutamol en receptores
                                β2
                            </td>
                        </tr>
                        <tr className="hover:bg-indigo-50">
                            <td className="py-3 px-4 border font-medium text-indigo-700">Antagonista</td>
                            <td className="py-3 px-4 border">Fármaco que bloquea receptores sin
                                activarlos
                            </td>
                            <td className="py-3 px-4 border">Ejemplo: Naloxona para opioides
                            </td>
                        </tr>
                        <tr className="hover:bg-cyan-50">
                            <td className="py-3 px-4 border font-medium text-cyan-700">Sinergia</td>
                            <td className="py-3 px-4 border">Efecto combinado mayor que suma de
                                efectos individuales
                            </td>
                            <td className="py-3 px-4 border">Puede potenciar efectos
                                terapéuticos o tóxicos
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium text-gray-700">Tolerancia</td>
                            <td className="py-3 px-4 border">Disminución del efecto con uso
                                repetido
                            </td>
                            <td className="py-3 px-4 border">Requiere aumento de dosis para
                                mismo efecto
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Herramientas de cálculo rápido */}
            <div
                className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                    <MdTimer className="w-6 h-6 mr-2"/>
                    Herramientas de Cálculo Rápido
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3">Regla de los 9s para
                            peso pediátrico:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• 1 año: 9-11 kg</li>
                            <li>• 2 años: 12-14 kg</li>
                            <li>• 3 años: 15-17 kg</li>
                            <li>• Fórmula: (Edad × 2) + 8 = peso aprox en kg</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3">Cálculos de
                            emergencia comunes:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Epinefrina 1:1000 = 1 mg/ml</li>
                            <li>• Epinefrina pediátrica = 0.01 mg/kg</li>
                            <li>• Glucosa 50% = 500 mg/ml</li>
                            <li>• Suero fisiológico = 0.9% = 9 mg/ml NaCl</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}