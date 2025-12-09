import { useState } from "react";
import { FaAmbulance, FaCheckCircle, FaChevronLeft, FaChevronRight, FaClipboardList } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { NavLink } from "react-router";
import { IoReturnDownBack } from "react-icons/io5";
import useAmbulanceChecklist from "./AmbulanceChecklist.hook";
import {
    UNIDADES_AMBULANCIA,
    GUARDIAS,
    MOTIVOS_CHECKLIST,
    INSTRUCCIONES_CHECKLIST,
    FORM_STEPS,
    EQUIPAMIENTO_LABELS,
    EQUIPAMIENTO_CATEGORIAS,
    TRAUMA_LABELS,
    TRAUMA_CATEGORIAS,
    VIA_AEREA_LABELS,
    VIA_AEREA_CATEGORIAS,
    MECANICA_LABELS,
    MECANICA_CATEGORIAS
} from "./AmbulanceChecklist.constants";
import {
    IChecklistEquipamiento,
    IChecklistTrauma,
    IChecklistViaAerea,
    IChecklistMecanica
} from "./AmbulanceChecklist.types";
import { AllRoutes } from "../../components/Router/Router.constants";

export default function AmbulanceChecklist() {
    const {
        formState,
        updateDatosGenerales,
        updateEquipamiento,
        updateTrauma,
        updateViaAerea,
        updateMecanica,
        nextStep,
        prevStep,
        submitChecklist,
        resetForm,
        totalSteps
    } = useAmbulanceChecklist();

    const [error, setError] = useState<string>("");

    const handleNext = () => {
        const result = nextStep();
        if (!result.success && result.error) {
            setError(result.error);
        } else {
            setError("");
        }
    };

    const handleSubmit = async () => {
        setError("");
        const result = await submitChecklist();
        if (!result.success && result.error) {
            setError(result.error);
        }
    };

    // Componente para input numérico
    const NumberInput = ({
        label,
        value,
        onChange
    }: {
        label: string;
        value: number;
        onChange: (value: number) => void;
    }) => (
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-700">{label}</span>
            <input
                type="number"
                min="0"
                value={value}
                onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-20 px-2 py-1 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
        </div>
    );

    // Componente para categoría con campos
    const CategorySection = ({
        title,
        children
    }: {
        title: string;
        children: React.ReactNode;
    }) => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
            <h4 className="font-semibold text-orange-600 mb-3 pb-2 border-b border-orange-200">{title}</h4>
            <div className="space-y-1">{children}</div>
        </div>
    );

    // Pantalla de completado
    if (formState.isCompleted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-orange-50 to-gray-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaCheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Formulario Completado!</h2>
                    <p className="text-gray-600 mb-6">
                        El checklist de la ambulancia ha sido registrado exitosamente.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                        <p className="text-sm text-gray-500 mb-1">Unidad:</p>
                        <p className="font-medium text-gray-800">{formState.datosGenerales.unidad}</p>
                        <p className="text-sm text-gray-500 mb-1 mt-3">Encargado:</p>
                        <p className="font-medium text-gray-800">{formState.datosGenerales.nombreEncargado}</p>
                        <p className="text-sm text-gray-500 mb-1 mt-3">Guardia:</p>
                        <p className="font-medium text-gray-800">{formState.datosGenerales.guardia}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={resetForm}
                            className="w-full bg-orange-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-orange-600 transition-colors"
                        >
                            Llenar otro checklist
                        </button>
                        <NavLink
                            to={AllRoutes.MAIN}
                            className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                        >
                            Volver al inicio
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-gray-100 pb-8">
            {/* Header */}
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <NavLink to={AllRoutes.MAIN} className="flex items-center text-gray-600 hover:text-orange-500">
                            <IoReturnDownBack className="w-6 h-6 mr-2" />
                            <span>Regresar</span>
                        </NavLink>
                        <div className="flex items-center">
                            <FaAmbulance className="w-6 h-6 text-orange-500 mr-2" />
                            <h1 className="text-xl font-bold text-gray-800">Checklist Ambulancia</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="max-w-4xl mx-auto px-4 py-6">
                <div className="flex items-center justify-between mb-8">
                    {FORM_STEPS.map((step, index) => (
                        <div key={step.id} className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                                        formState.currentStep === step.id
                                            ? "bg-orange-500 text-white"
                                            : formState.currentStep > step.id
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-200 text-gray-500"
                                    }`}
                                >
                                    {formState.currentStep > step.id ? "✓" : step.id}
                                </div>
                                <span className="text-xs mt-1 text-gray-600 hidden md:block">{step.title}</span>
                            </div>
                            {index < FORM_STEPS.length - 1 && (
                                <div
                                    className={`w-8 md:w-16 h-1 mx-1 md:mx-2 ${
                                        formState.currentStep > step.id ? "bg-green-500" : "bg-gray-200"
                                    }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step Title */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">{FORM_STEPS[formState.currentStep - 1].title}</h2>
                    <p className="text-gray-600">{FORM_STEPS[formState.currentStep - 1].description}</p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4">
                        {error}
                    </div>
                )}

                {/* Form Content */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    {/* Paso 1: Datos Generales */}
                    {formState.currentStep === 1 && (
                        <div className="space-y-6">
                            {/* Instrucciones */}
                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
                                <div className="flex items-start">
                                    <FaClipboardList className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-800 mb-2">Instrucciones</h4>
                                        <ul className="text-sm text-orange-700 space-y-1">
                                            {INSTRUCCIONES_CHECKLIST.map((instruccion, idx) => (
                                                <li key={idx}>• {instruccion}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Unidad */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Unidad de Ambulancia *
                                </label>
                                <select
                                    value={formState.datosGenerales.unidad}
                                    onChange={(e) => updateDatosGenerales("unidad", e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                >
                                    <option value="">Seleccionar unidad...</option>
                                    {UNIDADES_AMBULANCIA.map((unidad) => (
                                        <option key={unidad} value={unidad}>
                                            {unidad}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Guardia */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Guardia/Turno *
                                </label>
                                <select
                                    value={formState.datosGenerales.guardia}
                                    onChange={(e) => updateDatosGenerales("guardia", e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                >
                                    <option value="">Seleccionar guardia...</option>
                                    {GUARDIAS.map((guardia) => (
                                        <option key={guardia} value={guardia}>
                                            {guardia}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Nombre */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nombre del Encargado *
                                </label>
                                <input
                                    type="text"
                                    value={formState.datosGenerales.nombreEncargado}
                                    onChange={(e) => updateDatosGenerales("nombreEncargado", e.target.value)}
                                    placeholder="Nombre completo"
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                />
                            </div>

                            {/* Motivo */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Motivo del Checklist *
                                </label>
                                <select
                                    value={formState.datosGenerales.motivo}
                                    onChange={(e) => updateDatosGenerales("motivo", e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                >
                                    <option value="">Seleccionar motivo...</option>
                                    {MOTIVOS_CHECKLIST.map((motivo) => (
                                        <option key={motivo} value={motivo}>
                                            {motivo}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Paso 2: Equipamiento */}
                    {formState.currentStep === 2 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(EQUIPAMIENTO_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <NumberInput
                                            key={campo}
                                            label={EQUIPAMIENTO_LABELS[campo]}
                                            value={formState.equipamiento[campo]}
                                            onChange={(value) => updateEquipamiento(campo as keyof IChecklistEquipamiento, value)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}

                    {/* Paso 3: Botiquín Trauma */}
                    {formState.currentStep === 3 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(TRAUMA_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <NumberInput
                                            key={campo}
                                            label={TRAUMA_LABELS[campo]}
                                            value={formState.botiquinTrauma[campo]}
                                            onChange={(value) => updateTrauma(campo as keyof IChecklistTrauma, value)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}

                    {/* Paso 4: Vía Aérea */}
                    {formState.currentStep === 4 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(VIA_AEREA_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <NumberInput
                                            key={campo}
                                            label={VIA_AEREA_LABELS[campo]}
                                            value={formState.viaAerea[campo]}
                                            onChange={(value) => updateViaAerea(campo as keyof IChecklistViaAerea, value)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}

                    {/* Paso 5: Mecánica */}
                    {formState.currentStep === 5 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(MECANICA_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <NumberInput
                                            key={campo}
                                            label={MECANICA_LABELS[campo]}
                                            value={formState.mecanica[campo]}
                                            onChange={(value) => updateMecanica(campo as keyof IChecklistMecanica, value)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={prevStep}
                        disabled={formState.currentStep === 1}
                        className={`flex items-center px-6 py-3 rounded-xl font-medium transition-colors ${
                            formState.currentStep === 1
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                        }`}
                    >
                        <FaChevronLeft className="w-4 h-4 mr-2" />
                        Anterior
                    </button>

                    {formState.currentStep < totalSteps ? (
                        <button
                            onClick={handleNext}
                            className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors"
                        >
                            Siguiente
                            <FaChevronRight className="w-4 h-4 ml-2" />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={formState.isSubmitting}
                            className="flex items-center px-8 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {formState.isSubmitting ? (
                                <>
                                    <ImSpinner2 className="animate-spin w-5 h-5 mr-2" />
                                    Guardando...
                                </>
                            ) : (
                                <>
                                    <FaCheckCircle className="w-5 h-5 mr-2" />
                                    Completar Checklist
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

