export interface Question {
    question: string;
    options: { letter: string; text: string }[];
    correctAnswer: string;
}