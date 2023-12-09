import React, {useState, useEffect} from 'react';

import {
    useAppSelector,
    useAppDispatch
} from '../../app/hooks.ts';
import {getQuizQuestions} from './Quiz.thunks.ts';
import {selectQuiz} from "./Quiz.slice.ts";

import Button from "../../components/Button/Button.component.tsx";
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
import TimerIndicator from "../timer/TimerIndicator.component.tsx";
import HintIndicator from "../hint/HintIndicator.component.tsx";


const Quiz: React.FC = () => {
    const dispatch = useAppDispatch();
    // const {questions, isLoading, error} = useAppSelector(selectQuiz);
    const {questions} = useAppSelector(selectQuiz);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(QUESTION_TIMEOUT); // Initial timer value 20 seconds

    const [quizStarted, setQuizStarted] = useState(false);
    const [score, setScore] = useState(0);

    const totalQuestions: number = questions?.length;
    const currentQuestion: IQuestion = questions[currentQuestionIndex]

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
                    // Display correct answer for an additional 3 seconds
                    // setQuestionsAnswered(currentQuestionIndex + 1);

                    if (currentQuestionIndex < totalQuestions) {
                        setTimeout(() => {
                            setCurrentQuestionIndex(prev => prev + 1);
                            setTimer(QUESTION_TIMEOUT); // Reset timer for the next question
                        }, 3000);
                    } else {
                        setQuizStarted(false); //quiz ended
                    }
                }
            }, 100);

            // Clean up timer on component unmount or when question changes
            return () => clearInterval(interval);
        }
    }, [currentQuestionIndex, quizStarted, timer, totalQuestions]);


    const handleStartQuiz = () => {
        setQuizStarted(true);
    };


    const handleQuestionAnswered = (selectedAnswerIndex: number) => {
        if (selectedAnswerIndex === currentQuestion.answer_index) {
            setScore(score + 1);
        }
        // setQuestionsAnswered(currentQuestionIndex + 1);
        // console.log("inside handle questionsAnswered:", questionsAnswered)
        // Move to the next question or show the result
        if (currentQuestionIndex < totalQuestions) {
            setCurrentQuestionIndex(prev => prev + 1);
            setTimer(QUESTION_TIMEOUT);
        } else {
            setQuizStarted(false);
        }
    };


    return (
        <QuizContainer>
            {!quizStarted && currentQuestionIndex !== totalQuestions &&
                <Button onClick={handleStartQuiz}>Start Quiz</Button>
            }
            {quizStarted && currentQuestionIndex < totalQuestions && (
                <QuestionContainer>
                    <QuizQuestion
                        question={currentQuestion}
                        qIndex={currentQuestionIndex + 1}
                        onQuestionAnswered={handleQuestionAnswered}
                        isTimeout={timer === 0}
                    />
                    {timer <= HINT_TIMEOUT &&
                        <HintIndicator
                            hint={currentQuestion.hint}
                        />
                    }

                    <TimerIndicator timer={timer}/>
                    {timer === 0 && (
                        <QuizCorrectAnswer
                            currentQuestion={currentQuestion}
                        />
                    )}
                </QuestionContainer>
            )}
            {!quizStarted && currentQuestionIndex === totalQuestions && (
                <QuizResult score={score} totalQuestions={totalQuestions}/>
            )}
        </QuizContainer>
    );
};

export default Quiz;
