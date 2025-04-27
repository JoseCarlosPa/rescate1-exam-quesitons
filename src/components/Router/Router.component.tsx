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

                <Route path="/lms" element={<Lms /> }/>
                <Route path="/bls" element={<Bls />}/>
                <Route path="/stop-the-bleed" element={<StopTheBleed />}/>

            </Routes>
        </Suspense>
    );
}