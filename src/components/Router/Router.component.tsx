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

export default function Router(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/emt" element={<App/>}/>
                <Route path="/general" element={<GeneralExam/>}/>
                <Route path="/legal" element={<LegalAspects />}/>
                <Route path="/legal/exam" element={<Exam returnRoute="/legal" name="Aspectos Legales" questions={legalQuestions}  />}/>
                <Route path="/communications" element={<Communications />}/>
                <Route path="/communications/exam" element={<Exam returnRoute="/communications" name="Comunicaciones y documentación" questions={communicationsQuestions}  />}/>
                <Route path="/sem" element={<Sem />}/>
                <Route path="/sem/exam" element={<Exam returnRoute="/sem" name="Sistema SEM" questions={semSystemQuestions}  />}/>
                <Route path="/security-of-personal" element={<SecurityOfPersonal />}/>
                <Route path="/security-of-personal/exam" element={<Exam returnRoute="/security-of-personal" name="Seguridad y bienestar del personal" questions={securityQuestions}  />}/>
                <Route path="/medic-terms" element={<MedicTerms />}/>
                <Route path="/medic-terms/exam" element={<Exam returnRoute="/medic-terms" name="Terminos Médicos" questions={medicTermsQuestions}  />}/>
                <Route path="/human-body" element={<HumanBody />}/>
                <Route path="/human-body/exam" element={<Exam returnRoute="/human-body" name="El Cuerpo Humano" questions={humanBodyQuestions}  />}/>
                <Route path="/life-spect" element={<LifeSpec />}/>
                <Route path="/life-spect/exam" element={<Exam returnRoute="/life-spect" name="Desarrollo y esperanza de vida" questions={lifeSpecQuestions}  />}/>
                <Route path="/evaluation" element={<Evaluation />}/>
                <Route path="/evaluation/exam" element={<Exam returnRoute="/evaluation" name="Evaluacion del paciente" questions={patientAssessmentQuestions}  />}/>
                <Route path="/nemotecnias" element={<Mnemotecnias />}/>
                <Route path="/nemotecnias/exam" element={<Exam returnRoute="/nemotecnias" name="Evaluacion del paciente" questions={nemotecniasQuestions}  />}/>
                <Route path="/airway-manage" element={<AirwayManage />}/>
                <Route path="/airway-manage/exam" element={<Exam returnRoute="/airway-manage" name="Manejo de la Vía Aérea" questions={airwayManagementQuestions}  />}/>
                <Route path="/pharmacology" element={<Pharmacology />}/>
                <Route path="/pharmacology/exam" element={<Exam returnRoute="/pharmacology" name="Principios de la Farmacología" questions={pharmacologyQuestions}  />}/>
                <Route path="/med-admin" element={<MedAdmin />}/>
                <Route path="/med-admin/exam" element={<Exam returnRoute="/med-admin" name="Administración de Medicamentos" questions={medicationAdministrationQuestions}  />}/>
                <Route path="/shock" element={<Shock />}/>
                <Route path="/shock/exam" element={<Exam returnRoute="/shock" name="shock" questions={shockQuestions}  />}/>
                <Route path="/reanimation-svb" element={<ReanimateSvb />}/>
                <Route path="/reanimation-svb/exam" element={<Exam returnRoute="/reanimation-svb" name="shock" questions={svbQuestions}  />}/>


                <Route path="/lms" element={<Lms /> }/>
                <Route path="/bls" element={<Bls />}/>
                <Route path="/stop-the-bleed" element={<StopTheBleed />}/>
                <Route path="/resources" element={<Resources />}/>
            </Routes>
        </Suspense>
    );
}