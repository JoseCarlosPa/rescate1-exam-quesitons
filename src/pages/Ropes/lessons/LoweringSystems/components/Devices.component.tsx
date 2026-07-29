import { MdSettingsApplications, MdConstruction } from "react-icons/md";
import { FaGripLines, FaPauseCircle } from "react-icons/fa";

export default function Devices() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Dispositivos de Descenso
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Técnicas y operaciones específicas de dispositivos de rescate modernos.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* CLUTCH */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <MdSettingsApplications className="w-6 h-6 text-slate-700" />
                        <h3 className="font-bold text-gray-800 text-lg">Operando el CLUTCH</h3>
                    </div>
                    <ul className="text-sm space-y-3 text-gray-700">
                        <li>
                            <strong className="text-slate-900 block mb-1">Posición del Operador:</strong> 
                            Debe situarse detrás del dispositivo, entre el CLUTCH y el anclaje, manteniendo un contacto visual con la cuerda, el borde y la otra estación de anclaje.
                        </li>
                        <li>
                            <strong className="text-slate-900 block mb-1">El Descenso:</strong> 
                            Girar la manija de control hacia la posición "Release". <em>Siempre mantener una mano agarrando la cuerda que entra al dispositivo</em>.
                        </li>
                        <li>
                            <strong className="text-slate-900 block mb-1">Cargas Pesadas:</strong> 
                            Para incrementar la fricción (cargas enormes), añadir un mosquetón extra en el anclaje o dispositivo y pasar la cuerda de freno por él.
                        </li>
                        <li>
                            <strong className="text-slate-900 block mb-1">Modos de Seguridad:</strong> 
                            Si hay inactividad corta, poner en "Standby". Si estará desatendido, rotar a la posición "Stop" (traba la cuerda y esconde la manija).
                        </li>
                    </ul>
                </div>

                {/* MPD */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <MdConstruction className="w-6 h-6 text-slate-700" />
                        <h3 className="font-bold text-gray-800 text-lg">Operando el MPD</h3>
                    </div>
                    <ul className="text-sm space-y-3 text-gray-700">
                        <li>
                            <strong className="text-slate-900 block mb-1">Curva en 'S':</strong> 
                            Se debe sostener el cabo (running end) firmemente hacia atrás y paralelo a la carga, friccionándolo contra la muesca fija en 'V'. Esto forma una "S" que prolonga la vida del freno móvil interno.
                        </li>
                        <li>
                            <strong className="text-slate-900 block mb-1">Inicio del Descenso:</strong> 
                            Desenganchar el freno (Parking Brake), jalar el mango (Release Handle) hacia afuera y girarlo en sentido <em>antihorario</em>.
                        </li>
                        <li>
                            <strong className="text-slate-900 block mb-1">Fricción Auxiliar (Cargas pesadas):</strong> 
                            Cruzar la cuerda por encima del "Secondary Friction Post" (el cuerno metálico al frente) maximiza la fricción de frenado.
                        </li>
                    </ul>
                </div>

            </div>

            {/* 3D y Racks */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg border-b pb-2">Racks y el Descensor 3D (CMC)</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <FaGripLines className="w-4 h-4 text-gray-600" />
                            <h4 className="font-bold text-gray-800">Descensor 3D</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                            A diferencia de micro-racks antiguos, el 3D tiene una barra central con un botón rojo. Al presionarlo y girarla 90°, se puede insertar la cuerda por cualquier lado sin peligro de que la barra salte.
                        </p>
                        <div className="bg-white p-3 rounded border border-gray-200 text-sm">
                            <span className="font-bold text-gray-700">Para asegurar (Tie-off):</span> Se cruza la cuerda encima del dispositivo y se remata con una media llave (Half-Hitch) en el cuerno superior.
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <FaPauseCircle className="w-4 h-4 text-gray-600" />
                            <h4 className="font-bold text-gray-800">Brake Bar Rack (J-Frame)</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                            En un rack clásico en forma de "J", todas las barras móviles (pivotantes) deben anclarse sobre el lado <strong>LARGO</strong> del marco. Esto previene aperturas catastróficas y facilita montar la cuerda enganchándola en el lado corto.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
