import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks.ts';
import { getQuizQuestions } from './Quiz.thunks.ts';
import {selectQuiz} from "./Quiz.slice.ts";

import Button from "../../components/Button/Button.component.tsx";
import QuizQuestion from "./QuisQuestion.componnt.tsx";
import QuizResult from "./QuizResult.component.tsx";
import {HINT_TIMEOUT, QUESTION_TIMEOUT} from "../../constants/sizes.ts";
import {QuestionContainer, QuizContainer} from "./Quiz.styles.ts";


const QuizComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const {questions, isLoading, error} = useAppSelector(selectQuiz);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(20); // Initial timer value 20 seconds

    const [quizStarted, setQuizStarted] = useState(false);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [score, setScore] = useState(0);

    const totalQuestions = questions?.length;

    useEffect(() => {
        dispatch(getQuizQuestions());
    }, [dispatch]);

   // Timer logic
    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                // Reset timer for the next question
                if (currentQuestionIndex <= totalQuestions-1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setQuestionsAnswered(questionsAnswered + 1)
                    setTimer(QUESTION_TIMEOUT);
                }
                else {
                    setQuizStarted(false)
                }
            }
        }, 1000);

        // Clean up timer on component unmount
        return () => clearInterval(interval);
    }, [timer, currentQuestionIndex, totalQuestions]);

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };


    const handleQuestionAnswered = (selectedAnswerIndex: number) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswerIndex === currentQuestion.answer_index) {
            setScore(score + 1);
        }

        // Increment questionsAnswered when answering a question
        setQuestionsAnswered(questionsAnswered + 1);

        // Move to the next question or show the result
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimer(QUESTION_TIMEOUT);
        } else {
            setQuizStarted(false);
        }
    };

    const handleQuizCompletion = () => {

    };


    return (
        <QuizContainer>
            {!quizStarted && questionsAnswered !== totalQuestions &&
                <Button onClick={handleStartQuiz}>Start Quiz</Button>}
            {quizStarted && questionsAnswered < totalQuestions && (
                <QuestionContainer>
                    <QuizQuestion
                        question={questions[currentQuestionIndex]}
                        qIndex={currentQuestionIndex + 1}
                        onQuestionAnswered={handleQuestionAnswered}
                    />
                    {timer <= HINT_TIMEOUT && <p>HINT: {questions[currentQuestionIndex].hint}</p>}
                    <p>Time Left: {timer}</p>
                </QuestionContainer>
            )}
            {!quizStarted && questionsAnswered === totalQuestions && (
                <QuizResult score={score} totalQuestions={totalQuestions} />
            )}
        </QuizContainer>
    );
};

export default QuizComponent;
