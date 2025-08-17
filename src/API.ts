import { shuffleArray } from "./utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

export type QuestionState = Question & {
    answers: string[];
};

export const Difficulty = {
    EASY: "easy",
    MEDIUM: "medium",
    HARD: "hard",
} as const;

export type Difficulty = typeof Difficulty[keyof typeof Difficulty];

export const fetchQuizQuestions = async (
    amount: number,
    difficulty: Difficulty
): Promise<QuestionState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const res = await fetch(endpoint);
    const data: { response_code: number; results: Question[] } = await res.json();

    if (!data.results) {
        throw new Error("No results returned from API");
    }

    return data.results.map((question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
        ]),
    }));

};
