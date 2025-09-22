export default function Disclaimer() {

    const currentYear = new Date().getFullYear();

    return (
        // Contenedor principal con estilos de Tailwind para apariencia de advertencia
        <div
            className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 md:p-6 md:my-24 rounded-r-lg shadow md:mx-24"
            role="alert">

            {/* Título del Disclaimer */}
            <h2 className="font-bold text-lg md:text-xl mb-3 text-yellow-900">
                Aviso Importante, Descargo de Responsabilidad y Aspectos Legales
            </h2>

            {/* Párrafo introductorio */}
            <p className="mb-3 text-sm md:text-base">
                Bienvenido al sitio informativo sobre atención médica prehospitalaria creado por los "Alumnos de rescate
                1". Por favor, lea atentamente los siguientes puntos antes de utilizar la información aquí contenida.
            </p>

            {/* Lista numerada para los puntos del disclaimer */}
            <ol className="list-decimal list-inside space-y-3 text-sm md:text-base">
                <li>
                    <strong>Propósito Exclusivamente Informativo:</strong> La información en este sitio se basa
                    principalmente en "AAOS Atención Prehospitalaria Básica - 11a Edición" y se ofrece <strong
                    className="font-semibold">únicamente con fines educativos y de referencia general</strong>. No
                    pretende ser exhaustiva ni sustituir la fuente original.
                </li>
                <li>
                    <strong>No es Consejo Médico Profesional:</strong> Este contenido <strong
                    className="font-semibold uppercase">no constituye ni reemplaza</strong> el consejo médico
                    profesional, diagnóstico, tratamiento o la atención prehospitalaria práctica proporcionada por
                    personal certificado y autorizado. La atención médica real requiere evaluación individualizada por
                    profesionales cualificados.
                </li>
                <li>
                    <strong>Actuación en Emergencias:</strong> <strong className="font-semibold uppercase">No utilice
                    este sitio en una emergencia médica real</strong>. Contacte inmediatamente a los servicios de
                    emergencia locales (ej. 911) o acuda a la sala de urgencias más cercana. La demora en buscar
                    atención adecuada puede tener consecuencias graves.
                </li>
                <li>
                    <strong>Precisión y Actualización:</strong> Aunque nos esforzamos por la precisión basada en nuestra
                    fuente, <strong className="font-semibold">no garantizamos</strong> que la información esté
                    completamente actualizada, sea exacta en todos los detalles o aplicable universalmente. Las guías y
                    protocolos médicos cambian y pueden variar regionalmente. Consulte siempre fuentes oficiales y
                    protocolos locales vigentes.
                </li>
                <li>
                    <strong>Limitación Fundamental de Responsabilidad:</strong> El uso de este sitio es <strong
                    className="font-semibold">bajo su estricto y único riesgo</strong>. Los "Alumnos de rescate 1" y
                    cualquier colaborador <strong className="font-semibold">no asumen responsabilidad
                    alguna</strong> por errores, omisiones, o por cualquier pérdida, daño o consecuencia (directa o
                    indirecta) derivada del uso o la confianza en la información aquí presentada. Usted libera a los
                    creadores de toda responsabilidad.
                </li>
                <li>
                    <strong>Propiedad Intelectual:</strong> El contenido de referencia ("AAOS Atención Prehospitalaria
                    Básica - 11a Edición") pertenece a sus respectivos autores y editores. Su uso en este sitio es con
                    fines educativos y de cita. <strong className="font-semibold">Respete los derechos de
                    autor</strong> de la obra original. La estructura, diseño y textos originales de *este sitio web*
                    (distintos del material fuente) son propiedad intelectual de "Alumnos de rescate 1".
                </li>
                <li>
                    <strong>Privacidad:</strong> Este sitio web es principalmente informativo. Si en algún momento se
                    recopilaran datos personales (ej. a través de formularios de contacto o análisis básicos), su
                    tratamiento se describiría en una <strong className="font-semibold">Política de
                    Privacidad</strong> separada. Actualmente, no se recopilan datos personales identificables de forma
                    activa para fines distintos a la funcionalidad básica del sitio.
                </li>
            </ol>

            {/* Párrafo final de aceptación */}
            <p className="mt-4 font-semibold text-sm md:text-base">
                Al continuar utilizando este sitio web, usted confirma que ha leído, comprendido y aceptado los términos
                de este aviso y descargo de responsabilidad en su totalidad.
            </p>

            {/* Nota de Copyright del sitio web */}
            <p className="mt-4 text-xs text-yellow-700">
                © {currentYear} Alumnos de rescate 1. Algunos derechos reservados sobre la compilación y presentación de
                este sitio.
            </p>

        </div>
    );
}