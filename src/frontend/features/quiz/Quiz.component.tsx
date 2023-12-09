import React, {useState, useEffect} from 'react';

import {
    useAppSelector,
    useAppDispatch
} from '../../app/hooks.ts';
import {getQuizQuestions} from './Quiz.thunks.ts';
import {selectQuiz} from "./Quiz.slice.ts";

import QuizQuestion from "./QuizQuestion.component.tsx";
import QuizResult from "./QuizResult.component.tsx";
import {
    HINT_TIMEOUT,
    QUESTION_TIMEOUT
} from "../../constants/sizes.ts";
import {
    QuestionContainer,
    QuizContainer
} from "./Quiz.styles.ts";
import {IQuestion} from "../../types.ts";
import QuizCorrectAnswer from "./QuizCorrectAnswer.component.tsx";
import HintIndicator from "../hint/HintIndicator.component.tsx";
import QuizStart from "./QuizStart.component.tsx";


const Quiz: React.FC = () => {
    const dispatch = useAppDispatch();
    // const {questions, isLoading, error} = useAppSelector(selectQuiz);
    const {questions} = useAppSelector(selectQuiz);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(QUESTION_TIMEOUT); // Initial timer value 20 seconds
    const [totalTimeForCorrectAnswers, setTotalTimeForCorrectAnswers] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [score, setScore] = useState(0);

    const totalQuestions: number = questions?.length;
    const currentQuestion: IQuestion = questions[currentQuestionIndex]

    const nextQuestion = () => {
        setCurrentQuestionIndex(prev => prev + 1);
        if (currentQuestionIndex === totalQuestions - 1) {
            setTimer(0); // Reset timer for the next question
        }
        else {
            setTimer(QUESTION_TIMEOUT); // Reset timer for the next question
        }
    }
    useEffect(() => {
        dispatch(getQuizQuestions());
    }, [dispatch]);

    useEffect(() => {
        if (quizStarted) {
            const interval = setInterval(() => {
                if (timer > 0) {
                    setTimer(prevTimer => prevTimer - 1);
                } else {
                    clearInterval(interval); // Clear interval to stop decrementing timer
                    if (currentQuestionIndex < totalQuestions) {
                        setTimeout(() => {
                            nextQuestion()
                        }, 1000);
                    } else {
                        setQuizStarted(false); //quiz ended
                    }
                }
            }, 1000);

            // Clean up timer on component unmount or when question changes
            return () => clearInterval(interval);
        }
    }, [currentQuestionIndex, quizStarted, timer, totalQuestions]);


    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    const handleQuestionAnswered = (selectedAnswerIndex: number) => {
        if (selectedAnswerIndex === currentQuestion.answer_index) {
            const timeTaken = QUESTION_TIMEOUT - timer;
            setTotalTimeForCorrectAnswers(prevTime => prevTime + timeTaken);
            setScore(score + 1);
        }
        if (currentQuestionIndex < totalQuestions) {
            nextQuestion()
        } else {
            setQuizStarted(false);
        }
    };


    return (
        <QuizContainer>
            {!quizStarted && currentQuestionIndex !== totalQuestions &&
                <QuizStart handleStartQuiz={handleStartQuiz} />
            }
            {quizStarted && currentQuestionIndex < totalQuestions && (
                <QuestionContainer>
                    <QuizQuestion
                        question={currentQuestion}
                        qIndex={currentQuestionIndex + 1}
                        onQuestionAnswered={handleQuestionAnswered}
                        isTimeout={timer === 0}
                        timer={timer}
                    />
                    {timer <= HINT_TIMEOUT &&
                        <HintIndicator
                            hint={currentQuestion.hint}
                        />
                    }
                    {timer === 0 && (
                        <QuizCorrectAnswer
                            currentQuestion={currentQuestion}
                        />
                    )}
                </QuestionContainer>
            )}
            {!quizStarted && currentQuestionIndex>0 && totalQuestions > 0 && (
                <>
                    <QuizResult score={score} totalQuestions={totalQuestions}/>
                    <p>It took you {totalTimeForCorrectAnswers} seconds to answer correctly </p>
                </>
            )}
        </QuizContainer>
    );
};

export default Quiz;
