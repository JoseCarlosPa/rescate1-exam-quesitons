import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import {
    IChecklistFormState,
    IChecklistGeneral,
    IChecklistAmbulancia,
    IChecklistTrauma,
    IChecklistBotiquinPR,
    IChecklistViaAerea,
    IChecklistMecanica
} from "./AmbulanceChecklist.types";
import {
    INITIAL_DATOS_GENERALES,
    INITIAL_AMBULANCIA,
    INITIAL_TRAUMA,
    INITIAL_BOTIQUIN_PR,
    INITIAL_VIA_AEREA,
    INITIAL_MECANICA
} from "./AmbulanceChecklist.constants";

const TOTAL_STEPS = 8;

export default function useAmbulanceChecklist() {
    const [formState, setFormState] = useState<IChecklistFormState>({
        currentStep: 1,
        datosGenerales: { ...INITIAL_DATOS_GENERALES },
        ambulancia: { ...INITIAL_AMBULANCIA },
        botiquinTrauma: { ...INITIAL_TRAUMA },
        botiquinPrimerRespondiente: { ...INITIAL_BOTIQUIN_PR },
        viaAerea: { ...INITIAL_VIA_AEREA },
        mecanica: { ...INITIAL_MECANICA },
        isSubmitting: false,
        isCompleted: false
    });

    // Actualizar datos generales
    const updateDatosGenerales = (field: keyof IChecklistGeneral, value: string) => {
        setFormState(prev => ({
            ...prev,
            datosGenerales: {
                ...prev.datosGenerales,
                [field]: value
            }
        }));
    };

    // Actualizar ambulancia (campo genérico)
    const updateAmbulancia = <K extends keyof IChecklistAmbulancia>(
        field: K,
        value: IChecklistAmbulancia[K]
    ) => {
        setFormState(prev => ({
            ...prev,
            ambulancia: {
                ...prev.ambulancia,
                [field]: value
            }
        }));
    };

    // Toggle checkbox en array (para monitor, DEA, COVID)
    const toggleArrayItem = (
        section: "ambulancia",
        field: keyof IChecklistAmbulancia,
        item: string
    ) => {
        setFormState(prev => {
            const current = prev[section][field] as string[];
            const exists = current.includes(item);
            return {
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: exists
                        ? current.filter((i) => i !== item)
                        : [...current, item]
                }
            };
        });
    };

    // Actualizar botiquín trauma
    const updateTrauma = <K extends keyof IChecklistTrauma>(
        field: K,
        value: IChecklistTrauma[K]
    ) => {
        setFormState(prev => ({
            ...prev,
            botiquinTrauma: {
                ...prev.botiquinTrauma,
                [field]: value
            }
        }));
    };

    // Toggle array en trauma (brazaletes pediátricos)
    const toggleTraumaArray = (field: keyof IChecklistTrauma, item: string) => {
        setFormState(prev => {
            const current = prev.botiquinTrauma[field] as string[];
            const exists = current.includes(item);
            return {
                ...prev,
                botiquinTrauma: {
                    ...prev.botiquinTrauma,
                    [field]: exists
                        ? current.filter((i) => i !== item)
                        : [...current, item]
                }
            };
        });
    };

    // Actualizar botiquín primer respondiente
    const updateBotiquinPR = <K extends keyof IChecklistBotiquinPR>(
        field: K,
        value: IChecklistBotiquinPR[K]
    ) => {
        setFormState(prev => ({
            ...prev,
            botiquinPrimerRespondiente: {
                ...prev.botiquinPrimerRespondiente,
                [field]: value
            }
        }));
    };

    // Actualizar vía aérea
    const updateViaAerea = <K extends keyof IChecklistViaAerea>(
        field: K,
        value: IChecklistViaAerea[K]
    ) => {
        setFormState(prev => ({
            ...prev,
            viaAerea: {
                ...prev.viaAerea,
                [field]: value
            }
        }));
    };

    // Actualizar mecánica
    const updateMecanica = <K extends keyof IChecklistMecanica>(
        field: K,
        value: IChecklistMecanica[K]
    ) => {
        setFormState(prev => ({
            ...prev,
            mecanica: {
                ...prev.mecanica,
                [field]: value
            }
        }));
    };

    // Validar paso actual
    const validateCurrentStep = (): { isValid: boolean; error?: string } => {
        switch (formState.currentStep) {
            case 1: {
                const { unidad, guardia, nombreEncargado, motivo } = formState.datosGenerales;
                if (!unidad) return { isValid: false, error: "Selecciona una unidad" };
                if (!guardia) return { isValid: false, error: "Selecciona una guardia" };
                if (!nombreEncargado.trim()) return { isValid: false, error: "Ingresa el nombre del encargado" };
                if (!motivo) return { isValid: false, error: "Selecciona un motivo de llenado" };
                return { isValid: true };
            }
            default:
                return { isValid: true };
        }
    };

    // Ir al siguiente paso
    const nextStep = (): { success: boolean; error?: string } => {
        const validation = validateCurrentStep();
        if (!validation.isValid) {
            return { success: false, error: validation.error };
        }
        if (formState.currentStep < TOTAL_STEPS) {
            setFormState(prev => ({
                ...prev,
                currentStep: prev.currentStep + 1
            }));
        }
        return { success: true };
    };

    // Ir al paso anterior
    const prevStep = () => {
        if (formState.currentStep > 1) {
            setFormState(prev => ({
                ...prev,
                currentStep: prev.currentStep - 1
            }));
        }
    };

    // Ir a un paso específico
    const goToStep = (step: number) => {
        if (step >= 1 && step <= TOTAL_STEPS) {
            setFormState(prev => ({
                ...prev,
                currentStep: step
            }));
        }
    };

    // Enviar formulario
    const submitChecklist = async (): Promise<{ success: boolean; error?: string }> => {
        const validation = validateCurrentStep();
        if (!validation.isValid) {
            return { success: false, error: validation.error };
        }

        setFormState(prev => ({ ...prev, isSubmitting: true }));

        try {
            const checklistData = {
                fechaCreacion: Timestamp.now(),
                datosGenerales: formState.datosGenerales,
                ambulancia: formState.ambulancia,
                botiquinTrauma: formState.botiquinTrauma,
                botiquinPrimerRespondiente: formState.botiquinPrimerRespondiente,
                viaAerea: formState.viaAerea,
                mecanica: formState.mecanica
            };

            await addDoc(collection(db, "ambulanceChecklists"), checklistData);

            setFormState(prev => ({
                ...prev,
                isSubmitting: false,
                isCompleted: true
            }));

            return { success: true };
        } catch (error) {
            console.error("Error al guardar checklist:", error);
            setFormState(prev => ({ ...prev, isSubmitting: false }));
            return { success: false, error: "Error al guardar el checklist. Intenta de nuevo." };
        }
    };

    // Reiniciar formulario
    const resetForm = () => {
        setFormState({
            currentStep: 1,
            datosGenerales: { ...INITIAL_DATOS_GENERALES },
            ambulancia: { ...INITIAL_AMBULANCIA },
            botiquinTrauma: { ...INITIAL_TRAUMA },
            botiquinPrimerRespondiente: { ...INITIAL_BOTIQUIN_PR },
            viaAerea: { ...INITIAL_VIA_AEREA },
            mecanica: { ...INITIAL_MECANICA },
            isSubmitting: false,
            isCompleted: false
        });
    };

    return {
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
        goToStep,
        submitChecklist,
        resetForm,
        totalSteps: TOTAL_STEPS
    };
}
