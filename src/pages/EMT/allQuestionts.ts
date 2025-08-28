import {Question} from "../../question";
import {
    respiratoryEmergenciesChallengingExam,
    respiratoryEmergenciesExam
} from "./AirwayEmergency/AirwayEmergency.questions";
import {airwayManagementQuestions} from "./AirwayManage/AirwayManage.questions.ts";
import {
    cardiovascularQuestions,
    cardiovascularQuestionsChallenge
} from "./CardioEmergency/CardioEmergency.questions.ts";
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
import {neurologicalQuestionsChallenge, neurologicasQuestions} from "./NeuroEmergency/NeuroEmergency.questions.ts";
import {nemotecniasQuestions} from "./Nnemotecnias/Mnemotecnias.questions.ts";
import {pharmacologyQuestions} from "./Pharmacology/Pharmacology.questions.ts";
import {svbQuestions} from "./ReanimateSvb/ReanimateSvb.questions.ts";
import {securityQuestions} from "./SecurityOfPersonal/SecurityOfPersonal.questions.ts";
import {semSystemQuestions} from "./SEM/Sem.questions.ts";
import {shockQuestions} from "./Shock/Shock.questions.ts";
import {traumaGeneralQuestions} from "./Trauma/Trauma.questions.ts";
import {hemorragiasQuestions} from "./Bleeding/Bleeding.questions.ts";
import {faceAndNeckExamen} from "./FaceAndNeck/FaceAndNeck.questions.ts";
import {softTissueExam} from "./SoftTissue/SoftTissue.questions.ts";
import {headAndColumnInjuriesQuestions} from "./HeadAndColumnInjuries/HeadAndColumnInjuries.questions.ts";
import {toraxInjuriesQuestions} from "./ToraxInjuries/ToraxInjuries.questions.ts";
import {feetInjuriesQuestions} from "./FeetInjuries/FeetInjuries.questions.ts";
import {abdoBeniInjuriesQuestions} from "./AbdoGeniInjuries/AbdoGeniInjuries.questions.ts";
import {inmunologieQuestions} from "./InmunologyEmergencies/InmunologyEmergencies.questions.ts";
import {toxicologyQuestions} from "./Toxicology/Toxicology.questions.ts";
import {environmentalEmergencyQuestions} from "./AmbientalEmergencies/AmbientalEmergencies.questions.ts";
import {psiquiatricQuestions} from "./PsiquiatricEmergencies/PsiquiatricEmergencies.questions.ts";
import {gineQuestions} from "./GineEmergencies/GineEmergencies.questions.ts";
import {obstetricQuestions} from "./ObstreticCare/ObstreticCare.questions.ts";
import {pediatricQuestions} from "./PediatricEmergencies/PediatricEmergencies.questions.ts";
import {geriatricQuestions} from "./GeriatricEmergencies/GeriatricEmergencies.questions.ts";
import {specialNeedsPacientQuestions} from "./SpecialNeedsPacient/SpecialNeedsPacient.questions.ts";
import {transportOperationsQuestions} from "./TransportOperations/TransportOperations.questions.ts";
import {incidentManageQuestions} from "./IncidentManage/IncidentManage.questions.ts";
import {terroristManageQuestions} from "./TerroristManage/TerroristManage.questions.ts";

export function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    return allQuestions[randomIndex];
}

// create a function that get me N number of questions from each category
export function getRandomQuestionsFromEachCategory(n: number): Question[] {
    const categories = [
        respiratoryEmergenciesExam,
        respiratoryEmergenciesChallengingExam,
        airwayManagementQuestions,
        cardiovascularQuestions,
        cardiovascularQuestionsChallenge,
        communicationsQuestions,
        endocrineHematologicQuestions,
        patientAssessmentQuestions,
        gastrointestinalUrologicQuestions,
        generalExamQuestions,
        humanBodyQuestions,
        immobilizationQuestions,
        legalQuestions,
        lifeSpecQuestions,
        medicationAdministrationQuestions,
        medicTermsQuestions,
        visionMedicGeneralQuestions,
        megaQuestions,
        neurologicasQuestions,
        neurologicalQuestionsChallenge,
        nemotecniasQuestions,
        pharmacologyQuestions,
        svbQuestions,
        securityQuestions,
        semSystemQuestions,
        shockQuestions,
        traumaGeneralQuestions,
        hemorragiasQuestions,
        faceAndNeckExamen,
        softTissueExam,
        headAndColumnInjuriesQuestions,
        toraxInjuriesQuestions,
        feetInjuriesQuestions,
        abdoBeniInjuriesQuestions,
        inmunologieQuestions,
        toxicologyQuestions,
        environmentalEmergencyQuestions,
        psiquiatricQuestions,
        gineQuestions,
        obstetricQuestions,
        pediatricQuestions,
        geriatricQuestions,
        specialNeedsPacientQuestions,
        transportOperationsQuestions,
        incidentManageQuestions,
        terroristManageQuestions
    ];

    const selectedQuestions: Question[] = [];

    for (const category of categories) {
        const randomIndices = new Set<number>();

        while (randomIndices.size < n && randomIndices.size < category.length) {
            randomIndices.add(Math.floor(Math.random() * category.length));
        }

        for (const index of randomIndices) {
            selectedQuestions.push(category[index]);
        }
    }

    return selectedQuestions;
}

