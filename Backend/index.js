require('dotenv').config()
const { Together } = require('together-ai');
const client = new Together({ apiKey: process.env.TOGETHER_API_KEY });

async function main() {
    const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: 'Hello how are you!' }],
        model: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo'
    })
    console.log(chatCompletion.choices)
}

main()
