import React from 'react';
import {CompletedText} from "./Quiz.styles.ts";

interface QuizResultProps {
    score: number;
    totalQuestions: number;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, totalQuestions }) => {
    return (
        <div>
            <h2>Quiz Completed!</h2>
            <CompletedText>
                {`You scored ${score} out of ${totalQuestions}`}
            </CompletedText>
        </div>
    );
};

export default QuizResult;
