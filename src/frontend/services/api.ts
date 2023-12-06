import axios from "axios";

export default class Api {
    static async getData(url: string) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}