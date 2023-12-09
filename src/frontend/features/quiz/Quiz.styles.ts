import styled from 'styled-components';
import {platformColors} from "../../constants/colors.ts";

export const QuestionContainer = styled.div`
  margin-bottom: 40px;
`;

export const QuestionText = styled.h2`
  display: inline-block;
  font-size: calc(1vw + 1rem);
  margin-bottom: 20px;
`;

interface AnswerProps {
    $numAnswers: number;
    $isCorrect: boolean;
    $answered: boolean;
}

export const AnswerOption = styled.button<AnswerProps>`
  padding: ${({ $numAnswers }) =>
    $numAnswers === 2 ? '12px 32px' : $numAnswers === 3 ? '12px 24px' : '10px 20px'};
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
  &[disabled] {
    cursor: not-allowed;
  }
  @media (min-width: 580px) {
    flex: 1 1 auto;
  }
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-items: center;
  max-width: 50%;
  
  @media (min-width: 769px) {
    max-width: 600px;
  }
`

export const AnswerChoice = styled.p`
  flex-grow: 1;
  margin: 0; /* Reset margin */
  overflow: hidden;
`
export const QuestionNumber = styled.span`
  font-size: 6rem;
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
  color: ${platformColors.lightPink};

  @media (min-width: 769px) {
    margin-top: 0;
  }
`
export const CompletedText = styled.div`
  font-size: 6vw;
`
export const QuizContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
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
