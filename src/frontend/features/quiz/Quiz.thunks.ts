import {fetchQuiz} from './Quiz.slice.ts';
import {AppDispatch} from '../../app/store.ts';
import config from "../../constants/config.ts"
export const getQuizQuestions = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchQuiz(config.QUIZ_URL));
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
};
