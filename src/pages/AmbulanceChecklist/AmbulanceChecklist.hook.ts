import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import {
    IChecklistFormState,
    IChecklistGeneral,
    IChecklistEquipamiento,
    IChecklistTrauma,
    IChecklistViaAerea,
    IChecklistMecanica
} from "./AmbulanceChecklist.types";
import {
    INITIAL_DATOS_GENERALES,
    INITIAL_EQUIPAMIENTO,
    INITIAL_TRAUMA,
    INITIAL_VIA_AEREA,
    INITIAL_MECANICA
} from "./AmbulanceChecklist.constants";

const TOTAL_STEPS = 5;

export default function useAmbulanceChecklist() {
    const [formState, setFormState] = useState<IChecklistFormState>({
        currentStep: 1,
        datosGenerales: { ...INITIAL_DATOS_GENERALES },
        equipamiento: { ...INITIAL_EQUIPAMIENTO },
        botiquinTrauma: { ...INITIAL_TRAUMA },
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

    // Actualizar equipamiento
    const updateEquipamiento = (field: keyof IChecklistEquipamiento, value: number) => {
        setFormState(prev => ({
            ...prev,
            equipamiento: {
                ...prev.equipamiento,
                [field]: value
            }
        }));
    };

    // Actualizar botiquín trauma
    const updateTrauma = (field: keyof IChecklistTrauma, value: number) => {
        setFormState(prev => ({
            ...prev,
            botiquinTrauma: {
                ...prev.botiquinTrauma,
                [field]: value
            }
        }));
    };

    // Actualizar vía aérea
    const updateViaAerea = (field: keyof IChecklistViaAerea, value: number) => {
        setFormState(prev => ({
            ...prev,
            viaAerea: {
                ...prev.viaAerea,
                [field]: value
            }
        }));
    };

    // Actualizar mecánica
    const updateMecanica = (field: keyof IChecklistMecanica, value: number) => {
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
                if (!motivo) return { isValid: false, error: "Selecciona un motivo" };
                return { isValid: true };
            }
            case 2:
            case 3:
            case 4:
            case 5:
                // Los campos numéricos pueden ser 0, no requieren validación especial
                return { isValid: true };
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
                equipamiento: formState.equipamiento,
                botiquinTrauma: formState.botiquinTrauma,
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
            equipamiento: { ...INITIAL_EQUIPAMIENTO },
            botiquinTrauma: { ...INITIAL_TRAUMA },
            viaAerea: { ...INITIAL_VIA_AEREA },
            mecanica: { ...INITIAL_MECANICA },
            isSubmitting: false,
            isCompleted: false
        });
    };

    return {
        formState,
        updateDatosGenerales,
        updateEquipamiento,
        updateTrauma,
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

