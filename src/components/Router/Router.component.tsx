import {Suspense} from "react";
import {Route, Routes} from "react-router";
import App from "../../App.tsx";
import GeneralExam from "../../pages/GeneralExam/GeneralExam.page.tsx";
import LegalAspects from "../../pages/LegalAspects/LegalAspects.page.tsx";
import Exam from "../Exam/Exam.component.tsx";
import {legalQuestions} from "../../pages/LegalAspects/LegalAspects.questions.ts";

export default function Router(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/general" element={<GeneralExam/>}/>
                <Route path="/legal" element={<LegalAspects />}/>
                <Route path="/legal/exam" element={<Exam returnRoute="/legal" name="Aspectos Legales" questions={legalQuestions}  />}/>
            </Routes>
        </Suspense>
    );
}