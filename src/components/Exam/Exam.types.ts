import {Question} from "../../question";

export interface ExamProps {
    questions: Question[];
    challengingQuestions?: Question[];
    returnRoute: string;
    name: string;
    id: number;
}