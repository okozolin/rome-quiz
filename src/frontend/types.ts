export interface IUser {
    id: number
    name: string
}
export interface IScore {
    user_id: number
    score: number
    time_spent: number
}
export interface IQuestion {
    question_id: number
    question: string
    answer_index: number
    choices: string[],
    hint: string
}

export type QuestionsType = IQuestion[]
