import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'
import {IQuestion} from "../../types.ts";
import {fetchQuiz, publishResult} from "./Quiz.thunks.ts";

// Define a type for the slice state
export interface QuizState {
    questions: IQuestion[],
    isLoading: boolean,
    error: string | null | undefined,
    score: number,
    totalTimeForCorrectAnswers: number,
    resultPublished: boolean,
}

const initialState: QuizState = {
    questions: [],
    isLoading: false,
    error: null,
    score: 0,
    totalTimeForCorrectAnswers: 0,
    resultPublished: false,
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        scoreSet: (state, action: PayloadAction<number>) => {
            state.score += action.payload
        },
        totalTimeForCorrectAnswersSet: (state, action: PayloadAction<number>) => {
            state.totalTimeForCorrectAnswers += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuiz.pending, (state) => {
            state.isLoading = true;
            // state.status = "loading";
        });
        builder.addCase(fetchQuiz.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.status = "succeeded";
            state.questions = action.payload;
        });
        builder.addCase(fetchQuiz.rejected, (state, action) => {
            state.isLoading = false;
            // state.status = "failed";
            state.error = action.error.message;
        });

        builder.addCase(publishResult.pending, (state) => {
            state.resultPublished = false;
        });
        builder.addCase(publishResult.fulfilled, (state) => {
            state.resultPublished = true;
        });
        // builder.addCase(publishResult.rejected, (state) => {
        //     // Handle rejection if needed
        // });
    },
})


export const { scoreSet, totalTimeForCorrectAnswersSet } = quizSlice.actions;
export const selectQuiz = (state: RootState) => state.quiz
export default quizSlice.reducer