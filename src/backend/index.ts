import express from "express"
import cors from 'cors';
import quizRoutes from './routes/quizRoutes';


const app = express()
app.use(cors());
app.use(express.json());
app.use('/api', quizRoutes);

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});


export default app;