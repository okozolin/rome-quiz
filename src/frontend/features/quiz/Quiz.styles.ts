import styled, {css} from 'styled-components';
import {platformColors} from "../../constants/colors.ts";

export const QuizContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

export const QuestionContainer = styled.div`
  margin-bottom: 40px;
`;

export const QuestionText = styled.h2`
  display: inline-block;
  font-size: 24px;
  margin-bottom: 20px;
`;

interface AnswerProps {
    numAnswers: number;
    isCorrect: boolean;
    isHighlighted: boolean;
}

export const AnswerOption = styled.button<AnswerProps>`
  padding: ${({ numAnswers }) =>
    numAnswers === 2 ? '16px 32px' : numAnswers === 3 ? '12px 24px' : '10px 20px'};
  margin: 8px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: ${platformColors.lightViolet};
  color: ${platformColors.white};;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${platformColors.green};
  }
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const QuestionNumber = styled.span`
  font-size: 7rem;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`