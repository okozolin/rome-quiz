import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'
import Api from "../../services/api.ts";

// Define a type for the slice state
export interface QuizState {
    questions: string[],
    isLoading: boolean,
    error: string | null,
}

export const fetchQuiz = createAsyncThunk(
    "events/fetchQuiz",
    async (url) => {
        return await Api.getData(url);
    }
);

// Define the initial state using that type
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


export const {quizSet} = quizSlice.actions
export const selectQuiz = (state: RootState) => state.quiz
export default quizSlice.reducer