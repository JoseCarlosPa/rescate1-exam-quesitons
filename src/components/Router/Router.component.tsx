import { Suspense } from "react";
import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute.component";
import App from "../../App.tsx";
import GeneralExam from "../../pages/EMT/GeneralExam/GeneralExam.page.tsx";
import LegalAspects from "../../pages/EMT/LegalAspects/LegalAspects.page.tsx";
import Exam from "../Exam/Exam.component.tsx";
import { legalChallengingQuestions, legalQuestions } from "../../pages/EMT/LegalAspects/LegalAspects.questions";
import Communications from "../../pages/EMT/Communications/Communications.page.tsx";
import {
       communicationsChallengingQuestions,
       communicationsQuestions
} from "../../pages/EMT/Communications/Communications.questions";
import Sem from "../../pages/EMT/SEM/Sem.page.tsx";
import Main from "../../pages/Main/Main.page.tsx";
import Lms from "../../pages/LMS/Lms.page.tsx";
import Bls from "../../pages/BLS/Bls.page.tsx";
import StopTheBleed from "../../pages/StopTheBleed/StopTheBleed.page.tsx";
import SecurityOfPersonal from "../../pages/EMT/SecurityOfPersonal/SecurityOfPersonal.page.tsx";
import {
       securityChallengingQuestions,
       securityQuestions
} from "../../pages/EMT/SecurityOfPersonal/SecurityOfPersonal.questions";
import { medicTermsChallengingQuestions, medicTermsQuestions } from "../../pages/EMT/MedicTerms/MediTerms.questions";
import MedicTerms from "../../pages/EMT/MedicTerms/MedicTerms.page.tsx";
import { humanBodyChallengingQuestions, humanBodyQuestions } from "../../pages/EMT/HumanBody/HumanBody.questions";
import HumanBody from "../../pages/EMT/HumanBody/HumanBody.page.tsx";
import LifeSpec from "../../pages/EMT/LifeSpec/LifeSpec.page.tsx";
import { lifeSpecChallengingQuestions, lifeSpecQuestions } from "../../pages/EMT/LifeSpec/LifeSpec.questions";
import Evaluation from "../../pages/EMT/Evaluation/Evaluation.page.tsx";
import {
       patientAssessmentChallengingQuestions,
       patientAssessmentQuestions
} from "../../pages/EMT/Evaluation/Evaluation.questions.ts";
import Mnemotecnias from "../../pages/EMT/Nnemotecnias/Mnemotecnias.page.tsx";
import AirwayManage from "../../pages/EMT/AirwayManage/AirwayManage.page.tsx";
import {
       airwayManagementChallengingQuestions,
       airwayManagementQuestions
} from "../../pages/EMT/AirwayManage/AirwayManage.questions";
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
import { shockChallengeQuestions, shockQuestions } from "../../pages/EMT/Shock/Shock.questions.ts";
import Shock from "../../pages/EMT/Shock/Shock.page.tsx";
import Resources from "../../pages/Resources/Resources.page.tsx";
import ReanimateSvb from "../../pages/EMT/ReanimateSvb/ReanimateSvb.page.tsx";
import { svbChallengeQuestions, svbQuestions } from "../../pages/EMT/ReanimateSvb/ReanimateSvb.questions.ts";
import { megaQuestions } from "../../pages/EMT/Mega/Mega.questions.ts";
import Mega from "../../pages/EMT/Mega/Mega.page.tsx";
import { AllRoutes } from "./Router.constants.ts";
import Login from "../../pages/Auth/Login/Login.page.tsx";
import Register from "../../pages/Auth/Register/Register.page.tsx";
import StudentDashboard from "../../pages/Student/Dashboard/StudentDashboard.page.tsx";
import StudentProfile from "../../pages/Student/Profile/StudentProfile.page.tsx";
import StudentGrades from "../../pages/Student/Grades/StudentGrades.page.tsx";
import StudentForum from "../../pages/Student/Forum/StudentForum.page.tsx";
import AdminDashboard from "../../pages/Admin/Dashboard/AdminDashboard.page.tsx";
import StudentTasksPage from "../../pages/Student/Tasks/StudentTasks.page.tsx";
import MiGuardia from "../../pages/Guardia/MiGuardia.page.tsx";
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
       endocrineHematologicChallengeQuestions,
       endocrineHematologicQuestions,
} from "../../pages/EMT/EndocryEmergency/EndocryEmergency.questions.ts";
import { traumaChallengeQuestions, traumaGeneralQuestions } from "../../pages/EMT/Trauma/Trauma.questions.ts";
import Trauma from "../../pages/EMT/Trauma/Trauma.page.tsx";
import Immobilization from "../../pages/EMT/Immobilization/Immobilization.page.tsx";
import {
       immobilizationChallengeQuestions,
       immobilizationQuestions
} from "../../pages/EMT/Immobilization/Immobilization.questionts.ts";
import Disclaimer from "../../pages/Main/Disclaimer.page.tsx";
import PrivacyAndTerms from "../../pages/Main/PrivacyAndTerms.page.tsx";
import Glosary from "../Glosary/Glosary.page.tsx";
import Bleeding from "../../pages/EMT/Bleeding/Bleeding.page.tsx";
import { hemorragiasChallengeQuestions, hemorragiasQuestions } from "../../pages/EMT/Bleeding/Bleeding.questions.ts";
import StudyCase from "../StudyCase/StudyCase.page.tsx";
import AlgorithmsAndProtocols from "../AlgorithmsAndProtocols/AlgorithmsAndProtocols.page.tsx";
import FaceAndNeck from "../../pages/EMT/FaceAndNeck/FaceAndNeck.page.tsx";
import {
       faceAndNeckChallengeQuestions,
       faceAndNeckExamen
} from "../../pages/EMT/FaceAndNeck/FaceAndNeck.questions.ts";
import { softTissueChallengeQuestions, softTissueExam } from "../../pages/EMT/SoftTissue/SoftTissue.questions.ts";
import SoftTissue from "../../pages/EMT/SoftTissue/SoftTissue.page.tsx";
import HeadAndColumnInjuries from "../../pages/EMT/HeadAndColumnInjuries/HeadAndColumnInjuries.page.tsx";
import {
       headAndColumnInjuriesChallengeQuestions,
       headAndColumnInjuriesQuestions
} from "../../pages/EMT/HeadAndColumnInjuries/HeadAndColumnInjuries.questions.ts";
import ToraxInjuries from "../../pages/EMT/ToraxInjuries/ToraxInjuries.page.tsx";
import {
       toraxInjuriesChallengeQuestions,
       toraxInjuriesQuestions
} from "../../pages/EMT/ToraxInjuries/ToraxInjuries.questions.ts";
import FeetInjuries from "../../pages/EMT/FeetInjuries/FeetInjuries.page.tsx";
import {
       feetInjuriesChallengeQuestions,
       feetInjuriesQuestions
} from "../../pages/EMT/FeetInjuries/FeetInjuries.questions.ts";
import {
       abdoBeniInjuriesChallengeQuestions,
       abdoBeniInjuriesQuestions
} from "../../pages/EMT/AbdoGeniInjuries/AbdoGeniInjuries.questions.ts";
import AbdoGeniInjuries from "../../pages/EMT/AbdoGeniInjuries/AbdoGeniInjuries.page.tsx";
import {
       inmunologieChallengeQuestions,
       inmunologieQuestions
} from "../../pages/EMT/InmunologyEmergencies/InmunologyEmergencies.questions.ts";
import InmunologyEmergencies from "../../pages/EMT/InmunologyEmergencies/InmunologyEmergencies.page.tsx";
import { toxicologyChallengeQuestions, toxicologyQuestions } from "../../pages/EMT/Toxicology/Toxicology.questions.ts";
import Toxicology from "../../pages/EMT/Toxicology/Toxicology.page.tsx";
import {
       environmentalEmergencyChallengeQuestions,
       environmentalEmergencyQuestions
} from "../../pages/EMT/AmbientalEmergencies/AmbientalEmergencies.questions.ts";
import AmbientalEmergencies from "../../pages/EMT/AmbientalEmergencies/AmbientalEmergencies.page.tsx";
import {
       psiquiatricChallengeQuestions,
       psiquiatricQuestions
} from "../../pages/EMT/PsiquiatricEmergencies/PsiquiatricEmergencies.questions.ts";
import PsiquiatricEmergencies from "../../pages/EMT/PsiquiatricEmergencies/PsiquiatricEmergencies.page.tsx";
import GineEmergencies from "../../pages/EMT/GineEmergencies/GineEmergencies.page.tsx";
import { gineChallengeQuestions, gineQuestions } from "../../pages/EMT/GineEmergencies/GineEmergencies.questions.ts";
import ObstreticCare from "../../pages/EMT/ObstreticCare/ObstreticCare.page.tsx";
import {
       obstetricChallengeQuestions,
       obstetricQuestions
} from "../../pages/EMT/ObstreticCare/ObstreticCare.questions.ts";
import PediatricEmergencies from "../../pages/EMT/PediatricEmergencies/PediatricEmergencies.page.tsx";
import {
       pediatricChallengeQuestions,
       pediatricQuestions
} from "../../pages/EMT/PediatricEmergencies/PediatricEmergencies.questions.ts";
import GeriatricEmergencies from "../../pages/EMT/GeriatricEmergencies/GeriatricEmergencies.page.tsx";
import {
       geriatricChallengeQuestions,
       geriatricQuestions
} from "../../pages/EMT/GeriatricEmergencies/GeriatricEmergencies.questions.ts";
import {
       specialNeedsChallengeQuestions,
       specialNeedsPacientQuestions
} from "../../pages/EMT/SpecialNeedsPacient/SpecialNeedsPacient.questions.ts";
import SpecialNeedsPacient from "../../pages/EMT/SpecialNeedsPacient/SpecialNeedsPacient.page.tsx";
import {
       transportOperationsChallengeQuestions,
       transportOperationsQuestions
} from "../../pages/EMT/TransportOperations/TransportOperations.questions.ts";
import TransportOperations from "../../pages/EMT/TransportOperations/TransportOperations.page.tsx";
import IncidentManage from "../../pages/EMT/IncidentManage/IncidentManage.page.tsx";
import {
       incidentManageChallengeQuestions,
       incidentManageQuestions
} from "../../pages/EMT/IncidentManage/IncidentManage.questions.ts";
import TerroristManage from "../../pages/EMT/TerroristManage/TerroristManage.page.tsx";
import {
       terroristManageChallengeQuestions,
       terroristManageQuestions
} from "../../pages/EMT/TerroristManage/TerroristManage.questions.ts";
import MedicVision from "../../pages/EMT/MedicVision/MedicVision.page.tsx";
import {
       visionMedicChallengeQuestions,
       visionMedicGeneralQuestions
} from "../../pages/EMT/MedicVision/MedicVision.questions.ts";
import { semSystemChallengingQuestions, semSystemQuestions } from "../../pages/EMT/SEM/Sem.questions.ts";
import { nemotecniasQuestions } from "../../pages/EMT/Nnemotecnias/Mnemotecnias.questions.ts";
import CaseSimulatorPage from "../CaseSimulator/CaseSimulator.page.tsx";
import Games from "../../pages/Games/Games.page.tsx";
import Jeopardy from "../../pages/Games/Jeopardy/Jeopardy.page.tsx";
import MemoryMatch from "../../pages/Games/MemoryMatch/MemoryMatch.page.tsx";
import Trivia from "../../pages/Games/Trivia/Trivia.page.tsx";
import BuzzerBattle from "../../pages/Games/BuzzerBattle/BuzzerBattle.page.tsx";
import RapidResponse from "../../pages/Games/RapidResponse/RapidResponse.page.tsx";
import MedicalQuizArena from "../../pages/Games/MedicalQuizArena";
import RopesPage from "../../pages/Ropes/Ropes.page.tsx";
import Introduction from "../../pages/Ropes/lessons/Introduction/Introduction.page.tsx";
import { introductionQuestions } from "../../pages/Ropes/lessons/Introduction/Introduction.questions.ts";
import Safety from "../../pages/Ropes/lessons/Safety/Safety.page.tsx";
import { safetyQuestions } from "../../pages/Ropes/lessons/Safety/Safety.questions.ts";
import Standards from "../../pages/Ropes/lessons/Standards/Standards.page.tsx";
import { standardsQuestions } from "../../pages/Ropes/lessons/Standards/Standards.questions.ts";
import EquipmentTesting from "../../pages/Ropes/lessons/EquipmentTesting/EquipmentTesting.page.tsx";
import { equipmentTestingQuestions } from "../../pages/Ropes/lessons/EquipmentTesting/EquipmentTesting.questions.ts";
import RopeWebbing from "../../pages/Ropes/lessons/RopeWebbing/RopeWebbing.page.tsx";
import { ropeWebbingQuestions } from "../../pages/Ropes/lessons/RopeWebbing/RopeWebbing.questions.ts";
import Hardware from "../../pages/Ropes/lessons/Hardware/Hardware.page.tsx";
import { hardwareQuestions } from "../../pages/Ropes/lessons/Hardware/Hardware.questions.ts";
import PersonalEquipment from "../../pages/Ropes/lessons/PersonalEquipment/PersonalEquipment.page.tsx";
import { personalEquipmentQuestions } from "../../pages/Ropes/lessons/PersonalEquipment/PersonalEquipment.questions.ts";
import Knots from "../../pages/Ropes/lessons/Knots/Knots.page.tsx";
import { knotsQuestions } from "../../pages/Ropes/lessons/Knots/Knots.questions.ts";
import Anchors from "../../pages/Ropes/lessons/Anchors/Anchors.page.tsx";
import { anchorsQuestions } from "../../pages/Ropes/lessons/Anchors/Anchors.questions.ts";
import AnchorSystems from "../../pages/Ropes/lessons/AnchorSystems/AnchorSystems.page.tsx";
import { anchorSystemsQuestions } from "../../pages/Ropes/lessons/AnchorSystems/AnchorSystems.questions.ts";
import EdgeProtection from "../../pages/Ropes/lessons/EdgeProtection/EdgeProtection.page.tsx";
import { edgeProtectionQuestions } from "../../pages/Ropes/lessons/EdgeProtection/EdgeProtection.questions.ts";
import PatientPackaging from "../../pages/Ropes/lessons/PatientPackaging/PatientPackaging.page.tsx";
import { patientPackagingQuestions } from "../../pages/Ropes/lessons/PatientPackaging/PatientPackaging.questions.ts";

