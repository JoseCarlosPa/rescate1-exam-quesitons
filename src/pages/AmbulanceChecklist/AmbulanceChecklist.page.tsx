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
    AMBULANCIA_CATEGORIAS,
    MONITOR_DEA_CATEGORIAS,
    OBSTETRICIA_ASPIRADOR_CATEGORIAS,
    TRAUMA_CATEGORIAS,
    BOTIQUIN_PR_CATEGORIAS,
    VIA_AEREA_CATEGORIAS,
    MECANICA_CATEGORIAS
} from "./AmbulanceChecklist.constants";
import {
    IChecklistAmbulancia,
    IChecklistTrauma,
    IChecklistBotiquinPR,
    IChecklistViaAerea,
    IChecklistMecanica
} from "./AmbulanceChecklist.types";
import { AllRoutes } from "../../components/Router/Router.constants";

export default function AmbulanceChecklist() {
    const {
        formState,
        updateDatosGenerales,
        updateAmbulancia,
        toggleArrayItem,
        updateTrauma,
        toggleTraumaArray,
        updateBotiquinPR,
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

    // Componentes de Inputs
    const NumberInput = ({ label, value, onChange }: { label: string; value: number; onChange: (val: number) => void; }) => (
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-700">{label}</span>
            <input
                type="number"
                min="0"
                value={value || 0}
                onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-20 px-2 py-1 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
        </div>
    );

    const SelectInput = ({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (val: string) => void; }) => (
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-700 w-1/2">{label}</span>
            <select
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className="w-1/2 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm"
            >
                <option value="">Seleccionar...</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );

    const TextInput = ({ label, value, onChange }: { label: string; value: string; onChange: (val: string) => void; }) => (
        <div className="flex flex-col py-2 border-b border-gray-100 gap-2">
            <span className="text-sm text-gray-700">{label}</span>
            <input
                type="text"
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm"
            />
        </div>
    );

    const BooleanInput = ({ label, value, onChange }: { label: string; value: boolean; onChange: (val: boolean) => void; }) => (
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-700">{label}</span>
            <input
                type="checkbox"
                checked={!!value}
                onChange={(e) => onChange(e.target.checked)}
                className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-400"
            />
        </div>
    );

    const CheckboxesInput = ({ label, values, options, onToggle }: { label: string; values: string[]; options: string[]; onToggle: (item: string) => void; }) => (
        <div className="flex flex-col py-2 border-b border-gray-100 gap-2">
            <span className="text-sm text-gray-700">{label}</span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {options.map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            checked={(values || []).includes(opt)}
                            onChange={() => onToggle(opt)}
                            className="text-orange-500 rounded border-gray-300 focus:ring-orange-400"
                        />
                        {opt}
                    </label>
                ))}
            </div>
        </div>
    );

    const FieldRenderer = ({ campo, value, onChange, onToggle }: { campo: any, value: any, onChange: (val: any) => void, onToggle?: (val: any) => void }) => {
        if (campo.tipo === "number" || campo.tipo === "radio") {
            return <NumberInput label={campo.label} value={value as number} onChange={onChange} />;
        }
        if (campo.tipo === "select") {
            return <SelectInput label={campo.label} value={value as string} options={campo.opciones} onChange={onChange} />;
        }
        if (campo.tipo === "text") {
            return <TextInput label={campo.label} value={value as string} onChange={onChange} />;
        }
        if (campo.tipo === "boolean") {
            return <BooleanInput label={campo.label} value={value as boolean} onChange={onChange} />;
        }
        if (campo.tipo === "checkboxes" && onToggle) {
            return <CheckboxesInput label={campo.label} values={value as string[]} options={campo.opciones} onToggle={onToggle} />;
        }
        return null;
    };

    const CategorySection = ({ title, children }: { title: string; children: React.ReactNode; }) => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
            <h4 className="font-semibold text-orange-600 mb-3 pb-2 border-b border-orange-200">{title}</h4>
            <div className="space-y-1">{children}</div>
        </div>
    );

    if (formState.isCompleted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-orange-50 to-gray-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaCheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Formulario Completado!</h2>
                    <p className="text-gray-600 mb-6">El checklist de la ambulancia ha sido registrado exitosamente.</p>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                        <p className="text-sm text-gray-500 mb-1">Unidad:</p>
                        <p className="font-medium text-gray-800">{formState.datosGenerales.unidad}</p>
                        <p className="text-sm text-gray-500 mb-1 mt-3">Encargado:</p>
                        <p className="font-medium text-gray-800">{formState.datosGenerales.nombreEncargado}</p>
                        <p className="text-sm text-gray-500 mb-1 mt-3">Guardia:</p>
                        <p className="font-medium text-gray-800">{formState.datosGenerales.guardia}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button onClick={resetForm} className="w-full bg-orange-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-orange-600 transition-colors">Llenar otro checklist</button>
                        <NavLink to={AllRoutes.MAIN} className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors">Volver al inicio</NavLink>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-gray-100 pb-8">
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

            <div className="max-w-4xl mx-auto px-4 py-6">
                <div className="flex items-center justify-between mb-8 overflow-x-auto hide-scrollbar">
                    {FORM_STEPS.map((step, index) => (
                        <div key={step.id} className="flex items-center flex-shrink-0">
                            <div className="flex flex-col items-center">
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-colors ${formState.currentStep === step.id ? "bg-orange-500 text-white" : formState.currentStep > step.id ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                                    {formState.currentStep > step.id ? "✓" : step.id}
                                </div>
                                <span className="text-[10px] md:text-xs mt-1 text-gray-600 w-16 text-center leading-tight truncate">{step.title}</span>
                            </div>
                            {index < FORM_STEPS.length - 1 && <div className={`w-4 md:w-8 lg:w-12 h-1 mx-1 md:mx-2 ${formState.currentStep > step.id ? "bg-green-500" : "bg-gray-200"}`} />}
                        </div>
                    ))}
                </div>

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">{FORM_STEPS[formState.currentStep - 1].title}</h2>
                    <p className="text-gray-600">{FORM_STEPS[formState.currentStep - 1].description}</p>
                </div>

                {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4">{error}</div>}

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    {/* Paso 1: Datos Generales */}
                    {formState.currentStep === 1 && (
                        <div className="space-y-6">
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
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Unidad de Ambulancia *</label>
                                <select value={formState.datosGenerales.unidad} onChange={(e) => updateDatosGenerales("unidad", e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent">
                                    <option value="">Seleccionar unidad...</option>
                                    {UNIDADES_AMBULANCIA.map((unidad) => <option key={unidad} value={unidad}>{unidad}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Guardia/Turno *</label>
                                <select value={formState.datosGenerales.guardia} onChange={(e) => updateDatosGenerales("guardia", e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent">
                                    <option value="">Seleccionar guardia...</option>
                                    {GUARDIAS.map((guardia) => <option key={guardia} value={guardia}>{guardia}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Encargado *</label>
                                <input type="text" value={formState.datosGenerales.nombreEncargado} onChange={(e) => updateDatosGenerales("nombreEncargado", e.target.value)} placeholder="Nombre completo" className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Motivo del Checklist *</label>
                                <select value={formState.datosGenerales.motivo} onChange={(e) => updateDatosGenerales("motivo", e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent">
                                    <option value="">Seleccionar motivo...</option>
                                    {MOTIVOS_CHECKLIST.map((motivo) => <option key={motivo} value={motivo}>{motivo}</option>)}
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Paso 2: Ambulancia */}
                    {formState.currentStep === 2 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(AMBULANCIA_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <FieldRenderer
                                            key={campo.key}
                                            campo={campo}
                                            value={formState.ambulancia[campo.key as keyof IChecklistAmbulancia]}
                                            onChange={(val) => updateAmbulancia(campo.key as keyof IChecklistAmbulancia, val)}
                                            onToggle={(item) => toggleArrayItem("ambulancia", campo.key as keyof IChecklistAmbulancia, item)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}

                    {/* Paso 3: Monitor / DEA */}
                    {formState.currentStep === 3 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(MONITOR_DEA_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <FieldRenderer
                                            key={campo.key}
                                            campo={campo}
                                            value={formState.ambulancia[campo.key as keyof IChecklistAmbulancia]}
                                            onChange={(val) => updateAmbulancia(campo.key as keyof IChecklistAmbulancia, val)}
                                            onToggle={(item) => toggleArrayItem("ambulancia", campo.key as keyof IChecklistAmbulancia, item)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}

                    {/* Paso 4: Obstetricia / Aspirador */}
                    {formState.currentStep === 4 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(OBSTETRICIA_ASPIRADOR_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <FieldRenderer
                                            key={campo.key}
                                            campo={campo}
                                            value={formState.ambulancia[campo.key as keyof IChecklistAmbulancia]}
                                            onChange={(val) => updateAmbulancia(campo.key as keyof IChecklistAmbulancia, val)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}

                    {/* Paso 5: Botiquín Trauma */}
                    {formState.currentStep === 5 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(TRAUMA_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <FieldRenderer
                                            key={campo.key}
                                            campo={campo}
                                            value={formState.botiquinTrauma[campo.key as keyof IChecklistTrauma]}
                                            onChange={(val) => updateTrauma(campo.key as keyof IChecklistTrauma, val)}
                                            onToggle={(item) => toggleTraumaArray(campo.key as keyof IChecklistTrauma, item)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}

                    {/* Paso 6: Botiquín Primer Respondiente */}
                    {formState.currentStep === 6 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(BOTIQUIN_PR_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <FieldRenderer
                                            key={campo.key}
                                            campo={campo}
                                            value={formState.botiquinPrimerRespondiente[campo.key as keyof IChecklistBotiquinPR]}
                                            onChange={(val) => updateBotiquinPR(campo.key as keyof IChecklistBotiquinPR, val)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}

                    {/* Paso 7: Vía Aérea */}
                    {formState.currentStep === 7 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(VIA_AEREA_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <FieldRenderer
                                            key={campo.key}
                                            campo={campo}
                                            value={formState.viaAerea[campo.key as keyof IChecklistViaAerea]}
                                            onChange={(val) => updateViaAerea(campo.key as keyof IChecklistViaAerea, val)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}

                    {/* Paso 8: Mecánica */}
                    {formState.currentStep === 8 && (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {Object.entries(MECANICA_CATEGORIAS).map(([key, categoria]) => (
                                <CategorySection key={key} title={categoria.titulo}>
                                    {categoria.campos.map((campo) => (
                                        <FieldRenderer
                                            key={campo.key}
                                            campo={campo}
                                            value={formState.mecanica[campo.key as keyof IChecklistMecanica]}
                                            onChange={(val) => updateMecanica(campo.key as keyof IChecklistMecanica, val)}
                                        />
                                    ))}
                                </CategorySection>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex justify-between mt-6">
                    <button onClick={prevStep} disabled={formState.currentStep === 1} className={`flex items-center px-6 py-3 rounded-xl font-medium transition-colors ${formState.currentStep === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}`}>
                        <FaChevronLeft className="w-4 h-4 mr-2" /> Anterior
                    </button>
                    {formState.currentStep < totalSteps ? (
                        <button onClick={handleNext} className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors">
                            Siguiente <FaChevronRight className="w-4 h-4 ml-2" />
                        </button>
                    ) : (
                        <button onClick={handleSubmit} disabled={formState.isSubmitting} className="flex items-center px-8 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            {formState.isSubmitting ? <><ImSpinner2 className="animate-spin w-5 h-5 mr-2" /> Guardando...</> : <><FaCheckCircle className="w-5 h-5 mr-2" /> Completar Checklist</>}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
