
export interface IQuestion {
    question_id: number
    question: string
    answer_index: number
    choices: string[],
    hint: string
}

export interface IQuizPublish {
    score: number,
    totalTimeForCorrectAnswers: number,
    resultPublished: boolean,
}

export type QuestionsType = IQuestion[]
