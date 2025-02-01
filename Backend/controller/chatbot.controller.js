require('dotenv').config()
const { Together } = require('together-ai')
const client = new Together({ apiKey: process.env.TOGETHER_API_KEY })

const chat = async (req, res) => {
    try {
        const userchat = req.body.message
        if (userchat !== '') {
            const chatCompletion = await client.chat.completions.create({
                messages: [{ role: 'user', content: userchat }],
                model: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo'
            })
            // console.log(chatCompletion.choices[0].message.content)
            return res.send(chatCompletion.choices[0].message.content)
        }
        return res.send("Please enter prompt to chat")
    } catch (error) {
        console.log(error)
    }
}

module.exports = chat