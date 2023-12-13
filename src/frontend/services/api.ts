import axios from "axios";

export default class Api {
    static async getData(url: string) {
        try {
            const {data} = await axios.get(url);
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async publishResult(url,{score, totalTimeForCorrectAnswers}) {
        try {
            const {data} = await axios.post(url, {score, totalTimeForCorrectAnswers});
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}