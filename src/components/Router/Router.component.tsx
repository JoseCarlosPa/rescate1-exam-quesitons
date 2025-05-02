import {Suspense} from "react";
import {Route, Routes} from "react-router";
import App from "../../App.tsx";
import GeneralExam from "../../pages/EMT/GeneralExam/GeneralExam.page.tsx";
import LegalAspects from "../../pages/EMT/LegalAspects/LegalAspects.page.tsx";
import Exam from "../Exam/Exam.component.tsx";
import {legalQuestions} from "../../pages/EMT/LegalAspects/LegalAspects.questions.ts";
import Communications from "../../pages/EMT/Communications/Communications.page.tsx";
import {communicationsQuestions} from "../../pages/EMT/Communications/Communications.questions.ts";
import Sem from "../../pages/EMT/SEM/Sem.page.tsx";
import {semSystemQuestions} from "../../pages/EMT/SEM/Sem.questions.ts";
import Main from "../../pages/Main/Main.page.tsx";
import Lms from "../../pages/LMS/Lms.page.tsx";
import Bls from "../../pages/BLS/Bls.page.tsx";
import StopTheBleed from "../../pages/StopTheBleed/StopTheBleed.page.tsx";
import SecurityOfPersonal from "../../pages/EMT/SecurityOfPersonal/SecurityOfPersonal.page.tsx";
import {securityQuestions} from "../../pages/EMT/SecurityOfPersonal/SecurityOfPersonal.questions.ts";
import {medicTermsQuestions} from "../../pages/EMT/MedicTerms/MediTerms.questions.ts";
import MedicTerms from "../../pages/EMT/MedicTerms/MedicTerms.page.tsx";
import {humanBodyQuestions} from "../../pages/EMT/HumanBody/HumanBody.questions.ts";
import HumanBody from "../../pages/EMT/HumanBody/HumanBody.page.tsx";
import LifeSpec from "../../pages/EMT/LifeSpec/LifeSpec.page.tsx";
import {lifeSpecQuestions} from "../../pages/EMT/LifeSpec/LifeSpec.questions.ts";
import Evaluation from "../../pages/EMT/Evaluation/Evaluation.page.tsx";
import {patientAssessmentQuestions} from "../../pages/EMT/Evaluation/Evaluation.questions.ts";
import {nemotecniasQuestions} from "../../pages/EMT/Nnemotecnias/Mnemotecnias.questions.ts";
import Mnemotecnias from "../../pages/EMT/Nnemotecnias/Mnemotecnias.page.tsx";
import AirwayManage from "../../pages/EMT/AirwayManage/AirwayManage.page.tsx";
import {airwayManagementQuestions} from "../../pages/EMT/AirwayManage/AirwayManage.questions.ts";
import Pharmacology from "../../pages/EMT/Pharmacology/Pharmacology.page.tsx";
import {pharmacologyQuestions} from "../../pages/EMT/Pharmacology/Pharmacology.questions.ts";
import MedAdmin from "../../pages/EMT/MedAdmin/MedAdmin.page.tsx";
import {medicationAdministrationQuestions} from "../../pages/EMT/MedAdmin/MedAdmin.questions.ts";
import {shockQuestions} from "../../pages/EMT/Shock/Shock.questions.ts";
import Shock from "../../pages/EMT/Shock/Shock.page.tsx";
import Resources from "../../pages/Resources/Resources.page.tsx";
import ReanimateSvb from "../../pages/EMT/ReanimateSvb/ReanimateSvb.page.tsx";
import {svbQuestions} from "../../pages/EMT/ReanimateSvb/ReanimateSvb.questions.ts";
import {megaQuestions} from "../../pages/EMT/Mega/Mega.questions.ts";
import Mega from "../../pages/EMT/Mega/Mega.page.tsx";
import {AllRoutes} from "./Router.constants.ts";
import Login from "../../pages/Auth/Login/Login.page.tsx";
import {visionMedicGeneralQuestions} from "../../pages/EMT/MedicVision/MedicVision.questions.ts";
import MedicVision from "../../pages/EMT/MedicVision/MedicVision.page.tsx";
import {respiratoryEmergenciesExam} from "../../pages/EMT/AirwayEmergency/AirwayEmergency.questions.ts";
import AirwayEmergency from "../../pages/EMT/AirwayEmergency/AirwayEmergency.page.tsx";
import {cardiovascularQuestions} from "../../pages/EMT/CardioEmergency/CardioEmergency.questions.ts";
import CardioEmergency from "../../pages/EMT/CardioEmergency/CardioEmergency.page.tsx";
import NeuroEmergency from "../../pages/EMT/NeuroEmergency/NeuroEmergency.page.tsx";
import {neurologicasQuestions} from "../../pages/EMT/NeuroEmergency/NeuroEmergency.questions.ts";
import GastroEmergency from "../../pages/EMT/GastroEmergency/GastroEmergency.page.tsx";
import {gastrointestinalUrologicQuestions} from "../../pages/EMT/GastroEmergency/GastroEmergency.questions.ts";
import EndocryEmergency from "../../pages/EMT/EndocryEmergency/EndocryEmergency.page.tsx";
import {endocrineHematologicQuestions} from "../../pages/EMT/EndocryEmergency/EndocryEmergency.questions.ts";
import {traumaGeneralQuestions} from "../../pages/EMT/Trauma/Trauma.questions.ts";
import Trauma from "../../pages/EMT/Trauma/Trauma.page.tsx";
import Immobilization from "../../pages/EMT/Immobilization/Immobilization.page.tsx";
import {immobilizationQuestions} from "../../pages/EMT/Immobilization/Immobilization.questionts.ts";
import Disclaimer from "../../pages/Main/Disclaimer.page.tsx";
import PrivacyAndTerms from "../../pages/Main/PrivacyAndTerms.page.tsx";
import Glosary from "../Glosary/Glosary.page.tsx";
import Bleeding from "../../pages/EMT/Bleeding/Bleeding.page.tsx";
import {hemorragiasQuestions} from "../../pages/EMT/Bleeding/Bleeding.questions.ts";
import StudyCase from "../StudyCase/StudyCase.page.tsx";
import AlgorithmsAndProtocols from "../AlgorithmsAndProtocols/AlgorithmsAndProtocols.page.tsx";
export default function Router(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>

                <Route path={AllRoutes.LOGIN} element={<Login/>}/>
                <Route path="/" element={<Main/>}/>

                <Route path={AllRoutes.EMT} element={<App/>}/>
                <Route path={AllRoutes.GENERAL} element={<GeneralExam/>}/>
                <Route path={AllRoutes.LEGAL} element={<LegalAspects />}/>
                <Route path={`/${AllRoutes.LEGAL}/exam`} element={<Exam returnRoute={AllRoutes.LEGAL} name="Aspectos Legales" questions={legalQuestions} id={2}  />}/>
                <Route path={AllRoutes.COMMUNICATIONS} element={<Communications />}/>
                <Route path={`${AllRoutes.COMMUNICATIONS}/exam`} element={<Exam returnRoute={AllRoutes.COMMUNICATIONS} name="Comunicaciones y documentación" questions={communicationsQuestions} id={3}  />}/>
                <Route path={AllRoutes.SEM} element={<Sem />}/>
                <Route path={`${AllRoutes.SEM}/exam`} element={<Exam returnRoute={AllRoutes.SEM} name="Sistema SEM" questions={semSystemQuestions} id={4}  />}/>
                <Route path={AllRoutes.SECURITY_OF_PERSONAL} element={<SecurityOfPersonal />}/>
                <Route path={`${AllRoutes.SECURITY_OF_PERSONAL}/exam`} element={<Exam returnRoute={AllRoutes.SECURITY_OF_PERSONAL} name="Seguridad y bienestar del personal" questions={securityQuestions} id={5}  />}/>
                <Route path={AllRoutes.MEDIC_TERMS} element={<MedicTerms />}/>
                <Route path={`${AllRoutes.MEDIC_TERMS}/exam`} element={<Exam returnRoute={AllRoutes.MEDIC_TERMS} name="Terminos Médicos" questions={medicTermsQuestions} id={6}  />}/>
                <Route path={AllRoutes.HUMAN_BODY} element={<HumanBody />}/>
                <Route path={`${AllRoutes.HUMAN_BODY}/exam`} element={<Exam returnRoute={AllRoutes.HUMAN_BODY} name="El Cuerpo Humano" questions={humanBodyQuestions} id={7}  />}/>
                <Route path={AllRoutes.LIFE_SPEC} element={<LifeSpec />}/>
                <Route path={`${AllRoutes.LIFE_SPEC}/exam`} element={<Exam returnRoute={AllRoutes.LIFE_SPEC} name="Desarrollo y esperanza de vida" questions={lifeSpecQuestions} id={8}  />}/>
                <Route path={AllRoutes.EVALUATION} element={<Evaluation />}/>
                <Route path={`${AllRoutes.EVALUATION}/exam`} element={<Exam returnRoute={AllRoutes.EVALUATION} name="Evaluacion del paciente" questions={patientAssessmentQuestions} id={9} />}/>
                <Route path={AllRoutes.MNEMOTECNIAS} element={<Mnemotecnias />}/>
                <Route path={`${AllRoutes.MNEMOTECNIAS}/exam`} element={<Exam returnRoute={AllRoutes.MNEMOTECNIAS} name="Mnemotecnias" questions={nemotecniasQuestions} id={10}  />}/>
                <Route path={AllRoutes.AIRWAY_MANAGE} element={<AirwayManage />}/>
                <Route path={`${AllRoutes.AIRWAY_MANAGE}/exam`} element={<Exam returnRoute={AllRoutes.AIRWAY_MANAGE} name="Manejo de la Vía Aérea" questions={airwayManagementQuestions} id={11}  />}/>
                <Route path={AllRoutes.PHARMACOLOGY} element={<Pharmacology />}/>
                <Route path={`${AllRoutes.PHARMACOLOGY}/exam`} element={<Exam returnRoute={AllRoutes.PHARMACOLOGY} name="Principios de la Farmacología" questions={pharmacologyQuestions} id={12}  />}/>
                <Route path={AllRoutes.MED_ADMIN} element={<MedAdmin />}/>
                <Route path={`${AllRoutes.MED_ADMIN}/exam`} element={<Exam returnRoute={AllRoutes.MED_ADMIN} name="Administración de Medicamentos" questions={medicationAdministrationQuestions} id={13}  />}/>
                <Route path={AllRoutes.SHOCK} element={<Shock />}/>
                <Route path={`${AllRoutes.SHOCK}/exam`} element={<Exam returnRoute={AllRoutes.SHOCK} name="shock" questions={shockQuestions} id={14}  />}/>
                <Route path={AllRoutes.REANIMATE_SVB} element={<ReanimateSvb />}/>
                <Route path={`${AllRoutes.REANIMATE_SVB}/exam`} element={<Exam returnRoute={AllRoutes.REANIMATE_SVB} name="shock" questions={svbQuestions} id={15}  />}/>
                <Route path={AllRoutes.MEGA} element={<Mega />}/>
                <Route path={`${AllRoutes.MEGA}/exam`} element={<Exam returnRoute={AllRoutes.MEGA} name="Codigo Mega" questions={megaQuestions} id={16}  />}/>
                <Route path={AllRoutes.MEDIC_VISION} element={<MedicVision />}/>
                <Route path={`${AllRoutes.MEDIC_VISION}/exam`} element={<Exam returnRoute={AllRoutes.MEDIC_VISION} name="Vision médica general" questions={visionMedicGeneralQuestions} id={17} />}/>
                <Route path={AllRoutes.AIRWAY_EMERGENCY} element={<AirwayEmergency />}/>
                <Route path={`${AllRoutes.AIRWAY_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.AIRWAY_EMERGENCY} name="Emergencias respiratorias" questions={respiratoryEmergenciesExam} id={18} />}/>
                <Route path={AllRoutes.CARDIO_EMERGENCY} element={<CardioEmergency />}/>
                <Route path={`${AllRoutes.CARDIO_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.CARDIO_EMERGENCY} name="Emergencias Cardiovasculares" questions={cardiovascularQuestions} id={19}  />}/>
                <Route path={AllRoutes.NEURO_EMERGENCY} element={<NeuroEmergency />}/>
                <Route path={`${AllRoutes.NEURO_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.NEURO_EMERGENCY} name="Emergencias Neurologicas" questions={neurologicasQuestions} id={20}  />}/>
                <Route path={AllRoutes.GASTRO_EMERGENCY} element={<GastroEmergency />}/>
                <Route path={`${AllRoutes.GASTRO_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.GASTRO_EMERGENCY} name="Emergencias gastrointestinales y urológicas" questions={gastrointestinalUrologicQuestions} id={21}  />}/>
                <Route path={AllRoutes.ENDOCRINE_EMERGENCY} element={<EndocryEmergency />}/>
                <Route path={`${AllRoutes.ENDOCRINE_EMERGENCY}/exam`} element={<Exam returnRoute={AllRoutes.ENDOCRINE_EMERGENCY} name="Emergencias endocrinas y hematológicas" questions={endocrineHematologicQuestions} id={22}  />}/>
                <Route path={AllRoutes.TRAUMA} element={<Trauma />}/>
                <Route path={`${AllRoutes.TRAUMA}/exam`} element={<Exam returnRoute={AllRoutes.TRAUMA} name="Conceptos generales de trauma" questions={traumaGeneralQuestions} id={23}  />}/>
                <Route path={AllRoutes.IMMOBILIZATION} element={<Immobilization />}/>
                <Route path={`${AllRoutes.IMMOBILIZATION}/exam`} element={<Exam returnRoute={AllRoutes.IMMOBILIZATION} name="Inmovilización" questions={immobilizationQuestions} id={24}  />}/>
                <Route path={AllRoutes.BLEEDING} element={<Bleeding />}/>
                <Route path={`${AllRoutes.BLEEDING}/exam`} element={<Exam returnRoute={AllRoutes.BLEEDING} name="Hemorragias" questions={hemorragiasQuestions} id={25}  />}/>

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