import LitterRigging from "../../pages/Ropes/lessons/LitterRigging/LitterRigging.page.tsx";
import { litterRiggingQuestions } from "../../pages/Ropes/lessons/LitterRigging/LitterRigging.questions.ts";
import TwinTensionSystems from "../../pages/Ropes/lessons/TwinTensionSystems/TwinTensionSystems.page.tsx";
import { twinTensionQuestions } from "../../pages/Ropes/lessons/TwinTensionSystems/TwinTensionSystems.questions.ts";
import BelaySystems from "../../pages/Ropes/lessons/BelaySystems/BelaySystems.page.tsx";
import { belaySystemsQuestions } from "../../pages/Ropes/lessons/BelaySystems/BelaySystems.questions.ts";
import LoweringSystems from "../../pages/Ropes/lessons/LoweringSystems/LoweringSystems.page.tsx";
import { loweringSystemsQuestions } from "../../pages/Ropes/lessons/LoweringSystems/LoweringSystems.questions.ts";
import RaisingSystems from "../../pages/Ropes/lessons/RaisingSystems/RaisingSystems.page.tsx";
import { raisingSystemsQuestions } from "../../pages/Ropes/lessons/RaisingSystems/RaisingSystems.questions.ts";
import ReversingSystem from "../../pages/Ropes/lessons/ReversingSystem/ReversingSystem.page.tsx";
import { reversingSystemQuestions } from "../../pages/Ropes/lessons/ReversingSystem/ReversingSystem.questions.ts";
import KnotPass from "../../pages/Ropes/lessons/KnotPass/KnotPass.page.tsx";
import { knotPassQuestions } from "../../pages/Ropes/lessons/KnotPass/KnotPass.questions.ts";
import AnalyzingSystem from "../../pages/Ropes/lessons/AnalyzingSystem/AnalyzingSystem.page.tsx";
import { analyzingSystemQuestions } from "../../pages/Ropes/lessons/AnalyzingSystem/AnalyzingSystem.questions.ts";
import Rappelling from "../../pages/Ropes/lessons/Rappelling/Rappelling.page.tsx";
import { rappellingQuestions } from "../../pages/Ropes/lessons/Rappelling/Rappelling.questions.ts";
import Ascending from "../../pages/Ropes/lessons/Ascending/Ascending.page.tsx";
import { ascendingQuestions } from "../../pages/Ropes/lessons/Ascending/Ascending.questions.ts";
import FallProtection from "../../pages/Ropes/lessons/FallProtection/FallProtection.page.tsx";
import { fallProtectionQuestions } from "../../pages/Ropes/lessons/FallProtection/FallProtection.questions.ts";
import AccessStabilization from "../../pages/Ropes/lessons/AccessStabilization/AccessStabilization.page.tsx";
import { accessStabilizationQuestions } from "../../pages/Ropes/lessons/AccessStabilization/AccessStabilization.questions.ts";
import PersonPickOff from "../../pages/Ropes/lessons/PersonPickOff/PersonPickOff.page.tsx";
import { personPickOffQuestions } from "../../pages/Ropes/lessons/PersonPickOff/PersonPickOff.questions.ts";
import HighAngleEvacuations from "../../pages/Ropes/lessons/HighAngleEvacuations/HighAngleEvacuations.page.tsx";
import { highAngleEvacuationsQuestions } from "../../pages/Ropes/lessons/HighAngleEvacuations/HighAngleEvacuations.questions.ts";
import LowAngleEvacuations from "../../pages/Ropes/lessons/LowAngleEvacuations/LowAngleEvacuations.page.tsx";
import { lowAngleEvacuationsQuestions } from "../../pages/Ropes/lessons/LowAngleEvacuations/LowAngleEvacuations.questions.ts";
import GuidingLines from "../../pages/Ropes/lessons/GuidingLines/GuidingLines.page.tsx";
import { guidingLinesQuestions } from "../../pages/Ropes/lessons/GuidingLines/GuidingLines.questions.ts";
import HighLines from "../../pages/Ropes/lessons/HighLines/HighLines.page.tsx";
import { highLinesQuestions } from "../../pages/Ropes/lessons/HighLines/HighLines.questions.ts";
import HighAnchorsDirectionals from "../../pages/Ropes/lessons/HighAnchorsDirectionals/HighAnchorsDirectionals.page.tsx";
import { highAnchorsDirectionalsQuestions } from "../../pages/Ropes/lessons/HighAnchorsDirectionals/HighAnchorsDirectionals.questions.ts";
import LadderRescueSystems from "../../pages/Ropes/lessons/LadderRescueSystems/LadderRescueSystems.page.tsx";
import { ladderRescueSystemsQuestions } from "../../pages/Ropes/lessons/LadderRescueSystems/LadderRescueSystems.questions.ts";
import OrganizationPlanning from "../../pages/Ropes/lessons/OrganizationPlanning/OrganizationPlanning.page.tsx";
import { organizationPlanningQuestions } from "../../pages/Ropes/lessons/OrganizationPlanning/OrganizationPlanning.questions.ts";
import PuttingItTogether from "../../pages/Ropes/lessons/PuttingItTogether/PuttingItTogether.page.tsx";
import { puttingItTogetherQuestions } from "../../pages/Ropes/lessons/PuttingItTogether/PuttingItTogether.questions.ts";
import RopeAccess from "../../pages/Ropes/lessons/RopeAccess/RopeAccess.page.tsx";
import { ropeAccessQuestions } from "../../pages/Ropes/lessons/RopeAccess/RopeAccess.questions.ts";
import AntennaTowerRescue from "../../pages/Ropes/lessons/AntennaTowerRescue/AntennaTowerRescue.page.tsx";
import { antennaTowerRescueQuestions } from "../../pages/Ropes/lessons/AntennaTowerRescue/AntennaTowerRescue.questions.ts";
import EscapeBailout from "../../pages/Ropes/lessons/EscapeBailout/EscapeBailout.page.tsx";
import { escapeBailoutQuestions } from "../../pages/Ropes/lessons/EscapeBailout/EscapeBailout.questions.ts";
import SnowSlopeEvacuations from "../../pages/Ropes/lessons/SnowSlopeEvacuations/SnowSlopeEvacuations.page.tsx";
import { snowSlopeEvacuationsQuestions } from "../../pages/Ropes/lessons/SnowSlopeEvacuations/SnowSlopeEvacuations.questions.ts";
import AmbulanceChecklist from "../../pages/AmbulanceChecklist/AmbulanceChecklist.page.tsx";
import Simulator from "../../pages/Simulator/Simulator.page.tsx";
import MonitorAndEkgSimulator from "../../pages/Simulator/MonitorAndEkgSimulator/MonitorAndEkgSimulator.page.tsx";
import InstructorPanel from "../../pages/Simulator/MonitorAndEkgSimulator/InstructorPanel.page.tsx";
import InfusionPumpSimulator from "../../pages/Simulator/InfusionPumpSimulator/InfusionPumpSimulator.page.tsx";
import MechanicalVentilatorSimulator from "../../pages/Simulator/MechanicalVentilatorSimulator/MechanicalVentilatorSimulator.page.tsx";
import CardiacConductionSimulator from "../../pages/Simulator/CardiacConductionSimulator/CardiacConductionSimulator.page.tsx";
import CirculatorySystemSimulator from "../../pages/Simulator/CirculatorySystemSimulator/CirculatorySystemSimulator.page.tsx";
import TampA from "../../pages/TAMPA/TampA.page.tsx";
import ComingSoon from "../../pages/TAMPA/ComingSoon/ComingSoon.page.tsx";
import {tampAModules} from "../../pages/TAMPA/TampA.constants.tsx";
import TampaIntroduction from "../../pages/TAMPA/Introduction/Introduction.page.tsx";
import {introductionQuestions as tampaIntroductionQuestions} from "../../pages/TAMPA/Introduction/Introduction.questions.ts";
import TampaAnatomyPhysiology from "../../pages/TAMPA/AnatomyPhysiology/AnatomyPhysiology.page.tsx";
import {anatomyPhysiologyQuestions as tampaAnatomyPhysiologyQuestions} from "../../pages/TAMPA/AnatomyPhysiology/AnatomyPhysiology.questions.ts";
import TampaPatientAssessment from "../../pages/TAMPA/PatientAssessment/PatientAssessment.page.tsx";
import {patientAssessmentQuestions as tampaPatientAssessmentQuestions} from "../../pages/TAMPA/PatientAssessment/PatientAssessment.questions.ts";

