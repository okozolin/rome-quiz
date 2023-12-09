import styled from 'styled-components';
import {platformColors} from "../../constants/colors.ts";

export const QuestionContainer = styled.div`
  margin-bottom: 40px;
`;

export const QuestionText = styled.h2`
  display: inline-block;
  font-size: 24px;
  margin-bottom: 20px;
`;

interface AnswerProps {
    $numAnswers: number;
    $isCorrect: boolean;
    $answered: boolean;
}

export const AnswerOption = styled.button<AnswerProps>`
  padding: ${({ $numAnswers }) =>
    $numAnswers === 2 ? '16px 32px' : $numAnswers === 3 ? '12px 24px' : '10px 20px'};
  margin: 8px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ $isCorrect, $answered }) =>
        $answered && $isCorrect ? platformColors.lightPink : platformColors.lightViolet};
  color: ${platformColors.white};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${platformColors.green};
    border: none;
  }
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`
export const QuestionNumber = styled.span`
  font-size: 7rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const CorrectAnswerStyled = styled.p`
  color: ${platformColors.lightPink}
`
export const CompletedText = styled.div`
  font-size: 6vw;
`
export const QuizContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4vw;

  @media screen and (max-width: 768px) {
    & > * {
      margin: 8px 0;
    }

    h1 {
      font-size: 2.5vw;
    }

    h2 {
      font-size: 3vw;
    }

    p {
      font-size: 3vw;
    }

    button {
      font-size: 3vw;
      padding: 8px 16px;
    }
  }
`;
