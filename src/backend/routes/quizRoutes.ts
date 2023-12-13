import express from 'express';
import {getQuiz, publishLeaderBoard} from '../controllers/quizController';

const router = express.Router();

router.get('/quiz', getQuiz);
router.post('/quiz', publishLeaderBoard);

export default router;
