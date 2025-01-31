import axios from 'axios'

export const executePythonCode = async (code) => {
    try {
        const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
            language: "python",
            version: "3.10.0",
            files: [{ content: code }]
        });

        return response.data.run.output;
    } catch (error) {
        console.log(error)
    }
}