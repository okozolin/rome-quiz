import { Request, Response } from 'express';
import { questions } from '../data/questions.ts';

export const getQuiz = (req: Request, res: Response) => {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
    res.json(shuffledQuestions);
};
