import {Suspense} from "react";
import {Route, Routes} from "react-router";
import App from "../../App.tsx";
import GeneralExam from "../../pages/GeneralExam/GeneralExam.page.tsx";
import LegalAspects from "../../pages/LegalAspects/LegalAspects.page.tsx";
import Exam from "../Exam/Exam.component.tsx";
import {legalQuestions} from "../../pages/LegalAspects/LegalAspects.questions.ts";
import Communications from "../../pages/Communications/Communications.page.tsx";
import {communicationsQuestions} from "../../pages/Communications/Communications.questions.ts";
import Sem from "../../pages/SEM/Sem.page.tsx";
import {semSystemQuestions} from "../../pages/SEM/Sem.questions.ts";
import Main from "../../pages/Main/Main.page.tsx";
import Lms from "../../pages/LMS/Lms.page.tsx";
import Bls from "../../pages/BLS/Bls.page.tsx";
import StopTheBleed from "../../pages/StopTheBleed/StopTheBleed.page.tsx";

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
                <Route path="/sem/exam" element={<Exam returnRoute="/sem" name="Sistema SEM." questions={semSystemQuestions}  />}/>

                <Route path="/lms" element={<Lms /> }/>
                <Route path="/bls" element={<Bls />}/>
                <Route path="/stop-the-bleed" element={<StopTheBleed />}/>

            </Routes>
        </Suspense>
    );
}