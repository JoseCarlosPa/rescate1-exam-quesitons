export interface Question {
    question: string;
    options: Option[];
    correctAnswer: string;
    explanation?: string;
}

export interface Option {
    letter: string;
    text: string;
}