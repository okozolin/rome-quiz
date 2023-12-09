import React, {useEffect, useState} from 'react';
import {
    AnswerOption,
    AnswersContainer,
    QuestionNumber,
    QuestionText,
    TextWrapper
} from "./Quiz.styles.ts";
import {IQuestion} from "../../types.ts";
import TimerIndicator from "../timer/TimerIndicator.component.tsx";
interface QuizQuestionProps {
    question: IQuestion;
    qIndex: number;
    onQuestionAnswered: (index: number) => void;
    isTimeout: boolean
    timer: number
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
                                                       question,
                                                       qIndex,
                                                       onQuestionAnswered,
                                                       isTimeout,
                                                       timer
                                                   }) => {
    const [answered, setAnswered] = useState(false);

    useEffect(() => {
        setAnswered(false)
    }, [qIndex]);

    const handleAnswer = (index: number) => {
        onQuestionAnswered(index);
        setAnswered(true);
    };

    return (
        <TextWrapper>
            <div>
                <QuestionNumber>{qIndex}.</QuestionNumber>
                <TimerIndicator timer={timer}/>
                <QuestionText>{question.question}</QuestionText>
            </div>
            <AnswersContainer>
                {question.choices.map((choice, index) =>
                    <AnswerOption
                        key={index}
                        onClick={() => handleAnswer(index)}
                        $numAnswers={question.choices?.length}
                        $isCorrect={index === question.answer_index}
                        $answered={answered || isTimeout}
                        disabled={isTimeout}
                    >
                        {choice}
                    </AnswerOption>
                )}
            </AnswersContainer>
        </TextWrapper>
    );
};

export default QuizQuestion;