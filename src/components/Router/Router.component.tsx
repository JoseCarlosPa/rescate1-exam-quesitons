import {Suspense} from "react";
import {Route, Routes} from "react-router";
import App from "../../App.tsx";
import GeneralExam from "../../pages/EMT/GeneralExam/GeneralExam.page.tsx";
import LegalAspects from "../../pages/EMT/LegalAspects/LegalAspects.page.tsx";
import Exam from "../Exam/Exam.component.tsx";
import { legalQuestions, legalChallengingQuestions } from "../../pages/EMT/LegalAspects/LegalAspects.questions";
import Communications from "../../pages/EMT/Communications/Communications.page.tsx";
import { communicationsQuestions, communicationsChallengingQuestions } from "../../pages/EMT/Communications/Communications.questions";
import Sem from "../../pages/EMT/SEM/Sem.page.tsx";
import Main from "../../pages/Main/Main.page.tsx";
import Lms from "../../pages/LMS/Lms.page.tsx";
import Bls from "../../pages/BLS/Bls.page.tsx";
import StopTheBleed from "../../pages/StopTheBleed/StopTheBleed.page.tsx";
import SecurityOfPersonal from "../../pages/EMT/SecurityOfPersonal/SecurityOfPersonal.page.tsx";
import { securityQuestions, securityChallengingQuestions } from "../../pages/EMT/SecurityOfPersonal/SecurityOfPersonal.questions";
import { medicTermsQuestions, medicTermsChallengingQuestions } from "../../pages/EMT/MedicTerms/MediTerms.questions";
import MedicTerms from "../../pages/EMT/MedicTerms/MedicTerms.page.tsx";
import { humanBodyQuestions, humanBodyChallengingQuestions } from "../../pages/EMT/HumanBody/HumanBody.questions";
import HumanBody from "../../pages/EMT/HumanBody/HumanBody.page.tsx";
import LifeSpec from "../../pages/EMT/LifeSpec/LifeSpec.page.tsx";
import { lifeSpecQuestions, lifeSpecChallengingQuestions } from "../../pages/EMT/LifeSpec/LifeSpec.questions";
import Evaluation from "../../pages/EMT/Evaluation/Evaluation.page.tsx";
import { patientAssessmentQuestions, patientAssessmentChallengingQuestions } from "../../pages/EMT/Evaluation/Evaluation.questions.ts";
import Mnemotecnias from "../../pages/EMT/Nnemotecnias/Mnemotecnias.page.tsx";
import AirwayManage from "../../pages/EMT/AirwayManage/AirwayManage.page.tsx";
import { airwayManagementQuestions, airwayManagementChallengingQuestions } from "../../pages/EMT/AirwayManage/AirwayManage.questions";
import Pharmacology from "../../pages/EMT/Pharmacology/Pharmacology.page.tsx";
import {
    pharmacologyChallengeQuestions,
    pharmacologyQuestions
} from "../../pages/EMT/Pharmacology/Pharmacology.questions.ts";
import MedAdmin from "../../pages/EMT/MedAdmin/MedAdmin.page.tsx";
import {
    medicationAdministrationChallengeQuestions,
    medicationAdministrationQuestions
} from "../../pages/EMT/MedAdmin/MedAdmin.questions.ts";
import {shockChallengeQuestions, shockQuestions} from "../../pages/EMT/Shock/Shock.questions.ts";
import Shock from "../../pages/EMT/Shock/Shock.page.tsx";
import Resources from "../../pages/Resources/Resources.page.tsx";
import ReanimateSvb from "../../pages/EMT/ReanimateSvb/ReanimateSvb.page.tsx";
import {svbChallengeQuestions, svbQuestions} from "../../pages/EMT/ReanimateSvb/ReanimateSvb.questions.ts";
import { megaQuestions } from "../../pages/EMT/Mega/Mega.questions.ts";
import Mega from "../../pages/EMT/Mega/Mega.page.tsx";
import {AllRoutes} from "./Router.constants.ts";
import Login from "../../pages/Auth/Login/Login.page.tsx";
import Register from "../../pages/Auth/Register/Register.page.tsx";
import StudentDashboard from "../../pages/Student/Dashboard/StudentDashboard.page.tsx";
import StudentProfile from "../../pages/Student/Profile/StudentProfile.page.tsx";
import StudentGrades from "../../pages/Student/Grades/StudentGrades.page.tsx";
import StudentForum from "../../pages/Student/Forum/StudentForum.page.tsx";
import AdminDashboard from "../../pages/Admin/Dashboard/AdminDashboard.page.tsx";
import {
    respiratoryEmergenciesChallengingExam,
    respiratoryEmergenciesExam,
} from "../../pages/EMT/AirwayEmergency/AirwayEmergency.questions.ts";
import AirwayEmergency from "../../pages/EMT/AirwayEmergency/AirwayEmergency.page.tsx";
import {
    cardiovascularQuestions,
    cardiovascularQuestionsChallenge
} from "../../pages/EMT/CardioEmergency/CardioEmergency.questions.ts";
import CardioEmergency from "../../pages/EMT/CardioEmergency/CardioEmergency.page.tsx";
import NeuroEmergency from "../../pages/EMT/NeuroEmergency/NeuroEmergency.page.tsx";
import {
    neurologicalQuestionsChallenge,
    neurologicasQuestions,
} from "../../pages/EMT/NeuroEmergency/NeuroEmergency.questions.ts";
import GastroEmergency from "../../pages/EMT/GastroEmergency/GastroEmergency.page.tsx";
import {
    gastrointestinalUrologicQuestions,
    gastrointestinalUrologicQuestionsChallenge
} from "../../pages/EMT/GastroEmergency/GastroEmergency.questions.ts";
import EndocryEmergency from "../../pages/EMT/EndocryEmergency/EndocryEmergency.page.tsx";
import {
    endocrineHematologicQuestions,
} from "../../pages/EMT/EndocryEmergency/EndocryEmergency.questions.ts";
import { traumaGeneralQuestions } from "../../pages/EMT/Trauma/Trauma.questions.ts";
import Trauma from "../../pages/EMT/Trauma/Trauma.page.tsx";
import Immobilization from "../../pages/EMT/Immobilization/Immobilization.page.tsx";
import { immobilizationQuestions } from "../../pages/EMT/Immobilization/Immobilization.questionts.ts";
import Disclaimer from "../../pages/Main/Disclaimer.page.tsx";
import PrivacyAndTerms from "../../pages/Main/PrivacyAndTerms.page.tsx";
import Glosary from "../Glosary/Glosary.page.tsx";
import Bleeding from "../../pages/EMT/Bleeding/Bleeding.page.tsx";
import { hemorragiasQuestions } from "../../pages/EMT/Bleeding/Bleeding.questions.ts";
import StudyCase from "../StudyCase/StudyCase.page.tsx";
import AlgorithmsAndProtocols from "../AlgorithmsAndProtocols/AlgorithmsAndProtocols.page.tsx";
import FaceAndNeck from "../../pages/EMT/FaceAndNeck/FaceAndNeck.page.tsx";
import { faceAndNeckExamen } from "../../pages/EMT/FaceAndNeck/FaceAndNeck.questions.ts";
import { softTissueExam } from "../../pages/EMT/SoftTissue/SoftTissue.questions.ts";
import SoftTissue from "../../pages/EMT/SoftTissue/SoftTissue.page.tsx";
import HeadAndColumnInjuries from "../../pages/EMT/HeadAndColumnInjuries/HeadAndColumnInjuries.page.tsx";
import { headAndColumnInjuriesQuestions } from "../../pages/EMT/HeadAndColumnInjuries/HeadAndColumnInjuries.questions.ts";
import ToraxInjuries from "../../pages/EMT/ToraxInjuries/ToraxInjuries.page.tsx";
import { toraxInjuriesQuestions } from "../../pages/EMT/ToraxInjuries/ToraxInjuries.questions.ts";
import FeetInjuries from "../../pages/EMT/FeetInjuries/FeetInjuries.page.tsx";
import { feetInjuriesQuestions } from "../../pages/EMT/FeetInjuries/FeetInjuries.questions.ts";
import { abdoBeniInjuriesQuestions } from "../../pages/EMT/AbdoGeniInjuries/AbdoGeniInjuries.questions.ts";
import AbdoGeniInjuries from "../../pages/EMT/AbdoGeniInjuries/AbdoGeniInjuries.page.tsx";
import { inmunologieQuestions } from "../../pages/EMT/InmunologyEmergencies/InmunologyEmergencies.questions.ts";
import InmunologyEmergencies from "../../pages/EMT/InmunologyEmergencies/InmunologyEmergencies.page.tsx";
import { toxicologyQuestions } from "../../pages/EMT/Toxicology/Toxicology.questions.ts";
import Toxicology from "../../pages/EMT/Toxicology/Toxicology.page.tsx";
import { environmentalEmergencyQuestions } from "../../pages/EMT/AmbientalEmergencies/AmbientalEmergencies.questions.ts";
import AmbientalEmergencies from "../../pages/EMT/AmbientalEmergencies/AmbientalEmergencies.page.tsx";
import { psiquiatricQuestions } from "../../pages/EMT/PsiquiatricEmergencies/PsiquiatricEmergencies.questions.ts";
import PsiquiatricEmergencies from "../../pages/EMT/PsiquiatricEmergencies/PsiquiatricEmergencies.page.tsx";
import GineEmergencies from "../../pages/EMT/GineEmergencies/GineEmergencies.page.tsx";
import { gineQuestions } from "../../pages/EMT/GineEmergencies/GineEmergencies.questions.ts";
import ObstreticCare from "../../pages/EMT/ObstreticCare/ObstreticCare.page.tsx";
import { obstetricQuestions } from "../../pages/EMT/ObstreticCare/ObstreticCare.questions.ts";
import PediatricEmergencies from "../../pages/EMT/PediatricEmergencies/PediatricEmergencies.page.tsx";
import { pediatricQuestions } from "../../pages/EMT/PediatricEmergencies/PediatricEmergencies.questions.ts";
import GeriatricEmergencies from "../../pages/EMT/GeriatricEmergencies/GeriatricEmergencies.page.tsx";
import { geriatricQuestions } from "../../pages/EMT/GeriatricEmergencies/GeriatricEmergencies.questions.ts";
import { specialNeedsPacientQuestions } from "../../pages/EMT/SpecialNeedsPacient/SpecialNeedsPacient.questions.ts";
import SpecialNeedsPacient from "../../pages/EMT/SpecialNeedsPacient/SpecialNeedsPacient.page.tsx";
import { transportOperationsQuestions } from "../../pages/EMT/TransportOperations/TransportOperations.questions.ts";
import TransportOperations from "../../pages/EMT/TransportOperations/TransportOperations.page.tsx";
import IncidentManage from "../../pages/EMT/IncidentManage/IncidentManage.page.tsx";
import { incidentManageQuestions } from "../../pages/EMT/IncidentManage/IncidentManage.questions.ts";
import TerroristManage from "../../pages/EMT/TerroristManage/TerroristManage.page.tsx";
import { terroristManageQuestions } from "../../pages/EMT/TerroristManage/TerroristManage.questions.ts";
import MedicVision from "../../pages/EMT/MedicVision/MedicVision.page.tsx";
import { visionMedicGeneralQuestions } from "../../pages/EMT/MedicVision/MedicVision.questions.ts";
import {semSystemChallengingQuestions, semSystemQuestions} from "../../pages/EMT/SEM/Sem.questions.ts";
import {nemotecniasQuestions} from "../../pages/EMT/Nnemotecnias/Mnemotecnias.questions.ts";
export default function Router(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>

                <Route path={AllRoutes.LOGIN} element={<Login/>}/>
                <Route path={AllRoutes.REGISTER} element={<Register/>}/>

                {/* Student Dashboard Routes */}
                <Route path={AllRoutes.STUDENT_DASHBOARD} element={<StudentDashboard/>}/>
                <Route path={AllRoutes.STUDENT_PROFILE} element={<StudentProfile/>}/>
                <Route path={AllRoutes.STUDENT_GRADES} element={<StudentGrades/>}/>
                <Route path={AllRoutes.STUDENT_FORUM} element={<StudentForum/>}/>

                {/* Admin Dashboard Routes */}
                <Route path={AllRoutes.ADMIN_DASHBOARD} element={<AdminDashboard/>}/>

                <Route path="/" element={<Main/>}/>

                <Route path={AllRoutes.EMT} element={<App/>}/>
                <Route path={AllRoutes.GENERAL} element={<GeneralExam/>}/>
                <Route path={AllRoutes.LEGAL} element={<LegalAspects />}/>
                <Route path={`/${AllRoutes.LEGAL}/exam`} element={<Exam returnRoute={AllRoutes.LEGAL} name="Aspectos Legales" questions={legalQuestions} challengingQuestions={legalChallengingQuestions} id={2}  />}/>
                <Route path={AllRoutes.COMMUNICATIONS} element={<Communications />}/>
                <Route path={`${AllRoutes.COMMUNICATIONS}/exam`} element={<Exam returnRoute={AllRoutes.COMMUNICATIONS} name="Comunicaciones y documentación" questions={communicationsQuestions} challengingQuestions={communicationsChallengingQuestions} id={3}  />}/>
                <Route path={AllRoutes.SEM} element={<Sem />}/>
                <Route path={`${AllRoutes.SEM}/exam`} element={<Exam returnRoute={AllRoutes.SEM} name="Sistema SEM" questions={semSystemQuestions} challengingQuestions={semSystemChallengingQuestions} id={4}  />}/>
                <Route path={AllRoutes.SECURITY_OF_PERSONAL} element={<SecurityOfPersonal />}/>
                <Route path={`${AllRoutes.SECURITY_OF_PERSONAL}/exam`} element={<Exam returnRoute={AllRoutes.SECURITY_OF_PERSONAL} name="Seguridad y bienestar del personal" questions={securityQuestions} challengingQuestions={securityChallengingQuestions} id={5}  />}/>
                <Route path={AllRoutes.MEDIC_TERMS} element={<MedicTerms />}/>
                <Route path={`${AllRoutes.MEDIC_TERMS}/exam`} element={<Exam returnRoute={AllRoutes.MEDIC_TERMS} name="Terminos Médicos" questions={medicTermsQuestions} challengingQuestions={medicTermsChallengingQuestions} id={6}  />}/>
                <Route path={AllRoutes.HUMAN_BODY} element={<HumanBody />}/>
                <Route path={`${AllRoutes.HUMAN_BODY}/exam`} element={<Exam returnRoute={AllRoutes.HUMAN_BODY} name="El Cuerpo Humano" questions={humanBodyQuestions} challengingQuestions={humanBodyChallengingQuestions} id={7}  />}/>
                <Route path={AllRoutes.LIFE_SPEC} element={<LifeSpec />}/>
                <Route path={`${AllRoutes.LIFE_SPEC}/exam`} element={<Exam returnRoute={AllRoutes.LIFE_SPEC} name="Desarrollo y esperanza de vida" questions={lifeSpecQuestions} challengingQuestions={lifeSpecChallengingQuestions} id={8}  />}/>
                <Route path={AllRoutes.EVALUATION} element={<Evaluation />}/>
                <Route path={`${AllRoutes.EVALUATION}/exam`} element={<Exam returnRoute={AllRoutes.EVALUATION} name="Evaluacion del paciente" questions={patientAssessmentQuestions} challengingQuestions={patientAssessmentChallengingQuestions} id={9} />}/>
                <Route path={AllRoutes.MNEMOTECNIAS} element={<Mnemotecnias />}/>
                <Route path={`${AllRoutes.MNEMOTECNIAS}/exam`} element={<Exam returnRoute={AllRoutes.MNEMOTECNIAS} name="Mnemotecnias" questions={nemotecniasQuestions} challengingQuestions={[]} id={10}  />}/>
                <Route path={AllRoutes.AIRWAY_MANAGE} element={<AirwayManage />}/>
                <Route path={`${AllRoutes.AIRWAY_MANAGE}/exam`} element={<Exam returnRoute={AllRoutes.AIRWAY_MANAGE} name="Manejo de la Vía Aérea" questions={airwayManagementQuestions} challengingQuestions={airwayManagementChallengingQuestions} id={11}  />}/>
                <Route path={AllRoutes.PHARMACOLOGY} element={<Pharmacology />}/>
                <Route path={`${AllRoutes.PHARMACOLOGY}/exam`} element={<Exam returnRoute={AllRoutes.PHARMACOLOGY} name="Principios de la Farmacología" questions={pharmacologyQuestions} id={12} challengingQuestions={pharmacologyChallengeQuestions}  />}/>
                <Route path={AllRoutes.MED_ADMIN} element={<MedAdmin />}/>
                <Route path={`${AllRoutes.MED_ADMIN}/exam`} element={<Exam returnRoute={AllRoutes.MED_ADMIN} name="Administración de Medicamentos" questions={medicationAdministrationQuestions} id={13} challengingQuestions={medicationAdministrationChallengeQuestions}  />}/>
                <Route path={AllRoutes.SHOCK} element={<Shock />}/>
                <Route path={`${AllRoutes.SHOCK}/exam`} element={<Exam returnRoute={AllRoutes.SHOCK} name="shock" questions={shockQuestions} id={14} challengingQuestions={shockChallengeQuestions}  />}/>
                <Route path={AllRoutes.REANIMATE_SVB} element={<ReanimateSvb />}/>
                <Route path={`${AllRoutes.REANIMATE_SVB}/exam`} element={<Exam returnRoute={AllRoutes.REANIMATE_SVB} name="Reanimación: Soporte Vital Básico (SVB)" questions={svbQuestions} id={15} challengingQuestions={svbChallengeQuestions}  />}/>
                <Route path={AllRoutes.MEGA} element={<Mega />}/>
                <Route path={`${AllRoutes.MEGA}/exam`} element={<Exam returnRoute={AllRoutes.MEGA} name="Codigo Mega" questions={megaQuestions} id={16}  />}/>
                <Route path={AllRoutes.MEDIC_VISION} element={<MedicVision />}/>
                <Route path={`${AllRoutes.MEDIC_VISION}/exam`} element={<Exam returnRoute={AllRoutes.MEDIC_VISION} name="Vision médica general" questions={visionMedicGeneralQuestions} id={17} />}/>
                <Route path={AllRoutes.AIRWAY_EMERGENCY} element={<AirwayEmergency />}/>
                <Route path={`${AllRoutes.AIRWAY_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.AIRWAY_EMERGENCY} name="Emergencias respiratorias" questions={respiratoryEmergenciesExam} id={18} challengingQuestions={respiratoryEmergenciesChallengingExam} />}/>
                <Route path={AllRoutes.CARDIO_EMERGENCY} element={<CardioEmergency />}/>
                <Route path={`${AllRoutes.CARDIO_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.CARDIO_EMERGENCY} name="Emergencias Cardiovasculares" questions={cardiovascularQuestions} id={19} challengingQuestions={cardiovascularQuestionsChallenge}  />}/>
                <Route path={AllRoutes.NEURO_EMERGENCY} element={<NeuroEmergency />}/>
                <Route path={`${AllRoutes.NEURO_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.NEURO_EMERGENCY} name="Emergencias Neurologicas" questions={neurologicasQuestions} id={20} challengingQuestions={neurologicalQuestionsChallenge}  />}/>
                <Route path={AllRoutes.GASTRO_EMERGENCY} element={<GastroEmergency />}/>
                <Route path={`${AllRoutes.GASTRO_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.GASTRO_EMERGENCY} name="Emergencias gastrointestinales y urológicas" questions={gastrointestinalUrologicQuestions} id={21}  challengingQuestions={gastrointestinalUrologicQuestionsChallenge} />}/>
                <Route path={AllRoutes.ENDOCRINE_EMERGENCY} element={<EndocryEmergency />}/>
                <Route path={`${AllRoutes.ENDOCRINE_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.ENDOCRINE_EMERGENCY} name="Emergencias endocrinas y hematológicas" questions={endocrineHematologicQuestions} id={22}  />}/>
                <Route path={AllRoutes.TRAUMA} element={<Trauma />}/>
                <Route path={`${AllRoutes.TRAUMA}/exam`} element={<Exam returnRoute={AllRoutes.TRAUMA} name="Conceptos generales de trauma" questions={traumaGeneralQuestions} id={23}  />}/>
                <Route path={AllRoutes.IMMOBILIZATION} element={<Immobilization />}/>
                <Route path={`${AllRoutes.IMMOBILIZATION}/exam`} element={<Exam returnRoute={AllRoutes.IMMOBILIZATION} name="Inmovilización" questions={immobilizationQuestions} id={24}  />}/>
                <Route path={AllRoutes.BLEEDING} element={<Bleeding />}/>
                <Route path={`${AllRoutes.BLEEDING}/exam`} element={<Exam returnRoute={AllRoutes.BLEEDING} name="Hemorragias" questions={hemorragiasQuestions} id={25}  />}/>
                <Route path={AllRoutes.FACE_AND_NECK} element={<FaceAndNeck />}/>
                <Route path={`${AllRoutes.FACE_AND_NECK}/exam`} element={<Exam returnRoute={AllRoutes.FACE_AND_NECK} name="Lesiones de cara y cuello" questions={faceAndNeckExamen} id={27}  />}/>
                <Route path={AllRoutes.SOFT_TISSUE} element={<SoftTissue />}/>
                <Route path={`${AllRoutes.SOFT_TISSUE}/exam`} element={<Exam returnRoute={AllRoutes.HEAD_AND_COLUMN_INJURIES} name="Lesiones del tejido blando" questions={softTissueExam} id={28}  />}/>
                <Route path={AllRoutes.HEAD_AND_COLUMN_INJURIES} element={<HeadAndColumnInjuries />}/>
                <Route path={`${AllRoutes.HEAD_AND_COLUMN_INJURIES}/exam`} element={<Exam returnRoute={AllRoutes.TORAX_INJURIES} name="Lesiones de caveza y columna vertebral" questions={headAndColumnInjuriesQuestions} id={29}  />}/>
                <Route path={AllRoutes.TORAX_INJURIES} element={<ToraxInjuries />}/>
                <Route path={`${AllRoutes.TORAX_INJURIES}/exam`} element={<Exam returnRoute={AllRoutes.TORAX_INJURIES} name="Lesiones del torax" questions={toraxInjuriesQuestions} id={30}  />}/>
                <Route path={AllRoutes.FEET_INJURIES} element={<FeetInjuries />}/>
                <Route path={`${AllRoutes.FEET_INJURIES}/exam`} element={<Exam returnRoute={AllRoutes.FEET_INJURIES} name="Lesiones Ortopedicas" questions={feetInjuriesQuestions} id={31}  />}/>
                <Route path={AllRoutes.ABDO_GENI_INJURIES} element={<AbdoGeniInjuries />}/>
                <Route path={`${AllRoutes.ABDO_GENI_INJURIES}/exam`} element={<Exam returnRoute={AllRoutes.ABDO_GENI_INJURIES} name="Lesiones Abdominales y genitourinarias" questions={abdoBeniInjuriesQuestions} id={32}  />}/>
                <Route path={AllRoutes.INMUNO_EMERGENCY} element={<InmunologyEmergencies />}/>
                <Route path={`${AllRoutes.INMUNO_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.INMUNO_EMERGENCY} name="Emergencias inmunologicas" questions={inmunologieQuestions} id={33}  />}/>
                <Route path={AllRoutes.TOXICOLOGY} element={<Toxicology />}/>
                <Route path={`${AllRoutes.TOXICOLOGY}/exam`} element={<Exam returnRoute={AllRoutes.TOXICOLOGY} name="Toxicologia" questions={toxicologyQuestions} id={34}  />}/>
                <Route path={AllRoutes.AMBIENTAL_EMERGENCIES} element={<AmbientalEmergencies />}/>
                <Route path={`${AllRoutes.AMBIENTAL_EMERGENCIES}/exam`} element={<Exam returnRoute={AllRoutes.AMBIENTAL_EMERGENCIES} name="Emergencias Ambientales" questions={environmentalEmergencyQuestions} id={35}  />}/>
                <Route path={AllRoutes.PSIQUIATRIC_EMERGENCY} element={<PsiquiatricEmergencies />}/>
                <Route path={`${AllRoutes.PSIQUIATRIC_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.PSIQUIATRIC_EMERGENCY} name="Emergencias Psiquiatricas" questions={psiquiatricQuestions} id={36}  />}/>
                <Route path={AllRoutes.GINE_EMERGENCY} element={<GineEmergencies />}/>
                <Route path={`${AllRoutes.GINE_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.GINE_EMERGENCY} name="Emergencias Ginecologicas" questions={gineQuestions} id={37}  />}/>
                <Route path={AllRoutes.OBSTETRIC_CARE} element={<ObstreticCare />}/>
                <Route path={`${AllRoutes.OBSTETRIC_CARE}/exam`} element={<Exam returnRoute={AllRoutes.OBSTETRIC_CARE} name="Cuidados obstétricos y neonatales" questions={obstetricQuestions} id={38}  />}/>
                <Route path={AllRoutes.PEDIATRIC_EMERGENCIES} element={<PediatricEmergencies />}/>
                <Route path={`${AllRoutes.PEDIATRIC_EMERGENCIES}/exam`} element={<Exam returnRoute={AllRoutes.PEDIATRIC_EMERGENCIES} name="Emergencias pediátricas" questions={pediatricQuestions} id={39}  />}/>
                <Route path={AllRoutes.GERIATRIC_EMERGENCIES} element={<GeriatricEmergencies />}/>
                <Route path={`${AllRoutes.GERIATRIC_EMERGENCIES}/exam`} element={<Exam returnRoute={AllRoutes.GERIATRIC_EMERGENCIES} name="Emergencias Geriatricas" questions={geriatricQuestions} id={40}  />}/>
                <Route path={AllRoutes.SPECIAL_NEEDS_PACIENT} element={<SpecialNeedsPacient />}/>
                <Route path={`${AllRoutes.SPECIAL_NEEDS_PACIENT}/exam`} element={<Exam returnRoute={AllRoutes.SPECIAL_NEEDS_PACIENT} name="Pacientes con necesidades especiales" questions={specialNeedsPacientQuestions} id={41}  />}/>
                <Route path={AllRoutes.TRANSPORT_OPERATIONS} element={<TransportOperations />}/>
                <Route path={`${AllRoutes.TRANSPORT_OPERATIONS}/exam`} element={<Exam returnRoute={AllRoutes.TRANSPORT_OPERATIONS} name="Operaciones de transporte" questions={transportOperationsQuestions} id={42}  />}/>
                <Route path={AllRoutes.INCIDENT_MANAGEMENT} element={<IncidentManage />}/>
                <Route path={`${AllRoutes.INCIDENT_MANAGEMENT}/exam`} element={<Exam returnRoute={AllRoutes.INCIDENT_MANAGEMENT} name="Manejo de incidentes" questions={incidentManageQuestions} id={43}  />}/>
                <Route path={AllRoutes.INCIDENT_MANAGEMENT} element={<IncidentManage />}/>
                <Route path={`${AllRoutes.INCIDENT_MANAGEMENT}/exam`} element={<Exam returnRoute={AllRoutes.INCIDENT_MANAGEMENT} name="Manejo de incidentes" questions={incidentManageQuestions} id={43}  />}/>
                <Route path={AllRoutes.TERRORIST_MANAGEMENT} element={<TerroristManage />}/>
                <Route path={`${AllRoutes.TERRORIST_MANAGEMENT}/exam`} element={<Exam returnRoute={AllRoutes.TERRORIST_MANAGEMENT} name="Respuesta al terrorismo y manejo de desastres" questions={terroristManageQuestions} id={44}  />}/>

                <Route path={AllRoutes.LMS} element={<Lms /> }/>
                <Route path={AllRoutes.BLS} element={<Bls />}/>
                <Route path={AllRoutes.STOP_THE_BLEED} element={<StopTheBleed />}/>
                <Route path={AllRoutes.GLOSARY} element={<Glosary />}/>
                <Route path={AllRoutes.STUDY_CASES} element={<StudyCase />}/>
                <Route path={AllRoutes.ALOGIRTHMS} element={<AlgorithmsAndProtocols />}/>
                <Route path={AllRoutes.RESOURCES} element={<Resources />}/>
                <Route path={AllRoutes.DISCLAMER} element={<Disclaimer />}/>
                <Route path={AllRoutes.PRIVACYANDTERMS} element={<PrivacyAndTerms />}/>

            </Routes>
        </Suspense>
    );
}