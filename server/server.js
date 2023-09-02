import express from 'express'
import cors from 'cors'
import axios from 'axios'

import { getListResults } from '../server/chatGPT.js'
import sendEmail from './sendEmail.js'

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

app.post('/captcha', async (req, res) => {

    const requestData = req.body

    const { token } = requestData

    const result = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET_KEY}&response=${token}`)

    res.send(result.data)

})

app.post('/products', async (req, res) => {

    const numOfProducts = 12

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
    
    const chatGPTRequestMessage = `Please create a list of ${numOfProducts} ${occasion} Amazon best selling gift ideas for a ${age} year old ${gender} who enjoys ${interestsString} with a 1 sentence description for each idea.
    Please do not include any Amazon links and please separate the idea and description with a colon`
    
    const list = await getListResults(chatGPTRequestMessage)

    const reformattedList = list.replace(/(\r\n|\r|\n)/g, '')

    const productsObject = {}

    for (let i = 1; i<numOfProducts + 1; i++) {
        productsObject[i] = {}
    }

    for (let i = 1; i<numOfProducts + 1; i++) {
        const removedNumberString = reformattedList.split(`${i}. `)
        let productName = removedNumberString[1].split(':')[0]
        productName = productName.replace(' " ', "")
        productsObject[i].productName = productName
        const productDescription = removedNumberString[1].split(':')[1].split(`${i+1}`)[0].trim()
        productsObject[i].productDescription = productDescription 
    }

    for (let i=1; i<Object.keys(productsObject).length + 1; i++) {

        const params = {
            api_key: process.env.RAINFOREST_API_KEY,
            type: 'search',
            amazon_domain: 'amazon.com',
            search_term: productsObject[i].productName,
            sort_by: 'featured'
        }

        const products = await axios.get('https://api.rainforestapi.com/request', { params })

        const selectedProduct = products.data.search_results.find(product => {

            return ( 
                product.rating >= 4.5 && 
                product.ratings_total >= 1000
            )
        })

        if (!selectedProduct) {
            const selectedProductTwo = products.data.search_results.find(product => {

                return ( 
                    product.rating >= 4.5 && 
                    product.ratings_total >= 200
                )
            })

            productsObject[i].productInfo = selectedProductTwo


        } else {

            productsObject[i].productInfo = selectedProduct
        }

    }

    sendEmail(firstName, email, productsObject)
    
    res.send(productsObject)
    
})
