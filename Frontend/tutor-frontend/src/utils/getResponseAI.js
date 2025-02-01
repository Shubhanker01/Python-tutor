import axios from "axios";

export const getResponseAI = async (ques) => {
    try {
        let response = await axios.post('http://localhost:3000/api/v1/chat', {
            message: ques
        }
        )
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }

}