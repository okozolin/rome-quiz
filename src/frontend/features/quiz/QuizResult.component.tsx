import React from 'react';

interface QuizResultProps {
    score: number;
    totalQuestions: number;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, totalQuestions }) => {
    return (
        <div>
            <h2>Quiz Completed!</h2>
            <p>{`You scored ${score} out of ${totalQuestions}`}</p>
        </div>
    );
};

export default QuizResult;
