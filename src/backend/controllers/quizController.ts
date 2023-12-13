import { Request, Response } from 'express';
import { questions } from '../data/questions.ts';

export const getQuiz = (req: Request, res: Response) => {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
    res.json(shuffledQuestions);
};

export const publishLeaderBoard = async (req: Request, res: Response) => {
    try {
        const {score, totalTimeForCorrectAnswers} = req.body;
        // Store this data in the database for the leaderboard
        // Perform necessary database operations here
        console.log(`Result saved to leaderboard .score: ${score}, time: ${totalTimeForCorrectAnswers}`)
        res.status(200).json({message: `Result saved to leaderboard.`});
    } catch (error) {
        console.log(`Unable to save result`)
        res.status(500).json({error: `Unable to save result`});
    }
}
