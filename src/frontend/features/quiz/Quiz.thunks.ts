import {AppDispatch, RootState} from '../../app/store.ts';
import config from "../../constants/config.ts"
import {createAsyncThunk} from "@reduxjs/toolkit";
import {QuestionsType} from "../../types.ts";
import Api from "../../services/api.ts";



type Url = string
export const fetchQuiz = createAsyncThunk<
    QuestionsType,
    Url
>("events/fetchQuiz",async (url) => {
        return await Api.getData(url) as QuestionsType;
    }
);

export const getQuizQuestions = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchQuiz(config.QUIZ_URL));
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
};

export const publishResult = createAsyncThunk<
    void,
    void,
    { state: RootState }
>('quiz/publishResult', async (_, { getState }) => {
    const { score, totalTimeForCorrectAnswers } = getState().quiz;
    try {
        return await await Api.publishResult(config.QUIZ_URL,{score, totalTimeForCorrectAnswers})
    } catch (error) {
        console.error('Error publishing result:', error);
        throw error;
    }
});

export const publishQuizResult = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(publishResult());
    } catch (error) {
        console.error('Error publishing result:', error);
    }
};
