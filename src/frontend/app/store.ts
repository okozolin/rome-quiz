import { configureStore } from '@reduxjs/toolkit'
import quizReducer from "../features/quiz/quizSlice.ts";

const store = configureStore({
    reducer: {
        quiz: quizReducer,
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {questions: QuestionsState}
export type AppDispatch = typeof store.dispatch

export default store;