import {Question} from "../../question";
import { respiratoryEmergenciesExam } from "./AirwayEmergency/AirwayEmergency.questions";
import {airwayManagementQuestions} from "./AirwayManage/AirwayManage.questions.ts";
import {cardiovascularQuestions} from "./CardioEmergency/CardioEmergency.questions.ts";
import {communicationsQuestions} from "./Communications/Communications.questions.ts";
import {endocrineHematologicQuestions} from "./EndocryEmergency/EndocryEmergency.questions.ts";
import {patientAssessmentQuestions} from "./Evaluation/Evaluation.questions.ts";
import {gastrointestinalUrologicQuestions} from "./GastroEmergency/GastroEmergency.questions.ts";
import {generalExamQuestions} from "./GeneralExam/GeneralExam.questions.ts";
import {humanBodyQuestions} from "./HumanBody/HumanBody.questions.ts";
import {immobilizationQuestions} from "./Immobilization/Immobilization.questionts.ts";
import {legalQuestions} from "./LegalAspects/LegalAspects.questions.ts";
import {lifeSpecQuestions} from "./LifeSpec/LifeSpec.questions.ts";
import {medicationAdministrationQuestions} from "./MedAdmin/MedAdmin.questions.ts";
import {medicTermsQuestions} from "./MedicTerms/MediTerms.questions.ts";
import {visionMedicGeneralQuestions} from "./MedicVision/MedicVision.questions.ts";
import {megaQuestions} from "./Mega/Mega.questions.ts";
import {neurologicasQuestions} from "./NeuroEmergency/NeuroEmergency.questions.ts";
import {nemotecniasQuestions} from "./Nnemotecnias/Mnemotecnias.questions.ts";
import {pharmacologyQuestions} from "./Pharmacology/Pharmacology.questions.ts";
import {svbQuestions} from "./ReanimateSvb/ReanimateSvb.questions.ts";
import {securityQuestions} from "./SecurityOfPersonal/SecurityOfPersonal.questions.ts";
import {semSystemQuestions} from "./SEM/Sem.questions.ts";
import {shockQuestions} from "./Shock/Shock.questions.ts";
import {traumaGeneralQuestions} from "./Trauma/Trauma.questions.ts";

export function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    return allQuestions[randomIndex];
}


export const allQuestions: Question[] = [
    ...respiratoryEmergenciesExam,
    ...airwayManagementQuestions,
    ...cardiovascularQuestions,
    ...communicationsQuestions,
    ...endocrineHematologicQuestions,
    ...patientAssessmentQuestions,
    ...gastrointestinalUrologicQuestions,
    ...generalExamQuestions,
    ...humanBodyQuestions,
    ...immobilizationQuestions,
    ...legalQuestions,
    ...lifeSpecQuestions,
    ...medicationAdministrationQuestions,
    ...medicTermsQuestions,
    ...visionMedicGeneralQuestions,
    ...megaQuestions,
    ...neurologicasQuestions,
    ...nemotecniasQuestions,
    ...pharmacologyQuestions,
    ...svbQuestions,
    ...securityQuestions,
    ...semSystemQuestions,
    ...shockQuestions,
    ...traumaGeneralQuestions

]




