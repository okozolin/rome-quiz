import React from 'react';
import {IQuestion} from "../../types.ts";
import {CorrectAnswerStyled} from "./Quiz.styles.ts";

interface QuizCorrectAnswerComponentProps {
    currentQuestion: IQuestion;
}
const QuizCorrectAnswer: React.FC<QuizCorrectAnswerComponentProps> = ({currentQuestion}) => {
    const correctAnswerIndex = currentQuestion.answer_index
    const answer = currentQuestion.choices[correctAnswerIndex]
    return (
        <CorrectAnswerStyled>
            Time's up! The correct answer is: {answer}
        </CorrectAnswerStyled>
    );
}

export default QuizCorrectAnswer;