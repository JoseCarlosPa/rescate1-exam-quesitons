import {Suspense} from "react";
import {Route, Routes} from "react-router";
import App from "../../App.tsx";
import GeneralExam from "../../pages/GeneralExam/GeneralExam.page.tsx";

export default function Router(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/general" element={<GeneralExam/>}/>
            </Routes>
        </Suspense>
    );
}