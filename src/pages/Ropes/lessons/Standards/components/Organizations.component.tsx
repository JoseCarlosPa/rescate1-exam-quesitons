import {useState} from "react";
import {FaBuilding, FaGlobeAmericas} from "react-icons/fa";
import {MdOutlinePublic} from "react-icons/md";

const ORGANIZATIONS = [
    {
        id: 'osha',
        name: 'OSHA',
        full: 'Occupational Safety and Health Administration',
        color: 'from-red-500 to-red-600',
        detail: 'Agencia federal enfocada en la seguridad del trabajador. Aunque OSHA a menudo dice que no regula el rescate, esto no siempre es así — la regulación de rescate en espacios confinados se escribió específicamente porque casi el 60% de las muertes en incidentes de espacios confinados eran rescatistas. Tres regulaciones OSHA aplicables: CFR 1926 Subparte M (Protección contra caídas), CFR 1910.146 (Espacios confinados con permiso requerido) y CFR 1926.650 Subparte P (Excavaciones).',
        contact: 'osha.gov',
    },
    {
        id: 'astm',
        name: 'ASTM International',
        full: 'American Society of Testing and Materials',
        color: 'from-amber-500 to-orange-600',
        detail: 'Desarrolla una amplia gama de estándares industriales. Su Comité F32 sobre Búsqueda y Rescate ha desarrollado más de 40 estándares, incluyendo F1740 (inspección de cuerda kernmantle), F1768 (señales de silbato), F2436 (pruebas de sistemas de aseguramiento), F2266 (masas estándar para pruebas), F2684 (dispositivos de anclaje alto), F2491 (factores de seguridad) y F2821 (camillas tipo canasta).',
        contact: 'astm.org',
    },
    {
        id: 'cordage',
        name: 'Cordage Institute',
        full: 'Instituto de Cordelería',
        color: 'from-green-500 to-green-600',
        detail: 'Su comité técnico desarrolla estándares y guías mediante consenso voluntario, y publica un manual técnico sobre el uso seguro de cordelería y cuerdas. Incluye CI 1800 (método de prueba para cuerda de seguridad de vida, referenciado por NFPA 1983), CI 1801 (cuerda estática de bajo estiramiento) y CI 1803 (cordinos kernmantle), además de las guías CI 2001 y CI 2005 sobre inspección y retiro de cuerdas.',
        contact: 'ropecord.com',
    },
    {
        id: 'assp',
        name: 'ASSP',
        full: 'American Society of Safety Professionals',
        color: 'from-purple-500 to-purple-600',
        detail: 'Es la secretaría del Código ANSI/ASSP Z359 de Protección Contra Caídas, una revisión mayor del antiguo ANSI Z359.1. Es una serie de estándares relacionados con la seguridad de empleados que trabajan en altura.',
        contact: 'assp.org',
    },
    {
        id: 'ansi',
        name: 'ANSI',
        full: 'American National Standards Institute',
        color: 'from-indigo-500 to-indigo-600',
        detail: 'Supervisa y acredita a otras organizaciones que desarrollan estándares. Se asegura de que el proceso de creación permita comentarios públicos, y su aprobación ayuda a garantizar que exista un solo estándar por tema. Ejemplos: ANSI/ASSP Z359 y ANSI/NFPA 1983.',
        contact: 'ansi.org',
    },
    {
        id: 'itra',
        name: 'ITRA',
        full: 'International Technical Rescue Association',
        color: 'from-teal-500 to-teal-600',
        detail: 'Organización sin fines de lucro que otorga reconocimiento mundial a practicantes e instructores de rescate técnico en disciplinas como aguas rápidas, cuerdas, bote, espacios confinados, colapso estructural (USAR) y rescate animal. Provee evaluación externa de instructores, tanto internos como comerciales.',
        contact: 'itra.international',
    },
];

const EUROPEAN = [
    {
        name: 'CEN',
        full: 'Comité Européen de Normalisation',
        detail: 'Establece estándares de equipo europeos para muchas industrias. El Reglamento de Equipo de Protección Personal exige que cierto equipo esté aprobado por CEN y lleve el marcado CE, particularmente para trabajo en altura.',
    },
    {
        name: 'UIAA',
        full: 'Union of International Alpine Associations',
        detail: 'Administra estándares de equipo de escalada deportiva y montañismo. El cumplimiento es voluntario, y los estándares UIAA se están integrando gradualmente al CEN.',
    },
];

export default function Organizations() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaBuilding className="w-6 h-6 mr-2 text-blue-500"/>
                    Organizaciones que Crean Estándares
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Haz clic en cada organización para conocer qué estándares produce y cómo se relacionan con el
                    rescate con cuerdas:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                    {ORGANIZATIONS.map((org) => (
                        <button
                            key={org.id}
                            onClick={() => setSelected(selected === org.id ? null : org.id)}
                            className={`text-left rounded-xl p-5 text-white shadow-lg transition-all duration-300 bg-gradient-to-br ${org.color} ${
                                selected === org.id ? 'ring-4 ring-offset-2 ring-gray-400 scale-[1.02]' : 'hover:scale-[1.02]'
                            }`}
                        >
                            <h3 className="font-bold text-xl mb-1">{org.name}</h3>
                            <p className="text-sm opacity-90">{org.full}</p>
                        </button>
                    ))}
                </div>

                {selected && (
                    <div className="mt-4 bg-white border-2 border-gray-200 rounded-lg p-5 animate-fadeIn">
                        <p className="text-gray-700 leading-relaxed mb-2">
                            {ORGANIZATIONS.find((o) => o.id === selected)?.detail}
                        </p>
                        <p className="text-sm text-blue-600 font-semibold">
                            Contacto: {ORGANIZATIONS.find((o) => o.id === selected)?.contact}
                        </p>
                    </div>
                )}
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaGlobeAmericas className="w-6 h-6 mr-2 text-blue-500"/>
                    Estándares Europeos
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Con la importación de equipo europeo de escalada recreativa, acceso industrial por cuerda y
                    rescate, es posible encontrar el marcado CE o la certificación UIAA.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {EUROPEAN.map((org, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5">
                            <div className="flex items-center mb-2">
                                <MdOutlinePublic className="w-5 h-5 text-blue-500 mr-2"/>
                                <h3 className="font-bold text-gray-800">{org.name} <span className="text-sm text-gray-500 font-normal">— {org.full}</span></h3>
                            </div>
                            <p className="text-gray-700 text-sm">{org.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
