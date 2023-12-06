import { fetchQuiz } from './quizSlice.ts';
import { AppDispatch } from '../store';

export const getQuizQuestions = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchQuiz("api/quiz"));
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
};
