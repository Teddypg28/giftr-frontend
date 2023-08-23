import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const getListResults = async (question) => {
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{'role':'user', 'content': question}]
    })
    
    return chatCompletion.choices[0].message
}

export { getListResults }