// Map of topic IDs to their question arrays
export const topicQuestionsMap: Record<string, Question[]> = {
    '2': legalQuestions,
    '3': communicationsQuestions,
    '4': semSystemQuestions,
    '5': securityQuestions,
    '6': medicTermsQuestions,
    '7': humanBodyQuestions,
    '8': lifeSpecQuestions,
    '9': patientAssessmentQuestions,
    '10': nemotecniasQuestions,
    '11': airwayManagementQuestions,
    '12': pharmacologyQuestions,
    '13': medicationAdministrationQuestions,
    '14': shockQuestions,
    '15': svbQuestions,
    '16': megaQuestions,
    '17': visionMedicGeneralQuestions,
    '18': respiratoryEmergenciesExam,
    '19': cardiovascularQuestions,
    '20': neurologicasQuestions,
    '21': gastrointestinalUrologicQuestions,
    '22': endocrineHematologicQuestions,
    '23': traumaGeneralQuestions,
    '24': immobilizationQuestions,
    '25': hemorragiasQuestions,
    '27': faceAndNeckExamen,
    '28': softTissueExam,
    '29': headAndColumnInjuriesQuestions,
    '30': toraxInjuriesQuestions,
    '31': feetInjuriesQuestions,
    '32': abdoBeniInjuriesQuestions,
    '33': inmunologieQuestions,
    '34': toxicologyQuestions,
    '35': environmentalEmergencyQuestions,
    '36': psiquiatricQuestions,
    '37': gineQuestions,
    '38': obstetricQuestions,
    '39': pediatricQuestions,
    '40': geriatricQuestions,
    '41': specialNeedsPacientQuestions,
    '42': transportOperationsQuestions,
    '43': incidentManageQuestions,
    '44': terroristManageQuestions
};

// Function to get random questions from selected topics
export function getQuestionsFromSelectedTopics(selectedTopics: {id: string, count: number}[]): Question[] {
    const selectedQuestions: Question[] = [];
    
    for (const topic of selectedTopics) {
        const questions = topicQuestionsMap[topic.id];
        
        if (questions && questions.length > 0) {
            const count = Math.min(topic.count, questions.length);
            const randomIndices = new Set<number>();
            
            // Get random indices for this topic
            while (randomIndices.size < count) {
                randomIndices.add(Math.floor(Math.random() * questions.length));
            }
            
            // Add the randomly selected questions to our result
            for (const index of randomIndices) {
                selectedQuestions.push(questions[index]);
            }
        }
    }
    
    // Shuffle the questions to mix them up
    return shuffleArray(selectedQuestions);
}

// Helper function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export const allQuestions: Question[] = [
    ...respiratoryEmergenciesExam,
    ...respiratoryEmergenciesChallengingExam,
    ...airwayManagementQuestions,
    ...cardiovascularQuestions,
    ...cardiovascularQuestionsChallenge,
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
    ...neurologicalQuestionsChallenge,
    ...nemotecniasQuestions,
    ...pharmacologyQuestions,
    ...svbQuestions,
    ...securityQuestions,
    ...semSystemQuestions,
    ...shockQuestions,
    ...traumaGeneralQuestions,
    ...hemorragiasQuestions,
    ...faceAndNeckExamen,
    ...softTissueExam,
    ...headAndColumnInjuriesQuestions,
    ...toraxInjuriesQuestions,
    ...feetInjuriesQuestions,
    ...abdoBeniInjuriesQuestions,
    ...inmunologieQuestions,
    ...toxicologyQuestions,
    ...environmentalEmergencyQuestions,
    ...psiquiatricQuestions,
    ...gineQuestions,
    ...obstetricQuestions,
    ...pediatricQuestions,
    ...geriatricQuestions,
    ...specialNeedsPacientQuestions,
    ...transportOperationsQuestions,
    ...incidentManageQuestions,
    ...terroristManageQuestions
]




