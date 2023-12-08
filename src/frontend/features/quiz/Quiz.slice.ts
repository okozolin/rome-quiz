import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'
import Api from "../../services/api.ts";
import {IQuestion, QuestionsType} from "../../types.ts";

// Define a type for the slice state
export interface QuizState {
    questions: IQuestion[],
    isLoading: boolean,
    error: string | null | undefined,
}

export type Url = string
export const fetchQuiz = createAsyncThunk<
    QuestionsType,
    Url
>("events/fetchQuiz",async (url) => {
        return await Api.getData(url) as QuestionsType;
    }
);

const initialState: QuizState = {
    questions: [],
    isLoading: false,
    error: null,
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        // quizSet: (state, action: PayloadAction<string[]>) => {
        //     state.questions = action.payload
        // }
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
    },
})


// export const {quizSet} = quizSlice.actions
export const selectQuiz = (state: RootState) => state.quiz
export default quizSlice.reducer