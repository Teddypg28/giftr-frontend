import express from 'express'
import cors from 'cors'

import { getListResults } from './chatGPT.js'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send(`Welcome to PORT ${PORT}`)
})

app.post('/products', async (req, res) => {
    const userData = req.body
    const { age, interests, occasion, budget } = userData
    let interestsString = ''
    if (interests.length > 1) {
        interests.forEach(interest => {
            if (interests.length === 2 && interest === interests[interests.length - 1]) {
                interestsString += ` and ${interest}`
            } else if (interest.length === 2) {
                interestsString += interest
            } else if (interest.length > 2 && interest === interests[interests.length - 1]) {
                interestsString += `and ${interest}`
            } else if (interest.length > 2) {
                interestsString += `${interest}, `
            }
        })
    } else {
        interestsString = interests[0]
    }

    const chatGPTRequestMessage = `Please create a list of 5 cool ${occasion} gifts that can be purchased on Amazon for a ${age} year old who enjoys ${interestsString}`
    
    const list = await getListResults(chatGPTRequestMessage)

    res.send(list)
})
