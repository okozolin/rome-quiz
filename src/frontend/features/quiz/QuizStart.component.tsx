import React from 'react';
import Button from "../../components/Button/Button.component.tsx";
import { FaPlayCircle } from 'react-icons/fa';
interface QuizStartProps {
    handleStartQuiz: ()=> void;
}

const QuizStart: React.FC<QuizStartProps> = ({ handleStartQuiz }) => {
    return (
        <>
            <h2>
                This is a QUIZ game. You will see a series of 5 multiple-choice questions about ancient Rome.
                You have 20 seconds to answer each question
            </h2>
            <Button onClick={handleStartQuiz}>
                <FaPlayCircle />Let's play
            </Button>
        </>
    );
};

export default QuizStart;
