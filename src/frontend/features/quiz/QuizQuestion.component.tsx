import React, {useEffect, useState} from 'react';
import {
    AnswerOption,
    AnswersContainer,
    QuestionNumber,
    QuestionText,
    TextWrapper
} from "./Quiz.styles.ts";
import {IQuestion} from "../../types.ts";
interface QuizQuestionProps {
    question: IQuestion;
    qIndex: number;
    onQuestionAnswered: (index: number) => void;
    isTimeout: boolean
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
                                                       question,
                                                       qIndex,
                                                       onQuestionAnswered,
                                                       isTimeout
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
            <QuestionText>
                <QuestionNumber>{qIndex}.</QuestionNumber>
                <div>{question.question}</div>
            </QuestionText>
            <AnswersContainer>
                {question.choices.map((choice, index) =>
                    <AnswerOption
                        key={index}
                        onClick={() => handleAnswer(index)}
                        $numAnswers={question.choices?.length}
                        $isCorrect={index === question.answer_index}
                        $answered={answered || isTimeout}
                    >
                        {choice}
                    </AnswerOption>
                )}
            </AnswersContainer>
        </TextWrapper>
    );
};

export default QuizQuestion;