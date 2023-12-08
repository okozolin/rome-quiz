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
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
                                                       question,
                                                       qIndex,
                                                       onQuestionAnswered,


                                                   }) => {
    const [answered, setAnswered] = useState(false);

    const handleAnswer = (index: number) => {
        onQuestionAnswered(index);
        setAnswered(true);
    };

    return (
        <TextWrapper>
            <QuestionText>
                <QuestionNumber>{qIndex}.</QuestionNumber>
                <p>{question.question}</p>
            </QuestionText>
            <AnswersContainer>
                {question.choices.map((choice, index) =>
                    <AnswerOption
                        key={index}
                        onClick={() => handleAnswer(index)}
                        $isCorrect={index === question.answer_index}
                        $isHighlighted={answered && (index === question.answer_index)}
                        $numAnswers={question.choices?.length}
                    >
                        {choice}
                    </AnswerOption>
                )}
            </AnswersContainer>
            {/*{answered && <p>{question.hint}</p>}*/}
        </TextWrapper>
    );
};

export default QuizQuestion;