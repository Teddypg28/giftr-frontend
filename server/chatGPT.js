import OpenAI from "openai";

import config from 'config'

const openai = new OpenAI({
    apiKey: config.get('giftr_openAIApiKey')
})

const getListResults = async (question) => {
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{'role':'user', 'content': question}]
    })
    
    return chatCompletion.choices[0].message.content
}

export { getListResults }
