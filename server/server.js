import express from 'express'
import cors from 'cors'
import axios from 'axios'

import { getListResults } from '../server/chatGPT.js'

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
    const { age, gender, interests, occasion, firstName, email } = userData
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
    
    const chatGPTRequestMessage = `Please create a list of 3 cool ${occasion} gift ideas that can be found on Amazon for a ${age} year old ${gender} who enjoys ${interestsString} with a 1 sentence description for each idea.
    Please do not include any Amazon links and please separate the idea and description with a colon`
    
    const list = await getListResults(chatGPTRequestMessage)

    const reformattedList = list.replace(/(\r\n|\r|\n)/g, '')

    const productsObject = {}

    for (let i = 1; i<4; i++) {
        productsObject[i] = {}
    }

    for (let i = 1; i<4; i++) {
        const removedNumberString = reformattedList.split(`${i}. `)
        const productName = removedNumberString[1].split(':')[0]
        productsObject[i].productName = productName
        const productDescription = removedNumberString[1].split(':')[1].split(`${i+1}`)[0].trim()
        productsObject[i].productDescription = productDescription 
    }

    for (let i=1; i<Object.keys(productsObject).length + 1; i++) {

        const params = {
            api_key: '0E7917BB8B6E4216BBBE548F3E664100',
            type: 'search',
            amazon_domain: 'amazon.com',
            search_term: productsObject[i].productName,
            sort_by: 'featured'
        }

        const products = await axios.get('https://api.rainforestapi.com/request', { params })

        const selectedProduct = products.data.search_results.find(productData => {

            return ( 
                productData.is_prime &&
                productData.rating >= 4.5 && 
                productData.ratings_total >= 1000 &&
                productData.price.value !== undefined
            )
        })

        productsObject[i].productInfo = selectedProduct
    }

    
    
    res.send(productsObject)
    
})
