import axios from "axios";

export const getResponseAI = async (ques) => {
    try {
        let response = await axios.post('https://python-tutor-backend-jxxo.onrender.com/api/v1/chat', {
            message: ques
        }
        )
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }

}