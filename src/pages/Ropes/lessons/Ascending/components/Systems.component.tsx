import { FaFrog, FaMapMarkerAlt } from "react-icons/fa";
import { MdSettingsEthernet } from "react-icons/md";

export default function Systems() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Los 3 Sistemas Principales de Ascenso
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    El mundo del ascenso por cuerdas está dominado por tácticas de "Sit-Stand" (sentarse y pararse). Escoger el correcto define cuánta energía gastarás.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                
                {/* Tender System */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <MdSettingsEthernet className="w-5 h-5 text-slate-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Tender System</h3>
                    </div>
                    <p className="text-xs text-slate-600 mb-2 font-bold italic">Rápido pero Ineficiente</p>
                    <p className="text-sm text-gray-700 mb-3 flex-grow">
                        Usado por el rescatista de camilla (Litter Tender). Un bloqueador directo al arnés, y otro arriba con pedal (¡este último necesita una línea extra atada de vuelta al arnés para cumplir la regla de 2 puntos!).
                        Permite intercambiar a rapel rápidamente.
                    </p>
                </div>

                {/* Texas System */}
                <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-sm flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaMapMarkerAlt className="w-5 h-5 text-red-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Texas System</h3>
                    </div>
                    <p className="text-xs text-red-600 mb-2 font-bold italic">El Clásico de Rescate (Sit-Stand)</p>
                    <ul className="text-sm space-y-2 text-gray-700 list-disc list-inside flex-grow">
                        <li>Bloqueador Superior: Anclado directo a tu arnés a la altura de tu cara. Te sientas en él.</li>
                        <li>Bloqueador Inferior: A nivel de pecho. Tiene el pedal para pararte y una línea de seguridad al arnés.</li>
                        <li>El paso no debe ser gigantesco o fundirás tus cuádriceps y hombros.</li>
                    </ul>
                </div>

                {/* Frog System */}
                <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-sm flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaFrog className="w-5 h-5 text-green-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Frog System</h3>
                    </div>
                    <p className="text-xs text-green-600 mb-2 font-bold italic">Ergonomía Pura (Rope Access)</p>
                    <ul className="text-sm space-y-2 text-gray-700 list-disc list-inside flex-grow">
                        <li>Requiere Arnés de Pecho. Un bloqueador (CROLL) va prensado entre tu cintura y pecho.</li>
                        <li>Al pararte sobre el bloqueador de mano superior, el Croll de pecho avanza automáticamente pegado a tu torso.</li>
                        <li>Salva tus bíceps, el trabajo lo hacen las piernas.</li>
                    </ul>
                </div>

            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5 mt-4">
                <h4 className="font-bold text-indigo-900 mb-2">Escalada de Estribos (Jumaring)</h4>
                <p className="text-sm text-indigo-800">
                    Es una técnica vieja donde tienes un estribo para el pie derecho y uno para el izquierdo. Es extremadamente agotadora para subidas largas porque todo el peso de mantener tu cuerpo vertical "en el aire" sin voltearte recae únicamente en la fuerza isométrica de tus brazos. 
                </p>
            </div>
            
        </div>
    );
}
