import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {FaCertificate} from "react-icons/fa";

const NFPA_STANDARDS = [
    {
        code: 'NFPA 1983',
        title: 'Standard on Life Safety Rope and Equipment for Emergency Services',
        detail: 'Estándar para fabricantes que detalla especificaciones de diseño, desempeño, etiquetado y pruebas de cuerda, arneses y hardware de seguridad de vida. Excluye específicamente equipo para rescate en montaña, rescate en cuevas, escalada de punta y situaciones que dicten otros requisitos de desempeño. Clasifica el equipo en tres niveles: Uso General, Uso Técnico y Escape.',
    },
    {
        code: 'NFPA 1858',
        title: 'Standard on Selection, Care, and Maintenance of Life Safety Rope and Equipment',
        detail: 'Es el documento de uso que complementa a NFPA 1983. Aunque el documento en sí es breve, su Apéndice contiene mucho trabajo para ayudar al usuario a entender la fabricación, uso, cuidado y mantenimiento del equipo y cuerda de seguridad de vida.',
    },
    {
        code: 'NFPA 1500',
        title: 'Standard on Fire Department Occupational Safety, Health, and Wellness Program',
        detail: 'La Sección 7.19 "Life Safety Rope and System Components" hace referencia a NFPA 1983 y establece criterios de uso para operaciones de combate de incendios, rescate y otras emergencias, incluyendo entrenamiento. También detalla los requisitos de entrenamiento, educación y práctica que un departamento debe proveer a su personal.',
    },
    {
        code: 'NFPA 1006',
        title: 'Standard for Technical Rescue Personnel Professional Qualifications',
        detail: 'Establece los requisitos mínimos de desempeño laboral para rescatistas de nivel Conocimiento (Awareness), Operaciones y Técnico. Sus 20 disciplinas incluyen una específica de Rescate con Cuerdas. Este es precisamente el estándar que estructura todo este curso.',
    },
    {
        code: 'NFPA 1670',
        title: 'Standard on Operations and Training for Technical Search and Rescue Incidents',
        detail: 'Documento de uso para organizaciones que planean brindar servicios de rescate técnico a su comunidad. Ofrece una guía sobre qué capacidades debería esperar la AHJ (autoridad con jurisdicción) de la organización. Se divide en un capítulo de requisitos generales y capítulos adicionales para 19 disciplinas específicas de rescate.',
    },
];

export default function NfpaExplorer() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaCertificate className="w-6 h-6 mr-2 text-blue-500"/>
                    Explorador de Normas NFPA
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    La National Fire Protection Association (NFPA) produce una amplia gama de estándares, varios
                    de ellos directamente relacionados con el rescate con cuerdas. Haz clic en cada norma para
                    ver su alcance:
                </p>
            </div>

            <div className="space-y-3">
                {NFPA_STANDARDS.map((std, idx) => (
                    <Disclosure key={idx}>
                        {({open}) => (
                            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                                <Disclosure.Button
                                    className="flex w-full justify-between items-center bg-blue-50 px-5 py-4 text-left hover:bg-blue-100 transition">
                                    <div>
                                        <span className="font-bold text-blue-700">{std.code}</span>
                                        <span className="text-gray-600 text-sm ml-2">— {std.title}</span>
                                    </div>
                                    <ChevronUpIcon
                                        className={`${open ? "transform rotate-180" : ""} h-5 w-5 text-blue-500 flex-shrink-0 ml-2`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 pb-4 pt-3 text-gray-700 bg-white text-sm leading-relaxed">
                                    {std.detail}
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                ))}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                    <strong>Dato importante:</strong> desde marzo de 2020, NFPA planea combinar las normas 1670,
                    1983 y 1858 en un nuevo estándar unificado, <strong>NFPA 2500</strong>.
                </p>
            </div>
        </div>
    );
}
