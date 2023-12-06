import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks.ts';
import { getQuizQuestions } from './quizThunks';
import {selectQuiz} from "./quizSlice.ts";


const QuizComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const {questions, isLoading, error} = useAppSelector(selectQuiz);

    useEffect(() => {
        dispatch(getQuizQuestions());
    }, [dispatch]);

    return (
        <>quiz component</>
    )
};

export default QuizComponent;