export default function Router() {
       return (
              <Suspense fallback={<div>Loading...</div>}>
                     <Routes>

                            <Route path={AllRoutes.LOGIN} element={<Login />} />
                            <Route path={AllRoutes.REGISTER} element={<Register />} />

                            {/* Student Dashboard Routes — requieren rol completo */}
                            <Route path={AllRoutes.STUDENT_DASHBOARD} element={<ProtectedRoute requireMainAccess><StudentDashboard /></ProtectedRoute>} />
                            <Route path={AllRoutes.STUDENT_PROFILE} element={<ProtectedRoute requireMainAccess><StudentProfile /></ProtectedRoute>} />
                            <Route path={AllRoutes.STUDENT_GRADES} element={<ProtectedRoute requireMainAccess><StudentGrades /></ProtectedRoute>} />
                            <Route path={AllRoutes.STUDENT_FORUM} element={<ProtectedRoute requireMainAccess><StudentForum /></ProtectedRoute>} />
                            <Route path={AllRoutes.STUDENT_TASKS} element={<ProtectedRoute requireMainAccess><StudentTasksPage /></ProtectedRoute>} />
                            <Route path={AllRoutes.MI_GUARDIA} element={<ProtectedRoute requireMainAccess requireElemento><MiGuardia /></ProtectedRoute>} />

                            {/* Admin Dashboard Routes — solo para Admin */}
                            <Route path={AllRoutes.ADMIN_DASHBOARD} element={<ProtectedRoute requireMainAccess requireAdmin><AdminDashboard /></ProtectedRoute>} />

                            <Route path="/" element={<Main />} />

                            <Route path={AllRoutes.EMT} element={<ProtectedRoute requireMainAccess><App /></ProtectedRoute>} />
                            <Route path={AllRoutes.GENERAL} element={<ProtectedRoute requireMainAccess><GeneralExam /></ProtectedRoute>} />
                            <Route path={AllRoutes.LEGAL} element={<ProtectedRoute requireMainAccess><LegalAspects /></ProtectedRoute>} />
                            <Route path={`/${AllRoutes.LEGAL}/exam`}
                                   element={<Exam returnRoute={AllRoutes.LEGAL} name="Aspectos Legales" questions={legalQuestions}
                                          challengingQuestions={legalChallengingQuestions} id={2} />} />
                            <Route path={AllRoutes.COMMUNICATIONS} element={<ProtectedRoute requireMainAccess><Communications /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.COMMUNICATIONS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.COMMUNICATIONS} name="Comunicaciones y documentación"
                                          questions={communicationsQuestions}
                                          challengingQuestions={communicationsChallengingQuestions} id={3} />} />
                            <Route path={AllRoutes.SEM} element={<ProtectedRoute requireMainAccess><Sem /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.SEM}/exam`}
                                   element={<Exam returnRoute={AllRoutes.SEM} name="Sistema SEM" questions={semSystemQuestions}
                                          challengingQuestions={semSystemChallengingQuestions} id={4} />} />
                            <Route path={AllRoutes.SECURITY_OF_PERSONAL} element={<ProtectedRoute requireMainAccess><SecurityOfPersonal /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.SECURITY_OF_PERSONAL}/exam`}
                                   element={<Exam returnRoute={AllRoutes.SECURITY_OF_PERSONAL}
                                          name="Seguridad y bienestar del personal" questions={securityQuestions}
                                          challengingQuestions={securityChallengingQuestions} id={5} />} />
                            <Route path={AllRoutes.MEDIC_TERMS} element={<ProtectedRoute requireMainAccess><MedicTerms /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.MEDIC_TERMS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.MEDIC_TERMS} name="Terminos Médicos"
                                          questions={medicTermsQuestions}
                                          challengingQuestions={medicTermsChallengingQuestions} id={6} />} />
                            <Route path={AllRoutes.HUMAN_BODY} element={<ProtectedRoute requireMainAccess><HumanBody /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.HUMAN_BODY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.HUMAN_BODY} name="El Cuerpo Humano"
                                          questions={humanBodyQuestions}
                                          challengingQuestions={humanBodyChallengingQuestions} id={7} />} />
                            <Route path={AllRoutes.LIFE_SPEC} element={<ProtectedRoute requireMainAccess><LifeSpec /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.LIFE_SPEC}/exam`}
                                   element={<Exam returnRoute={AllRoutes.LIFE_SPEC} name="Desarrollo y esperanza de vida"
                                          questions={lifeSpecQuestions} challengingQuestions={lifeSpecChallengingQuestions}
                                          id={8} />} />
                            <Route path={AllRoutes.EVALUATION} element={<ProtectedRoute requireMainAccess><Evaluation /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.EVALUATION}/exam`}
                                   element={<Exam returnRoute={AllRoutes.EVALUATION} name="Evaluacion del paciente"
                                          questions={patientAssessmentQuestions}
                                          challengingQuestions={patientAssessmentChallengingQuestions} id={9} />} />
                            <Route path={AllRoutes.MNEMOTECNIAS} element={<ProtectedRoute requireMainAccess><Mnemotecnias /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.MNEMOTECNIAS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.MNEMOTECNIAS} name="Mnemotecnias"
                                          questions={nemotecniasQuestions} challengingQuestions={[]} id={10} />} />
                            <Route path={AllRoutes.AIRWAY_MANAGE} element={<ProtectedRoute requireMainAccess><AirwayManage /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.AIRWAY_MANAGE}/exam`}
                                   element={<Exam returnRoute={AllRoutes.AIRWAY_MANAGE} name="Manejo de la Vía Aérea"
                                          questions={airwayManagementQuestions}
                                          challengingQuestions={airwayManagementChallengingQuestions} id={11} />} />
                            <Route path={AllRoutes.PHARMACOLOGY} element={<ProtectedRoute requireMainAccess><Pharmacology /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.PHARMACOLOGY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.PHARMACOLOGY} name="Principios de la Farmacología"
                                          questions={pharmacologyQuestions} id={12}
                                          challengingQuestions={pharmacologyChallengeQuestions} />} />
                            <Route path={AllRoutes.MED_ADMIN} element={<ProtectedRoute requireMainAccess><MedAdmin /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.MED_ADMIN}/exam`}
                                   element={<Exam returnRoute={AllRoutes.MED_ADMIN} name="Administración de Medicamentos"
                                          questions={medicationAdministrationQuestions} id={13}
                                          challengingQuestions={medicationAdministrationChallengeQuestions} />} />
                            <Route path={AllRoutes.SHOCK} element={<ProtectedRoute requireMainAccess><Shock /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.SHOCK}/exam`}
                                   element={<Exam returnRoute={AllRoutes.SHOCK} name="shock" questions={shockQuestions} id={14}
                                          challengingQuestions={shockChallengeQuestions} />} />
                            <Route path={AllRoutes.REANIMATE_SVB} element={<ProtectedRoute requireMainAccess><ReanimateSvb /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.REANIMATE_SVB}/exam`} element={<Exam returnRoute={AllRoutes.REANIMATE_SVB}
                                   name="Reanimación: Soporte Vital Básico (SVB)"
                                   questions={svbQuestions} id={15}
                                   challengingQuestions={svbChallengeQuestions} />} />
                            <Route path={AllRoutes.MEGA} element={<ProtectedRoute requireMainAccess><Mega /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.MEGA}/exam`}
                                   element={<Exam returnRoute={AllRoutes.MEGA} name="Codigo Mega" questions={megaQuestions}
                                          id={16} />} />
                            <Route path={AllRoutes.MEDIC_VISION} element={<ProtectedRoute requireMainAccess><MedicVision /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.MEDIC_VISION}/exam`}
                                   element={<Exam returnRoute={AllRoutes.MEDIC_VISION} name="Vision médica general"
                                          questions={visionMedicGeneralQuestions} id={17} challengingQuestions={visionMedicChallengeQuestions} />} />
                            <Route path={AllRoutes.AIRWAY_EMERGENCY} element={<ProtectedRoute requireMainAccess><AirwayEmergency /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.AIRWAY_EMERGENCY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.AIRWAY_EMERGENCY} name="Emergencias respiratorias"
                                          questions={respiratoryEmergenciesExam} id={18}
                                          challengingQuestions={respiratoryEmergenciesChallengingExam} />} />
                            <Route path={AllRoutes.CARDIO_EMERGENCY} element={<ProtectedRoute requireMainAccess><CardioEmergency /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.CARDIO_EMERGENCY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.CARDIO_EMERGENCY} name="Emergencias Cardiovasculares"
                                          questions={cardiovascularQuestions} id={19}
                                          challengingQuestions={cardiovascularQuestionsChallenge} />} />
                            <Route path={AllRoutes.NEURO_EMERGENCY} element={<ProtectedRoute requireMainAccess><NeuroEmergency /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.NEURO_EMERGENCY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.NEURO_EMERGENCY} name="Emergencias Neurologicas"
                                          questions={neurologicasQuestions} id={20}
                                          challengingQuestions={neurologicalQuestionsChallenge} />} />
                            <Route path={AllRoutes.GASTRO_EMERGENCY} element={<ProtectedRoute requireMainAccess><GastroEmergency /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.GASTRO_EMERGENCY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.GASTRO_EMERGENCY}
                                          name="Emergencias gastrointestinales y urológicas"
                                          questions={gastrointestinalUrologicQuestions} id={21}
                                          challengingQuestions={gastrointestinalUrologicQuestionsChallenge} />} />
                            <Route path={AllRoutes.ENDOCRINE_EMERGENCY} element={<ProtectedRoute requireMainAccess><EndocryEmergency /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.ENDOCRINE_EMERGENCY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ENDOCRINE_EMERGENCY}
                                          name="Emergencias endocrinas y hematológicas"
                                          questions={endocrineHematologicQuestions} challengingQuestions={endocrineHematologicChallengeQuestions} id={22} />} />
                            <Route path={AllRoutes.TRAUMA} element={<ProtectedRoute requireMainAccess><Trauma /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.TRAUMA}/exam`}
                                   element={<Exam returnRoute={AllRoutes.TRAUMA} name="Conceptos generales de trauma"
                                          questions={traumaGeneralQuestions} challengingQuestions={traumaChallengeQuestions} id={23} />} />
                            <Route path={AllRoutes.IMMOBILIZATION} element={<ProtectedRoute requireMainAccess><Immobilization /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.IMMOBILIZATION}/exam`}
                                   element={<Exam returnRoute={AllRoutes.IMMOBILIZATION} name="Inmovilización"
                                          questions={immobilizationQuestions} challengingQuestions={immobilizationChallengeQuestions} id={24} />} />
                            <Route path={AllRoutes.BLEEDING} element={<ProtectedRoute requireMainAccess><Bleeding /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.BLEEDING}/exam`}
                                   element={<Exam returnRoute={AllRoutes.BLEEDING} name="Hemorragias"
                                          questions={hemorragiasQuestions} challengingQuestions={hemorragiasChallengeQuestions} id={25} />} />
                            <Route path={AllRoutes.FACE_AND_NECK} element={<ProtectedRoute requireMainAccess><FaceAndNeck /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.FACE_AND_NECK}/exam`}
                                   element={<Exam returnRoute={AllRoutes.FACE_AND_NECK} name="Lesiones de cara y cuello"
                                          questions={faceAndNeckExamen} challengingQuestions={faceAndNeckChallengeQuestions} id={27} />} />
                            <Route path={AllRoutes.SOFT_TISSUE} element={<ProtectedRoute requireMainAccess><SoftTissue /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.SOFT_TISSUE}/exam`}
                                   element={<Exam returnRoute={AllRoutes.HEAD_AND_COLUMN_INJURIES} name="Lesiones del tejido blando" challengingQuestions={softTissueChallengeQuestions}
                                          questions={softTissueExam} id={28} />} />
                            <Route path={AllRoutes.HEAD_AND_COLUMN_INJURIES} element={<ProtectedRoute requireMainAccess><HeadAndColumnInjuries /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.HEAD_AND_COLUMN_INJURIES}/exam`}
                                   element={<Exam returnRoute={AllRoutes.TORAX_INJURIES}
                                          name="Lesiones de caveza y columna vertebral"
                                          questions={headAndColumnInjuriesQuestions} challengingQuestions={headAndColumnInjuriesChallengeQuestions} id={29} />} />
                            <Route path={AllRoutes.TORAX_INJURIES} element={<ProtectedRoute requireMainAccess><ToraxInjuries /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.TORAX_INJURIES}/exam`}
                                   element={<Exam returnRoute={AllRoutes.TORAX_INJURIES} name="Lesiones del torax"
                                          questions={toraxInjuriesQuestions} challengingQuestions={toraxInjuriesChallengeQuestions} id={30} />} />
                            <Route path={AllRoutes.FEET_INJURIES} element={<ProtectedRoute requireMainAccess><FeetInjuries /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.FEET_INJURIES}/exam`}
                                   element={<Exam returnRoute={AllRoutes.FEET_INJURIES} name="Lesiones Ortopedicas"
                                          questions={feetInjuriesQuestions} challengingQuestions={feetInjuriesChallengeQuestions} id={31} />} />
                            <Route path={AllRoutes.ABDO_GENI_INJURIES} element={<ProtectedRoute requireMainAccess><AbdoGeniInjuries /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.ABDO_GENI_INJURIES}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ABDO_GENI_INJURIES}
                                          name="Lesiones Abdominales y genitourinarias"
                                          questions={abdoBeniInjuriesQuestions} challengingQuestions={abdoBeniInjuriesChallengeQuestions} id={32} />} />
                            <Route path={AllRoutes.INMUNO_EMERGENCY} element={<ProtectedRoute requireMainAccess><InmunologyEmergencies /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.INMUNO_EMERGENCY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.INMUNO_EMERGENCY} name="Emergencias inmunologicas"
                                          questions={inmunologieQuestions} challengingQuestions={inmunologieChallengeQuestions} id={33} />} />
                            <Route path={AllRoutes.TOXICOLOGY} element={<ProtectedRoute requireMainAccess><Toxicology /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.TOXICOLOGY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.TOXICOLOGY} name="Toxicologia"
                                          questions={toxicologyQuestions} challengingQuestions={toxicologyChallengeQuestions} id={34} />} />
                            <Route path={AllRoutes.AMBIENTAL_EMERGENCIES} element={<ProtectedRoute requireMainAccess><AmbientalEmergencies /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.AMBIENTAL_EMERGENCIES}/exam`}
                                   element={<Exam returnRoute={AllRoutes.AMBIENTAL_EMERGENCIES} name="Emergencias Ambientales"
                                          questions={environmentalEmergencyQuestions} challengingQuestions={environmentalEmergencyChallengeQuestions} id={35} />} />
                            <Route path={AllRoutes.PSIQUIATRIC_EMERGENCY} element={<ProtectedRoute requireMainAccess><PsiquiatricEmergencies /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.PSIQUIATRIC_EMERGENCY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.PSIQUIATRIC_EMERGENCY} name="Emergencias Psiquiatricas" challengingQuestions={psiquiatricChallengeQuestions}
                                          questions={psiquiatricQuestions} id={36} />} />
                            <Route path={AllRoutes.GINE_EMERGENCY} element={<ProtectedRoute requireMainAccess><GineEmergencies /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.GINE_EMERGENCY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.GINE_EMERGENCY} name="Emergencias Ginecologicas"
                                          questions={gineQuestions} challengingQuestions={gineChallengeQuestions} id={37} />} />
                            <Route path={AllRoutes.OBSTETRIC_CARE} element={<ProtectedRoute requireMainAccess><ObstreticCare /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.OBSTETRIC_CARE}/exam`}
                                   element={<Exam returnRoute={AllRoutes.OBSTETRIC_CARE} name="Cuidados obstétricos y neonatales" challengingQuestions={obstetricChallengeQuestions}
                                          questions={obstetricQuestions} id={38} />} />
                            <Route path={AllRoutes.PEDIATRIC_EMERGENCIES} element={<ProtectedRoute requireMainAccess><PediatricEmergencies /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.PEDIATRIC_EMERGENCIES}/exam`}
                                   element={<Exam returnRoute={AllRoutes.PEDIATRIC_EMERGENCIES} name="Emergencias pediátricas" challengingQuestions={pediatricChallengeQuestions}
                                          questions={pediatricQuestions} id={39} />} />
                            <Route path={AllRoutes.GERIATRIC_EMERGENCIES} element={<ProtectedRoute requireMainAccess><GeriatricEmergencies /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.GERIATRIC_EMERGENCIES}/exam`}
                                   element={<Exam returnRoute={AllRoutes.GERIATRIC_EMERGENCIES} name="Emergencias Geriatricas"
                                          questions={geriatricQuestions} challengingQuestions={geriatricChallengeQuestions} id={40} />} />
                            <Route path={AllRoutes.SPECIAL_NEEDS_PACIENT} element={<ProtectedRoute requireMainAccess><SpecialNeedsPacient /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.SPECIAL_NEEDS_PACIENT}/exam`}
                                   element={<Exam returnRoute={AllRoutes.SPECIAL_NEEDS_PACIENT}
                                          name="Pacientes con necesidades especiales" challengingQuestions={specialNeedsChallengeQuestions}
                                          questions={specialNeedsPacientQuestions} id={41} />} />
                            <Route path={AllRoutes.TRANSPORT_OPERATIONS} element={<ProtectedRoute requireMainAccess><TransportOperations /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.TRANSPORT_OPERATIONS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.TRANSPORT_OPERATIONS} name="Operaciones de transporte"
                                          questions={transportOperationsQuestions} challengingQuestions={transportOperationsChallengeQuestions} id={42} />} />
                            <Route path={AllRoutes.INCIDENT_MANAGEMENT} element={<ProtectedRoute requireMainAccess><IncidentManage /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.INCIDENT_MANAGEMENT}/exam`}
                                   element={<Exam returnRoute={AllRoutes.INCIDENT_MANAGEMENT} name="Manejo de incidentes"
                                          questions={incidentManageQuestions} challengingQuestions={incidentManageChallengeQuestions} id={43} />} />
                            <Route path={AllRoutes.TERRORIST_MANAGEMENT} element={<ProtectedRoute requireMainAccess><TerroristManage /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.TERRORIST_MANAGEMENT}/exam`}
                                   element={<Exam returnRoute={AllRoutes.TERRORIST_MANAGEMENT}
                                          name="Respuesta al terrorismo y manejo de desastres"
                                          questions={terroristManageQuestions} challengingQuestions={terroristManageChallengeQuestions} id={44} />} />

                            <Route path={AllRoutes.LMS} element={<Lms />} />
                            <Route path={AllRoutes.BLS} element={<ProtectedRoute requireMainAccess><Bls /></ProtectedRoute>} />
                            <Route path={AllRoutes.STOP_THE_BLEED} element={<ProtectedRoute requireMainAccess><StopTheBleed /></ProtectedRoute>} />
                            <Route path={AllRoutes.GLOSARY} element={<ProtectedRoute requireMainAccess><Glosary /></ProtectedRoute>} />
                            <Route path={AllRoutes.STUDY_CASES} element={<ProtectedRoute requireMainAccess><StudyCase /></ProtectedRoute>} />
                            <Route path={AllRoutes.ALOGIRTHMS} element={<ProtectedRoute requireMainAccess><AlgorithmsAndProtocols /></ProtectedRoute>} />
                            <Route path={AllRoutes.RESOURCES} element={<ProtectedRoute requireResourcesAccess><Resources /></ProtectedRoute>} />
                            <Route path={AllRoutes.DISCLAMER} element={<Disclaimer />} />
                            <Route path={AllRoutes.PRIVACYANDTERMS} element={<PrivacyAndTerms />} />
                            <Route path={AllRoutes.CASE_SIMULATOR} element={<CaseSimulatorPage />} />
                            <Route path={AllRoutes.GAMES} element={<Games />} />
                            <Route path={AllRoutes.JEOPARDY} element={<Jeopardy />} />
                            <Route path={AllRoutes.MEMORY_MATCH} element={<MemoryMatch />} />
                            <Route path={AllRoutes.TRIVIA} element={<Trivia />} />
                            <Route path={AllRoutes.RAPID_RESPONSE} element={<RapidResponse />} />
                            <Route path={AllRoutes.BUZZER_BATTLE} element={<BuzzerBattle />} />
                            <Route path={AllRoutes.MEDICAL_QUIZ_ARENA} element={<MedicalQuizArena />} />
                            <Route path={AllRoutes.ROPE_RESCUE} element={<ProtectedRoute requireMainAccess><RopesPage /></ProtectedRoute>} />
                            <Route path={AllRoutes.ROPE_INTRODUCTION} element={<Introduction />} />
                            <Route path={`${AllRoutes.ROPE_INTRODUCTION}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_INTRODUCTION} name="Introducción al Rescate con Cuerdas"
                                          questions={introductionQuestions} id={45} />} />
                            <Route path={AllRoutes.ROPE_SAFETY} element={<Safety />} />
                            <Route path={`${AllRoutes.ROPE_SAFETY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_SAFETY} name="Seguridad"
                                          questions={safetyQuestions} id={46} />} />
                            <Route path={AllRoutes.ROPE_STANDARDS} element={<Standards />} />
                            <Route path={`${AllRoutes.ROPE_STANDARDS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_STANDARDS} name="Normativas y Estándares"
                                          questions={standardsQuestions} id={47} />} />
                            <Route path={AllRoutes.ROPE_EQUIPMENT_TESTING} element={<EquipmentTesting />} />
                            <Route path={`${AllRoutes.ROPE_EQUIPMENT_TESTING}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_EQUIPMENT_TESTING} name="Pruebas de Equipo de Seguridad de Vida"
                                          questions={equipmentTestingQuestions} id={48} />} />
                            <Route path={AllRoutes.ROPE_WEBBING} element={<RopeWebbing />} />
                            <Route path={`${AllRoutes.ROPE_WEBBING}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_WEBBING} name="Cuerdas y Cintas de Seguridad de Vida"
                                          questions={ropeWebbingQuestions} id={49} />} />
                            <Route path={AllRoutes.ROPE_HARDWARE} element={<Hardware />} />
                            <Route path={`${AllRoutes.ROPE_HARDWARE}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_HARDWARE} name="Hardware de Rescate con Cuerdas"
                                          questions={hardwareQuestions} id={50} />} />
                            <Route path={AllRoutes.ROPE_PERSONAL_EQUIPMENT} element={<PersonalEquipment />} />
                            <Route path={`${AllRoutes.ROPE_PERSONAL_EQUIPMENT}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_PERSONAL_EQUIPMENT} name="Equipo Personal"
                                          questions={personalEquipmentQuestions} id={51} />} />
                            <Route path={AllRoutes.ROPE_KNOTS} element={<Knots />} />
                            <Route path={`${AllRoutes.ROPE_KNOTS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_KNOTS} name="Nudos"
                                          questions={knotsQuestions} id={52} />} />
                            <Route path={AllRoutes.ROPE_ANCHORS} element={<Anchors />} />
                            <Route path={`${AllRoutes.ROPE_ANCHORS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_ANCHORS} name="Anclajes"
                                          questions={anchorsQuestions} id={53} />} />
                            <Route path={AllRoutes.ROPE_ANCHOR_SYSTEMS} element={<AnchorSystems />} />
                            <Route path={`${AllRoutes.ROPE_ANCHOR_SYSTEMS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_ANCHOR_SYSTEMS} name="Sistemas de Anclaje"
                                          questions={anchorSystemsQuestions} id={54} />} />
                            <Route path={AllRoutes.ROPE_EDGE_PROTECTION} element={<EdgeProtection />} />
                            <Route path={`${AllRoutes.ROPE_EDGE_PROTECTION}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_EDGE_PROTECTION} name="Protección de Arista"
                                          questions={edgeProtectionQuestions} id={55} />} />
                            <Route path={AllRoutes.ROPE_PATIENT_PACKAGING} element={<PatientPackaging />} />
                            <Route path={`${AllRoutes.ROPE_PATIENT_PACKAGING}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_PATIENT_PACKAGING} name="Empaquetamiento del Paciente"
                                          questions={patientPackagingQuestions} id={56} />} />
                            <Route path={AllRoutes.ROPE_LITTER_RIGGING} element={<LitterRigging />} />
                            <Route path={`${AllRoutes.ROPE_LITTER_RIGGING}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_LITTER_RIGGING} name="Camillas y Aparejo de Camillas"
                                          questions={litterRiggingQuestions} id={57} />} />
                            <Route path={AllRoutes.ROPE_TWIN_TENSION_SYSTEMS} element={<TwinTensionSystems />} />
                            <Route path={`${AllRoutes.ROPE_TWIN_TENSION_SYSTEMS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_TWIN_TENSION_SYSTEMS} name="Sistemas de Doble Tensión"
                                          questions={twinTensionQuestions} id={58} />} />
                            <Route path={AllRoutes.ROPE_BELAY_SYSTEMS} element={<BelaySystems />} />
                            <Route path={`${AllRoutes.ROPE_BELAY_SYSTEMS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_BELAY_SYSTEMS} name="Sistemas de Aseguramiento (Belay)"
                                          questions={belaySystemsQuestions} id={59} />} />
                            <Route path={AllRoutes.ROPE_LOWERING_SYSTEMS} element={<LoweringSystems />} />
                            <Route path={`${AllRoutes.ROPE_LOWERING_SYSTEMS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_LOWERING_SYSTEMS} name="Sistemas de Descenso"
                                          questions={loweringSystemsQuestions} id={60} />} />
                            <Route path={AllRoutes.ROPE_RAISING_SYSTEMS} element={<RaisingSystems />} />
                            <Route path={`${AllRoutes.ROPE_RAISING_SYSTEMS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_RAISING_SYSTEMS} name="Sistemas de Izado y Ventaja Mecánica"
                                          questions={raisingSystemsQuestions} id={61} />} />
                            <Route path={AllRoutes.ROPE_REVERSING_SYSTEM} element={<ReversingSystem />} />
                            <Route path={`${AllRoutes.ROPE_REVERSING_SYSTEM}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_REVERSING_SYSTEM} name="Reversión de un Sistema"
                                          questions={reversingSystemQuestions} id={62} />} />
                            <Route path={AllRoutes.ROPE_KNOT_PASS} element={<KnotPass />} />
                            <Route path={`${AllRoutes.ROPE_KNOT_PASS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_KNOT_PASS} name="Paso de Nudo en un Sistema"
                                          questions={knotPassQuestions} id={63} />} />
                            <Route path={AllRoutes.ROPE_ANALYZING_SYSTEM} element={<AnalyzingSystem />} />
                            <Route path={`${AllRoutes.ROPE_ANALYZING_SYSTEM}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_ANALYZING_SYSTEM} name="Análisis de un Sistema de Rescate"
                                          questions={analyzingSystemQuestions} id={64} />} />
                            <Route path={AllRoutes.ROPE_RAPPELLING} element={<Rappelling />} />
                            <Route path={`${AllRoutes.ROPE_RAPPELLING}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_RAPPELLING} name="Rapel"
                                          questions={rappellingQuestions} id={65} />} />
                            <Route path={AllRoutes.ROPE_ASCENDING} element={<Ascending />} />
                            <Route path={`${AllRoutes.ROPE_ASCENDING}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_ASCENDING} name="Ascenso"
                                          questions={ascendingQuestions} id={66} />} />
                            <Route path={AllRoutes.ROPE_FALL_PROTECTION} element={<FallProtection />} />
                            <Route path={`${AllRoutes.ROPE_FALL_PROTECTION}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_FALL_PROTECTION} name="Protección Contra Caídas"
                                          questions={fallProtectionQuestions} id={67} />} />
                            <Route path={AllRoutes.ROPE_ACCESS_STABILIZATION} element={<AccessStabilization />} />
                            <Route path={`${AllRoutes.ROPE_ACCESS_STABILIZATION}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_ACCESS_STABILIZATION} name="Acceso y Estabilización"
                                          questions={accessStabilizationQuestions} id={68} />} />
                            <Route path={AllRoutes.ROPE_PERSON_PICK_OFF} element={<PersonPickOff />} />
                            <Route path={`${AllRoutes.ROPE_PERSON_PICK_OFF}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_PERSON_PICK_OFF} name="Recogida Estándar de Persona (Pick-Off)"
                                          questions={personPickOffQuestions} id={69} />} />
                            <Route path={AllRoutes.ROPE_HIGH_ANGLE_EVACUATIONS} element={<HighAngleEvacuations />} />
                            <Route path={`${AllRoutes.ROPE_HIGH_ANGLE_EVACUATIONS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_HIGH_ANGLE_EVACUATIONS} name="Evacuaciones en Alto Ángulo"
                                          questions={highAngleEvacuationsQuestions} id={70} />} />
                            <Route path={AllRoutes.ROPE_LOW_ANGLE_EVACUATIONS} element={<LowAngleEvacuations />} />
                            <Route path={`${AllRoutes.ROPE_LOW_ANGLE_EVACUATIONS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_LOW_ANGLE_EVACUATIONS} name="Evacuaciones en Bajo Ángulo"
                                          questions={lowAngleEvacuationsQuestions} id={71} />} />
                            <Route path={AllRoutes.ROPE_GUIDING_LINES} element={<GuidingLines />} />
                            <Route path={`${AllRoutes.ROPE_GUIDING_LINES}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_GUIDING_LINES} name="Líneas Guía"
                                          questions={guidingLinesQuestions} id={72} />} />
                            <Route path={AllRoutes.ROPE_HIGH_LINES} element={<HighLines />} />
                            <Route path={`${AllRoutes.ROPE_HIGH_LINES}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_HIGH_LINES} name="Líneas Altas (Highlines)"
                                          questions={highLinesQuestions} id={73} />} />
                            <Route path={AllRoutes.ROPE_HIGH_ANCHORS_DIRECTIONALS} element={<HighAnchorsDirectionals />} />
                            <Route path={`${AllRoutes.ROPE_HIGH_ANCHORS_DIRECTIONALS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_HIGH_ANCHORS_DIRECTIONALS} name="Anclajes Altos y Direccionales"
                                          questions={highAnchorsDirectionalsQuestions} id={74} />} />
                            <Route path={AllRoutes.ROPE_LADDER_RESCUE_SYSTEMS} element={<LadderRescueSystems />} />
                            <Route path={`${AllRoutes.ROPE_LADDER_RESCUE_SYSTEMS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_LADDER_RESCUE_SYSTEMS} name="Sistemas de Rescate con Escaleras"
                                          questions={ladderRescueSystemsQuestions} id={75} />} />
                            <Route path={AllRoutes.ROPE_ORGANIZATION_PLANNING} element={<OrganizationPlanning />} />
                            <Route path={`${AllRoutes.ROPE_ORGANIZATION_PLANNING}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_ORGANIZATION_PLANNING} name="Organización y Planificación"
                                          questions={organizationPlanningQuestions} id={76} />} />
                            <Route path={AllRoutes.ROPE_PUTTING_IT_TOGETHER} element={<PuttingItTogether />} />
                            <Route path={`${AllRoutes.ROPE_PUTTING_IT_TOGETHER}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_PUTTING_IT_TOGETHER} name="Integración Final"
                                          questions={puttingItTogetherQuestions} id={77} />} />
                            <Route path={AllRoutes.ROPE_ROPE_ACCESS} element={<RopeAccess />} />
                            <Route path={`${AllRoutes.ROPE_ROPE_ACCESS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_ROPE_ACCESS} name="Acceso por Cuerda"
                                          questions={ropeAccessQuestions} id={78} />} />
                            <Route path={AllRoutes.ROPE_ANTENNA_TOWER_RESCUE} element={<AntennaTowerRescue />} />
                            <Route path={`${AllRoutes.ROPE_ANTENNA_TOWER_RESCUE}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_ANTENNA_TOWER_RESCUE} name="Rescate en Torres de Antena y Escaleras Enjauladas"
                                          questions={antennaTowerRescueQuestions} id={79} />} />
                            <Route path={AllRoutes.ROPE_ESCAPE_BAILOUT} element={<EscapeBailout />} />
                            <Route path={`${AllRoutes.ROPE_ESCAPE_BAILOUT}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_ESCAPE_BAILOUT} name="Escape y Evacuación de Emergencia"
                                          questions={escapeBailoutQuestions} id={80} />} />
                            <Route path={AllRoutes.ROPE_SNOW_SLOPE_EVACUATIONS} element={<SnowSlopeEvacuations />} />
                            <Route path={`${AllRoutes.ROPE_SNOW_SLOPE_EVACUATIONS}/exam`}
                                   element={<Exam returnRoute={AllRoutes.ROPE_SNOW_SLOPE_EVACUATIONS} name="Evacuaciones en Nieve y Pendientes"
                                          questions={snowSlopeEvacuationsQuestions} id={81} />} />


                            <Route path={AllRoutes.SIMULATOR} element={<Simulator />} />
                            <Route path={AllRoutes.ECG_INSTRUCTOR} element={<InstructorPanel />} />
                            <Route path={AllRoutes.ECG_MONITOR_SIMULATOR} element={<MonitorAndEkgSimulator />} />
                            <Route path={AllRoutes.INFUSION_PUMP_SIMULATOR} element={<InfusionPumpSimulator />} />
                            <Route path={AllRoutes.MECHANICAL_VENTILATOR_SIMULATOR} element={<MechanicalVentilatorSimulator />} />
                            <Route path={AllRoutes.CARDIAC_CONDUCTION_SIMULATOR} element={<CardiacConductionSimulator />} />
                            <Route path={AllRoutes.CIRCULATORY_SYSTEM_SIMULATOR} element={<CirculatorySystemSimulator />} />

                            {/* Ambulance Checklist */}
                            <Route path={AllRoutes.AMBULANCE_CHECKLIST} element={<AmbulanceChecklist />} />

                            {/* TAMP-A — Técnico Avanzado */}
                            <Route path={AllRoutes.TAMPA} element={<ProtectedRoute requireMainAccess><TampA /></ProtectedRoute>} />
                            <Route path={AllRoutes.TAMPA_INTRODUCTION} element={<ProtectedRoute requireMainAccess><TampaIntroduction /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.TAMPA_INTRODUCTION}/exam`}
                                   element={<Exam returnRoute={AllRoutes.TAMPA_INTRODUCTION} name="Introducción TAMP-A"
                                          questions={tampaIntroductionQuestions} id={200}
                                          challengingQuestions={[]} />} />
                            <Route path={AllRoutes.TAMPA_ANATOMY_PHYSIOLOGY} element={<ProtectedRoute requireMainAccess><TampaAnatomyPhysiology /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.TAMPA_ANATOMY_PHYSIOLOGY}/exam`}
                                   element={<Exam returnRoute={AllRoutes.TAMPA_ANATOMY_PHYSIOLOGY} name="Anatomía & Fisiología II"
                                          questions={tampaAnatomyPhysiologyQuestions} id={201}
                                          challengingQuestions={[]} />} />
                            <Route path={AllRoutes.TAMPA_PATIENT_ASSESSMENT} element={<ProtectedRoute requireMainAccess><TampaPatientAssessment /></ProtectedRoute>} />
                            <Route path={`${AllRoutes.TAMPA_PATIENT_ASSESSMENT}/exam`}
                                   element={<Exam returnRoute={AllRoutes.TAMPA_PATIENT_ASSESSMENT} name="Evaluación de Pacientes"
                                          questions={tampaPatientAssessmentQuestions} id={202}
                                          challengingQuestions={[]} />} />
                            {tampAModules.filter(m => m.route !== AllRoutes.TAMPA_INTRODUCTION && m.route !== AllRoutes.TAMPA_ANATOMY_PHYSIOLOGY && m.route !== AllRoutes.TAMPA_PATIENT_ASSESSMENT).map((module) => (
                                   <Route key={module.key} path={module.route} element={<ProtectedRoute requireMainAccess><ComingSoon /></ProtectedRoute>} />
                            ))}

                     </Routes>
              </Suspense>
       );
}