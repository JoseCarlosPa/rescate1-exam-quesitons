import { FaUserPlus, FaStrava } from "react-icons/fa";

export default function TieInSystems() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Sistemas de Amarre (Tie-In)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Técnicas comerciales e improvisadas para inmovilizar firmemente al paciente dentro de la camilla (Litter).
                </p>
            </div>

            <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-bl-lg font-bold text-xs">
                    Comercial
                </div>
                <div className="flex items-center gap-2 mb-3">
                    <FaStrava className="w-6 h-6 text-indigo-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Patient Tie-In System Comercial</h3>
                </div>
                
                <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
                    <li>Retire a los lados las cintas exteriores (roja y azul). Coloque el arnés pélvico (amarillo) y deslícelo por debajo del paciente desde el centro hacia afuera.</li>
                    <li>Conecte y ajuste el arnés pélvico. <strong>Su propósito es evitar que el paciente se deslice, NO colgarlo de la pelvis.</strong></li>
                    <li>Cruce las cintas exteriores de colores en "X" sobre el pecho y las piernas usando los ojales rápidos, ajustando la holgura.</li>
                </ol>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <FaUserPlus className="w-6 h-6 text-indigo-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Amarres Improvisados (con Cinta Tubular)</h3>
                </div>
                
                <div className="space-y-5">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-indigo-800 mb-1 border-b pb-1">1. Arnés Pélvico Improvisado (20 pies)</h4>
                        <p className="text-sm text-gray-700">
                            Pase el centro de la cinta por la entrepierna, traiga los cabos sobre los muslos y por debajo del lazo central (hasty harness). Ate un nudo simple (overhand) a cada lado y lleve las cintas a los tubos verticales cerca de la cabeza, rematando con vuelta redonda y dos cotes (Round turn & two half hitches).
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-indigo-800 mb-1 border-b pb-1">2. Arnés de Pecho (12 pies)</h4>
                        <p className="text-sm text-gray-700">
                            Evita que el paciente se deslice hacia la cabeza (si la camilla apunta abajo o gira en el helicóptero). Las cintas cruzan los hombros como tirantes de mochila anclándose a la estructura superior.
                        </p>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg relative shadow-inner">
                        <div className="absolute top-2 right-2 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            El más importante
                        </div>
                        <h4 className="font-bold text-indigo-900 mb-1">3. Amarre Externo / External Lashing (20 pies)</h4>
                        <p className="text-sm text-gray-800 mb-2">
                            Asegura las piernas y el torso. Inicie debajo de las rodillas centrado, cruce las hebras en una gran "X" sobre el paciente anclando en los postes y suba cruzando nuevamente hasta el pecho/cabeza.
                        </p>
                        <p className="text-xs text-red-600 font-bold mt-2 bg-red-50 p-2 rounded border border-red-100">
                            PRECAUCIÓN DE CAMILLAS PLÁSTICAS: Si se aprieta la cinta externa mientras la camilla plástica cuelga en el aire (combada), al posarla en el suelo la camilla se enderezará, apretando la cinta peligrosamente contra el pecho del paciente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
