export interface IUser {
    id: number
    name: string
}
export interface IScore {
    userId: number
    score: number
    timeSpent: number
}
export interface IQuestion {
    questionId: number
    question: string
    answerIndex: number
    choices: string[],
    hint: string
}

export type UserState = {
    users: IUser[]
}

export type UserAction = {
    type: string
    user: IUser
}

export type ScoreState = {
    users: IUser[]
}

export type ScoreAction = {
    type: string
    score: number
}

export type QuestionsAction = {
    type: string
    questions: IQuestion[]
}

export type DispatchType = (args: ScoreAction) => ScoreAction