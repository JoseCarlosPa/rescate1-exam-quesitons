import {Question} from "../../question";

export interface ExamProps  {
    questions: Question[];
    returnRoute: string;
    name: string;
    id: number
}